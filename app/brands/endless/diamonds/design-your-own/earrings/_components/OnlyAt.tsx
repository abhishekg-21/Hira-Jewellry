// app/brands/endless/design-your-own/_components/OnlyAt.tsx
"use client";

import Link from "next/link";

export default function OnlyAt({
  brand,
  leftImage,
  rightImage,
  features,
}: {
  brand: string;
  leftImage: {
    src: string;
    title: string;
    copy: string;
    linkLabel: string;
    href: string;
  };
  rightImage: {
    src: string;
    title: string;
    copy: string;
    linkLabel: string;
    href: string;
  };
  features: { title: string; copy: string }[];
}) {
  return (
    <section>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title + subcopy */}
        <h2 className="text-center font-serif text-[28px] sm:text-[50px] text-[#0b1a2b]">
          Only at {brand}
        </h2>
        <p className="mt-3 text-center text-[23px] leading-6 text-neutral-700 max-w-[760px] mx-auto">
          When it comes to celebrations we strive to make your experience as
          brilliant as our jewelry with the perfect pieces for every occasion.
        </p>

        {/* Two images row */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InfoBlock {...leftImage} />
          <InfoBlock {...rightImage} />
        </div>

        {/* Four features */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((f) => (
            <div key={f.title}>
              <div className="text-[#0b1a2b] font-semibold">{f.title}</div>
              <p className="mt-2 text-[15.5px] leading-6 text-neutral-700 max-w-[240px] mx-auto">
                {f.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  src,
  title,
  copy,
  linkLabel,
  href,
}: {
  src: string;
  title: string;
  copy: string;
  linkLabel: string;
  href: string;
}) {
  return (
    <div>
      {/* Image */}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src={src} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Title left + link right */}
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="text-[15.5px] font-semibold text-[#0b1a2b]">{title}</h3>
        <Link
          href={href}
          className="text-[15.5px] text-[#0b1a2b] underline underline-offset-2"
        >
          {linkLabel}
        </Link>
      </div>

      {/* Copy */}
      <p className="mt-2 text-[15.5px] leading-6 text-neutral-700">
        {copy}
      </p>
    </div>
  );
}
