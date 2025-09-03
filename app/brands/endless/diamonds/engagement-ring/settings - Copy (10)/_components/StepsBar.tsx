// app/engagement-rings/settings/_components/StepsBar.tsx
"use client";

import Link from "next/link";

type IconKey = "diamond" | "ring" | "ring-set";

/** Default icon images — adjust paths if yours differ */
const ICONS: Record<IconKey, string> = {
  diamond: "/images/brands/endless/diamonds/round/diamond.png",
  ring: "/images/brands/endless/diamonds/round/round_ring.png",
  "ring-set": "/images/brands/endless/diamonds/round/complete_ring.png",
};

function StepCell({
  n,
  label,
  icon,
  active = false,
}: {
  n: number;
  label: string;
  icon: IconKey;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-3 sm:px-6">
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-[28px] sm:text-[32px] leading-none text-[#0b1a2b]">
          {n}
        </span>
        <span
          className={`text-[#0b1a2b] font-semibold text-[16px] sm:text-[18px] ${
            active ? "" : ""
          }`}
        >
          {label}
        </span>
      </div>

      {/* icon as image */}
      <span className="inline-flex h-10 w-14 items-center justify-center">
        <img
          src={ICONS[icon]}
          alt={label}
          className="h-10 w-14 object-contain"
          loading="lazy"
        />
      </span>
    </div>
  );
}

export default function StepsBar({
  /** Route to your old diamonds page; pass brand-aware path from server */
  diamondHref = "/brands/endless/diamonds/round",
}: {
  diamondHref?: string;
}) {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="rounded-full border border-[#0b1a2b] px-4 sm:px-6 py-3 mt-4">
          <div className="grid grid-cols-3 divide-x divide-[#0b1a2b]">
            <StepCell n={1} label="Choose a Setting" icon="ring" active />

            {/* Click to go to old Diamonds page */}
            <Link
              href={diamondHref}
              className="block"
              aria-label="Go to Choose a Diamond"
              prefetch={false}
            >
              <StepCell n={2} label="Choose a Diamond" icon="diamond" />
            </Link>

            <StepCell n={3} label="Complete Ring" icon="ring-set" />
          </div>
        </div>
      </div>
    </div>
  );
}
