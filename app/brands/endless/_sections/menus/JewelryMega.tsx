// app/brands/endless/_sections/menus/JewelryMega.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { DropdownPanel, getDropdownSize } from "./DiamondsMega";

function Row({ href = "#", label, icon }: { href?: string; label: string; icon?: ReactNode }) {
  return (
    <Link href={href} className="flex items-center py-[3px] text-[14px] hover:underline underline-offset-4">
      <span className="text-[#0b1a2b]"></span>
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

export default function JewelryMega({
  label = "Jewelry",
  imageSrc = "/images/brands/endless/Jewelry/jewel_desktop(2_2).b9138.jpg",
  imageCtaHref = "#",
  imageCtaText = "View All Jewelry",
}: Props) {
  const { height, imageCtaRow } = getDropdownSize(label);
  const imgRow = imageCtaRow ?? 44;

  return (
    <DropdownPanel label={label} className="grid grid-cols-12 gap-y-6 gap-x-3">
      {/* Left: five text columns (scrollable if needed) */}
      <div className="col-span-12 xl:col-span-8 grid h-full grid-cols-5 gap-y-0 gap-x-3 overflow-y-auto">
        {/* Col 1 */}
        <div>
          <div className="text-[17px] font-semibold">Diamond Essentials <span className="text-[10px] align-super">NEW</span></div>
          <ul>
            {[
              "Diamond Eternity Rings",
              "Diamond Anniversary Rings",
              "Diamond Stud Earrings",
              "Diamond Tennis Bracelets",
              "Diamond Pendant Necklaces",
              "Diamond Hoop Earrings",
              "Diamond Tennis Necklaces",
            ].map((l) => (
              <li key={l}><Row label={l} /></li>
            ))}
          </ul>

          <div className="text-[17px] font-semibold mt-3">Earrings</div>
          <ul>
            {[
              "Design Your Own Earrings",
              "Diamond Earrings",
              "Gemstone Earrings",
              "Pearl Earrings",
              "Gold Earrings",
            ].map((l) => (
              <li key={l}><Row label={l} /></li>
            ))}
          </ul>
        </div>

        {/* Col 2 */}
        <div>
          <div className="text-[17px] font-semibold">Bracelets</div>
          <ul>
            {[
              "Diamond Bracelets",
              "Gemstone Bracelets",
              "Pearl Bracelets",
              "Gold Bracelets",
              "Silver Bracelets",
              "Bangle Bracelets",
            ].map((l) => (
              <li key={l}><Row label={l} /></li>
            ))}
          </ul>

          <div className="text-[17px] font-semibold mt-3">Necklaces</div>
          <ul>
            {[
              "Design Your Own Pendant",
              "Diamond Necklaces",
              "Gemstone Necklaces",
              "Pearl Necklaces",
              "Gold Necklaces",
              "Silver Necklaces",
              "Cross Necklaces",
              "Cuban Chains",
            ].map((l) => (
              <li key={l}><Row label={l} /></li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <div className="text-[17px] font-semibold">Rings</div>
          <ul>
            {[
              "Diamond Rings",
              "Gemstone Rings",
              "Wedding Rings",
              "Engagement Rings",
              "Gold Rings",
              "Fashion Rings",
              "Promise Rings",
            ].map((l) => (
              <li key={l}><Row label={l} /></li>
            ))}
          </ul>

          <div className="text-[17px] font-semibold mt-3">Jewelry</div>
          <ul>
            {[
              "Lab Grown Diamond Jewelry",
              "Men's Jewelry",
              "Birthstone Jewelry",
              "Pearl Jewelry",
              "Rose Gold Jewelry",
              "New Arrivals",
              "Clear The Vault",
              "Under $100",
            ].map((l) => (
              <li key={l}><Row label={l} /></li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <div className="text-[17px] font-semibold">Collections</div>
          <ul>
            {[
              "Eclipse Collection",
              "Iconic Collection",
              "Nightfall Collection",
              "Initial Collection",
              "Illusion Collection",
              "Extraordinary Collection",
              "Astor By Blue Nile™",
            ].map((l) => (
              <li key={l}><Row label={l} /></li>
            ))}
          </ul>
        </div>

        {/* Col 5 */}
        <div>
          <div className="text-[17px] font-semibold">Designer Jewelry</div>
          <ul>
            {[
              "The Gallery Collection™",
              "Blue Nile Studio",
              "Bella Vaughan",
              "Zac Zac Posen",
              "Monica Rich Kosann",
            ].map((l) => (
              <li key={l}><Row label={l} /></li>
            ))}
          </ul>

          <ul className="mt-2">
            <li><Row label="GIA Jewelry Report" /></li>
          </ul>
        </div>
      </div>

      {/* Right: image panel */}
      <div className="col-span-12 xl:col-span-4 h-full flex flex-col ml-30">
        <div className="overflow-hidden">
          <img
            src={imageSrc}
            alt="Jewelry assortment"
            className="w-100 h-50 object-cover"
            loading="lazy"
          />
          <div className="flex justify-end p-3" style={{ height: imgRow }}>
            <Link href={imageCtaHref} className="text-[14px] font-medium hover:underline underline-offset-4">
              {imageCtaText}
            </Link>
          </div>
        </div>
      </div>
    </DropdownPanel>
  );
}
