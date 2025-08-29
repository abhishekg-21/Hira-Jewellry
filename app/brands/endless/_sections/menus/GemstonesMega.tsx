"use client";

import Link from "next/link";
import { DropdownPanel, getDropdownSize } from "./DiamondsMega";

/** tiny color dot */
function Dot({ color }: { color: string }) {
  return (
    <span
      className="inline-block align-[-2px] mr-2 rounded-full border border-neutral-300"
      style={{ width: 14, height: 14, backgroundColor: color }}
      aria-hidden="true"
    />
  );
}

type Props = {
  label?: string;
  imageSrc?: string;
  imageCtaHref?: string;
  imageCtaText?: string;
};

/**
 * Layout:
 * - Left 3 text columns (color list | design + learn | jewelry)
 * - Right image panel with CTA
 */
export default function GemstonesMega({
  label = "Gemstones",
  imageSrc = "/images/brands/endless/Gifts_&_Gemstone/gemstone_desktop(2_2).8f6e7.jpg",
  imageCtaHref = "#",
  imageCtaText = "View All Gemstones",
}: Props) {
  const { height } = getDropdownSize(label);
  const imageCtaRow = 44;
  const imageHeight = 250

  const colors = [
    { label: "Blue Sapphire", color: "#0F52BA" },
    { label: "Pink Sapphire", color: "#E86AA3" },
    { label: "Yellow Sapphire", color: "#F5C132" },
    { label: "Green Sapphire", color: "#1F8A70" },
    { label: "Red Ruby", color: "#C21807" },
    { label: "Green Emerald", color: "#0B8F6A" },
  ];

  const jewelry = ["Gemstone Rings", "Gemstone Earrings", "Gemstone Necklaces", "Gemstone Bracelets"];

  const designLinks = ["Ring", "Earrings", "Pendant"];

  const learnLinks = ["Birthstones", "Gemstone Characteristics", "Gemstone Buying Guide"];

  return (
    <DropdownPanel label={label} className="grid grid-cols-12 gap-6">
      {/* Left: 3 text columns (scroll if needed) */}
      <div className="col-span-12 xl:col-span-8 grid h-full grid-cols-3 gap-8 overflow-y-auto pr-2">
        {/* Col 1: by color */}
        <div>
          <div className="text-[17px] font-semibold">Shop Gemstone By Color</div>
          <ul className="space-y-[6px]">
            {colors.map((c) => (
              <li key={c.label}>
                <Link href="#" className="text-[14px] hover:underline underline-offset-4 flex items-center">
                  <Dot color={c.color} />
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2: design + learn */}
        <div>
          <div className="text-[17px] font-semibold">Design Your Own Jewelry</div>
          <ul className="space-y-[6px] mb-5">
            {designLinks.map((l) => (
              <li key={l}>
                <Link href="#" className="text-[14px] hover:underline underline-offset-4">
                  {l}
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-[17px] font-semibold">Learn About</div>
          <ul className="space-y-[6px]">
            {learnLinks.map((l) => (
              <li key={l}>
                <Link href="#" className="text-[14px] hover:underline underline-offset-4">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: gemstone jewelry */}
        <div>
          <div className="text-[17px] font-semibold">Gemstone Jewelry</div>
          <ul className="space-y-[6px]">
            {jewelry.map((l) => (
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
      <div className="col-span-12 xl:col-span-4 h-full flex flex-col">
        <div className="overflow-hidden">
          <img
            src={imageSrc}
            alt="Gemstone jewelry"
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
