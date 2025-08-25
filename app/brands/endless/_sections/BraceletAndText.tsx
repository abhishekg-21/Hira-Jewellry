"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Section from "./Section";

type Slide = { src: string; alt: string; title: string; href?: string };

export default function BraceletAndText({
  slides,
  left,
  rightImage,
}: {
  slides?: Slide[];
  left?: { src: string; alt: string; title: string; priceNote?: string; href?: string };
  rightImage: { src: string; alt: string };
}) {
  // Normalize to an array of slides (keeps back-compat with `left`)
  const data: Slide[] = useMemo(() => {
    if (slides && slides.length) return slides;
    if (left) return [{ src: left.src, alt: left.alt, title: left.title, href: left.href }];
    return [];
  }, [slides, left]);

  const [index, setIndex] = useState(0);
  const total = data.length || 1;

  const pad2 = (n: number) => (n < 9 ? `0${n}` : `${n}`);

  // ── Controls ────────────────────────────────────────────────────────────────
  const goTo = (i: number) => setIndex(((i % total) + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // ── Autoplay (pause on hover) ──────────────────────────────────────────────
  const hoverRef = useRef(false);
  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => {
      if (!hoverRef.current) next();
    }, 4500);
    return () => clearInterval(id);
  }, [index, total]); // re-arm when index/total changes

  // ── Swipe (mouse/touch) ────────────────────────────────────────────────────
  const trackRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef(0);
  const dragging = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    if (total <= 1) return;
    dragging.current = true;
    startX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !trackRef.current) return;
    const dx = e.clientX - startX.current;
    // Optionally, you can add a little translate while dragging for feedback.
    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(calc(${-index * 100}% + ${dx}px))`;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging.current || !trackRef.current) return;
    dragging.current = false;
    trackRef.current.style.transition = "";
    const dx = e.clientX - startX.current;
    const threshold = 40; // px
    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    else goTo(index); // snap back
  };

  // Active slide content for title/cta
  const active = data[Math.min(index, data.length - 1)] ?? left;

  return (
    <Section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
        {/* LEFT: centered card with improved slider */}
        <div className="flex items-center justify-center py-14">
          <div
            className="text-center"
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
          >
            {/* Viewport */}
            <div className="relative mx-auto overflow-hidden rounded-sm w-[280px] sm:w-[320px] md:w-[360px]">
              {/* keep a consistent tall aspect like the reference; tweak if you prefer */}
              <div className="relative w-full aspect-[4/5]">
                {/* Track: each slide is w-full so -100% per index is exact */}
                <div
                  ref={trackRef}
                  className="flex h-full w-full transition-transform duration-500 will-change-transform"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                  role="group"
                  aria-roledescription="carousel"
                  aria-label="Featured products"
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                >
                  {(data.length ? data : [{ src: left?.src ?? "", alt: left?.alt ?? "" }]).map(
                    (s, i) => (
                      <div
                        key={`${s.src}-${i}`}
                        className="relative shrink-0 w-full h-full"
                        aria-roledescription="slide"
                        aria-label={`${i + 1} of ${total}`}
                      >
                        <Image
                          src={s.src}
                          alt={s.alt}
                          fill
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>
                    )
                  )}
                </div>

                {/* Edge fades for polish */}
                {total > 1 && (
                  <>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l to-transparent" />
                  </>
                )}

                {/* Chevron buttons */}
                {total > 1 && (
                  <>
                    <button
                      aria-label="Previous slide"
                      onClick={prev}
                      className="absolute left-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90  grid place-items-center text-[#0b1a2b] hover:bg-white"
                    >
                      ‹
                    </button>
                    <button
                      aria-label="Next slide"
                      onClick={next}
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90  grid place-items-center text-[#0b1a2b] hover:bg-white"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Title */}
            {active?.title && (
              <h3 className="mt-6 text-[#0b1a2b] uppercase tracking-wide leading-snug text-[18px] sm:text-[20px] max-w-[340px] mx-auto">
                {active.title}
              </h3>
            )}

            {/* CTA */}
            {"href" in (active || {}) && active?.href && (
              <Link
                href={active.href}
                className="mt-4 inline-block text-[12px] tracking-wider uppercase"
              >
                Shop Now
              </Link>
            )}

            {/* Dots + pager + rule */}
            {total > 1 && (
              <>
                <div className="mt-5 flex items-center justify-center gap-2">
                  {data.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === index ? "w-6 bg-[#0b1a2b]" : "w-3 bg-black/30 hover:bg-black/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-center gap-6 text-[12px]">
                  <button aria-label="Previous" onClick={prev} className="opacity-70 hover:opacity-100">
                    ‹
                  </button>
                  <span className="tracking-[0.35em] select-none">{pad2(index + 1)}</span>
                  <button aria-label="Next" onClick={next} className="opacity-70 hover:opacity-100">
                    ›
                  </button>
                </div>
              </>
            )}

            <div className="mt-4 h-px w-64 bg-neutral-200 mx-auto" />
          </div>
        </div>

        {/* RIGHT: full-bleed bracelet image with subtle divider */}
        <div className="relative min-h-[420px] md:min-h-[560px] md:border-l md:border-neutral-200">
          <Image
            src={rightImage.src}
            alt={rightImage.alt}
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
