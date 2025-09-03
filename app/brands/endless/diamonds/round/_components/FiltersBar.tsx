// app/brands/endless/diamonds/round/_components/FinderWithFilters.tsx
"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

/* Shared type */
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

/* ======================================================================
   DiamondFinder — supports per-shape title/baseText/moreText + initial type
   ====================================================================== */
type FinderProps = {
  title?: string;
  defaultType?: "natural" | "lab";
  onChange?: (v: "natural" | "lab") => void;

  /** Selected shape to drive dynamic copy */
  shape?: ShapeId;

  /** Optional per-shape overrides */
  titleByShape?: Partial<Record<ShapeId, string>>;
  baseTextByShape?: Partial<Record<ShapeId, string>>;
  moreTextByShape?: Partial<Record<ShapeId, string>>;
};

export function DiamondFinder({
  title = "Diamond Finder",
  defaultType = "natural",
  onChange,
  shape,
  titleByShape,
  baseTextByShape,
  moreTextByShape,
}: FinderProps) {
  const [type, setType] = useState<"natural" | "lab">(defaultType);
  const [expanded, setExpanded] = useState(false);

  const navy = "#0b1a2b";

  const pretty = (s?: string) =>
    s ? s.charAt(0).toUpperCase() + s.slice(1) : "Diamond";

  /* Title: prefer provided map; else auto "Round Diamond Finder"; else static title */
  const computedTitle =
    (shape && (titleByShape?.[shape] ?? `${pretty(shape)} Diamond Finder`)) ||
    title;

  /* Text: prefer provided maps (can be undefined if not supplied) */
  const baseText = shape ? baseTextByShape?.[shape] : undefined;
  const moreText = shape ? moreTextByShape?.[shape] : undefined;

  const handleSelect = (v: "natural" | "lab") => {
    setType(v);
    onChange?.(v);
  };

  return (
    <section className="py-6 text-center">
      {/* Title */}
      <h2
        className="font-serif text-[28px] sm:text-[32px] tracking-tight"
        style={{ color: navy }}
      >
        {computedTitle}
      </h2>

      {/* Paragraph with Show More */}
      <p className="mx-auto mt-2 max-w-[880px] text-[14px] leading-6 text-neutral-700 px-32">
        {baseText}
        {!expanded && (
          <>
            {" "}
            <button
              type="button"
              className="underline font-medium"
              onClick={() => setExpanded(true)}
            >
              Show More
            </button>
          </>
        )}
        {expanded && moreText}
      </p>

      {/* Segmented control */}
      <div className="mt-4 flex justify-center">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 p-1">
          <button
            type="button"
            onClick={() => handleSelect("natural")}
            className={[
              "px-6 sm:px-7 py-2.5 rounded-full text-[14px] font-semibold transition",
              type === "natural"
                ? "bg-[#0b1a2b] text-white shadow"
                : "text-[#0b1a2b]",
            ].join(" ")}
          >
            Natural
          </button>
          <button
            type="button"
            onClick={() => handleSelect("lab")}
            className={[
              "px-6 sm:px-7 py-2.5 rounded-full text-[14px] font-semibold transition",
              type === "lab" ? "bg-[#0b1a2b] text-white shadow" : "text-[#0b1a2b]",
            ].join(" ")}
          >
            Lab-Grown
          </button>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
   FiltersBar — unchanged UI; reports shape via onShapeChange
   ====================================================================== */

/* helpers */
const NAVY = "#0b1a2b";
const USD = (v: number) =>
  "$" + v.toLocaleString("en-US", { maximumFractionDigits: 0 });

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

export function FiltersBar({
  onShapeChange,
}: {
  onShapeChange?: (shape: ShapeId) => void;
}) {
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
  const minPct = useMemo(
    () => ((minPrice - MIN) / (MAX - MIN)) * 100,
    [minPrice]
  );
  const maxPct = useMemo(
    () => ((maxPrice - MIN) / (MAX - MIN)) * 100,
    [maxPrice]
  );

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
                    onClick={() => {
                      setShape(id);
                      onShapeChange?.(id); // bubble to wrapper
                    }}
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
                    <span className="mt-2 text-[14px] text-[#0b1a2b]">
                      {label}
                    </span>
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
                    const v =
                      Number(String(e.target.value).replace(/[^\d]/g, "")) || 0;
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
                    const v =
                      Number(String(e.target.value).replace(/[^\d]/g, "")) || 0;
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

/* ======================================================================
   Default wrapper that wires everything together
   ====================================================================== */
export default function FinderWithFilters() {
  const [selectedShape, setSelectedShape] = useState<ShapeId>("round");

  // NEW: pick initial type from the query (?type=lab | ?type=natural)
  const searchParams = useSearchParams();
  const qp = (searchParams?.get("type") || "").toLowerCase();
  const initialType: "natural" | "lab" = qp === "lab" ? "lab" : "natural";

  /* Per-shape title */
  const titleByShape: Partial<Record<ShapeId, string>> = {
    round: "Round Diamond Finder",
    princess: "Princess Diamond Finder",
    cushion: "Cushion Diamond Finder",
    emerald: "Emerald Diamond Finder",
    oval: "Oval Diamond Finder",
    radiant: "Radiant Cut Diamonds",
    asscher: "Asscher Diamond Finder",
    marquise: "Marquise Cut Diamonds",
    heart: "Heart Shaped Diamond",
    pear: "Pear Diamond Finder",
  };

  /* Per-shape body texts */
  const baseTextByShape: Partial<Record<ShapeId, string>> = {
    round:
      "Round is our most popular cut. For almost 100 years, diamond cutters have been using advanced theories of light behavior and precise mathematical calculations to optimize the fire",
    princess:
      "Endlessly brilliant princess diamonds are perfect for engagement rings, earrings, necklaces, and other jewelry styles. These diamonds feature unique faceting patterns that bring impressive",
    cushion:
      "With round corners and large facets, cushion cut diamonds emphasize clarity. These diamonds are perfect for engagement rings, pendants, earrings, and more. The cushion cut ",
    emerald:
      "Emerald Cut Diamonds are instantly recognizable by their step-cut facets that create a geometric hall of mirrors effect. These rectangular step-cut facets are the only ones that define",
    oval:
      "Brilliantly unique oval diamonds are perfect for engagement rings, earrings, necklaces, and other fine jewelry. Shop oval shaped diamonds for every occasion.",
    radiant:
      "The radiant cut is a combination of step-cuts like the emerald shape and brilliant cuts like the round. And it shows all the benefits of both. It was designed in 1977 to maximize",
    asscher:
      "The alluring Asscher cut is the step-cut cousin of the emerald cut. Like the emerald cut, it's only these rectangular-cut facets that define the cut so you can choose the individual look you love.",
    marquise:
      "A marquise diamond brings an iconic shape and beauty. Explore our selection of marquise cut diamonds to find a brilliant fit.",
    heart:
      "The heart-shaped diamond cut is a romantic symbol of love. The unique look of the heart helps make it a sweet choice for a variety of engagement rings and diamond jewelry. Heart-shaped jewelry ",
    pear:
      "The pear cut, with its teardrop shape, creates a subtle slimming effect on your finger. Unlike round, the cut isn't standardized so you can choose the proportions that you like best.",
  };

  const moreTextByShape: Partial<Record<ShapeId, string>> = {
    round:
      "and brilliance in a round diamond. Round cuts also have the widest variety of setting styles so you can customize to your heart's content.",
    princess:
      "sparkle at any size. This shape doesn’t follow an exact faceting standardization, allowing you to choose the qualities that give you the look you’ll love. Whether it's cut for bold flashes of light, for smoldering scintillation, or with a square or rectangular profile, the princess cut is the ultimate in variation. Shop certified princess diamonds to find the perfect gem.",
    cushion:
      "diamond shape has rounded corners and larger facets, giving more fire (rainbow-colored flashes of light) than any other cut. Length/width ratios range in this cut from perfectly square to rectangular elongated cushion cut diamonds to suit any style. Cushion cut diamonds can also have a vintage feel when paired with the right details. Find the perfect cushion cut diamond today!",
    emerald:
      " the cut, so you can choose the individual proportions and qualities you love.",
    radiant:
      "brilliance (bright white flashes) and fire (rainbow-colored flashes).",
    asscher:
      " Adjust carat, color, clarity, and price to choose crisp step-cut facets and centered windmills.",
    heart:
      "has long been a symbol of everlasting connection. This fancy shape looks perfect with romantic details and rose gold. Halo and pavé settings are another popular way to incorporate the heart cut diamond.",
  };

  return (
    <>
      <DiamondFinder
        defaultType={initialType} // ← seeded from ?type= query
        shape={selectedShape}
        titleByShape={titleByShape}
        baseTextByShape={baseTextByShape}
        moreTextByShape={moreTextByShape}
      />
      <FiltersBar onShapeChange={setSelectedShape} />
    </>
  );
}
