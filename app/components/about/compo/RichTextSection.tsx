"use client";

import React from "react";

type Props = {
  eyebrow?: string;
  heading?: string;
  text?: string;
  align?: "left" | "center" | "right";
  width?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
};

export default function RichTextSection({
  eyebrow = "ABOUT HIRA",
  heading = "Your Heading",
  text = "Your paragraph goes here.",
  align = "center",
  width = "md",
}: Props) {
  return (
    <section className="py-12 lg:py-20">
      <div
        className={`mx-auto max-w-screen-${width} px-6 text-${align}`}
      >
        <p className="text-[13px] tracking-[0.2em] uppercase text-neutral-600 mb-3">
          {eyebrow}
        </p>
        <h2 className="text-[32px] leading-[1.2] md:text-[42px] md:leading-[1.15] font-semibold mb-6">
          {heading}
        </h2>
        <p className="text-[17px] leading-[1.75] text-neutral-800 mb-8">
          {text}
        </p>
      </div>
    </section>
  );
}
