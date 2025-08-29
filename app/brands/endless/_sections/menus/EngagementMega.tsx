// app/brands/endless/_sections/menus/EngagementMega.tsx
"use client";

import Link from "next/link";
import { DropdownPanel, getDropdownSize } from "./DiamondsMega";

/* ---------- Link map (label -> href) ---------- */
export type EngagementLinks = Record<string, string>;

export const DEFAULT_ENGAGEMENT_LINKS: EngagementLinks = {
  // Builder
  "Start With A Natural Diamond": "/diamonds/natural",
  "Start With A Lab Grown Diamond": "/diamonds/lab-grown",
  "Start With A Setting": "/engagement-rings/settings",
  "Ready To Ship Rings": "/engagement-rings/ready-to-ship",

  // Shapes
  Round: "/diamonds/round",
  Princess: "/diamonds/princess",
  Cushion: "/diamonds/cushion",
  Oval: "/diamonds/oval",
  Emerald: "/diamonds/emerald",
  Asscher: "/diamonds/asscher",
  Heart: "/diamonds/heart",
  Radiant: "/diamonds/radiant",
  Marquise: "/diamonds/marquise",
  Pear: "/diamonds/pear",

  // Customize / Studio
  "CREATIVE STUDIO": "/studio",

  // Styles
  Solitaire: "/engagement-rings/solitaire",
  Halo: "/engagement-rings/halo",
  Vintage: "/engagement-rings/vintage",
  Sidestone: "/engagement-rings/side-stone",
  "Three-Stone": "/engagement-rings/three-stone",
  Designer: "/engagement-rings/designer",
  "Rose Gold": "/engagement-rings/rose-gold",
  Unique: "/engagement-rings/unique",
  Gemstone: "/engagement-rings/gemstone",
  "Men's Engagement": "/engagement-rings/mens",

  // Designers
  "Zac Zac Posen": "/designers/zac-zac-posen",
  "Bella Vaughan": "/designers/bella-vaughan",
  "Blue Nile Studio": "/designers/blue-nile-studio",
  "The Gallery Collection™": "/designers/gallery-collection",

  // Utils
  "Find Your Ring Size": "/education/ring-size",
  "Top Engagement Rings": "/engagement-rings/top",
};

/* Prefix helper: safely add a base (e.g. "/brands/endless") to internal links */
function prefixHref(href: string | undefined, base = ""): string {
  if (!href) return "#";
  if (!base) return href;
  if (href.startsWith("http") || href.startsWith("#")) return href; // external/anchor
  if (href.startsWith(base)) return href; // already prefixed
  if (href.startsWith("/")) return `${base}${href}`;
  return `${base}/${href}`;
}

function Row({
  href = "#",
  label,
  iconSrc,
}: {
  href?: string;
  label: string;
  iconSrc?: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center text-[14px] py-[2px] hover:underline underline-offset-4"
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt={label}
          className="w-[50px] h-[45px] object-contain"
        />
      )}
      {label}
    </Link>
  );
}

function ShapeRow({
  iconSrc,
  label,
  href,
}: {
  iconSrc: string;
  label: string;
  href: string;
}) {
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

type Props = {
  label?: string;
  imageSrc?: string;
  imageCtaHref?: string;
  imageCtaText?: string;
  /** Optional: override specific links by label */
  links?: EngagementLinks;
  /** Optional: base prefix for all internal links, e.g. "/brands/endless" */
  brandBase?: string;
};

export default function EngagementMega({
  label = "Engagement Rings",
  imageSrc = "/images/brands/endless/EngagementRing/engagement_desktop(2_2).a0702.jpg",
  imageCtaHref = "#",
  imageCtaText = "View All Engagement Styles",
  links,
  brandBase = "", // <<< set to "/brands/endless" if your pages live there
}: Props) {
  const { imageCtaRow } = getDropdownSize(label);
  const imgRow = imageCtaRow ?? 44;

  // Merge defaults with any per-page overrides
  const mergedLinks: EngagementLinks = { ...DEFAULT_ENGAGEMENT_LINKS, ...(links || {}) };

  // Helper: get href for any label, with base prefix
  const linkFor = (key: string) => prefixHref(mergedLinks[key], brandBase);

  return (
    <DropdownPanel label={label} className="grid grid-cols-12 gap-2">
      {/* text columns */}
      <div className="col-span-12 xl:col-span-8 grid h-full grid-cols-3 gap-4 overflow-y-auto pr-2">
        {/* Col 1: builder + shapes */}
        <div>
          <div className="text-[17px] font-semibold">Design Your Own Jewelry</div>
          <ul className="mb-1">
            <li><Row label="Start With A Natural Diamond" href={linkFor("Start With A Natural Diamond")} /></li>
            <li><Row label="Start With A Lab Grown Diamond" href={linkFor("Start With A Lab Grown Diamond")} /></li>
            <li><Row label="Start With A Setting" href={linkFor("Start With A Setting")} /></li>
            <li><Row label="Ready To Ship Rings" href={linkFor("Ready To Ship Rings")} /></li>
          </ul>

          <div className="text-[17px] font-semibold">Shop Diamonds By Shape</div>
          <div className="grid grid-cols-2">
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103322.923.png" label="Round" href={linkFor("Round")} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102010.055.png" label="Asscher" href={linkFor("Asscher")} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103616.795.png" label="Princess" href={linkFor("Princess")} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102304.165.png" label="Heart" href={linkFor("Heart")} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T101436.064.png" label="Cushion" href={linkFor("Cushion")} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-07-26T142833.275.png" label="Radiant" href={linkFor("Radiant")} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T103920.087.png" label="Oval" href={linkFor("Oval")} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T095621.391.png" label="Marquise" href={linkFor("Marquise")} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T104905.610.png" label="Emerald" href={linkFor("Emerald")} />
            <ShapeRow iconSrc="/images/brands/endless/DiamondsMega/Untitled design - 2025-08-29T102946.143.png" label="Pear" href={linkFor("Pear")} />
          </div>
        </div>

        {/* Col 2: studio + styles */}
        <div>
          <div className="text-[17px] font-semibold">Customize Your Engagement Ring</div>
          <Row label="CREATIVE STUDIO" href={linkFor("CREATIVE STUDIO")} />

          <div className="text-[17px] font-semibold mt-3">Engagement Rings Styles</div>
          <ul>
            <li><Row label="Solitaire" href={linkFor("Solitaire")} /></li>
            <li><Row label="Halo" href={linkFor("Halo")} /></li>
            <li><Row label="Vintage" href={linkFor("Vintage")} /></li>
            <li><Row label="Sidestone" href={linkFor("Sidestone")} /></li>
            <li><Row label="Three-Stone" href={linkFor("Three-Stone")} /></li>
            <li><Row label="Designer" href={linkFor("Designer")} /></li>
            <li><Row label="Rose Gold" href={linkFor("Rose Gold")} /></li>
            <li><Row label="Unique" href={linkFor("Unique")} /></li>
            <li><Row label="Gemstone" href={linkFor("Gemstone")} /></li>
            <li><Row label="Men's Engagement" href={linkFor("Men's Engagement")} /></li>
          </ul>
        </div>

        {/* Col 3: designers + links */}
        <div>
          <div className="text-[17px] font-semibold">Designers Rings</div>
          <ul>
            <li><Row label="Zac Zac Posen" href={linkFor("Zac Zac Posen")} /></li>
            <li><Row label="Bella Vaughan" href={linkFor("Bella Vaughan")} /></li>
            <li><Row label="Blue Nile Studio" href={linkFor("Blue Nile Studio")} /></li>
            <li><Row label="The Gallery Collection™" href={linkFor("The Gallery Collection™")} /></li>
          </ul>

          <ul>
            <li><Row label="Find Your Ring Size" href={linkFor("Find Your Ring Size")} /></li>
            <li><Row label="Top Engagement Rings" href={linkFor("Top Engagement Rings")} /></li>
          </ul>
        </div>
      </div>

      {/* image panel */}
      <div className="col-span-12 xl:col-span-4 h-full flex flex-col">
        <div className="overflow-hidden border-neutral-200">
          <img
            src={imageSrc}
            alt="Engagement ring"
            className="w-[650px] h-[250px] object-cover"
            loading="lazy"
          />
          <div className="flex justify-end p-3" style={{ height: imgRow }}>
            <Link
              href={prefixHref(imageCtaHref, brandBase)}
              className="text-[14px] font-medium hover:underline underline-offset-4"
            >
              {imageCtaText}
            </Link>
          </div>
        </div>
      </div>
    </DropdownPanel>
  );
}
