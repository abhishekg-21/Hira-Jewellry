// app/api/products/by-ids-min/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export const runtime = "nodejs";

const BodySchema = z.object({ ids: z.array(z.string().min(1)).min(1) });

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 400 });
  }

  try {
    // IMPORTANT: use your actual field names
    const rows = await prisma.product.findMany({
      where: { product_id: { in: parsed.data.ids } },   // was id -> product_id
      select: {
        product_id: true,
        name: true,
        price_cents: true,
      },
    });

    // Map DB -> frontend shape
    const map: Record<string, { id: string; title: string; price: number }> = {};
    for (const r of rows) {
      map[r.product_id] = {
        id: r.product_id,
        title: r.name,
        price: Math.round(r.price_cents / 100),
      };
    }
    return NextResponse.json(map);
  } catch (e) {
    return NextResponse.json({ error: "Query failed", detail: String(e) }, { status: 500 });
  }
}
