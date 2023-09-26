import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";
import rules from "./middleware/rules";

export default withAuth(
  function middleware(request) {
    const brokenRule = rules.find(({ url, availableTo }) =>
      request.nextUrl.pathname.startsWith(url) &&
      availableTo.filter(x => x).length &&
      !availableTo.find(x => x && request.nextauth.token?.role == x)
    );

    if (brokenRule) {
      return NextResponse.rewrite(new URL("/denied", request.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = { matcher: ["/profile/:path*", "/example/:path*"] }