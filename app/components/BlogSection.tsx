// components/BeforeAfterSlider.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dividerX, setDividerX] = useState(50);
  const [dragging, setDragging] = useState(false);

  const BEFORE_SRC = "/images/our customization/Silver_Earing.jpg";
  const AFTER_SRC = "/images/our customization/Gold_Earring.png";

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setDividerX(pct);
  };

  return (
    <section className="w-full bg-[#fbf7f0] py-8 sm:py-12 md:py-16">
      <h2 className="text-[28px] sm:text-[36px] md:text-[54px] leading-tight font-medium text-center mb-6 sm:mb-10">
        Our Customization
      </h2>

      <div
        ref={containerRef}
        className="relative w-full max-w-[1280px] mx-auto h-[320px] sm:h-[480px] md:h-[680px] lg:h-[820px] overflow-hidden select-none rounded-[2px]"
        onMouseDown={(e) => {
          setDragging(true);
          updateFromClientX(e.clientX);
        }}
        onMouseMove={(e) => {
          if (dragging) updateFromClientX(e.clientX);
        }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchStart={(e) => {
          setDragging(true);
          updateFromClientX(e.touches[0].clientX);
        }}
        onTouchMove={(e) => {
          if (dragging) updateFromClientX(e.touches[0].clientX);
        }}
        onTouchEnd={() => setDragging(false)}
      >
        {/* AFTER side */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#fff8ee]" />
          <Image
            src={AFTER_SRC}
            alt="After"
            fill
            priority
            className="object-contain object-center"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>

        {/* BEFORE side */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - dividerX}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-[#f5f5f5]" />
          <Image
            src={BEFORE_SRC}
            alt="Before"
            fill
            priority
            className="object-contain object-center"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-black/40 z-10"
          style={{ left: `${dividerX}%`, transform: "translateX(-0.5px)" }}
        />

        {/* Handle */}
        <button
          aria-label="Drag slider"
          className="absolute z-20 w-7 h-7 sm:w-9 sm:h-9 bg-white border border-black/50 rounded-sm shadow-sm flex items-center justify-center cursor-col-resize"
          style={{
            left: `${dividerX}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onTouchStart={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
        >
          <span className="text-black tracking-widest text-[12px] sm:text-[14px] leading-none">
            |||
          </span>
        </button>

        {/* Labels */}
        <span className="absolute top-2 sm:top-4 left-2 sm:left-4 text-[10px] sm:text-[11px] font-semibold text-black/70 z-30">
          BEFORE
        </span>
        <span className="absolute top-2 sm:top-4 right-2 sm:right-4 text-[10px] sm:text-[11px] font-semibold text-black/70 z-30">
          AFTER
        </span>
      </div>
    </section>
  );
}
