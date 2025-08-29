// app/brands/endless/_sections/menus/EducationMega.tsx
"use client";

import Link from "next/link";
import { DropdownPanel, getDropdownSize } from "./DiamondsMega";

/* One, consistent link row (no bullets/icons) */
function Row({ href = "#", label }: { href?: string; label: string }) {
  return (
    <Link
      href={href}
      className="block py-[3px] text-[14px] leading-[20px] text-[#0b1a2b] hover:underline underline-offset-4"
    >
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

export default function EducationMega({
  label = "Education",
  imageSrc = "/images/brands/endless/Education/education_desktop(2_2).beb3a.jpg",
  imageCtaHref = "#",
  imageCtaText = "View All Education",
}: Props) {
  const { height, imageCtaRow } = getDropdownSize(label);
  const imgRow = imageCtaRow ?? 44;
  const imgHeight = Math.max(0, height - imgRow);

  return (
    <DropdownPanel label={label} className="grid grid-cols-12 gap-y-6 gap-x-4">
      {/* Left: three text columns */}
      <div className="col-span-12 xl:col-span-8 grid h-full grid-cols-1 sm:grid-cols-3 gap-x-6">
        {/* Col 1 */}
        <div>
          <div className="text-[17px] font-semibold text-[#0b1a2b] mb-1">
            Learn about Diamonds
          </div>
          <nav aria-label="Learn about Diamonds">
            <Row label="Learn About The 4Cs" />
            <Row label="Cut" />
            <Row label="Color" />
            <Row label="Clarity" />
            <Row label="Carat" />
            <Row label="Astor By Blue Nile™" />
            <Row label="Diamond Sustainability" />
            <Row label="Conflict- Free Diamonds" />
            <Row label="Diamond Upgrade Program" />
            <Row label="Shape Price Comparison" />
            <Row label="Lab Grown Diamonds" />
          </nav>
        </div>

        {/* Col 2 */}
        <div>
          <div className="text-[17px] font-semibold text-[#0b1a2b] mb-1">
            Learn About Jewelry
          </div>
          <nav aria-label="Learn About Jewelry">
            <Row label="Metal Education" />
            <Row label="Engagement Ring Guide" />
            <Row label="Wedding Ring Guide" />
            <div className="py-5"><Row label="Gemstone Guide" />
            <Row label="Birthstone Guide" /></div>
            <Row label="Find Your Ring Size" />
          </nav>
        </div>

        {/* Col 3 */}
        <div>
          <div className="text-[17px] font-semibold text-[#0b1a2b] mb-1">
            Service &amp; Value
          </div>
          <nav aria-label="Service & Value">
            <Row label="Free Returns" />
            <Row label="Blue Nile Credit Card" />
            <Row label="Jewelry Insurance" />
          </nav>

          <div className="mt-2">
            <Row label="Blue Nile Blog" />
          </div>
        </div>
      </div>

      {/* Right: image panel */}
      <div className="col-span-12 xl:col-span-4 h-full flex flex-col">
        <div className="overflow-hidden bg-white">
          <img
            src={imageSrc}
            alt="Education — diamonds and rings"
            className="w-full h-70 object-cover"
          />
          <div
            className="flex items-center justify-end px-3"
            style={{ height: imgRow }}
          >
            <Link
              href={imageCtaHref}
              className="text-[14px] font-medium text-[#0b1a2b] hover:underline underline-offset-4"
            >
              {imageCtaText}
            </Link>
          </div>
        </div>
      </div>
    </DropdownPanel>
  );
}
