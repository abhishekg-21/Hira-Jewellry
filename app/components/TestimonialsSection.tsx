"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

type Review = {
  id: string;
  image: string;
  title: string;
  text: string;
  author: string;
  rating: number; // 1-5
};

const REVIEWS: Review[] = [
  {
    id: "r1",
    image: "/images/Review1.jpeg",
    title: "Dreamy flower Blossom initial Necklace",
    text:
      "Just received the parcel. It is sooo beautiful and dreamy. Exactly like it looked in the photo. The quality looks amazing. Thank you",
    author: "JASLEEN KAUR",
    rating: 4,
  },
  {
    id: "r2",
    image: "/images/Review2.jpeg",
    title: "Dainty Dragonfly Necklace",
    text:
      "I have received the necklaces. Both are so pretty and very neatly made. The dragonfly one looks as good as real gold. Thank you so much.",
    author: "ANUKRITI SETHI",
    rating: 5,
  },
  {
    id: "r3",
    image: "/images/Review3.jpeg",
    title: "Custom Ring",
    text:
      "I received the product, It is really very nice, your packaging and product quality is very premium. Both the ring is perfectly made. Thank you so much.",
    author: "SURADEEP BISWAS",
    rating: 4,
  },
  {
    id: "r4",
    image: "/images/Review4.jpeg",
    title: "Custom Name Necklace",
    text:
      "Wow! Its amazing. Its the same customize design that I order. It looks so good. Thank you so much.",
    author: "P. HANISHA",
    rating: 5,
  },
  {
    id: "r5",
    image: "/images/Review5.jpeg",
    title: "Minimal Bracelet",
    text:
      "Very elegant and comfortable. Loved the finish and the fit. Packaging was lovely too.",
    author: "RITIKA",
    rating: 5,
  },
  {
    id: "r6",
    image: "/images/Review6.jpeg",
    title: "Minimal Bracelet",
    text:
      "Very elegant and comfortable. Loved the finish and the fit. Packaging was lovely too.",
    author: "RITIKA",
    rating: 5,
  },
  {
    id: "r7",
    image: "/images/Review7.jpeg",
    title: "Minimal Bracelet",
    text:
      "Very elegant and comfortable. Loved the finish and the fit. Packaging was lovely too.",
    author: "RITIKA",
    rating: 5,
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-1 text-[#f1c40f]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-3 w-3 sm:h-4 sm:w-4 ${i < n ? "fill-current" : "fill-transparent"} stroke-current`}
        >
          <path
            strokeWidth="1.2"
            d="M12 17.3 6.8 20l.98-5.7-4.1-4 5.7-.83L12 4l2.6 5.5 5.7.83-4.1 4 .98 5.7z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const max = container.scrollWidth - container.clientWidth;
    const left = container.scrollLeft;
    const pct = max > 0 ? (left / max) * 100 : 0;
    setScrollProgress(Math.max(0, Math.min(100, pct)));
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    // initialize once
    handleScroll();
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#fff5ea] py-8 sm:py-12 md:py-16">
      <div className="mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-center text-[24px] sm:text-[32px] md:text-[54px] leading-[1.2] font-semibold tracking-[-0.02em]">
          What our customers says?
        </h2>

        {/* Horizontal scroll container */}
        <div
          ref={containerRef}
          className="mt-6 sm:mt-8 flex gap-6 sm:gap-12 md:gap-28 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {REVIEWS.map((r) => (
            <article
              key={r.id}
              className="group min-w-[220px] sm:min-w-[260px] max-w-[220px] sm:max-w-[260px]"
            >
              {/* Image */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full overflow-hidden rounded-md">
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(min-width: 1280px) 300px, 33vw"
                />
              </div>

              {/* Content */}
              <div className="pt-4 sm:pt-5">
                <Stars n={r.rating} />
                <h3 className="mt-3 sm:mt-4 text-[16px] sm:text-[18px] md:text-[22px] font-semibold leading-snug">
                  {r.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed text-black/80">
                  {r.text}
                </p>
                <p className="mt-2 sm:mt-3 text-[12px] sm:text-[14px] font-semibold">
                  - {r.author}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative h-[2px] w-[80px] sm:w-[120px] mx-auto bg-gray-300 mt-5 sm:mt-6 rounded">
          <div
            className="absolute h-full bg-black rounded transition-[width] duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
