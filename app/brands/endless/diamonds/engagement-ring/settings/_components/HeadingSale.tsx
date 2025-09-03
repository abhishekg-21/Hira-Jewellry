// app/engagement-rings/settings/_components/HeadingSale.tsx
"use client";

import { useState } from "react";

export default function HeadingSale() {
  const [expanded, setExpanded] = useState(false);

  const base =
    "Your dazzling love story deserves an equally luminous engagement ring. Shop leading settings with classic designs and unique engagement rings for women, men and anyone with a love story to share. Discover completed designs and custom engagement rings in gold or platinum. Choose from natural diamond rings, gemstone rings or lab grown diamond engagement rings. Pick the exact setting, center stone and more for the perfect custom ring or";

  const more =
    " explore ready-to-ship favorites. Personalize with metal, style and diamond shape to create a ring that’s uniquely yours.";

  return (
    <header className="mt-6">
      <h1 className="font-serif text-[28px] sm:text-[32px] tracking-tight text-[#0b1a2b]">
        Custom Engagement Rings
      </h1>

      <p className="mt-1 text-[12.5px] leading-6 text-neutral-700">
        {base}{" "}
        {!expanded ? (
          <button
            type="button"
            className="underline underline-offset-2 text-[#0b1a2b] font-medium"
            onClick={() => setExpanded(true)}
          >
            Show More
          </button>
        ) : (
          <>
            {more}
            {" "}
            <button
              type="button"
              className="underline underline-offset-2 text-[#0b1a2b] font-medium"
              onClick={() => setExpanded(false)}
            >
              Show Less
            </button>
          </>
        )}
      </p>
    </header>
  );
}
