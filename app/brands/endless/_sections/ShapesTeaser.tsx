// app/brands/endless/_sections/ShapesTeaser.tsx
import Image from "next/image";
import Section from "./Section";

type Shape = { src: string; alt: string };

const DEFAULT_SHAPES: Shape[] = [
  { src: "/images/brands/endless/ShapesTeaser/emerald-cut_diamond.webp",  alt: "Emerald" },
  { src: "/images/brands/endless/ShapesTeaser/marquise_cut_diamond.webp", alt: "Marquise" },
  { src: "/images/brands/endless/ShapesTeaser/oval_cut_diamond.webp",     alt: "Oval" },
  { src: "/images/brands/endless/ShapesTeaser/princess_cut_diamond.webp", alt: "Princess" },
  { src: "/images/brands/endless/ShapesTeaser/pear_shaped_diamond (1).webp",     alt: "Pear" },
  { src: "/images/brands/endless/ShapesTeaser/cushion_cut_diamond.webp",  alt: "Cushion" },
  { src: "/images/brands/endless/ShapesTeaser/radiant_cut_diamond.webp",  alt: "Radiant" },
  { src: "/images/brands/endless/ShapesTeaser/round_cut_diamond.webp",  alt: "Round" },
  { src: "/images/brands/endless/ShapesTeaser/asscher_cut_diamond.webp",  alt: "Asscher" },

];

export default function ShapesTeaser({
  left,
  title,
  cta,
  shapes,
}: {
  left: { src: string; alt: string };
  title: string;
  cta: string;
  /** optional; falls back to six defaults laid out in a 3×2 grid */
  shapes?: Shape[];
}) {
  const data = (shapes && shapes.length > 0 ? shapes : DEFAULT_SHAPES).slice(0, 9);

  return (
    <Section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* Left: full-height image */}
        <div className="relative min-h-[520px] md:min-h-[640px]">
          <Image
            src={left.src}
            alt={left.alt}
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right: shapes grid + heading + CTA */}
        <div className="flex items-center justify-center py-12 md:py-0">
          <div className="w-full max-w-[720px] text-center">
            <div className="grid grid-cols-3 pl-[150px] pr-[150px] place-items-center">
              {data.map((s, i) => (
                <div key={i} className="relative w-28 h-28">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <h3 className="mt-12 text-[22px] sm:text-[24px] md:text-[28px] tracking-wide uppercase text-[#0b1a2b]">
              {title}
            </h3>

            <button className="mt-6 text-[14px] sm:text-[15px] tracking-wide uppercase underline underline-offset-8">
              {cta}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
