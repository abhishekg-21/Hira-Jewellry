"use client";

import React from "react";
import Image from "next/image";

type MediaGridItem = {
  type: "image" | "text";
  imageSrc?: string;
  alt?: string;
  subheading?: string;
  heading?: string;
  text?: string;
};

type Props = {
  items: MediaGridItem[];
  desktopCols?: 2 | 3 | 4 | 5;
  mobileCols?: 1 | 2;
  layout?: "grid" | "slideshow";
};

export default function MediaGridSection({
  items,
  desktopCols = 5,
  mobileCols = 2,
  layout = "grid",
}: Props) {
  return (
    <section className="py-12 lg:py-20">
      <div
        className={`grid grid-cols-${mobileCols} md:grid-cols-${desktopCols} gap-4`}
      >
        {items.map((item, idx) =>
          item.type === "image" ? (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-100"
            >
              {item.imageSrc && (
                <Image
                  src={item.imageSrc}
                  alt={item.alt || ""}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          ) : (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-6 bg-neutral-50 rounded-md"
            >
              {item.subheading && (
                <p className="uppercase text-xs text-neutral-500 mb-2">
                  {item.subheading}
                </p>
              )}
              {item.heading && (
                <h3 className="text-2xl font-semibold mb-3">{item.heading}</h3>
              )}
              {item.text && (
                <p className="text-sm text-neutral-700">{item.text}</p>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
}
