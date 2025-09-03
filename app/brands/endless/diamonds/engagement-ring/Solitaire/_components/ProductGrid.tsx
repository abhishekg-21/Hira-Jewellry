// app/engagement-rings/settings/_components/ProductGrid.tsx
"use client";

import ProductCard from "./ProductCard";

export type UIProduct = {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  img?: string;
  badge?: string;
};

export default function ProductGrid({ products }: { products: UIProduct[] }) {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>

        {/* skeleton row (as in screenshot bottom) */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border rounded-xl overflow-hidden">
              <div className="aspect-square bg-neutral-100 animate-pulse" />
              <div className="p-3 space-y-2">
                <div className="h-3 bg-neutral-100 rounded animate-pulse" />
                <div className="h-3 w-2/3 bg-neutral-100 rounded animate-pulse" />
                <div className="h-3 w-1/2 bg-neutral-100 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
