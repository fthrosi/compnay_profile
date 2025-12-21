import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // ✅ Middleware ini HANYA jalan kalau user authorized
    // Kalau tidak authorized, NextAuth otomatis redirect (tidak masuk ke sini)
    console.log("✅ User authorized, allowing access to:", req.nextUrl.pathname);
    return NextResponse.next(); // ✅ Allow access
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // ✅ Return true = allow access (masuk ke middleware function di atas)
        // ✅ Return false = redirect to pages.signIn
        console.log("🔍 Checking token:", token ? "exists" : "null");
        return !!token;
      },
    },
    pages: {
      signIn: "/", // ✅ Redirect ke homepage kalau tidak ada token
    },
  }
);

export const config = {
  matcher: [
    "/admin/:path*",
  ],
};