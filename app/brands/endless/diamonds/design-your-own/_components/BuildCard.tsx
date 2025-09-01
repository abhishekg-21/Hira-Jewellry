// app/brands/endless/design-your-own/_components/BuildCard.tsx
"use client";

import Link from "next/link";

export default function BuildCard({
  title,
  copy,
  imageSrc,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  align = "imageLeft",
  reverse = false,
}: {
  title: string;
  copy: string;
  imageSrc: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  /** imageLeft or imageRight (defaults to left) */
  align?: "imageLeft" | "imageRight";
  /** when true, swaps sides on large screens (useful to alternate) */
  reverse?: boolean;
}) {
  const imageFirst =
    (align === "imageLeft" && !reverse) || (align === "imageRight" && reverse);

  return (
    <>
      {/* image side */}
      <div className={imageFirst ? "" : "order-last lg:order-first"}>
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-auto max-h-[520px] object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* text side */}
      <div
        className={
          (imageFirst ? "order-last lg:order-none " : "") +
          "flex items-center justify-center"
        }
      >
        {/* Centered column like the screenshot */}
        <div className="w-full max-w-[760px] text-center">
          <h3 className="font-serif text-[#0b1a2b] leading-tight text-[28px] sm:text-[34px] md:text-[40px]">
            {title}
          </h3>

          <p className="mt-3 mx-auto max-w-[700px] text-[15px] sm:text-[16px] text-[#0b1a2b]/80">
            {copy}
          </p>

          <div className="mt-8 space-y-4">
            <Link
              href={primaryHref}
              className="mx-auto block w-full max-w-[380px] rounded-[4px] bg-[#0b1a2b] px-6 py-4 text-[14px] sm:text-[15px] font-semibold tracking-wide text-white"
            >
              {primaryLabel.toUpperCase()}
            </Link>
            <Link
              href={secondaryHref}
              className="mx-auto block w-full max-w-[380px] rounded-[4px] bg-[#0b1a2b] px-6 py-4 text-[14px] sm:text-[15px] font-semibold tracking-wide text-white"
            >
              {secondaryLabel.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
