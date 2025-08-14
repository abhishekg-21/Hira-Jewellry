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

/* Map URL /collections/[collection] -> productType in DB
   (includes singular + plural so links like /collections/necklaces work) */
const typeMap: Record<string, string | null> = {
  "shop-all": null, // show everything
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
      return { title: "asc" as const }; // “best-selling” fallback
  }
}

/* ---------- collection-specific intros ---------- */
const introCopy: Record<string, JSX.Element> = {
  "shop-all": (
    <>
      <p>
        Explore our complete range—necklaces, earrings, rings, bracelets and
        anklets—thoughtfully crafted for everyday elegance and special moments.
      </p>
    </>
  ),
  necklace: (
    <>
      <p>
        Discover the perfect blend of elegance and craftsmanship in our
        meticulously curated necklace collection. From timeless 14K gold
        pendants to contemporary sterling silver chokers, each piece is
        designed to complement your unique style. Our collection features a
        variety of designs, including gemstone-adorned necklaces, personalized
        nameplates, and layered chains, ensuring there&apos;s something for
        every occasion. Whether you&apos;re seeking a statement piece for a
        special event or a subtle accessory for daily wear, our necklaces
        promise unmatched quality and sophistication.
      </p>
    </>
  ),
  earring: (
    <>
      <p>
        Elevate your style with our meticulously curated Earrings Collection,
        featuring a diverse range of designs to suit every occasion. From
        timeless studs and elegant hoops to statement-making chandeliers and
        contemporary ear cuffs, each piece is crafted with precision and care.
        Our collection showcases high-quality materials, including 14K gold,
        sterling silver, and ethically sourced gemstones, ensuring both beauty
        and durability. Whether you&apos;re seeking minimalist designs for daily
        wear or bold pieces for special events, our earrings offer versatility
        and sophistication to complement your unique style.
      </p>
    </>
  ),
  anklet: (
    <>
      <p>
        Graceful, elegant, and endlessly charming — our Anklet Collection is
        designed to add a delicate sparkle to every step you take. From timeless
        classics to modern designs, each anklet is handcrafted with precision
        using premium materials like sterling silver, gold plating, and
        shimmering stones.
      </p>
    </>
  ),
  ring: (
    <>
      <p>
        Discover our exquisite ring collection, where timeless elegance meets
        modern design. Each piece is meticulously crafted to showcase
        exceptional artistry and quality materials, offering a diverse range of
        styles to suit every occasion. From classic solitaires to contemporary
        statement rings, our collection embodies sophistication and
        individuality. Explore our selection to find the perfect ring that
        resonates with your unique style and celebrates life&apos;s special
        moments.
      </p>
    </>
  ),
  bracelet: (
    <>
      <p>
        Our Bracelet Collection offers a curated selection of wristwear designed
        to complement diverse styles and occasions. From timeless tennis
        bracelets adorned with shimmering diamonds to personalized charm
        bracelets that tell your unique story, each piece is crafted with
        precision and care. Explore our range of materials, including lustrous
        14K gold, elegant sterling silver, and vibrant gemstones, ensuring both
        quality and aesthetic appeal.
      </p>
    </>
  ),
};

// Normalize a slug to a key present in introCopy (handles plurals)
function introKey(slug: string) {
  const k = slug.toLowerCase();
  if (k in introCopy) return k;
  if (k.endsWith("s")) {
    const s = k.slice(0, -1);
    if (s in introCopy) return s;
  }
  return "shop-all";
}

export default async function CollectionPage({
  params,
  searchParams,
}: {
  params: { collection: string };
  searchParams: {
    page?: string;
    sort?: SortKey;
    min?: string;
    max?: string;
  };
}) {
  const productType = resolveType(params.collection);

  const page = Math.max(1, Number(searchParams.page ?? 1) || 1);
  const sort: SortKey = (searchParams.sort as SortKey) || "best-selling";

  // safer numeric parsing (avoid accidentally turning 0 into undefined)
  const nm = Number(searchParams.min);
  const nx = Number(searchParams.max);
  const min = Number.isFinite(nm) ? nm : undefined;
  const max = Number.isFinite(nx) ? nx : undefined;

  const where: any = {};
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
    params.collection === "shop-all"
      ? "Shop All"
      : params.collection.charAt(0).toUpperCase() + params.collection.slice(1);

  // pick intro by collection; fall back to "shop-all"
  const intro = introCopy[introKey(params.collection)];

  return (
    <main className="bg-[#fefcf8] min-h-screen text-black">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Title + intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          <h1 className="text-[56px] leading-none font-medium tracking-tight">
            {title}
          </h1>
          <div className="md:mt-3 text-[15px] leading-7 text-black space-y-4">
            {intro}
          </div>
        </div>

        {/* Controls row: FILTER + | SHOWING N RESULTS | SORT */}
        <CollectionControls
          total={total}
          currentSort={sort}
          currentMin={min}
          currentMax={max}
        />

        {/* Grid */}
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group block">
              <div className="relative bg-[#fbf5ea] w-[300px] h-[470px] overflow-hidden">
                <Image
                  src={p.imageUrl || "/images/placeholder.jpg"}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 25vw, 50vw"
                />
                {/* Small square icon top-right like ref */}
                <AddToCartOverlay
                  productId={p.productId}
                  title={p.title}
                  image={p.imageUrl || "/images/placeholder.jpg"}
                  priceCents={p.priceCents}
                />
              </div>
              <div className="mt-3">
                <div className="text-[17px] font-medium leading-snug">
                  {p.title}
                </div>
                <div className="text-sm mt-1">{formatINR(p.priceCents)}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination (keeps sort/min/max) */}
        {pages > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-4 text-sm">
            <PageLink
              page={page - 1}
              disabled={page <= 1}
              label="«"
              searchParams={searchParams}
            />
            <PageLink
              page={page - 1}
              disabled={page <= 1}
              label="‹"
              searchParams={searchParams}
            />
            <span className="mx-2 select-none">
              <strong>{page}</strong> / {pages}
            </span>
            <PageLink
              page={page + 1}
              disabled={page >= pages}
              label="›"
              searchParams={searchParams}
            />
            <PageLink
              page={page + 1}
              disabled={page >= pages}
              label="»"
              searchParams={searchParams}
            />
          </nav>
        )}
      </div>
    </main>
  );
}

/* ------- Pagination link helper (keeps other query params) ------- */
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
  // keep existing params except page, then set new page
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
