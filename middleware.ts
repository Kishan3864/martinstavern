import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Lightweight middleware that exposes the request path to Server Components
 * via an `x-pathname` header. The root layout uses it to let the /permission
 * admin panel bypass the site kill-switch (so you can always unlock from it).
 *
 * Runs on the Edge runtime — no database access here (that stays in the
 * Node-runtime layout / API routes).
 */
export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Run on everything except Next internals and common static files.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)"],
};
