import Image from "next/image";
import Link from "next/link";

type Brand = {
  src: string;
  alt: string;
  href?: string; // when present, the tile is clickable
  bg?: string;
};

const BRANDS: Brand[] = [
  { src: "/images/Brandstrip/White_Hira.png", alt: "HIRA (Gold)", href: "/" }, // ← go to Home
  { src: "/images/Brandstrip/Black_Hira.png", alt: "HIRA (Black)" },
  { src: "/images/Brandstrip/Endless.png",     alt: "ENDLESS", href: "/brands/endless" },
  { src: "/images/Brandstrip/Rasam.png",       alt: "RASAM" },
  { src: "/images/Brandstrip/Iceland.png",     alt: "ICELAND" },
];

const ICON_SRC = "/images/Brandstrip/Diamond.png";

/** 
 * Tailwind class you’re using for the strip height. 
 * Keep it as-is to avoid changing your visuals.
 */
const STRIP_HEIGHT = "h-9.5";
const TILE_HEIGHT  = "h-12";

/**
 * Expose the brand strip height as a CSS variable so the fixed header
 * can offset using `var(--brand-strip-h)`. Adjust this if your real
 * strip height differs.
 *
 * h-9 ≈ 36px, h-10 ≈ 40px. Using 40px is a safe default.
 */
const STRIP_HEIGHT_PX = 40;

export default function BrandStrip() {
  return (
    <>
      {/* Fixed to the top, spans full width, sits above the header */}
      <div
        className="fixed inset-x-0 top-0 z-[60] bg-white border-neutral-200 pb-1"
        style={{ ["--brand-strip-h" as any]: `${STRIP_HEIGHT_PX}px` }}
      >
        <div className={`max-w-[1440px] mx-auto ${STRIP_HEIGHT} flex items-center gap-4 px-4 sm:px-8`}>
          <Image src={ICON_SRC} alt="Diamond" width={90} height={90} className="object-contain" priority />

          <span className="text-sm sm:text-base font-semibold whitespace-nowrap pl-[700px]">
            Our Brands
          </span>

          <div className="flex-1 overflow-x-auto">
            <div className="flex items-center">
              {BRANDS.map((b, i) => {
                const tile = (
                  <div className={`rounded-sm flex items-center justify-center shrink-0 ${TILE_HEIGHT} ${b.bg ?? "bg-white"}`}>
                    <Image
                      src={b.src}
                      alt={b.alt}
                      width={200}
                      height={100}
                      className="h-full w-auto object-contain"
                      priority={i === 0}
                    />
                  </div>
                );
                return b.href ? (
                  <Link key={`${b.alt}-${i}`} href={b.href} className="block">
                    {tile}
                  </Link>
                ) : (
                  <div key={`${b.alt}-${i}`}>{tile}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/*
        Spacer is optional. If your page content (or fixed header) already
        accounts for the brand strip using var(--brand-strip-h), you can
        safely remove this spacer. Otherwise, keep it to prevent overlap.
      */}
      {/* <div aria-hidden style={{ height: `var(--brand-strip-h, ${STRIP_HEIGHT_PX}px)` }} /> */}
    </>
  );
}
