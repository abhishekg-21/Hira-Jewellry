// components/CustomizeCta.tsx
"use client";

import Link from "next/link";

export default function CustomizeCta() {
  return (
    <section className="w-full bg-[#fdf9f4]">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
        {/* Small eyebrow label */}
        <p className="text-[12px] tracking-[0.2em] text-black/80 mb-4">
          CUSTOM
        </p>

        {/* Big headline */}
        <h2 className="text-[34px] leading-tight md:text-[56px] font-semibold text-black mb-6">
          Customize Jewellery
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-[16px] md:text-[18px] text-black/80 leading-relaxed mb-10">
          Turn your dream design into reality. Share your vision with us now and
          create something truly personal.
        </p>

        {/* Outlined button */}
        <Link
          href="/pages/customize" // change to your route
          className="inline-flex items-center justify-center h-12 px-8 border border-black text-black text-[14px] tracking-wide hover:bg-black hover:text-white transition-colors"
        >
          BOOK NOW
        </Link>
      </div>
    </section>
  );
}
