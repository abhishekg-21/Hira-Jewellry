// app/collections/route.ts
import { NextResponse } from "next/server";

export function middleware() {}

// example redirect map if needed
export const config = {
  matcher: ["/collections/raksha-bandhan-2025"],
};

export async function GET() {
  return NextResponse.redirect(new URL("/collections/raksha-bandhan-2025", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
}
