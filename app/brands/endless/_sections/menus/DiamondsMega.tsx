// app/brands/endless/_sections/menus/DiamondsMega.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  SINGLE SOURCE OF TRUTH — edit sizes here only                      */
/* ------------------------------------------------------------------ */
export type DropdownSize = {
  fullWidth?: boolean;
  height: number;
  imageCtaRow?: number;
};

const DEFAULTS: DropdownSize = { fullWidth: true, height: 360, imageCtaRow: 44 };

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
      style={{ width: fullWidth ? "100%" : "100%", height }}
    >
      <div className={className}>{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Diamonds-specific content                                          */
/* ------------------------------------------------------------------ */

function ShapeRow({ iconSrc, label, href }: { iconSrc: string; label: string; href: string }) {
  return (
    <Link
      href={href}
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
  label?: string;
  imageSrc?: string;
  imageCtaHref?: string;
  imageCtaText?: string;
  /** NEW: single destination for all shapes */
  shapesHref?: string;
};

export default function DiamondsMega({
  label = "Diamonds",
  imageSrc = "/images/brands/endless/DiamondsMega/diamond_desktop(2_2).dc991.jpg",
  imageCtaHref = "#",
  imageCtaText = "View All Diamonds",
  shapesHref = "/brands/endless/diamonds/round", // <— your single page route
}: DiamondsProps) {
  const { imageCtaRow = DEFAULTS.imageCtaRow! } = getDropdownSize(label);
  const imageHeight = 250;

  return (
    <DropdownPanel label={label} className="grid grid-cols-12 gap-6">
      {/* Left: 3 text columns */}
      <div className="col-span-12 xl:col-span-6 grid h-full grid-cols-3 gap-8 overflow-y-auto pr-2">
        {/* Col 1 */}
        <div>
          <div className="text-[17px] font-semibold mb-3">Shop Diamonds By Shape</div>
          <div className="grid grid-cols-2">
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103322.923.png" label="Round" href={shapesHref} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102010.055.png" label="Asscher" href={shapesHref} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103616.795.png" label="Princess" href={shapesHref} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102304.165.png" label="Heart" href={shapesHref} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T101436.064.png" label="Cushion" href={shapesHref} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-07-26T142833.275.png" label="Radiant" href={shapesHref} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103920.087.png" label="Oval" href={shapesHref} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T095621.391.png" label="Marquise" href={shapesHref} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T104905.610.png" label="Emerald" href={shapesHref} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102946.143.png" label="Pear" href={shapesHref} />
          </div>

          <ul className="mt-3 space-y-1">
            <li>
              <Link href="/brands/endless/diamonds/round" className="text-[14px] hover:underline underline-offset-4">
                Astor By Blue Nile<span className="align-super text-[10px]">™</span>
              </Link>
            </li>
            <li><Link href="#" className="text-[14px] hover:underline underline-offset-4">Colored Diamonds</Link></li>
            <li><Link href="/brands/endless/diamonds/round" className="text-[14px] hover:underline underline-offset-4">Lab-Grown Diamonds</Link></li>
          </ul>
        </div>

        {/* Col 2 */}
        <div>
          <div className="text-[17px] font-semibold">
            <Link href="/brands/endless/diamonds/design-your-own">Design Your Own Jewelry</Link>
          </div>
          <ul className="space-y-1 mb-4">
            {/* <li>
              <Link href="/brands/endless/design-your-own/ring" className="text-[14px] hover:underline underline-offset-4">
                Ring
              </Link>
            </li> */}
            <li>
              <Link href="/brands/endless/design-your-own/earrings" className="text-[14px] hover:underline underline-offset-4">
                Earrings
              </Link>
            </li>
            <li>
              <Link href="/brands/endless/design-your-own/pendant" className="text-[14px] hover:underline underline-offset-4">
                Pendant
              </Link>
            </li>
          </ul>

          <div className="text-[17px] font-semibold">Learn About</div>
          <ul className="space-y-1">
            {["How Shape Affects Price", "Learn About the 4Cs", "Ethically Sourced", "Diamond Sustainability"].map((l) => (
              <li key={l}>
                <Link href="#" className="text-[14px] hover:underline underline-offset-4">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <div className="text-[17px] font-semibold">Service &amp; Value</div>
          <ul className="space-y-1">
            {["Blue Nile Credit Card", "Diamond Price Match", "Diamond Upgrade Program"].map((l) => (
              <li key={l}>
                <Link href="#" className="text-[14px] hover:underline underline-offset-4">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: image panel */}
      <div className="xl:col-span-6 h-full flex ml-50">
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
