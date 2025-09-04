// middleware.ts (at project root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/collections") {
    return NextResponse.redirect(new URL("/collections/raksha-bandhan-2025", req.url), 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/collections"],
};
