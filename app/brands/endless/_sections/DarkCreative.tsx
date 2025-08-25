// app/brands/endless/_sections/DarkCreative.tsx
import Image from "next/image";
import Section from "./Section";

type Props = {
  /** Small label above the title */
  eyebrow?: string;
  /** Big title (e.g. "TAILOR-MADE BY YOU") */
  heading: string;
  /** Paragraph body copy */
  body: string;
  /** Button text (e.g. "DESIGN YOUR RING") */
  cta: string;
  /** Background image (text is overlaid on this image) */
  image: { src: string; alt: string };
};

/**
 * Full-bleed image with left-side text overlay (no separate left block).
 * Closely matches the reference: large navy-tinted area on the left with
 * headline, paragraph and CTA; photo remains visible on the right.
 */
export default function DarkCreative({
  eyebrow = "CREATIVE STUDIO",
  heading,
  body,
  cta,
  image,
}: Props) {
  return (
    <Section className="py-0">
      <div className="relative w-full min-h-[640px] md:min-h-[740px] overflow-hidden">
        {/* Background image */}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width:1024px) 100vw, 100vw"
          className="object-cover"
          priority
        />

        {/* Left gradient tint so white text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r to-transparent" />

        {/* Text overlay (left side) */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-6 sm:px-10">
            <div className="max-w-[820px] text-white">
              <div className="text-[12px] sm:text-[13px] tracking-[0.25em] uppercase">
                {eyebrow}
              </div>

              <h2 className="mt-5 text-[28px] sm:text-[34px] md:text-[40px] leading-[1.25] font-semibold tracking-tight uppercase">
                {heading}
              </h2>

              <p className="mt-6 text-[16px] sm:text-[17px] leading-8 opacity-95 max-w-[62ch]">
                {body}
              </p>

              <button
                type="button"
                className="
                  mt-10 inline-flex items-center justify-center
                  h-[60px] w-[300px] max-w-full
                  border border-white
                  text-[15px] tracking-wide uppercase
                  hover:bg-white hover:text-[#0b1a2b]
                  transition
                "
              >
                {cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
