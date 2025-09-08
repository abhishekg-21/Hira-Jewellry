import Image from "next/image";
import Link from "next/link";

type Brand = {
  src: string;
  alt: string;
  href?: string;
  bg?: string;
};

const BRANDS: Brand[] = [
  { src: "/images/Brandstrip/White_Hira.png", alt: "HIRA (Gold)", href: "/" },
  { src: "/images/Brandstrip/Black_Hira.png", alt: "HIRA (Black)" },
  { src: "/images/Brandstrip/Endless.png", alt: "ENDLESS", href: "/brands/endless" },
  { src: "/images/Brandstrip/Rasam.png", alt: "RASAM" },
  { src: "/images/Brandstrip/Iceland.png", alt: "ICELAND" },
];

const ICON_SRC = "/images/Brandstrip/Diamond.png";

const STRIP_HEIGHT = "h-9.5";
const TILE_HEIGHT = "h-10 sm:h-12";
const STRIP_HEIGHT_PX = 40;

export default function BrandStrip() {
  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[60] bg-white border-neutral-200 pb-1"
        style={{ ["--brand-strip-h" as any]: `${STRIP_HEIGHT_PX}px` }}
      >
        <div
          className={`max-w-[1440px] mx-auto ${STRIP_HEIGHT} flex items-center gap-2 sm:gap-4 px-2 sm:px-4 md:px-8`}
        >
          {/* Icon */}
          <Image
            src={ICON_SRC}
            alt="Diamond"
            width={70}
            height={70}
            className="object-contain w-8 h-8 sm:w-[70px] sm:h-[70px]"
            priority
          />

          {/* Title */}
          <span className="text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap flex-shrink-0">
            Our Brands
          </span>

          {/* Brand Tiles */}
          <div className="flex-1 overflow-x-auto">
            <div className="flex items-center gap-2 sm:gap-3">
              {BRANDS.map((b, i) => {
                const tile = (
                  <div
                    className={`rounded-sm flex items-center justify-center shrink-0 ${TILE_HEIGHT} ${
                      b.bg ?? "bg-white"
                    }`}
                  >
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
    </>
  );
}
