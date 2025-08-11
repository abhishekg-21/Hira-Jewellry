"use client";

import Image from "next/image";
import Link from "next/link";

const bannerItems = [
  {
    text: "Summer Collection 2025 | Shop Now",
    image: "/images/Earring.png",
    link: "/collections/summer",
  },
  {
    text: "Summer Collection 2025 | Shop Now",
    image: "/images/SummerBanner/Untitled design (36).png",
    link: "/collections/summer",
  },
  {
    text: "Summer Collection 2025 | Shop Now",
    image: "/images/SummerBanner/Untitled design (34).png",
    link: "/collections/summer",
  },
];

export default function SummerBannerMarquee() {
  return (
    <div style={{ fontFamily: "Google Sans" }} className="w-full bg-[#fffcf7] overflow-hidden py-4 border-y border-gray-200">
      <div className="marquee whitespace-nowrap flex animate-marquee">
        {Array(3)
          .fill(bannerItems)
          .flat()
          .map((item, index) => {
  const [beforeText, underlineText] = item.text.split(" | ");

  return (
    <Link
      key={index}
      href={item.link}
      className="flex items-center gap-20 px-10 shrink-0"
    >
      <span className="text-black font-medium whitespace-nowrap text-sm md:text-[28px] font-normal">
        {beforeText}
        {" | "}
        <span className="font-normal underline decoration-[1px] underline-offset-2">{underlineText}</span>

      </span>
      <Image
        src={item.image}
        alt="Icon"
        width={100}
        height={100}
        className="object-contain"
      />
    </Link>
  );
})
}
      </div>

      {/* Keyframes animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
