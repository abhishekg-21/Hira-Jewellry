// app/brands/endless/design-your-own/_components/ContentSplit.tsx
"use client";

import Link from "next/link";

export default function ContentSplit({
  eyebrow,
  title,
  copy,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageRight = false,
}: {
  eyebrow?: string;
  title: string;
  copy: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageRight?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image (left by default) */}
      <div className={imageRight ? "order-last lg:order-none" : ""}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full max-h-[520px] object-cover"
          loading="lazy"
        />
      </div>

      {/* Text (right by default) */}
      <div className={imageRight ? "" : "order-last lg:order-first"}>
        {eyebrow && (
          <div className="text-[12px] tracking-wide text-[#0b1a2b]">{eyebrow}</div>
        )}
        <h3 className="mt-1 font-serif leading-tight text-[#0b1a2b] text-[30px] sm:text-[36px] lg:text-[44px]">
          {title}
        </h3>
        <p className="mt-4 text-[15px] sm:text-[16px] text-neutral-700 max-w-[720px]">
          {copy}
        </p>

        <Link
          href={ctaHref}
          className="mt-6 inline-flex items-center justify-center bg-[#0b1a2b] text-white px-8 py-4 rounded-sm
                     text-[14px] tracking-wide min-w-[280px] sm:min-w-[320px]"
        >
          {ctaLabel.toUpperCase()}
        </Link>
      </div>
    </div>
  );
}
