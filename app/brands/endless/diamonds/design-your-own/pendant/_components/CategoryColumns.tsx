// app/brands/endless/design-your-own/_components/CategoryColumns.tsx
"use client";

import Link from "next/link";

export default function CategoryColumns({
  title,
  columns,
  extra,
  hero,
}: {
  title: string;
  columns?: { heading: string; items: string[] }[];
  extra?: { heading: string; items: string[] };
  hero?: {
    imageSrc: string;
    copy: string;
    ctaLabel: string;
    ctaHref: string;
    /** set true to place image on the right (optional) */
    reverse?: boolean;
  };
}) {
  // New "hero" layout (matches screenshot)
  if (hero) {
    const Img = (
      <div className="flex justify-center">
        <img
          src={hero.imageSrc}
          alt=""
          className="w-full max-h-[520px] object-cover rounded-sm"
          loading="lazy"
        />
      </div>
    );

    const Text = (
      <div>
        <h2 className="font-serif text-[#0b1a2b] leading-tight text-[28px] sm:text-[34px] md:text-[38px]">
          {title}
        </h2>
        <p className="mt-4 text-[14px] text-neutral-700 max-w-[720px]">
          {hero.copy}
        </p>
        <div className="mt-6">
          <Link
            href={hero.ctaHref}
            className="inline-block bg-[#0b1a2b] text-white px-6 py-3 rounded-sm text-[12px] tracking-wide"
          >
            {hero.ctaLabel.toUpperCase()}
          </Link>
        </div>
      </div>
    );

    return (
      <section className="border-t">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {hero.reverse ? (
              <>
                {Text}
                {Img}
              </>
            ) : (
              <>
                {Img}
                {Text}
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Original grid (kept for backward compatibility)
  return (
    <section className="border-t">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center font-serif text-[20px] sm:text-[22px] text-[#0b1a2b]">
          {title}
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(columns || []).map((col) => (
            <div key={col.heading}>
              <div className="text-[#0b1a2b] font-semibold">{col.heading}</div>
              <ul className="mt-2 space-y-1 text-[12.5px] text-neutral-700">
                {col.items.map((it) => (
                  <li key={it} className="hover:underline cursor-pointer">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {extra && (
            <div className="lg:col-span-1 sm:col-span-2 col-span-1">
              <div className="text-[#0b1a2b] font-semibold">{extra.heading}</div>
              <ul className="mt-2 space-y-1 text-[12.5px] text-neutral-700">
                {extra.items.map((it) => (
                  <li key={it} className="hover:underline cursor-pointer">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
