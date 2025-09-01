// app/brands/endless/design-your-own/_components/DYOShowcase.tsx
"use client";

import Link from "next/link";

export default function DYOShowcase({
  items,
}: {
  items: { title: string; imageSrc: string; href: string }[];
}) {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      {/* Row with arrows and three big images */}
      <div className="relative">
        {/* left chevron */}
        <button
          type="button"
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 select-none text-[#0b1a2b] text-3xl leading-none opacity-70 hover:opacity-100"
        >
          ‹
        </button>

        {/* grid (always 3 on desktop to match the screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="group block text-center"
            >
              <div className="flex items-end justify-center">
                <img
                  src={it.imageSrc}
                  alt={it.title}
                  className="h-[420px] w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="mt-6 font-serif text-[18px] text-[#0b1a2b] tracking-wide uppercase">
                {it.title}
              </div>
            </Link>
          ))}
        </div>

        {/* right chevron */}
        <button
          type="button"
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 select-none text-[#0b1a2b] text-3xl leading-none opacity-70 hover:opacity-100"
        >
          ›
        </button>
      </div>

      {/* thin divider like the screenshot */}
      <div className="mt-10 h-px bg-neutral-200" />
    </section>
  );
}
