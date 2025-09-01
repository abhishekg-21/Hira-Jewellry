// app/brands/endless/design-your-own/_components/Hero.tsx
"use client";

import Link from "next/link";

export default function Hero({
  title,
  copy,
  ctaLabel,
  ctaHref,
  imageSrc,
}: {
  title: string;
  copy: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
}) {
  return (
    <section
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: "no-repeat",
        // Anchor the ring on the right, vertically centered
        backgroundPosition: "right center",
        // Scale like the screenshot: large on desktop, responsive on smaller screens
        backgroundSize: "min(60vw, 1100px) auto",
      }}
    >
      {/* subtle readability fade on top of the bg image */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />

      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 py-16 sm:py-24 lg:py-28 min-h-[480px] lg:min-h-[560px] grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left copy */}
        <div className="max-w-[720px]">
          <h1 className="font-serif text-[#0b1a2b] leading-tight text-[36px] sm:text-[48px] lg:text-[64px]">
            {title}
          </h1>

          <p className="mt-6 text-[16px] lg:text-[18px] text-[#2c3340] max-w-[760px]">
            {copy}
          </p>

          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-block rounded-md bg-[#0b1a2b] px-8 py-4 text-[14px] font-semibold tracking-wide text-white"
            >
              {ctaLabel.toUpperCase()}
            </Link>
          </div>
        </div>

        {/* Right spacer to give the background image room (no foreground content) */}
        <div aria-hidden className="hidden lg:block" />
      </div>
    </section>
  );
}
