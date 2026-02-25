import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdmin = token?.isAdmin;
    const email = token?.email as string | undefined;
    const path = req.nextUrl.pathname;

    // GGU students have @ggu.edu.in email
    const isGGU = email?.endsWith("@ggu.edu.in");

    // Admins: redirect from root to admin dashboard
    if (path === "/" && isAdmin) {
      return NextResponse.redirect(new URL("/pages/adminDashboard", req.url));
    }

    // Block non-admins from admin pages
    if (path.startsWith("/pages/adminDashboard") && !isAdmin) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (path.startsWith("/pages/adminProgress") && !isAdmin) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Block admins from student pages (except subject/livebooks pages)
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

    // Non-GGU, non-admin users: block ALL /pages/* routes
    // They can only see the home page (/)
    if (!isAdmin && !isGGU && path.startsWith("/pages/") &&
      !path.startsWith("/pages/login") &&
      !path.startsWith("/pages/adminLogin")) {
      return NextResponse.redirect(new URL("/", req.url));
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
