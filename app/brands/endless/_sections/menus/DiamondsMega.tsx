// app/brands/endless/_sections/menus/DiamondsMega.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  SINGLE SOURCE OF TRUTH — edit sizes here only                      */
/* ------------------------------------------------------------------ */
export type DropdownSize = {
  /** Full screen width; leave true to span from left edge to right edge. */
  fullWidth?: boolean;
  /** Total panel height (px). */
  height: number;
  /** Diamonds-only: height of the CTA row under the image (px). */
  imageCtaRow?: number;
};

/** Global defaults (used when a menu isn't listed below). */
const DEFAULTS: DropdownSize = { fullWidth: true, height: 360, imageCtaRow: 44 };

/** Per-menu overrides (optional). Change numbers here to resize. */
export const DROPDOWN_SIZES: Record<string, DropdownSize> = {
  Diamonds:           { fullWidth: true, height: 360, imageCtaRow: 44 },
  "Engagement Rings": { fullWidth: true, height: 460 },
  "Wedding Rings":    { fullWidth: true, height: 340 },
  Jewelry:            { fullWidth: true, height: 510 },
  Gifts:              { fullWidth: true, height: 380 },
  Gemstones:          { fullWidth: true, height: 340 },
  Education:          { fullWidth: true, height: 390 },
};

export function getDropdownSize(label?: string): DropdownSize {
  return { ...DEFAULTS, ...(label ? DROPDOWN_SIZES[label] : {}) };
}

/* ------------------------------------------------------------------ */
/*  A reusable, FULL-WIDTH panel wrapper used by all menus             */
/* ------------------------------------------------------------------ */
export function DropdownPanel({
  label,
  children,
  className = "",
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  const { fullWidth, height } = getDropdownSize(label);

  return (
    <div
      className="bg-white p-6"
      /* full screen width (within the sticky header) */
      style={{ width: fullWidth ? "100%" : "100%", height }}
    >
      <div className={className}>{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Diamonds-specific content (uses same full-width wrapper)           */
/* ------------------------------------------------------------------ */

/* tiny icons */
function IconRound()    { return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>; }
function IconPrincess() { return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>; }
function IconCushion()  { return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>; }
function IconOval()     { return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="12" rx="7" ry="5.5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>; }
function IconEmerald()  { return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6h6l3 3v6l-3 3H9l-3-3V9l3-3Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="9" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="1.2"/></svg>; }
function IconPear()     { return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6c2 2 3.5 3.7 3.5 6.2A3.5 3.5 0 0 1 12 16a3.5 3.5 0 0 1-3.5-3.8C8.5 9.7 10 8 12 6Z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>; }
function IconAsscher()  { return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5h6l4 4v6l-4 4H9l-4-4V9l4-4Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M10.5 7.5h3L16.5 10.5v3L13.5 16.5h-3L7.5 13.5v-3L10.5 7.5Z" fill="none" stroke="currentColor" strokeWidth="1.2"/></svg>; }
function IconHeart()    { return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19s-7-4.4-7-8.5a4.2 4.2 0 0 1 7-2.9 4.2 4.2 0 0 1 7 2.9C19 14.6 12 19 12 19Z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>; }
function IconRadiant()  { return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5h6l3 3v8l-3 3H9l-3-3V8l3-3Z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>; }
function IconMarquise() { return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5c4 2.3 6.5 4.9 6.5 7S16 16.7 12 19c-4-2.3-6.5-4.9-6.5-7S8 7.3 12 5Z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>; }

function ShapeRow({ iconSrc, label }: { iconSrc: string; label: string }) {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 py-[2px] text-[14px] hover:underline underline-offset-4"
    >
      <img
        src={iconSrc}
        alt={label}
        className="w-[20px] h-[20px] object-contain shrink-0"
        loading="lazy"
      />
      {label}
    </Link>
  );
}

type DiamondsProps = {
  label?: string; // defaults to "Diamonds"
  imageSrc?: string;
  imageCtaHref?: string;
  imageCtaText?: string;
};

export default function DiamondsMega({
  label = "Diamonds",
  imageSrc = "/images/brands/endless/DiamondsMega/diamond_desktop(2_2).dc991.jpg",
  imageCtaHref = "#",
  imageCtaText = "View All Diamonds",
}: DiamondsProps) {
  const { height, imageCtaRow = DEFAULTS.imageCtaRow! } = getDropdownSize(label);
  const imageHeight = 250

  return (
    <DropdownPanel label={label} className="grid grid-cols-12 gap-6">
      {/* Left: 3 text columns (scroll if content is taller) */}
      <div className="col-span-12 xl:col-span-6 grid h-full grid-cols-3 gap-8 overflow-y-auto pr-2">
        {/* Col 1 */}
        <div>
          <div className="text-[17px] font-semibold mb-3">Shop Diamonds By Shape</div>
          <div className="grid grid-cols-2">
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103322.923.png" label="Round" />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102010.055.png" label="Asscher" />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103616.795.png" label="Princess" />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102304.165.png" label="Heart" />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T101436.064.png" label="Cushion" />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-07-26T142833.275.png" label="Radiant" />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103920.087.png" label="Oval" />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T095621.391.png" label="Marquise" />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T104905.610.png" label="Emerald" />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102946.143.png" label="Pear" />
          </div>

          <ul className="mt-3 space-y-1">
            <li>
              <Link href="#" className="text-[14px] hover:underline underline-offset-4">
                Astor By Blue Nile<span className="align-super text-[10px]">™</span>
              </Link>
            </li>
            <li><Link href="#" className="text-[14px] hover:underline underline-offset-4">Colored Diamonds</Link></li>
            <li><Link href="#" className="text-[14px] hover:underline underline-offset-4">Lab-Grown Diamonds</Link></li>
          </ul>
        </div>

        {/* Col 2 */}
        <div>
          <div className="text-[17px] font-semibold ">Design Your Own Jewelry</div>
          <ul className="space-y-1 mb-4">
            {["Ring", "Earrings", "Pendant"].map((l) => (
              <li key={l}><Link href="#" className="text-[14px] hover:underline underline-offset-4">{l}</Link></li>
            ))}
          </ul>

          <div className="text-[17px] font-semibold ">Learn About</div>
          <ul className="space-y-1">
            {["How Shape Affects Price", "Learn About the 4Cs", "Ethically Sourced", "Diamond Sustainability"].map((l) => (
              <li key={l}><Link href="#" className="text-[14px] hover:underline underline-offset-4">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <div className="text-[17px] font-semibold ">Service &amp; Value</div>
          <ul className="space-y-1">
            {["Blue Nile Credit Card", "Diamond Price Match", "Diamond Upgrade Program"].map((l) => (
              <li key={l}><Link href="#" className="text-[14px] hover:underline underline-offset-4">{l}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: image panel */}
      <div className=" xl:col-span-6 h-full flex ml-50 ">
        <div className="overflow-hidden border-neutral-200">
          <img
            src={imageSrc}
            alt="Assorted diamonds"
            className="w-full object-cover"
            style={{ height: imageHeight }}
            loading="lazy"
          />
          <div className="flex justify-end p-3" style={{ height: imageCtaRow }}>
            <Link href={imageCtaHref} className="text-[14px] font-medium hover:underline underline-offset-4">
              {imageCtaText}
            </Link>
          </div>
        </div>
      </div>
    </DropdownPanel>
  );
}
