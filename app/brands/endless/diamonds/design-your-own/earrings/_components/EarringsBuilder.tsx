"use client";

import Link from "next/link";

export default function EarringsBuilder({
  imageSrc,
  title,
  copy,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  imageSrc: string;
  title: string;
  copy: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <>
      {/* Left image */}
      <div>
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-auto max-h-[660px] object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right text + buttons */}
      <div>
        <h3 className="mt-1 font-serif leading-tight text-[#0b1a2b] text-[30px] sm:text-[36px] lg:text-[44px]">{title}</h3>
        <p className="mt-2 text-[15px] sm:text-[16px] text-neutral-700 max-w-[720px]">{copy}</p>

        <div className="mt-2 space-y-3">
          <Link
            href={primaryHref}
            className="mt-6 inline-flex items-center justify-center bg-[#0b1a2b] text-white px-8 py-4 rounded-sm
                     text-[14px] tracking-wide min-w-[280px] sm:min-w-[320px]"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="mt-6 mx-5 inline-flex items-center justify-center bg-[#0b1a2b] text-white px-8 py-4 rounded-sm
                     text-[14px] tracking-wide min-w-[280px] sm:min-w-[320px]r"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </>
  );
}
