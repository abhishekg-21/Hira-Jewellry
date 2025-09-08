"use client";

import Image from "next/image";
import Link from "next/link";

type Item = { label: string; icon: string; href?: string };

const items: Item[] = [
  { label: "Authentication Certificate", icon: "/images/FeatureMarquee/verify-icon-2048x2046-4v0s4iwk (1).png" },
  { label: "Free Shipping",               icon: "/images/FeatureMarquee/Untitled_design_31.png" },
  { label: "Lifetime Plating",            icon: "/images/FeatureMarquee/all4_2_09_03-512 (1).png" },
  { label: "Manufactures to Consumers",   icon: "/images/FeatureMarquee/direct-to-consumer_480x480_a78af8f2-b35a-4f5f-8a89-6d122faf6c8f.png" },
  { label: "Cash on Delivery",            icon: "/images/FeatureMarquee/cash-on-delivery-4 (1).png" },
];

export default function FeatureMarquee() {
  // Duplicate items to create a seamless loop
  const track = [...items, ...items, ...items];

  return (
    <section
      aria-label="Store benefits"
      className="w-full bg-[#fdf5eb] border-y border-black/5 select-none"
    >
      <div className="group relative overflow-hidden">
        <div className="marquee flex items-center whitespace-nowrap">
          {track.map((item, i) => {
            const Content = (
              <span className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-5 md:px-10 py-2 sm:py-2.5 md:py-3.5">
                <span className="relative inline-block w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px]">
                  <Image
                    src={item.icon}
                    alt=""
                    fill
                    sizes="30px"
                    className="object-contain"
                    priority={i < 6}
                  />
                </span>
                <span className="text-[10px] sm:text-[11px] md:text-[13px] uppercase tracking-wide text-gray-550">
                  {item.label}
                </span>
              </span>
            );

            return item.href ? (
              <Link
                key={`${item.label}-${i}`}
                href={item.href}
                className="shrink-0 hover:opacity-80 transition-opacity"
              >
                {Content}
              </Link>
            ) : (
              <span key={`${item.label}-${i}`} className="shrink-0">
                {Content}
              </span>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* speed & smooth loop */
        .marquee {
          animation: scroll 28s linear infinite;
        }
        .marquee--2 {
          animation-name: scroll-2;
        }
        /* Pause on hover */
        .group:hover .marquee {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll-2 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; transform: translateX(0); }
          .marquee--2 { display: none; }
        }
      `}</style>
    </section>
  );
}
