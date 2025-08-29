// app/brands/endless/_sections/menus/WeddingMega.tsx

"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { DropdownPanel, getDropdownSize } from "./DiamondsMega";



function Row({ href = "#", label, icon }: { href?: string; label: string; icon?: ReactNode }) {
  return (
    <Link href={href} className="flex items-center py-[3px] text-[14px] hover:underline underline-offset-4">
      <span className="text-[#0b1a2b]">{icon}</span>
      {label}
    </Link>
  );
}

type Props = {
  label?: string;
  imageSrc?: string;
  imageCtaHref?: string;
  imageCtaText?: string;
};

export default function WeddingMega({
  label = "Wedding Rings",
  imageSrc = "/images/brands/endless/WeddingRing/wedding_desktop(2_2).59184.jpg",
  imageCtaHref = "#",
  imageCtaText = "View All Wedding Rings",
}: Props) {
  // height (and optional imageCtaRow) are controlled in DiamondsMega.tsx via DROPDOWN_SIZES
  const { height, imageCtaRow } = getDropdownSize(label);
  const ctaRow = imageCtaRow ?? 44;
  const imageHeight = 250

  return (
    <DropdownPanel label={label} className="grid grid-cols-12 gap-6">
      {/* Left: four text columns (scroll if content overflows the fixed height) */}
      <div className="col-span-12 xl:col-span-8 grid h-full grid-cols-4 ">
        {/* Col 1 — Women's Rings */}
        <div>
          <div className="text-[17px] font-semibold">Women's Rings</div>
          <ul>
            <li><Row label="Diamonds" /></li>
            <li><Row label="Platinum" /></li>
            <li><Row label="Rose Gold" /></li>
            <li><Row label="Yellow Gold" /></li>
            <li><Row label="White Gold" /></li>
          </ul>
          <div className="mt-4"><Row label="Top 10 Rings" /></div>
        </div>

        {/* Col 2 — Men's Rings */}
        <div>
          <div className="text-[17px] font-semibold">Men's Rings</div>
          <ul>
            <li><Row label="Platinum" /></li>
            <li><Row label="Tungsten" /></li>
            <li><Row label="Titanium" /></li>
            <li><Row label="Rose Gold" /></li>
            <li><Row label="Yellow Gold" /></li>
            <li><Row label="White Gold" /></li>
          </ul>
          <div className="mt-4"><Row label="Top 10 Rings" /></div>
        </div>

        {/* Col 3 — Designers Rings */}
        <div>
          <div className="text-[17px] font-semibold">Designers Rings</div>
          <ul>
            <li><Row label="Zac Zac Posen" /></li>
            <li><Row label="Bella Vaughan" /></li>
            <li><Row label="Blue Nile Studio" /></li>
            <li><Row label="The Gallery Collection™" /></li>
          </ul>
        </div>

        {/* Col 4 — Diamond Essentials */}
        <div>
          <div className="text-[17px] font-semibold">
            Diamond Essentials <span className="text-[11px] align-super font-semibold">NEW+</span>
          </div>
          <ul>
            <li><Row label="Anniversary Rings" /></li>
            <li><Row label="Eternity Rings" /></li>
          </ul>
        </div>
      </div>

      {/* Right: image panel with CTA row */}
      <div className="col-span-12 xl:col-span-4 h-full flex flex-col">
        <div className="overflow-hidden border-neutral-200">
          <img
            src={imageSrc}
            alt="Wedding rings"
            className="w-full object-cover"
            style={{ height: imageHeight }}
            loading="lazy"
          />
          <div className="flex justify-end p-3" style={{ height: ctaRow }}>
            <Link href={imageCtaHref} className="text-[14px] font-medium hover:underline underline-offset-4">
              {imageCtaText}
            </Link>
          </div>
        </div>
      </div>
    </DropdownPanel>
  );
}
