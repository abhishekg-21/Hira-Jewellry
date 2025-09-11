"use client";

import React from "react";
import Image from "next/image";

type Props = {
  imageSrc: string;
  imageAlt?: string;
  heading?: string;
  subheading?: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
  reverse?: boolean;
};

export default function SplitCardSection({
  imageSrc,
  imageAlt = "",
  heading = "Split Card Heading",
  subheading,
  text,
  buttonLabel,
  buttonHref = "#",
  reverse = false,
}: Props) {
  return (
    <section className="py-12 lg:py-20">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 rounded-md overflow-hidden ${
          reverse ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Left Image */}
        <div className="relative min-h-[300px] lg:min-h-[500px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Text Block */}
        <div className="bg-[#f3e5d6] px-6 sm:px-10 py-10 flex flex-col justify-center text-center">
          {subheading && (
            <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">
              {subheading}
            </p>
          )}
          <h2 className="text-3xl md:text-5xl font-medium">{heading}</h2>
          {text && (
            <p className="mt-6 text-[17px] leading-8 text-black/80">{text}</p>
          )}
          {buttonLabel && (
            <a
              href={buttonHref}
              className="mt-6 inline-block px-6 py-3 bg-black text-white text-sm hover:bg-neutral-800 transition"
            >
              {buttonLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
