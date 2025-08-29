// app/diamonds/round/_components/ProductGrid.tsx
"use client";

import ProductCard from "./ProductCard";

export type UIProduct = {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  img: string;
  badge?: string;
};

/** Image files for the two view icons you want to replace */
const VIEW_GRID_IMG = "/images/brands/endless/diamonds/round/square_icon.png";
const VIEW_TWIN_IMG = "/images/brands/endless/diamonds/round/diamond_4.png";

export default function ProductGrid({ products }: { products: UIProduct[] }) {
  return (
    /* FULL-BLEED WRAPPER (edge-to-edge section) */
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      {/* comfy side padding */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* ───────── Toolbar (matches screenshot) ───────── */}
        <div className="mb-6 flex items-start justify-between">
          {/* Left cluster */}
          <div className="min-w-0">
            <div className="flex items-center gap-6">
              {/* Fast Shipping checkbox */}
              <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                <span
                  className="inline-block h-[18px] w-[18px] rounded-[2px] border border-[#0b1a2b]"
                  aria-hidden
                />
                <span className="text-[#0b1a2b]">Fast Shipping</span>
              </label>

              {/* Reset Filters pill */}
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-[#0b1a2b]"
              >
                <RefreshIcon className="h-4 w-4" />
                <span className="font-medium">Reset Filters</span>
              </button>
            </div>

            {/* results count */}
            <div className="mt-6 text-[14px] text-neutral-500">
              {products.length.toLocaleString()} of 151,590 Results
            </div>
          </div>

          {/* Right cluster */}
          <div className="flex flex-col items-end gap-4">
            {/* Advanced Filters pill */}
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#0b1a2b] px-5 py-2 text-[#0b1a2b]"
            >
              <span className="font-semibold">Advanced Filters</span>
              <PlusIcon className="h-4 w-4" />
            </button>

            {/* Shipping Date + Sort + view toggles */}
            <div className="flex items-end gap-10">
              <LabeledUnderlineSelect label="Shipping Date By:" value="Any Date" />
              <LabeledUnderlineSelect label="Sort By:" value="Best Match" />

              {/* view toggles — ONLY these two replaced with images */}
              <div className="flex items-center gap-4 text-[#0b1a2b]">
                <img
                  src={VIEW_GRID_IMG}
                  alt="Grid view"
                  className="h-6 w-6"
                  loading="lazy"
                />
                <img
                  src={VIEW_TWIN_IMG}
                  alt="Two-column view"
                  className="h-6 w-6"
                  loading="lazy"
                />
                <ListIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* ───────── Grid ───────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── UI bits to match screenshot ───────── */

function LabeledUnderlineSelect({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-[180px]">
      <div className="mb-1 text-[13px] text-neutral-500">{label}</div>
      <button
        type="button"
        className="group inline-flex items-center gap-2 border-b-2 border-neutral-200 pb-1 text-[#0b1a2b]"
      >
        <span className="font-semibold">{value}</span>
        <CaretDown className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

/* Icons (keep the rest as SVGs) */

function RefreshIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0b1a2b" strokeWidth="1.8">
      <path d="M4 12a8 8 0 0 1 13.657-5.657L20 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4v4h-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12a8 8 0 0 1-13.657 5.657L4 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 20H4v-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0b1a2b" strokeWidth="1.8">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}
function CaretDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="#0b1a2b" strokeWidth="1.6">
      <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ListIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0b1a2b" strokeWidth="1.6">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}
