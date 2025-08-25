// app/brands/endless/engagement-sale/page.tsx
import { prisma } from "@/lib/prisma";
import { formatINR } from "@/app/lib/money";

import StepsBar from "./_sections/StepsBar";
import PromoHeadline from "./_sections/PromoHeadline";
import FiltersRow from "./_sections/FiltersRow";
import ProductGrid from "./_sections/ProductGrid";

export const runtime = "nodejs";

export const metadata = {
  title: "Shop Engagement Sale",
};

export type UIProduct = {
  id: string;
  title: string;
  price: string;
  img: string;
  href: string;
  rating?: number;
  reviews?: number;
};

export default async function EngagementSalePage() {
  // RING only (matches your DB types)
  const where = { productType: "RING" as const };

  const total = await prisma.product.count({ where });

  const db = await prisma.product.findMany({
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

  const products: UIProduct[] = db.map((p) => ({
    id: p.productId,
    title: p.title,
    price: formatINR(p.priceCents),
    img: p.imageUrl || "/images/placeholder.jpg",
    href: `/products/${p.slug}`,
    rating: 4,
    reviews: 0,
  }));

  const facetLabels = [
    "Metal",
    "Style",
    "Stone",
    "Shape",
    "Carat",
    "Color",
    "Price",
    "Delivery",
  ];

  return (
    <main className="bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <StepsBar />
        <PromoHeadline
          title="Our Exclusive Engagement Ring Sale"
          subtitle="Save on settings and complete rings. Limited-time offers, while supplies last."
        />
        <FiltersRow facets={facetLabels} total={total} />
        <ProductGrid products={products} />
        <div className="h-10" />
      </div>
    </main>
  );
}
