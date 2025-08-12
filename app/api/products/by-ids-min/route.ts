// app/api/products/by-ids-min/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Out = {
  id: string;           // product_id
  slug: string | null;
  title: string | null; // from name
  price: number | null; // rupees (price_cents / 100)
  image: string | null; // from image_url
};

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const ids = Array.isArray((body as any)?.ids) ? ((body as any).ids as string[]) : [];

    if (ids.length === 0) {
      return NextResponse.json({}, { headers: { "Cache-Control": "no-store" } });
    }
    if (ids.length > 100) {
      return NextResponse.json({ error: "Max 100 ids per request" }, { status: 400 });
    }

    // IMPORTANT: Model name must match your schema.prisma model (Product vs Products)
    const rows = await prisma.product.findMany({
      where: { productId: { in: ids } },
      select: {
        productId: true,
        slug: true,
        title: true,
        priceCents: true,
        imageUrl: true,
      },
    });

    const map: Record<string, Out> = {};
    for (const r of rows) {
      map[r.productId] = {
        id: r.productId,
        slug: r.slug ?? null,
        title: r.title ?? null,
        price: typeof r.priceCents === "number" ? r.priceCents / 100 : null,
        image: r.imageUrl ?? null,
      };
    }

    return NextResponse.json(map, { headers: { "Cache-Control": "no-store" } });
  } catch (e: any) {
    // Log full error to the server console
    console.error("by-ids-min error:", e);
    // Return a readable error to the client
    return NextResponse.json(
      { error: e?.message ?? "Internal Server Error" },
      { status: 500 }
    );
  }
}
