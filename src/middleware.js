import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";
import rules from "./middleware/rules";
import { pathToRegexp } from "path-to-regexp";

export default withAuth(
  function middleware(request) {
    const brokenRule = rules.find(({ url, availableTo }) => (
      pathToRegexp(url).exec(request.nextUrl.pathname) &&
      availableTo.filter(x => x).length &&
      !availableTo.find(x => x && request.nextauth.token?.user?.role == x)
    ));

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

export const config = { matcher: ['/search', '/form', '/inviteProvider', '/providerForm/:path*'] }