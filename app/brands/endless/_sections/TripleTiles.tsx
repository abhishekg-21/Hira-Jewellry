"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";

type Tile = { src: string; alt: string; label: string; href?: string };

export default function TripleTiles({
  tiles,
  autoplay = true,
  intervalMs = 3500,
}: {
  tiles: Tile[];
  /** Auto-advance the carousel */
  autoplay?: boolean;
  /** Autoplay interval in ms */
  intervalMs?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [idx, setIdx] = useState(0);

  // Gap (Tailwind gap-6 = 24px). If you change the gap class, update this value.
  const GAP = 24;

  const scrollByTiles = (n: number) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;

    const tileW = first.getBoundingClientRect().width + GAP;
    el.scrollBy({ left: tileW * n, behavior: "smooth" });
  };

  const scrollPrev = () => scrollByTiles(-1);
  const scrollNext = () => scrollByTiles(1);

  // Keep current index in sync as the user drags/scrolls
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const first = el.children[0] as HTMLElement | undefined;
      if (!first) return;
      const tileW = first.getBoundingClientRect().width + GAP;
      const i = Math.round(el.scrollLeft / tileW);
      setIdx(Math.max(0, Math.min(i, tiles.length - 1)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [tiles.length]);

  // Autoplay (wraps back to start).
  useEffect(() => {
    if (!autoplay || hovering) return;
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;

      // if we're near the end, jump back to start
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollNext();
      }
    }, intervalMs);

    return () => clearInterval(id);
  }, [autoplay, hovering, intervalMs]);

  // Dots click
  const jumpTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;
    const tileW = first.getBoundingClientRect().width + GAP;
    el.scrollTo({ left: tileW * i, behavior: "smooth" });
  };

  return (
    <Section className="py-6">
      <div
        className="relative"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Track: always horizontal scrolling with snap */}
        <div
          ref={trackRef}
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory
            [-ms-overflow-style:none] [scrollbar-width:none]
            px-0
          "
          // Hide scrollbars (WebKit)
          style={{ scrollbarWidth: "none" } as any}
        >
          {tiles.map((t, i) => {
            const body = (
              <>
                <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] overflow-hidden">
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(min-width:1280px) 30vw, (min-width:1024px) 40vw, 85vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    priority={i === 0}
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-[12px] sm:text-[13px] tracking-[0.18em] uppercase">
                    {t.label}
                  </div>
                </div>
              </>
            );

            return (
              <div
                key={`${t.alt}-${i}`}
                className="
                  group snap-start shrink-0
                  basis-[85%] sm:basis-[70%] md:basis-[50%] lg:basis-[33%] xl:basis-[30%]
                "
              >
                {t.href ? (
                  <Link href={t.href} className="block">
                    {body}
                  </Link>
                ) : (
                  <div>{body}</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Arrow controls */}
        <button
          aria-label="Previous"
          onClick={scrollPrev}
          className="
            absolute left-2 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 rounded-full bg-white shadow ring-1 ring-black/10
            grid place-items-center hover:bg-white/90
          "
        >
          <span className="inline-block text-lg leading-none">‹</span>
        </button>
        <button
          aria-label="Next"
          onClick={scrollNext}
          className="
            absolute right-2 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 rounded-full bg-white shadow ring-1 ring-black/10
            grid place-items-center hover:bg-white/90
          "
        >
          <span className="inline-block text-lg leading-none">›</span>
        </button>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {tiles.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => jumpTo(i)}
              className={`
                w-2.5 h-2.5 rounded-full transition
                ${i === idx ? "bg-black" : "bg-black/30 hover:bg-black/60"}
              `}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}