// app/brands/endless/sale/page.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatINR } from "@/app/lib/money";

export const runtime = "nodejs";

export const metadata = {
  title: "Anniversary Sale Jewelry",
};

type UIProduct = {
  id: string;
  title: string;
  price: string;
  img: string;
  href: string;
  badge?: string;
  rating?: number;
  reviews?: number;
};

function Stars({ n = 4 }: { n?: number }) {
  const safe = Math.max(0, Math.min(5, n));
  return (
    <div className="text-[11px] text-yellow-500" aria-label={`${safe} out of 5`}>
      {"★★★★★".slice(0, safe)}
      <span className="text-neutral-300">{"★★★★★".slice(safe)}</span>
    </div>
  );
}

const CATS = [
  { label: "Earrings", slug: "earrings", icon: "/images/brands/endless/HeroSplit/SHOP JEWELRY SALE/Earrings.caaca (1).jpg" },
  { label: "Necklace", slug: "necklace", icon: "/images/brands/endless/HeroSplit/SHOP JEWELRY SALE/Necklaces.6494f (1).jpg" },
  { label: "Bracelet", slug: "bracelet", icon: "/images/brands/endless/HeroSplit/SHOP JEWELRY SALE/Bracelets.3b937 (1).jpg" },
  { label: "Rings", slug: "rings", icon: "/images/brands/endless/HeroSplit/SHOP JEWELRY SALE/Rings.c4f09 (1).jpg" },
];

const FACETS = ["Metal", "Price", "Stone", "Style", "Carat", "Color", "Shape", "Delivery"];

const typeMap: Record<string, string | null> = {
  earring: "EARRING",
  earrings: "EARRING",
  necklace: "NECKLACE",
  necklaces: "NECKLACE",
  bracelet: "BRACELET",
  bracelets: "BRACELET",
  ring: "RING",
  rings: "RING",
};

function resolveType(slug?: string) {
  if (!slug) return null;
  const key = slug.toLowerCase();
  return key in typeMap ? typeMap[key]! : null;
}

export default async function SalePage({
  searchParams,
}: {
  // ✅ Next 15: searchParams is a Promise in server components
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const activeCat = (Array.isArray(sp.cat) ? sp.cat[0] : sp.cat || "").toLowerCase();
  const productType = resolveType(activeCat);

  const where: Record<string, unknown> = {};
  if (productType) where.productType = productType;

  const total = await prisma.product.count({ where });

  const dbProducts = await prisma.product.findMany({
    where,
    orderBy: { title: "asc" },
    take: 48,
    select: {
      productId: true,
      slug: true,
      title: true,
      priceCents: true,
      imageUrl: true,
    },
  });

  const PRODUCTS: UIProduct[] = dbProducts.map((p) => ({
    id: p.productId,
    title: p.title,
    price: formatINR(p.priceCents),
    img: p.imageUrl || "/images/placeholder.jpg",
    href: `/products/${p.slug}`,
    rating: 4,
    reviews: 0,
  }));

  return (
    <main className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <h1 className="text-center text-[20px] sm:text-[22px] tracking-wide font-semibold">
          Anniversary Sale Jewelry
        </h1>
        <p className="mt-2 text-center text-xs text-neutral-600">
          Save on sparkling styles: earrings, necklaces, bracelets & rings—limited-time offers.
        </p>

        <div className="mt-6 grid grid-cols-4 max-w-[680px] mx-auto place-items-center gap-6">
          {CATS.map((c) => {
            const isActive = c.slug === activeCat;
            const href = c.slug ? `/brands/endless/sale?cat=${encodeURIComponent(c.slug)}` : `/brands/endless/sale`;
            return (
              <Link key={c.slug} href={href} className="group grid place-items-center gap-2 hover:opacity-90" prefetch={false}>
                <div className="relative h-[160px] w-[160px] rounded-full overflow-hidden bg-white">
                  <Image src={c.icon} alt={c.label} fill sizes="160px" className="object-contain p-2 rounded-full" />
                </div>
                <div className={`text-[11px] tracking-wide ${isActive ? "font-semibold" : ""}`}>{c.label}</div>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {FACETS.map((f) => (
            <button key={f} className="px-3 py-1.5 text-[11px] rounded-full bg-white hover:bg-neutral-50">
              {f} ▾
            </button>
          ))}
          <span className="ml-auto text-[11px] text-neutral-600 whitespace-nowrap">SHOWING {total} RESULTS</span>
          <select className="text-[11px] bg-transparent underline underline-offset-4">
            <option>BEST SELLING</option>
            <option>PRICE, LOW TO HIGH</option>
            <option>PRICE, HIGH TO LOW</option>
            <option>ALPHABETICALLY</option>
          </select>
        </div>

        {PRODUCTS.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {PRODUCTS.map((p) => (
              <Link key={p.id} href={p.href} className="group block" prefetch={false}>
                <div className="relative w-full aspect-[4/5] bg-white overflow-hidden rounded-sm">
                  <Image src={p.img} alt={p.title} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-contain" />
                  {p.badge && (
                    <span className="absolute left-2 top-2 text-[10px] px-2 py-[2px] rounded bg-black text-white">{p.badge}</span>
                  )}
                </div>
                <div className="mt-2 space-y-1">
                  <div className="text-[12px] leading-5 line-clamp-2">{p.title}</div>
                  <div className="text-[12px] font-semibold">{p.price}</div>
                  <div className="flex items-center gap-2">
                    <Stars n={p.rating ?? 4} />
                    <span className="text-[10px] text-neutral-500">{p.reviews ?? 0}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-10 text-center text-sm text-neutral-600">No products found.</div>
        )}

        <div className="h-12" />
      </div>
    </main>
  );
}
