import Image from "next/image";
import Link from "next/link";
import Section from "./Section";

type Panel = {
  src: string;
  alt: string;
  heading: string;
  cta: string;
  /** where the CTA should navigate; if omitted, it renders a plain button */
  ctaHref?: string;
};

type Props = {
  left: Panel;
  right: Panel;
};

export default function HeroSplit({ left, right }: Props) {
  const panels: Panel[] = [left, right];

  return (
    <Section className="pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {panels.map((p, i) => (
          <div
            key={`${p.src}-${i}`}
            className="relative h-[430px] sm:h-[460px] overflow-hidden"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
              priority={i === 0}
            />

            <div className="absolute inset-0 flex items-end">
              <div className="m-4 sm:m-6 bg-white/85 backdrop-blur-[2px] px-4 py-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
                  {p.heading}
                </h2>

                {p.ctaHref ? (
                  <Link
                    href={p.ctaHref}
                    className="inline-block mt-2 text-xs sm:text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition"
                  >
                    {p.cta}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="mt-2 text-xs sm:text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition"
                  >
                    {p.cta}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
