// app/components/BrandStrip.tsx
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
const STRIP_HEIGHT = "h-9.5";
const TILE_HEIGHT  = "h-12";

export default function BrandStrip() {
  return (
    <div className="w-full bg-white border-b border-neutral-200">
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
  );
}
