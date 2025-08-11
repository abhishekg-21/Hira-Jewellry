// components/AboutStickyImages.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  eyebrow?: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  img1: string;
  img2: string;
  alt1?: string;
  alt2?: string;
  background?: string;
};

export default function AboutStickyImages({
  eyebrow = "ABOUT HIRA",
  title,
  body,
  ctaLabel = "ABOUT US",
  ctaHref = "/about",
  img1,
  img2,
  alt1 = "Craft process",
  alt2 = "Finished piece",
  background = "#fff9f3",
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const range = rect.height - window.innerHeight;
        const passed = Math.min(Math.max(-rect.top, 0), Math.max(range, 0));
        const p = range > 0 ? passed / range : 0;
        setProgress(p);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // animation timing for the overlay image
  const eased = clamp01((progress - 0.15) / 0.7);
  const opacity = eased;
  const translateY = (1 - eased) * 18;

  return (
    <section style={{ background }} className="w-full">
      <div
        ref={wrapRef}
        className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-10 py-12 lg:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT: sticky + vertically centered (exact placement) */}
          <div className="relative text-center">
            {/* stick the whole copy block */}
            <div className="sticky top-16 md:top-20 lg:top-24">
              {/* match the visual stage height and center content */}
              <div className="h-[70vh] md:h-[76vh] lg:h-[78vh] grid content-center">
                <div className="-mt-2"> {/* tweak up a hair to match screenshot */}
                  <p className="text-[13px] tracking-[0.2em] uppercase text-neutral-600 mb-3 ">
                    {eyebrow}
                  </p>
                  <h2 className="text-[42px] leading-[1.1] md:text-[45px] md:leading-[1.08] font-bold mb-6 ">
                    {title}
                  </h2>
                  <p className="text-[17px] leading-[1.75] text-neutral-800 mb-8 ">
                    {body}
                  </p>
                  {ctaLabel ? (
                    <a
                      href={ctaHref}
                      className="inline-flex items-center justify-center h-12 px-8 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors "
                    >
                      {ctaLabel}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: sticky image stage (unchanged) */}
          <div className="relative">
            <div className="h-[210vh] relative">
              <div className="sticky top-16 md:top-20 lg:top-24 h-[70vh] md:h-[76vh] lg:h-[78vh] overflow-hidden rounded-none">
                <div className="absolute inset-0">
                  <Image
                    src={img1}
                    alt={alt1}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute inset-0 will-change-transform will-change-opacity"
                  style={{
                    opacity,
                    transform: `translateY(${translateY}%)`,
                  }}
                >
                  <Image
                    src={img2}
                    alt={alt2}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced motion */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .will-change-transform,
          .will-change-opacity {
            transition: none !important;
            transform: translateY(0) !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}
