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
    <section className="w-full bg-[#fbf7f0] py-10 sm:py-12 md:py-16">
      <h2 className="text-[28px] sm:text-[42px] md:text-[54px] leading-none font-medium text-center mb-6 sm:mb-10">
        Our Customization
      </h2>

      <div
        ref={containerRef}
        className="relative w-full max-w-[1280px] mx-auto 
                   h-[260px] sm:h-[380px] md:h-[600px] lg:h-[750px] 
                   overflow-hidden select-none rounded-[2px]"
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
        {/* AFTER side (background) */}
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

        {/* BEFORE side (clipped) */}
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
          className="absolute z-20 w-9 h-9 bg-white border border-black/50 rounded-sm shadow-sm flex items-center justify-center cursor-col-resize"
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
          <span className="text-black tracking-widest text-[14px] leading-none">
            |||
          </span>
        </button>

        {/* Labels */}
        <span className="absolute top-3 left-3 text-[11px] font-semibold text-black/70 z-30">
          BEFORE
        </span>
        <span className="absolute top-3 right-3 text-[11px] font-semibold text-black/70 z-30">
          AFTER
        </span>
      </div>
    </section>
  );
}
