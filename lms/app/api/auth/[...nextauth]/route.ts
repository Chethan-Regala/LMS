import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getDb } from "@/lib/db";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const db = await getDb();
                const user = await db.collection("users").findOne({
                    email: credentials.email,
                    password: credentials.password,
                    isAdmin: true,
                });

                if (user) {
                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.fullName,
                    };
                }
                return null;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        // Sessions last 24 hours — enough for a study day, prevents stale JWT buildup
        maxAge: 24 * 60 * 60,
    },
    pages: {
        signIn: "/pages/login",
    },
    callbacks: {
        async signIn({ account }) {
            // Allow all Google sign-ins; admin credentials handled in authorize()
            if (account?.provider === "google") {
                return true;
            }
            return true;
        },

        async jwt({ token, user }) {
            if (user) {
                const db = await getDb();

                // Single query: find all records for this email
                const userRecords = await db
                    .collection("users")
                    .find({ email: user.email })
                    .project({ _id: 1, isAdmin: 1, email: 1 })
                    .toArray();

                const studentUser = userRecords.find((u) => !u.isAdmin);
                const adminUser = userRecords.find((u) => u.isAdmin);
                const dbUser = studentUser || adminUser;

                if (dbUser) {
                    token.isAdmin = dbUser.isAdmin || false;
                    token.id = dbUser._id.toString();
                    token.email = dbUser.email;
                    token.hasAdminRecord = !!adminUser;
                    token.hasStudentRecord = !!studentUser;
                } else {
                    // Auto-register new student on first Google sign-in
                    const result = await db.collection("users").insertOne({
                        email: user.email,
                        fullName: user.name || "",
                        isAdmin: false,
                        currentSemester: 1,
                        createdAt: new Date(),
                    });
                    token.isAdmin = false;
                    token.id = result.insertedId.toString();
                    token.email = user.email;
                    token.hasAdminRecord = false;
                    token.hasStudentRecord = true;
                }
            }
            return token;
        },

        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string;
                (session.user as any).isAdmin = token.isAdmin;
                (session.user as any).hasAdminRecord = token.hasAdminRecord;
                (session.user as any).hasStudentRecord = token.hasStudentRecord;
            }
            return session;
        },

        async redirect({ url, baseUrl }) {
            const urlObj = new URL(url, baseUrl);
            const callbackUrl = urlObj.searchParams.get("callbackUrl") || url;

            if (
                callbackUrl.includes("admin=true") ||
                callbackUrl.includes("adminDashboard")
            ) {
                return `${baseUrl}/pages/adminDashboard`;
            }

            if (url.startsWith("/")) return `${baseUrl}${url}`;
            if (new URL(url).origin === baseUrl) return url;
            return `${baseUrl}/`;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
