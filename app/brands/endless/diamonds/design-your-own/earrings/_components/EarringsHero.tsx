"use client";

import Link from "next/link";

export default function EarringsHero({
  title,
  copy,
  buttonLabel,
  buttonHref,
  imageSrc,
}: {
  title: string;
  copy: string;
  buttonLabel: string;
  buttonHref: string;
  imageSrc: string;
}) {
  return (
    /* Full-bleed banner with background image on the right, text left */
    <section
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"
      style={{ background: "#f6f6f6" }}
    >
      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center py-10 sm:py-12">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <h1 className="font-serif text-[24px] sm:text-[28px] tracking-wide text-[#0b1a2b]">
              {title}
            </h1>
            <p className="mt-3 text-[13px] leading-6 text-neutral-700 max-w-[520px]">{copy}</p>
            <div className="mt-5">
              <Link
                href={buttonHref}
                className="inline-block bg-[#0b1a2b] text-white px-5 py-2.5 rounded-sm text-[12px] tracking-wide"
              >
                {buttonLabel}
              </Link>
            </div>
          </div>

          {/* Big image (right) */}
          <div className="order-1 lg:order-2">
            <div className="w-full flex justify-center lg:justify-end">
              <img
                src={imageSrc}
                alt=""
                className="h-[220px] sm:h-[260px] lg:h-[300px] w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
