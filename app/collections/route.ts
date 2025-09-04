// app/collections/route.ts
import { NextResponse } from "next/server";

// Redirect /collections → /collections/raksha-bandhan-2025 (permanent 308)
export function GET(request: Request) {
  return NextResponse.redirect(
    new URL("/collections/raksha-bandhan-2025", request.url),
    308
  );
}
