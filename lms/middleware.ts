import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdmin = token?.isAdmin;
    const email = token?.email as string | undefined;
    const path = req.nextUrl.pathname;

    // Check if student has valid college email
    const hasValidStudentEmail = email?.endsWith("@ggu.edu.in");

    // Redirect admins from root to admin dashboard
    if (path === "/" && isAdmin) {
      return NextResponse.redirect(new URL("/pages/adminDashboard", req.url));
    }

    // Prevent non-admins from accessing admin dashboard
    if (path.startsWith("/pages/adminDashboard") && !isAdmin) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Prevent non-admins from accessing admin progress page
    if (path.startsWith("/pages/adminProgress") && !isAdmin) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Prevent students without valid college email from accessing student pages
    // EXCEPT if they are a Guest user
    const isGuest = token?.isGuest;
    if (!isAdmin && !isGuest && !hasValidStudentEmail && path.startsWith("/pages/") &&
      !path.startsWith("/pages/login") &&
      !path.startsWith("/pages/adminLogin")) {
      return NextResponse.redirect(new URL("/pages/login", req.url));
    }

    // Prevent admins from accessing student pages (except livebooks and subjects)
    if (isAdmin && path.startsWith("/pages/") &&
      !path.startsWith("/pages/admin") &&
      !path.startsWith("/pages/livebooks") &&
      !path.startsWith("/pages/es") &&
      !path.startsWith("/pages/ds") &&
      !path.startsWith("/pages/os") &&
      !path.startsWith("/pages/nss") &&
      !path.startsWith("/pages/ls") &&
      !path.startsWith("/pages/flat")) {
      return NextResponse.redirect(new URL("/pages/adminDashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname === "/pages/adminLogin") return true;
        return !!token;
      },
    },
    pages: {
      signIn: "/pages/login",
    },
  }
);

export const config = {
  matcher: ["/", "/pages/((?!login|adminLogin).*)"],
};
