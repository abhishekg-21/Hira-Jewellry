"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./scrollbar.css";

type CardBase = { id: string; image: string; link: string };
type DbFields = { id: string; title: string; price: number };
type Card = CardBase & Partial<DbFields>;

// Keep images/links in FE; add real DB IDs here
const PRODUCTS_FE: CardBase[] = [
  { id: "prod_1", image: "/images/bye.png",  link: "/products/silver-krishna-trishul-rakhi" },
  { id: "prod_2", image: "/images/bye.png",  link: "/products/silver-hanuman-rakhi" },
  { id: "prod_3", image: "/images/bye.png",  link: "/products/silver-shakti-gada-rakhi" },
  { id: "prod_4", image: "/images/bye.png",  link: "/products/silver-mahakaal-rakhi" },
  { id: "prod_5", image: "/images/bye.png",  link: "/products/silver-mahakaal-rakhi" },
  { id: "prod_6", image: "/images/bye.png",  link: "/products/silver-mahakaal-rakhi" },
];

const Rakhshabandhan2025 = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cards, setCards] = useState<Card[]>(PRODUCTS_FE);

  // Fetch only title+price by IDs and merge into FE images/links
  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const ids = PRODUCTS_FE.map(p => p.id);
        const res = await fetch("/api/products/by-ids-min", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ids }),
          cache: "no-store",
        });
        if (!res.ok) {
          const txt = await res.text();
          console.error("Failed to load product info", res.status, txt);
          return;
        }
        const map = (await res.json()) as Record<string, DbFields>;
        const merged = PRODUCTS_FE.map(p => ({ ...p, ...map[p.id] })).filter(p => p.title);
        if (!cancel) setCards(merged);
      } catch (e) {
        console.error("Fetch error:", e);
      }
    })();
    return () => { cancel = true; };
  }, []);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const w = el.scrollWidth - el.clientWidth;
    setScrollProgress(w > 0 ? (el.scrollLeft / w) * 100 : 0);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#fdf9f4] py-20 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-0">
        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-14">
          <div>
            <p className="text-base font-normal tracking-wide uppercase mb-1">Celebrate Bonds That Shine</p>
            <h2 className="text-5xl font-medium mb-2">Raksha Bandhan 2025</h2>
            <Link href="/collections/rakhi" className="text-[14px] font-normal underline underline-offset-4 uppercase hover:opacity-70">
              Shop the collection
            </Link>
          </div>
          <p className="text-[15px] font-normal text-gray-600">This Raksha Bandhan, honor the timeless bond…</p>
        </div>

        {/* Scrollable Product Row */}
        <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
          <div className="flex gap-4 pb-4 flex-nowrap w-max pr-[1px]">
            {cards.map((product, i) => (
              <div key={product.id || i} className="group text-left min-w-[220px] sm:min-w-[250px] m-0 p-0">
                <Link href={product.link}>
                  <div className="relative w-[320px] h-[550px] overflow-hidden m-0 p-0">
                    <Image
                      src={product.image}
                      alt={product.title || "Product"}
                      fill
                      className="object-contain transition-transform duration-300"
                    />
                    {/* Cart icon - always visible */}
                    <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-3 z-10 border border-black w-[36px] h-[36px] flex items-center justify-center">
                      <Image
                        src="/images/Cart icon.png"
                        alt="Add to Cart"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Link>
                <div className="mt-1 space-y-1">
                  <h3 className="text-sm font-medium text-black m-0 p-0">{product.title ?? "—"}</h3>
                  <p className="text-sm text-gray-600 m-0 p-0">
                    {typeof product.price === "number" ? `Rs. ${product.price.toLocaleString("en-IN")}.00` : "—"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative h-[2px] w-[140px] mx-auto bg-gray-300 mt-4 rounded">
          <div className="absolute h-full bg-black rounded transition-all" style={{ width: `${scrollProgress}%` }} />
        </div>
      </div>
    </section>
  );
};

export default Rakhshabandhan2025;
