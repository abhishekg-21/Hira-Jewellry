// app/engagement-rings/settings/_components/ChipsRow.tsx
"use client";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

const DROPDOWNS = [
  "Gender",
  "Rings Style",
  "Ring Size",
  "Shape",
  "Gemstones",
  "Metal",
  "Rings Width",
  "Price",
];

const CHECKS = ["On Sale", "Engravable"];

/* ---------- Rings Style options ---------- */
const RINGS_STYLE_OPTIONS = [
  "All",
  "Side Stone",
  "Pavé",
  "Halo",
  "Three Stone",
  "Vintage",
  "Solitaire",
  "Designer",
  "Petite",
  "Floral",
  "Cathedral",
  "Unique",
  "Channel Set",
  "Hidden Halo",
  "Milgrain",
  "Cluster",
  "Six Prong",
  "Split Shank",
  "East-West",
  "Four Prong",
  "Comfort Fit",
  "Simple",
  "Plain Metal",
] as const;

/* ---------- Ring Size options ---------- */
const RING_SIZE_OPTIONS = [
  "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5",
  "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "14.5", "15",
] as const;

/* ---------- Rings Width options (ordered like screenshot) ---------- */
const RINGS_WIDTH_LEFT = [
  "All",
  "1.00-2.00mm",
  "2.00-3.00mm",
  "3.00-4.00mm",
  "4.00-5.00mm",
  "5.00-6.00mm",
  "6.00-7.00mm",
] as const;

const RINGS_WIDTH_RIGHT = [
  "7.00-8.00mm",
  "8.00-9.00mm",
  "9.00mm+",
] as const;

/* ---------- Shape options (now using images, not SVGs) ---------- */
const SHAPES = [
  "Round","Princess","Cushion","Emerald","Oval","Radiant","Asscher","Marquise","Heart","Pear",
] as const;

/** map each shape to its image path */
const SHAPE_IMAGES: Record<string, string> = {
  Round: "/images/shapes/round.png",
  Princess: "/images/shapes/princess.png",
  Cushion: "/images/shapes/cushion.png",
  Emerald: "/images/shapes/emerald.png",
  Oval: "/images/shapes/oval.png",
  Radiant: "/images/shapes/radiant.png",
  Asscher: "/images/shapes/asscher.png",
  Marquise: "/images/shapes/marquise.png",
  Heart: "/images/shapes/heart.png",
  Pear: "/images/shapes/pear.png",
};

/* ---------- Gemstones ---------- */
type GemOption = { label: string; icon?: string };
const GEMSTONES: ReadonlyArray<GemOption> = [
  { label: "All" },
  { label: "Blue Sapphire", icon: "/images/icons/blue-sapphire.png" },
  { label: "Multi-Stone" },
];

/* ---------- Metal ---------- */
type MetalOption = { label: string; color?: string; text?: string };
const METALS: ReadonlyArray<MetalOption> = [
  { label: "All" },
  { label: "White Gold", color: "#d9d9d9" },
  { label: "Yellow Gold", color: "#e0b74a" },
  { label: "Rose Gold", color: "#d28b7c" },
  { label: "Platinum", color: "#b0b0b0", text: "Pt" },
];

/* ---------- Price defaults ---------- */
const PRICE_MIN = 0;
const PRICE_MAX = 200_000;

export default function ChipsRow() {
  const [open, setOpen] = useState<string | null>(null);

  /* Rings Style */
  const [ringStyles, setRingStyles] = useState<string[]>([]);
  const nonAll = RINGS_STYLE_OPTIONS.filter((s) => s !== "All");
  const hasAllSelected = ringStyles.length === nonAll.length;
  function toggleRingStyle(item: string) {
    if (item === "All") {
      setRingStyles(hasAllSelected ? [] : [...nonAll]);
      return;
    }
    setRingStyles((prev) => {
      const set = new Set(prev);
      set.has(item) ? set.delete(item) : set.add(item);
      return Array.from(set).filter((s) => s !== "All");
    });
  }

  /* Ring Size */
  const [ringSizes, setRingSizes] = useState<string[]>([]);
  function toggleRingSize(size: string) {
    setRingSizes((prev) => {
      const set = new Set(prev);
      set.has(size) ? set.delete(size) : set.add(size);
      return Array.from(set);
    });
  }

  /* Rings Width */
  const [ringWidths, setRingWidths] = useState<string[]>([]);
  const nonAllWidths = [...RINGS_WIDTH_LEFT, ...RINGS_WIDTH_RIGHT].filter((w) => w !== "All");
  const hasAllWidths = ringWidths.length === nonAllWidths.length;
  function toggleRingWidth(item: string) {
    if (item === "All") {
      setRingWidths(hasAllWidths ? [] : [...nonAllWidths]);
      return;
    }
    setRingWidths((prev) => {
      const set = new Set(prev);
      set.has(item) ? set.delete(item) : set.add(item);
      return Array.from(set).filter((s) => s !== "All");
    });
  }

  /* Shape (single-select) */
  const [shape, setShape] = useState<string | null>(null);
  function chooseShape(s: string) {
    setShape((cur) => (cur === s ? null : s));
  }

  /* Gemstones */
  const [gemstones, setGemstones] = useState<string[]>([]);
  const allGemLabels = GEMSTONES.filter((g) => g.label !== "All").map((g) => g.label);
  const hasAllGems = gemstones.length === allGemLabels.length;
  function toggleGemstone(item: string) {
    if (item === "All") {
      setGemstones(hasAllGems ? [] : [...allGemLabels]);
      return;
    }
    setGemstones((prev) => {
      const set = new Set(prev);
      set.has(item) ? set.delete(item) : set.add(item);
      return Array.from(set).filter((s) => s !== "All");
    });
  }

  /* Metals */
  const [metals, setMetals] = useState<string[]>([]);
  const nonAllMetals = METALS.filter((m) => m.label !== "All").map((m) => m.label);
  const hasAllMetals = metals.length === nonAllMetals.length;
  function toggleMetal(item: string) {
    if (item === "All") {
      setMetals(hasAllMetals ? [] : [...nonAllMetals]);
      return;
    }
    setMetals((prev) => {
      const set = new Set(prev);
      set.has(item) ? set.delete(item) : set.add(item);
      return Array.from(set).filter((s) => s !== "All");
    });
  }

  /* Price */
  const [minPrice, setMinPrice] = useState<number>(PRICE_MIN);
  const [maxPrice, setMaxPrice] = useState<number>(PRICE_MAX);
  const showPriceBadge = useMemo(
    () => !(minPrice === PRICE_MIN && maxPrice === PRICE_MAX),
    [minPrice, maxPrice]
  );

  /* outside click + ESC close */
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!open) return;
      const el = document.getElementById(`chip-${open}`);
      if (el && el.contains(e.target as Node)) return;
      setOpen(null);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  /* helper: count badge per chip */
  const getCountForChip = (label: string) => {
    if (label === "Rings Style") return ringStyles.length;
    if (label === "Ring Size") return ringSizes.length;
    if (label === "Rings Width") return ringWidths.length;
    if (label === "Gemstones") return gemstones.length;
    if (label === "Metal") return metals.length;
    if (label === "Price") return showPriceBadge ? 1 : 0;
    return 0;
  };

  return (
    <div className="mt-3 flex flex-wrap items-center gap-1 sm:gap-1">
      {DROPDOWNS.map((label) => {
        const isOpen = open === label;
        const count = getCountForChip(label);
        return (
          <div key={label} id={`chip-${label}`} className="relative">
            <button
              type="button"
              onClick={() => setOpen((cur) => (cur === label ? null : label))}
              className={[
                "inline-flex items-center rounded-full border border-neutral-300 bg-white",
                "px-3 py-3 text-[15px] sm:text-[16px] text-[#0b1a2b] leading-none",
                "hover:border-neutral-400 focus:outline-none",
              ].join(" ")}
              aria-expanded={isOpen ? "true" : "false"}
              aria-haspopup="menu"
            >
              <span className="mr-3">{label}</span>
              <ChevronDown className={isOpen ? "rotate-180" : ""} />
              {count > 0 && (
                <span className="ml-2 rounded-full bg-neutral-900 px-2 py-0.5 text-xs font-medium text-white">
                  {count}
                </span>
              )}
            </button>

            {/* Gender (placeholder) */}
            {label === "Gender" && isOpen && (
              <Popover title="Gender" onClose={() => setOpen(null)} width={340}>
                <ul className="space-y-3">
                  <li><button className="w-full text-left text-[16px]">Women</button></li>
                  <li><button className="w-full text-left text-[16px]">Men</button></li>
                </ul>
              </Popover>
            )}

            {/* Rings Style */}
            {label === "Rings Style" && isOpen && (
              <Popover title="Rings Style" onClose={() => setOpen(null)} width={760} maxHeight={320}>
                <div className="grid grid-cols-3 gap-x-10 gap-y-4">
                  {RINGS_STYLE_OPTIONS.map((opt) => {
                    const checked = opt === "All" ? hasAllSelected : ringStyles.includes(opt);
                    return (
                      <Checkbox key={opt} label={opt} checked={checked} onToggle={() => toggleRingStyle(opt)} />
                    );
                  })}
                </div>
              </Popover>
            )}

            {/* Ring Size */}
            {label === "Ring Size" && isOpen && (
              <Popover title="Ring Size" onClose={() => setOpen(null)} width={760} maxHeight={360}>
                <div className="grid grid-cols-4 gap-x-10 gap-y-4">
                  {RING_SIZE_OPTIONS.map((size) => {
                    const checked = ringSizes.includes(size);
                    return (
                      <Checkbox key={size} label={size} checked={checked} onToggle={() => toggleRingSize(size)} />
                    );
                  })}
                </div>
              </Popover>
            )}

            {/* Rings Width */}
            {label === "Rings Width" && isOpen && (
              <Popover title="Rings Width" onClose={() => setOpen(null)} width={360}>
                <div className="grid grid-cols-2 gap-x-12">
                  <ul className="space-y-5">
                    {RINGS_WIDTH_LEFT.map((opt) => {
                      const checked = opt === "All" ? hasAllWidths : ringWidths.includes(opt);
                      return (
                        <li key={opt}>
                          <Checkbox label={opt} checked={checked} onToggle={() => toggleRingWidth(opt)} />
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="space-y-5">
                    {RINGS_WIDTH_RIGHT.map((opt) => {
                      const checked = ringWidths.includes(opt);
                      return (
                        <li key={opt}>
                          <Checkbox label={opt} checked={checked} onToggle={() => toggleRingWidth(opt)} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Popover>
            )}

            {/* Shape (now showing images) */}
            {label === "Shape" && isOpen && (
              <Popover title="Shape" onClose={() => setOpen(null)} width={340}>
                <ul className="space-y-3 pr-1">
                  {SHAPES.map((s) => (
                    <li key={s}>
                      <button
                        type="button"
                        onClick={() => chooseShape(s)}
                        className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-[15px] hover:bg-neutral-50"
                        aria-pressed={shape === s}
                      >
                        <span className="text-[#0b1a2b]">
                          <img
                            src={SHAPE_IMAGES[s]}
                            alt={`${s} outline`}
                            className="h-5 w-5 object-contain"
                          />
                        </span>
                        <span className={shape === s ? "font-medium text-[#0b1a2b]" : "text-[#0b1a2b]"}>{s}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </Popover>
            )}

            {/* Gemstones */}
            {label === "Gemstones" && isOpen && (
              <Popover title="Gemstones" onClose={() => setOpen(null)} width={250}>
                <ul className="space-y-3">
                  {GEMSTONES.map((g) => {
                    const checked = g.label === "All" ? hasAllGems : gemstones.includes(g.label);
                    return (
                      <li key={g.label}>
                        <label className="flex cursor-pointer items-center gap-3 text-[14px] text-[#0b1a2b]">
                          <span className={["grid h-5 w-5 place-items-center rounded-sm border-2", checked ? "border-neutral-900" : "border-neutral-400"].join(" ")}>
                            {checked && (
                              <svg width="14" height="14" viewBox="0 0 24 24">
                                <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                          <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleGemstone(g.label)} />
                          <span className="flex w-full items-center">
                            {g.label}
                            {g.icon && <img src={g.icon} alt={g.label} className="ml-auto h-5 w-5 object-contain" />}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </Popover>
            )}

            {/* Metal */}
            {label === "Metal" && isOpen && (
              <Popover title="Metal" onClose={() => setOpen(null)} width={240}>
                <ul className="space-y-3">
                  {METALS.map((m) => {
                    const checked = m.label === "All" ? hasAllMetals : metals.includes(m.label);
                    return (
                      <li key={m.label}>
                        <label className="flex cursor-pointer items-center gap-3 text-[14px] text-[#0b1a2b]">
                          <span className={["grid h-5 w-5 place-items-center border-2", checked ? "border-neutral-900" : "border-neutral-400"].join(" ")}>
                            {checked && (
                              <svg width="14" height="14" viewBox="0 0 24 24">
                                <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                          <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleMetal(m.label)} />
                          <span className="flex w-50 items-center">
                            {m.label}
                            {m.color && <span className="ml-auto h-5 w-5 rounded-full border" style={{ backgroundColor: m.color }} />}
                            {m.text && <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-medium">{m.text}</span>}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </Popover>
            )}

            {/* Price */}
            {label === "Price" && isOpen && (
              <Popover title="Price" onClose={() => setOpen(null)} width={320} maxHeight={180}>
                <PricePicker
                  min={PRICE_MIN}
                  max={PRICE_MAX}
                  minValue={minPrice}
                  maxValue={maxPrice}
                  onChange={(a, b) => {
                    setMinPrice(a);
                    setMaxPrice(b);
                  }}
                />
              </Popover>
            )}
          </div>
        );
      })}

      {/* checkbox pills */}
      {CHECKS.map((label) => (
        <label
          key={label}
          className="inline-flex cursor-pointer items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-[15px] sm:text-[16px] text-[#0b1a2b] leading-none hover:border-neutral-400"
        >
          <span className="mr-3 inline-flex h-[18px] w-[18px] items-center justify-center border border-neutral-300" />
          {label}
          <input type="checkbox" className="sr-only" />
        </label>
      ))}
    </div>
  );
}

/* ---------- Price picker (two inputs + dual slider) ---------- */
function PricePicker({
  min,
  max,
  minValue,
  maxValue,
  onChange,
}: {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  onChange: (minV: number, maxV: number) => void;
}) {
  const fmt = (v: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);

  const clamp = (v: number) => Math.min(max, Math.max(min, v));

  const onMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = Number((e.target.value || "0").replace(/[^\d]/g, ""));
    const next = Math.min(clamp(raw), maxValue);
    onChange(next, maxValue);
  };
  const onMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = Number((e.target.value || "0").replace(/[^\d]/g, ""));
    const next = Math.max(clamp(raw), minValue);
    onChange(minValue, next);
  };

  const trackPctLeft = ((minValue - min) / (max - min)) * 100;
  const trackPctRight = 100 - ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="w-[260px] h-[90px]">
      <div className="mb-1 grid grid-cols-2 items-end gap-6">
        <div>
          <div className="mb-1 text-[13px] text-[#0b1a2b]">Min Price</div>
          <input
            value={fmt(minValue)}
            onChange={onMinInput}
            className="w-30 rounded-md border border-neutral-300 px-3 py-2 text-[14px]"
          />
        </div>
        <div>
          <div className="mb-1 text-right text-[13px] text-[#0b1a2b]">Max Price</div>
          <input
            value={fmt(maxValue)}
            onChange={onMaxInput}
            className="w-30 rounded-md border border-neutral-300 px-3 py-2 text-[14px] outline-none"
          />
        </div>
      </div>

      {/* slider */}
      <div className="relative mt-1 h-10">
        {/* background track */}
        <div className="absolute left-0 right-0 top-4 rounded-full bg-neutral-200" style={{ height: 1 }} />
        {/* selected range */}
        <div
          className="absolute top-4 rounded-full bg-[#0b1a2b]"
          style={{ height: 1, left: `calc(${trackPctLeft}% )`, right: `calc(${trackPctRight}% )` }}
        />
        {/* left knob */}
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={(e) => onChange(Math.min(Number(e.target.value), maxValue), maxValue)}
          className="absolute top-0 h-10 appearance-none bg-transparent"
        />
        {/* right knob */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={(e) => onChange(minValue, Math.max(Number(e.target.value), minValue))}
          className="absolute top-0 h-10 w-full appearance-none bg-transparent"
        />

        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 9999px;
            background: #0b1a2b;
            border: 3px solid #0b1a2b;
            cursor: pointer;
            margin-top: -6px;
          }
          input[type="range"]::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 9999px;
            background: #0b1a2b;
            border: 3px solid #0b1a2b;
            cursor: pointer;
          }
        `}</style>
      </div>
    </div>
  );
}

/* ---------- Popover with precise sizing ---------- */
function Popover({
  title,
  onClose,
  children,
  width = 460,
  maxHeight,
  minHeight,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  width?: number;
  maxHeight?: number;
  minHeight?: number;
}) {
  return (
    <div
      role="menu"
      className="absolute left-0 top-[calc(100%+10px)] z-40 rounded-xl bg-white shadow-[0_12px_30px_rgba(0,0,0,.15)] ring-1 ring-black/5"
      style={{ width }}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <div className="text-[#0b1a2b] text-[18px] font-semibold">{title}</div>
        <button type="button" onClick={onClose} className="text-[#0b1a2b] hover:opacity-70" aria-label="Close">
          <CloseIcon />
        </button>
      </div>

      {/* apply min/max height to the body */}
      <div
        className="px-5 pb-4"
        style={{
          ...(typeof maxHeight === "number" ? { maxHeight, overflowY: "auto" } : {}),
          ...(typeof minHeight === "number" ? { minHeight } : {}),
        }}
      >
        {children}
      </div>

      <div className="h-3 rounded-b-xl bg-white" />
    </div>
  );
}

/* ---------- small helpers ---------- */
function Checkbox({ label, checked, onToggle }: { label: string; checked: boolean; onToggle: () => void }) {
  return (
    <label className="flex cursor-pointer select-none items-center gap-3 text-[14px] text-[#0b1a2b]">
      <span className={["grid h-5 w-5 place-items-center rounded-sm border-2", checked ? "border-neutral-900" : "border-neutral-400"].join(" ")}>
        {checked && (
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onToggle} />
      {label}
    </label>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 text-[#0b1a2b] transition-transform ${className}`} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 7l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 5l10 10M15 5 5 15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
