"use client";

import Link from "next/link";
import { DropdownPanel, getDropdownSize } from "./DiamondsMega";

/** Small colored dot for birthstone list */
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

/** Matches the screenshot layout: Birthstones | Top Gift Ideas | Gifts by Occasion + right image */
export default function GiftsMega({
  label = "Gifts",
  imageSrc = "/images/brands/endless/Gifts_&_Gemstone/gemstone_desktop(2_2).8f6e7.jpg",
  imageCtaHref = "#",
  imageCtaText = "View All Gifts",
}: Props) {
  const { height } = getDropdownSize(label);
  const imageCtaRow = 44;
  const imageHeight = 250

  const birthstones: Array<{ month: string; gem: string; color: string }> = [
    { month: "JAN", gem: "Garnet", color: "#8A1538" },
    { month: "FEB", gem: "Amethyst", color: "#9966CC" },
    { month: "MAR", gem: "Aquamarine", color: "#7FDBFF" },
    { month: "APR", gem: "Diamond", color: "#E6E6E6" },
    { month: "MAY", gem: "Emerald", color: "#008F5D" },
    { month: "JUN", gem: "Pearl", color: "#F3F2F0" },
    { month: "JUL", gem: "Ruby", color: "#C21807" },
    { month: "AUG", gem: "Peridot", color: "#B4D330" },
    { month: "SEP", gem: "Sapphire", color: "#0F52BA" },
    { month: "OCT", gem: "Opal", color: "#F9EDE7" },
    { month: "NOV", gem: "Citrine", color: "#E8B923" },
    { month: "DEC", gem: "Topaz", color: "#34B3E4" },
  ];

  const topGiftIdeas = [
    "Earrings",
    "Necklaces",
    "Bracelets",
    "Diamond Jewelry",
    "Gemstone Jewelry",
    "Pearl Jewelry",
    "Gifts For Her",
    "Gifts Under $500",
  ];

  const byOccasion = [
    "Anniversary",
    "Graduation",
    "Wedding Party Gifts",
    "Bridal Jewelry",
  ];

  return (
    <DropdownPanel label={label} className="grid grid-cols-12 gap-6">
      {/* Left 3 columns */}
      <div className="col-span-12 xl:col-span-8 grid h-full grid-cols-3 gap-8 overflow-y-auto pr-2">
        {/* Birthstones */}
        <div>
          <div className="text-[17px] font-semibold">Birthstone Jewelry</div>
          <ul className="space-y-[6px]">
            {birthstones.map((b) => (
              <li key={b.month}>
                <Link
                  href="#"
                  className="text-[14px] hover:underline underline-offset-4 flex items-center"
                >
                  <Dot color={b.color} />
                  <span className="w-10 text-neutral-600">{b.month}</span>
                  <span className="ml-2">{b.gem}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Gift Ideas */}
        <div>
          <div className="text-[17px] font-semibold">Top Gift Ideas</div>
          <ul className="space-y-[6px]">
            {topGiftIdeas.map((t) => (
              <li key={t}>
                <Link href="#" className="text-[14px] hover:underline underline-offset-4">
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Gifts by Occasion */}
        <div>
          <div className="text-[17px] font-semibold">Gifts By Occasion</div>
          <ul className="space-y-[6px]">
            {byOccasion.map((o) => (
              <li key={o}>
                <Link href="#" className="text-[14px] hover:underline underline-offset-4">
                  {o}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right image panel */}
      <div className="col-span-12 xl:col-span-4 h-full flex flex-col">
        <div className="overflow-hidden">
          <img
            src={imageSrc}
            alt="Gift jewelry assortment"
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
