// app/collections/raksha-bandhan-2025/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Product = {
  id: string;
  title: string;
  price: number;          // in INR
  image: string;
  url: string;
};

const ALL_PRODUCTS: Product[] = [
  // >>> Replace with your real products <<<
  { id: "1", title: "Silver Krishna Trishul Rakhi", price: 2250, image: "/images/rakhi-1.jpg", url: "/products/silver-krishna-trishul-rakhi" },
  { id: "2", title: "Silver Hanuman Rakhi", price: 2650, image: "/images/rakhi-2.jpg", url: "/products/silver-hanuman-rakhi" },
  { id: "3", title: "Silver Shakti Gada Rakhi", price: 3650, image: "/images/rakhi-3.jpg", url: "/products/silver-shakti-gada-rakhi" },
  { id: "4", title: "Silver Mahakaal Rakhi", price: 2650, image: "/images/rakhi-4.jpg", url: "/products/silver-mahakaal-rakhi" },
  { id: "5", title: "Silver Peacock Feather Rakhi", price: 2650, image: "/images/rakhi-5.jpg", url: "/products/silver-peacock-feather-rakhi" },
  { id: "6", title: "Silver Divya Bandhan Rakhi", price: 3250, image: "/images/rakhi-6.jpg", url: "/products/silver-divya-bandhan-rakhi" },
  { id: "7", title: "Silver Bro Infinity Rakhi", price: 2150, image: "/images/rakhi-7.jpg", url: "/products/silver-bro-infinity-rakhi" },
  { id: "8", title: "Silver Raksha Nazar Kavach Rakhi", price: 1950, image: "/images/rakhi-8.jpg", url: "/products/silver-raksha-nazar-kavach-rakhi" },
  { id: "9", title: "Silver OM Divine Blessing Rakhi", price: 1650, image: "/images/rakhi-9.jpg", url: "/products/silver-divine-blessing-rakhi" },
  { id: "10", title: "Silver Blue Evil Eye Rakhi", price: 2150, image: "/images/rakhi-10.jpg", url: "/products/silver-blue-evil-eye-rakhi" },
  { id: "11", title: "Shatki Sutra Rakhi", price: 2950, image: "/images/rakhi-11.jpg", url: "/products/shatki-sutra-rakhi" },
  { id: "12", title: "Silver Asha Rakhi", price: 1650, image: "/images/rakhi-12.jpg", url: "/products/silver-asha-rakhi" },
];

const PAGE_SIZE = 8;

export default function CollectionRakshaBandhan2025() {
  // Sort + Pagination
  const [sort, setSort] = useState<"best"|"price-asc"|"price-desc" >("best");
  const [page, setPage] = useState(1);

  const products = useMemo(() => {
    let list = [...ALL_PRODUCTS];
    if (sort === "price-asc") list.sort((a,b)=>a.price-b.price);
    if (sort === "price-desc") list.sort((a,b)=>b.price-a.price);
    // “best” leaves natural order
    return list;
  }, [sort]);

  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const paged = products.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE);

  return (
    <main className="bg-[#fefaf2] min-h-screen">
      {/* Page width */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h1 className="text-[44px] leading-tight tracking-tight pt-20 mb-6 font-medium text-black">
          Raksha Bandhan 2025
        </h1>

        {/* Toolbar row */}
        <div className="flex items-center justify-between text-sm text-black/80 mb-6">
          <button className="inline-flex items-center gap-2">
            <span className="underline underline-offset-4">FILTER</span>
            <span className="text-lg leading-none">+</span>
          </button>

          <div className="hidden md:block text-xs tracking-wide">
            SHOWING {products.length} RESULTS
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline">BEST SELLING</span>
            <select
              value={sort}
              onChange={(e)=>{ setSort(e.target.value as any); setPage(1); }}
              className="border-none bg-transparent text-right outline-none cursor-pointer"
            >
              <option value="best">Best selling</option>
              <option value="price-asc">Price, low to high</option>
              <option value="price-desc">Price, high to low</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {paged.map((p) => (
            <article key={p.id} className="group">
              <Link href={p.url} className="block bg-[#fbf5ea]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain"
                    sizes="(min-width:1024px) 25vw, 50vw"
                  />
                  {/* Cart icon square (bottom-right) */}
                  <div className="absolute bottom-4 right-4 z-10 ">
                    <div className="border border-black bg-transparent w-9 h-9 flex items-center justify-center">
                      <Image
                        src="/images/Cart icon.png" // use your white or black icon as needed
                        alt="Add to Cart"
                        width={18}
                        height={18}
                        className="object-contain invert" // invert to white if icon is black
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Title + price */}
              <Link href={p.url} className="mt-4 block">
                <h3 className="text-[20px] font-medium leading-snug text-black">
                  {p.title}
                </h3>
              </Link>
              <div className="mt-1 text-[13px] text-black/70">RS. {p.price.toLocaleString("en-IN")}.00</div>

              {/* Divider style like your page */}
              <div className="mt-3 h-[3px] w-14 bg-black/10" />
            </article>
          ))}
        </section>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-6 py-[50px]">
          <button
            onClick={()=> setPage(p=>Math.max(1, p-1))}
            disabled={page===1}
            className="text-black/70 disabled:opacity-30"
          >
            ‹
          </button>
          <span className="text-sm"> {page} / {totalPages} </span>
          <button
            onClick={()=> setPage(p=>Math.min(totalPages, p+1))}
            disabled={page===totalPages}
            className="text-black/70 disabled:opacity-30"
          >
            ›
          </button>
        </div>
      </div>
    </main>
  );
}
