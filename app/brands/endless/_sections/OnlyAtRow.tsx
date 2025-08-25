"use client";

import Image from "next/image";
import Section from "./Section";
import { useRef } from "react";

type Card = { src: string; alt: string; title: string; body: string };

export default function OnlyAtRow({
  brand,
  cards,
}: {
  brand: string;
  cards: Card[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(320, Math.min(640, Math.floor(el.clientWidth * 0.8)));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const CardItem = ({ c }: { c: Card }) => (
    <article className="snap-start shrink-0 w-[280px] md:w-[340px] lg:w-[380px]">
      <div className="relative h-[210px] md:h-[240px] lg:h-[260px] w-full overflow-hidden rounded-sm">
        <Image
          src={c.src}
          alt={c.alt}
          fill
          sizes="(min-width:1280px) 380px, (min-width:768px) 340px, 280px"
          className="object-cover"
        />
      </div>
      <h4 className="mt-3 text-sm font-semibold">{c.title}</h4>
      <p className="text-sm mt-1 text-neutral-700 leading-6">{c.body}</p>
    </article>
  );

  return (
    <Section className="py-12">
      <div className="text-[11px] tracking-[0.3em] text-neutral-500 mb-6">
        ONLY AT {brand.toUpperCase()}
      </div>

      {/* Horizontal scroller (all breakpoints) */}
      <div className="relative -mx-4">
        <div
          ref={scrollerRef}
          className="
            px-4 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth
            [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          "
        >
          {cards.map((c, i) => (
            <CardItem key={i} c={c} />
          ))}
        </div>

        {/* Desktop nav arrows */}
        <button
          aria-label="Scroll left"
          onClick={() => scrollByDir(-1)}
          className="
            hidden md:grid place-items-center
            absolute left-2 top-1/2 -translate-y-1/2
            h-10 w-10 rounded-full
            bg-white/90 hover:bg-white shadow
            text-neutral-800 select-none
          "
        >
          ‹
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scrollByDir(1)}
          className="
            hidden md:grid place-items-center
            absolute right-2 top-1/2 -translate-y-1/2
            h-10 w-10 rounded-full
            bg-white/90 hover:bg-white shadow
            text-neutral-800 select-none
          "
        >
          ›
        </button>
      </div>
    </Section>
  );
}
