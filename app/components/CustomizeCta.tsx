// components/CustomizeCta.tsx
"use client";

import Link from "next/link";

export default function CustomizeCta() {
  return (
    <section className="w-full bg-[#fdf9f4]">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-24 text-center">
        {/* Small eyebrow label */}
        <p className="text-[11px] sm:text-[12px] tracking-[0.2em] text-black/80 mb-3 sm:mb-4">
          CUSTOM
        </p>

        {/* Big headline */}
        <h2 className="text-[26px] sm:text-[34px] md:text-[56px] leading-snug sm:leading-tight font-semibold text-black mb-4 sm:mb-6">
          Customize Jewellery
        </h2>

        {/* Description */}
        <p className="max-w-2xl sm:max-w-3xl mx-auto text-[14px] sm:text-[16px] md:text-[18px] text-black/80 leading-relaxed mb-8 sm:mb-10">
          Turn your dream design into reality. Share your vision with us now and
          create something truly personal.
        </p>

        {/* Outlined button */}
        <Link
          href="/pages/customize"
          className="inline-flex items-center justify-center h-10 sm:h-12 px-6 sm:px-8 border border-black text-black text-[13px] sm:text-[14px] tracking-wide hover:bg-black hover:text-white transition-colors"
        >
          BOOK NOW
        </Link>
      </div>
    </section>
  );
}
