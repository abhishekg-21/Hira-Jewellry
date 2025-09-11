// components/AboutSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  img: string;
  alt?: string;
  background?: string;
};

export default function AboutSection({
  eyebrow = "ABOUT HIRA",
  title,
  body,
  ctaLabel = "ABOUT US",
  ctaHref = "/components/about",
  img,
  alt = "About Hira",
  background = "#fefcf8",
}: Props) {
  return (
    <section style={{ background }} className="w-full">
      <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-10 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT TEXT */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-[13px] tracking-[0.2em] uppercase text-neutral-600 mb-3">
              {eyebrow}
            </p>
            <h2 className="text-[32px] leading-[1.2] md:text-[42px] md:leading-[1.15] font-semibold mb-6">
              {title}
            </h2>
            <p className="text-[17px] leading-[1.75] text-neutral-800 mb-8 max-w-[600px]">
              {body}
            </p>
            {ctaLabel ? (
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center h-12 px-8 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
              >
                {ctaLabel}
              </Link>
            ) : null}
          </div>

          {/* RIGHT IMAGE (exact dimensions like screenshot) */}
          <div className="flex items-center justify-center">
            <div className="relative w-[250px] h-[400px]">
              <Image
                src={img}
                alt={alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
