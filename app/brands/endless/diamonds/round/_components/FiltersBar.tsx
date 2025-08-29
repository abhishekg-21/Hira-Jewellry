// app/diamonds/round/_components/FiltersBar.tsx
"use client";

import { useMemo, useState } from "react";

/* ------------ helpers ------------ */
const NAVY = "#0b1a2b";
const USD = (v: number) =>
  "$" + v.toLocaleString("en-US", { maximumFractionDigits: 0 });

type ShapeId =
  | "round"
  | "princess"
  | "cushion"
  | "emerald"
  | "oval"
  | "radiant"
  | "asscher"
  | "marquise"
  | "heart"
  | "pear";

/* Use your existing shape icon images */
const SHAPES: { id: ShapeId; label: string; iconSrc: string }[] = [
  {
    id: "round",
    label: "Round",
    iconSrc:
      "/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103322.923.png",
  },
  {
    id: "princess",
    label: "Princess",
    iconSrc:
      "/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103616.795.png",
  },
  {
    id: "cushion",
    label: "Cushion",
    iconSrc:
      "/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T101436.064.png",
  },
  {
    id: "emerald",
    label: "Emerald",
    iconSrc:
      "/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T104905.610.png",
  },
  {
    id: "oval",
    label: "Oval",
    iconSrc:
      "/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103920.087.png",
  },
  {
    id: "radiant",
    label: "Radiant",
    iconSrc:
      "/images/brands/endless/DiamondsMega/Untitled design - 2025-07-26T142833.275.png",
  },
  {
    id: "asscher",
    label: "Asscher",
    iconSrc:
      "/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102010.055.png",
  },
  {
    id: "marquise",
    label: "Marquise",
    iconSrc:
      "/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T095621.391.png",
  },
  {
    id: "heart",
    label: "Heart",
    iconSrc:
      "/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102304.165.png",
  },
  {
    id: "pear",
    label: "Pear",
    iconSrc:
      "/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102946.143.png",
  },
];

export default function FiltersBar() {
  const [shape, setShape] = useState<ShapeId>("round");

  // price state (USD to match screenshot)
  const MIN = 0;
  const MAX = 5_000_00;
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5_000_00);

  // keep min <= max
  const clampMin = (v: number) => Math.min(Math.max(MIN, v), maxPrice);
  const clampMax = (v: number) => Math.max(Math.min(MAX, v), minPrice);

  // positions for custom handles
  const minPct = useMemo(() => ((minPrice - MIN) / (MAX - MIN)) * 100, [minPrice]);
  const maxPct = useMemo(() => ((maxPrice - MIN) / (MAX - MIN)) * 100, [maxPrice]);

  return (
    /* FULL-BLEED WRAPPER */
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      {/* side padding so content doesn't touch the edges */}
      <div className="px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Shape */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <h4 className="text-[14px] font-semibold text-[#0b1a2b]">Shape</h4>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#0b1a2b] text-[10px] leading-none text-[#0b1a2b]">
                i
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 ">
              {SHAPES.map(({ id, label, iconSrc }) => {
                const active = shape === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setShape(id)}
                    className={[
                      "flex flex-col items-center justify-center rounded-xl border p-2 transition cursor-pointer",
                      active
                        ? "border-[#0b1a2b] shadow-sm"
                        : "border-neutral-200 hover:border-neutral-300",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    <img
                      src={iconSrc}
                      alt={label}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                    />
                    <span className="mt-2 text-[14px] text-[#0b1a2b]">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Price */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-[14px] font-semibold text-[#0b1a2b]">Price</h4>
            </div>

            <div className="flex items-start justify-between">
              <div className="text-[12px] text-neutral-500">
                <div className="mb-1">Min Price</div>
                <input
                  value={USD(minPrice)}
                  onChange={(e) => {
                    const v = Number(String(e.target.value).replace(/[^\d]/g, "")) || 0;
                    setMinPrice(clampMin(v));
                  }}
                  className="rounded-lg border px-3 py-1.5 text-[14px] font-medium shadow-sm"
                />
              </div>

              <div className="text-right text-[12px] text-neutral-500">
                <div className="mb-1">Max Price</div>
                <input
                  value={USD(maxPrice)}
                  onChange={(e) => {
                    const v = Number(String(e.target.value).replace(/[^\d]/g, "")) || 0;
                    setMaxPrice(clampMax(v));
                  }}
                  className="rounded-lg border px-3 py-1.5 text-[14px] font-medium shadow-sm"
                />
              </div>
            </div>

            {/* Double range slider */}
            <div className="relative mt-6 h-8">
              {/* base track */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-neutral-200" />
              {/* active segment */}
              <div
                className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#0b1a2b]"
                style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
              />

              {/* inputs ignore pointer events; thumbs are interactive */}
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={minPrice}
                onChange={(e) => setMinPrice(clampMin(Number(e.target.value)))}
                className="absolute inset-0 w-full appearance-none bg-transparent pointer-events-none
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0b1a2b]
                  [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0b1a2b]
                  [&::-webkit-slider-thumb]:pointer-events-auto
                  [&::-moz-range-thumb]:pointer-events-auto"
              />
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={maxPrice}
                onChange={(e) => setMaxPrice(clampMax(Number(e.target.value)))}
                className="absolute inset-0 w-full appearance-none bg-transparent pointer-events-none
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0b1a2b]
                  [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0b1a2b]
                  [&::-webkit-slider-thumb]:pointer-events-auto
                  [&::-moz-range-thumb]:pointer-events-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
