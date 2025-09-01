// app/diamonds/round/_components/StepsBar.tsx
"use client";

import Link from "next/link";

type Step = { n: 1 | 2 | 3; label: string };

type IconMap = {
  diamond: string;
  ring: string;
  ringSet: string;
};

export default function StepsBar({
  icons,
  /** Pass the brand-aware settings URL from the server page to avoid hydration mismatches */
  settingsHref = "/brands/endless/diamonds/engagement-ring/settings",
}: {
  /** Override icon image paths if you want */
  icons?: Partial<IconMap>;
  /** Absolute path for the "Choose a Setting" step */
  settingsHref?: string;
}) {
  const steps: Step[] = [
    { n: 1, label: "Choose a Diamond" },
    { n: 2, label: "Choose a Setting" },
    { n: 3, label: "Complete Ring" },
  ];

  const ICONS: IconMap = {
    diamond: "/images/brands/endless/diamonds/round/diamond.png",
    ring: "/images/brands/endless/diamonds/round/round_ring.png",
    ringSet: "/images/brands/endless/diamonds/round/complete_ring.png",
    ...icons,
  };

  return (
    /* FULL-BLEED WRAPPER — escapes any centered container */
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      {/* optional side padding so the pill doesn’t touch the edges */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="rounded-full border border-[#0b1a2b] px-4 sm:px-6 py-3">
          <div className="grid grid-cols-3 divide-x divide-[#0b1a2b]">
            {/* Step 1 (current page, not linked) */}
            <StepCell step={steps[0]} src={ICONS.diamond} alt="Diamond" />

            {/* Step 2 (linked to settings page, underline disabled) */}
            <Link
              href={settingsHref}
              className="block "
              aria-label="Go to Choose a Setting"
              prefetch={false}
            >
              <StepCell step={steps[1]} src={ICONS.ring} alt="Ring" />
            </Link>

            {/* Step 3 (not linked) */}
            <StepCell step={steps[2]} src={ICONS.ringSet} alt="Ring Set" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCell({
  step,
  src,
  alt,
}: {
  step: { n: number; label: string };
  src: string;
  alt: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-3 sm:px-6">
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-[28px] sm:text-[32px] leading-none text-[#0b1a2b]">
          {step.n}
        </span>
        <span className="text-[#0b1a2b] font-semibold text-[16px] sm:text-[18px]">
          {step.label}
        </span>
      </div>

      <img
        src={src}
        alt={alt}
        className="h-10 w-14 object-contain"
        loading="lazy"
      />
    </div>
  );
}
