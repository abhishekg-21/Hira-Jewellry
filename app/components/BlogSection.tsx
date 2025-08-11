// components/BeforeAfterSlider.tsx
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dividerX, setDividerX] = useState(50); // percentage
  const [dragging, setDragging] = useState(false);

  // CHANGE THESE TWO PATHS ONLY IF YOU WANT DIFFERENT IMAGES
  const BEFORE_SRC = "/images/Anklet1.jpg";
  const AFTER_SRC  = "/images/earring-gold.jpg";

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setDividerX(pct);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const onMouseUp = () => setDragging(false);
  const onMouseLeave = () => setDragging(false);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setDragging(true);
    updateFromClientX(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(e.touches[0].clientX);
  };

  const onTouchEnd = () => setDragging(false);

  return (
    <section className="w-full bg-[#fdf9f4] py-16">
      <h2 className="text-[42px] md:text-[54px] leading-none font-semibold text-center mb-8">
        Our Customization
      </h2>

      <div
        ref={containerRef}
        className="relative w-full max-w-[1400px] mx-auto h-[720px] md:h-[860px] overflow-hidden select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* RIGHT side (AFTER) as full background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#fff8ee]" />
          <Image
            src={AFTER_SRC}
            alt="After Customization"
            fill
            priority
            className="object-cover"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>

        {/* LEFT side (BEFORE) clipped to divider — now styled like AFTER */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${dividerX}%` }}
        >
          {/* match AFTER background */}
          <div className="absolute inset-0 bg-[#fff8ee]" />
          <Image
            src={BEFORE_SRC}
            alt="Before Customization"
            fill
            priority
            className="object-cover"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-black/60 z-10"
          style={{ left: `${dividerX}%`, transform: "translateX(-0.5px)" }}
        />

        {/* Handle (small square with vertical bars) */}
        <button
          aria-label="Drag slider"
          className="absolute z-20 w-9 h-9 bg-white border border-black/60 rounded-sm shadow-sm flex items-center justify-center cursor-col-resize"
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
        <span className="absolute top-4 left-4 text-xs md:text-sm font-semibold text-black z-30">
          BEFORE
        </span>
        <span className="absolute top-4 right-4 text-xs md:text-sm font-semibold text-black z-30">
          AFTER
        </span>
      </div>
    </section>
  );
}
