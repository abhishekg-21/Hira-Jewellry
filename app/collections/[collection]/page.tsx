// app/collections/[collection]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatINR } from "@/app/lib/money";
import CollectionControls from "@/app/components/CollectionControls";
import AddToCartOverlay from "@/app/components/AddToCartOverlay";
import type { JSX } from "react";

export const runtime = "nodejs";

const PAGE_SIZE = 12;

const typeMap: Record<string, string | null> = {
  "shop-all": null,
  necklace: "NECKLACE",
  necklaces: "NECKLACE",
  anklet: "ANKLET",
  anklets: "ANKLET",
  earring: "EARRING",
  earrings: "EARRING",
  ring: "RING",
  rings: "RING",
  bracelet: "BRACELET",
  bracelets: "BRACELET",
};

function resolveType(slug: string) {
  const key = slug.toLowerCase();
  return key in typeMap ? typeMap[key] : null;
}

type SortKey =
  | "best-selling"
  | "price-asc"
  | "price-desc"
  | "title-asc"
  | "title-desc";

function orderByFor(sort: SortKey) {
  switch (sort) {
    case "price-asc":
      return { priceCents: "asc" as const };
    case "price-desc":
      return { priceCents: "desc" as const };
    case "title-asc":
      return { title: "asc" as const };
    case "title-desc":
      return { title: "desc" as const };
    default:
      return { title: "asc" as const };
  }
}

/* ---------- collection-specific intros ---------- */
const introCopy: Record<string, JSX.Element> = {
  earring: (
    <>
      <p>
        Elevate your style with our meticulously curated Earrings Collection,
        featuring a diverse range of designs to suit every occasion. From
        timeless <strong>studs</strong> and elegant <strong>hoops</strong> to
        statement-making <strong>chandeliers</strong> and contemporary{" "}
        <strong>ear cuffs</strong>, each piece is crafted with precision and
        care. Our collection showcases high-quality materials, including{" "}
        <strong>14K gold, sterling silver</strong>, and ethically sourced
        gemstones, ensuring both beauty and durability. Whether you&apos;re
        seeking minimalist designs for daily wear or bold pieces for special
        events, our earrings offer versatility and sophistication to complement
        your unique style.
      </p>
    </>
  ),
  // ... keep other collections same
};

function introKey(slug: string) {
  const k = slug.toLowerCase();
  if (k in introCopy) return k;
  if (k.endsWith("s")) {
    const s = k.slice(0, -1);
    if (s in introCopy) return s;
  }
  return "shop-all";
}

function first(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

export default async function CollectionPage({
  params,
  searchParams,
}: {
  params: Promise<{ collection: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { collection } = await params;
  const sp = await searchParams;

  const productType = resolveType(collection);

  const page = Math.max(1, Number(first(sp.page) ?? 1) || 1);
  const sort: SortKey = (first(sp.sort) as SortKey) || "best-selling";

  const nm = Number(first(sp.min));
  const nx = Number(first(sp.max));
  const min = Number.isFinite(nm) ? nm : undefined;
  const max = Number.isFinite(nx) ? nx : undefined;

  const where: Record<string, any> = {};
  if (productType) where.productType = productType;
  if (min !== undefined || max !== undefined) {
    where.priceCents = {};
    if (min !== undefined) where.priceCents.gte = Math.round(min);
    if (max !== undefined) where.priceCents.lte = Math.round(max);
  }

  const total = await prisma.product.count({ where });

  const products = await prisma.product.findMany({
    where,
    orderBy: orderByFor(sort),
    skip: (page - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
    select: {
      productId: true,
      slug: true,
      title: true,
      priceCents: true,
      imageUrl: true,
    },
  });

  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const title =
    collection === "shop-all"
      ? "Shop All"
      : collection.charAt(0).toUpperCase() + collection.slice(1);

  const intro = introCopy[introKey(collection)];

  const flatSearchParams: Record<string, string | undefined> = {};
  for (const [k, v] of Object.entries(sp)) {
    const val = first(v);
    if (typeof val === "string") flatSearchParams[k] = val;
  }

  return (
    <main className="bg-[#fefcf8] min-h-screen text-black">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Title + intro */}
        <div className="mb-8">
          <h1 className="text-[32px] sm:text-[56px] leading-tight font-medium tracking-tight mb-4">
            {title}
          </h1>
          <div className="text-[15px] leading-7 text-black space-y-4">
            {intro}
          </div>
        </div>

        {/* Controls */}
        <CollectionControls
          total={total}
          currentSort={sort}
          currentMin={min}
          currentMax={max}
        />

        {/* Grid */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12">
          {products.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group block">
              <div className="relative bg-[#fbf5ea] w-full aspect-[3/5] overflow-hidden">
                <Image
                  src={p.imageUrl || "/images/placeholder.jpg"}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (min-width:1024px) 25vw"
                />
                <AddToCartOverlay
                  productId={p.productId}
                  title={p.title}
                  image={p.imageUrl || "/images/placeholder.jpg"}
                  priceCents={p.priceCents}
                />
              </div>
              <div className="mt-3">
                <div className="text-[15px] sm:text-[17px] font-medium leading-snug">
                  {p.title}
                </div>
                <div className="text-sm mt-1">{formatINR(p.priceCents)}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-4 text-sm">
            <PageLink
              page={page - 1}
              disabled={page <= 1}
              label="«"
              searchParams={flatSearchParams}
            />
            <PageLink
              page={page - 1}
              disabled={page <= 1}
              label="‹"
              searchParams={flatSearchParams}
            />
            <span className="mx-2 select-none">
              <strong>{page}</strong> / {pages}
            </span>
            <PageLink
              page={page + 1}
              disabled={page >= pages}
              label="›"
              searchParams={flatSearchParams}
            />
            <PageLink
              page={page + 1}
              disabled={page >= pages}
              label="»"
              searchParams={flatSearchParams}
            />
          </nav>
        )}
      </div>
    </main>
  );
}

function PageLink({
  page,
  disabled,
  label,
  searchParams,
}: {
  page: number;
  disabled: boolean;
  label: string;
  searchParams: { [k: string]: string | undefined };
}) {
  if (disabled) return <span className="opacity-40 select-none">{label}</span>;

  const qp = new URLSearchParams();
  for (const [k, v] of Object.entries(searchParams)) {
    if (v != null && k !== "page") qp.set(k, v);
  }
  qp.set("page", String(page));

  return (
    <Link
      href={`?${qp.toString()}`}
      className="hover:underline underline-offset-4"
      prefetch={false}
    >
      {label}
    </Link>
  );
}
