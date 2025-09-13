// app/components/InstagramGrid.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";
import QuickViewDrawer from "./QuickViewDrawer";

interface InstaPost {
  video: string;
  title: string;
  link: string;
  topText: string;
  image: string;
  poster?: string;
  priceCents: number;
  options?: { name: string; values: string[] }[];
  description? : string;
}

const basePosts: InstaPost[] = [
  {
    video: "/video/hiravermeil_1749657428_3652712330308021399_49035025956.mp4",
    title: "Golden Heartfall",
    link: "/products/monogram",
    topText: "GRWM for a Date ✨",
    image: "/images/brands/hira_vermile/instagramgrid/Golden_Heartfall__1850.webp",
    poster: "/images/brands/hira_vermile/instagramgrid/monogram_poster.webp",
    priceCents: 185000,
    options: [{ name: "Color", values: ["White Gold", "Yellow Gold"] }],
    description: "This Beautiful piece of jewelry is made up of 92.5 pure sterling silver and is coated with 18kt gold. Handcrafted by skilled workers and fairly priced for your everyday use. Purity- 92.5 Pure Silver coated with 18kt gold. Diamond Quality – Swarovski zircon. Pearl Quality- Good Quality Fresh water Pearls",
  },
    {
    video: "/video/Hira_Vermile/hiravermeil_1743431593_3600487344122160290_49035025956.mp4",
    title: "Cresent Moon Bracelet",
    link: "/products/marquise",
    topText: "Hira Jewellery.\n92.5 silver studs with...",
    image: "/images/brands/hira_vermile/instagramgrid/VERB001-CresentMoonBracelet-1150.webp",
    poster: "/images/brands/hira_vermile/instagramgrid/marquise_poster.webp",
    priceCents: 115000,
    options: [{ name: "Color", values: ["White Gold"] }],
    description: "This Beautiful piece of jewelry is made up of 92.5 pure sterling silver and is coated with 18kt gold. Handcrafted by skilled workers and fairly priced for your everyday use.Purity- 92.5 Pure Silver coated with 18kt gold. Diamond Quality – Swarovski zircon. Pearl Quality- Good Quality Fresh water Pearls",
  },
  {
    video: "/video/Hira_Vermile/hiravermeil_1745245060_3615699647844980000_49035025956 (1).mp4",
    title: "Hidden Message Couple Rings",
    link: "/products/bow",
    topText: "Prettiest minimal jewellery\nI’ve ever seen 🤍✨",
    image: "/images/brands/hira_vermile/instagramgrid/VERR031-HiddenMessageCoupleRings-4650.avif",
    poster: "/images/brands/hira_vermile/instagramgrid/bow_poster.webp",
    priceCents: 465000,
    options: [{ name: "Color", values: ["White Gold", "Rose Gold"] }],
    description: "This Beautiful piece of jewelry is made up of 92.5 pure sterling silver and is coated with 18kt gold. Handcrafted by skilled workers and fairly priced for your everyday use. Purity- 92.5 Pure Silver coated with 18kt gold. Diamond Quality – Swarovski zircon. Pearl Quality- Good Quality Fresh water Pearls",
  },
  {
    video: "/video/Hira_Vermile/hiravermeil_1748578648_3643662144654853200_49035025956.mp4",
    title: "Monogram Station Bracelet",
    link: "/products/heartfall",
    topText: "Hey Guys,",
    image: "/images/brands/hira_vermile/instagramgrid/Monogram_Station_Bracelet__1750.webp",
    poster: "/images/brands/hira_vermile/instagramgrid/heartfall_poster.webp",
    priceCents: 175000,
    description: "This Beautiful piece of jewelry is made up of 92.5 pure sterling silver and is coated with 18kt gold. Handcrafted by skilled workers and fairly priced for your everyday use. Purity- 92.5 Pure Silver coated with 18kt gold. Diamond Quality – Swarovski zircon. Pearl Quality- Good Quality Fresh water Pearls",
  },
  {
    video: "/video/Hira_Vermile/hiravermeil_1749221602_3649057595132235916_49035025956.mp4",
    title: "Bow with Dangling Stones",
    link: "/products/moon",
    topText: "Imagine him giving you a moon bracelet this eid 🌙",
    image: "/images/brands/hira_vermile/instagramgrid/BowwithDanglingStones_2450.webp",
    poster: "/images/brands/hira_vermile/instagramgrid/moon_poster.webp",
    priceCents: 245000,
    description: "This Beautiful piece of jewelry is made up of 92.5 pure sterling silver and is coated with 18kt gold. Handcrafted by skilled workers and fairly priced for your everyday use. Purity- 92.5 Pure Silver coated with 18kt gold. Diamond Quality – Swarovski zircon. Pearl Quality- Good Quality Fresh water Pearls",
  },
  {
    video: "/video/Hira_Vermile/hiravermeil_1750000951_3655594949292716663_49035025956 (1).mp4",
    title: "Mystic Orbit Bracelet",
    link: "/products/message",
    topText: "HIRA",
    image: "/images/brands/hira_vermile/instagramgrid/MysticOrbitBracelet_2450.webp",
    poster: "/images/brands/hira_vermile/instagramgrid/message_1_poster.webp",
    priceCents: 245000,
    description: "This Beautiful piece of jewelry is made up of 92.5 pure sterling silver and is coated with 18kt gold. Handcrafted by skilled workers and fairly priced for your everyday use. Purity- 92.5 Pure Silver coated with 18kt gold. Diamond Quality – Swarovski zircon. Pearl Quality- Good Quality Fresh water Pearls",

  },
  {
    video: "/video/Hira_Vermile/hiravermeil_1750173426_3657041787753578380_49035025956.mp4",
    title: "Marquise fish tail Earrings",
    link: "/products/message",
    topText: "HIRA",
    image: "/images/brands/hira_vermile/instagramgrid/MarquisefishtailEarrings-VERE027.avif",
    poster: "/images/brands/hira_vermile/instagramgrid/message_2_poster.webp",
    priceCents: 215000,
    description: "This Beautiful piece of jewelry is made up of 92.5 pure sterling silver and is coated with 18kt gold. Handcrafted by skilled workers and fairly priced for your everyday use. Purity- 92.5 Pure Silver coated with 18kt gold. Diamond Quality – Swarovski zircon. Pearl Quality- Good Quality Fresh water Pearls",
  },
];

const InstagramGrid = () => {
  const [items, setItems] = useState<InstaPost[]>(() => [
    ...basePosts,
    ...basePosts,
  ]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const [selectedVideo, setSelectedVideo] = useState<InstaPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [quickOpen, setQuickOpen] = useState(false);
  const [quickProduct, setQuickProduct] = useState<{
    title: string;
    priceCents: number;
    slug: string;
    images: string[];
    options?: { name: string; values: string[] }[];
  } | null>(null);

  const handleVideoClick = (post: InstaPost) => {
    setSelectedVideo(post);
    setIsModalOpen(true);
  };
  const handleCloseVideo = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const openQuick = (post: InstaPost) => {
    const slug = post.link.replace(/^\/products\//, "");
    setQuickProduct({
      title: post.title,
      priceCents: post.priceCents,
      slug,
      images: [post.image],
      options: post.options,
    });
    setQuickOpen(true);
  };

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setItems((prev) => [...prev, ...basePosts]);
        }
      },
      { root: containerRef.current, rootMargin: "800px", threshold: 0 }
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="py-6 sm:py-12 bg-[#fdf9f4]">
        <div
          ref={containerRef}
          className="flex gap-3 sm:gap-4 px-3 sm:px-6 md:px-10 overflow-x-scroll scrollbar-hide"
        >
          {items.map((post, idx) => (
            <div
              key={`${post.title}-${idx}`}
              className="
                relative shrink-0 rounded-[20px] overflow-hidden group
                w-[200px] h-[330px]        /* 📱 Mobile size → narrow & tall */
                sm:w-[220px] sm:h-[340px]  /* 📱 Tablet */
                md:w-[220px] md:h-[400px]  /* 💻 Desktop */
              "
              onClick={() => handleVideoClick(post)}
            >
              <video
                src={post.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Quick View Info Bar */}
              <button
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  openQuick(post);
                }}
                aria-label="Quick view"
              >
                <div
                  className="
                    absolute bottom-3 left-1/2 -translate-x-1/2 bg-black 
                    rounded-[5px] flex items-center gap-2 z-10
                    sm:bottom-4 lg:w-45 w-40 h-15 lg:h-11
                  "
                >
                  {/* Thumbnail Image */}
                  <div className="w-17 h-15 sm:w-12 sm:h-11 bg-white flex items-center justify-center overflow-hidden rounded-tl-[5px] rounded-bl-[5px]">
  <Image
    src={post.image}
    alt={`${post.title} icon`}
    width={36}
    height={36}
    className="object-cover w-full h-full"
  />
</div>

{/* Title + Price */}
<div className="flex flex-col min-w-0 px-1">
  <span className="text-white text-[13px] sm:text-sm font-medium truncate">
    {post.title}
  </span>
  <span className="hidden sm:block text-white text-[10px] sm:text-xs font-normal text-left">
    ₹{(post.priceCents / 100).toLocaleString("en-IN")}
  </span>
</div>
                </div>
              </button>
            </div>
          ))}
          <div ref={sentinelRef} className="w-px h-1" />
        </div>
      </section>

      {isModalOpen && selectedVideo && (
        <VideoModal post={selectedVideo} onClose={handleCloseVideo} />
      )}

      <QuickViewDrawer
        open={quickOpen}
        onClose={() => setQuickOpen(false)}
        product={quickProduct}
      />
    </>
  );
};

export default InstagramGrid;
