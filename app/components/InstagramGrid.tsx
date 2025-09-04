// app/components/InstagramGrid.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";
import QuickViewDrawer from "./QuickViewDrawer"; // ⬅️ new

interface InstaPost {
  video: string;
  title: string;
  link: string;              // e.g. "/products/monogram"
  topText: string;
  image: string;             // small avatar on the card
  poster?: string;       // ⬅️ slideshow images for quick view
  priceCents: number;        // ⬅️ paise for quick view
  options?: { name: string; values: string[] }[]; // ⬅️ optional product options
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
  },
  {
    video: "/video/Hira_Vermile/hiravermeil_1748578648_3643662144654853200_49035025956.mp4",
    title: "Monogram Station Bracelet",
    link: "/products/heartfall",
    topText: "Hey Guys,",
    image: "/images/brands/hira_vermile/instagramgrid/Monogram_Station_Bracelet__1750.webp",
    poster: "/images/brands/hira_vermile/instagramgrid/heartfall_poster.webp",
    priceCents: 175000,
  },
  {
    video: "/video/Hira_Vermile/hiravermeil_1749221602_3649057595132235916_49035025956.mp4",
    title: "Bow with Dangling Stones",
    link: "/products/moon",
    topText: "Imagine him giving you a moon bracelet this eid 🌙",
    image: "/images/brands/hira_vermile/instagramgrid/BowwithDanglingStones_2450.webp",
    poster: "/images/brands/hira_vermile/instagramgrid/moon_poster.webp",
    priceCents: 245000,
  },
  {
    video: "/video/Hira_Vermile/hiravermeil_1750000951_3655594949292716663_49035025956 (1).mp4",
    title: "Mystic Orbit Bracelet",
    link: "/products/message",
    topText: "HIRA",
    image: "/images/brands/hira_vermile/instagramgrid/MysticOrbitBracelet_2450.webp",
    poster: "/images/brands/hira_vermile/instagramgrid/message_1_poster.webp",
    priceCents: 245000,
  },
  {
    video: "/video/Hira_Vermile/hiravermeil_1750173426_3657041787753578380_49035025956.mp4",
    title: "Marquise fish tail Earrings",
    link: "/products/message",
    topText: "HIRA",
    image: "/images/brands/hira_vermile/instagramgrid/MarquisefishtailEarrings-VERE027.avif",
    poster: "/images/brands/hira_vermile/instagramgrid/message_2_poster.webp",
    priceCents: 215000,
  },
];

const InstagramGrid = () => {
  // Infinite scroll state
  const [items, setItems] = useState<InstaPost[]>(() => [...basePosts, ...basePosts]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Video modal state
  const [selectedVideo, setSelectedVideo] = useState<InstaPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Quick view drawer state
  const [quickOpen, setQuickOpen] = useState(false);
  const [quickProduct, setQuickProduct] = useState<{
    title: string;
    priceCents: number;
    slug: string;
    images: string[];
    options?: { name: string; values: string[] }[];
  } | null>(null);

  // Open video modal
  const handleVideoClick = (post: InstaPost) => {
    setSelectedVideo(post);
    setIsModalOpen(true);
  };
  const handleCloseVideo = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // Open quick view (from cart icon)
  const openQuick = (post: InstaPost) => {
    const slug = post.link.replace(/^\/products\//, "");
    setQuickProduct({
      title: post.title,
      priceCents: post.priceCents,
      slug,
      images : [post.image],
      options: post.options,
    });
    setQuickOpen(true);
  };

  // Append more items when the sentinel becomes visible
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setItems((prev) => [...prev, ...basePosts]); // append one page
        }
      },
      { root: containerRef.current, rootMargin: "800px", threshold: 0 }
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="py-12 bg-[#fdf9f4] overflow-x-auto">
        <div
          ref={containerRef}
          className="flex gap-4 px-6 md:px-10 overflow-x-scroll scrollbar-hide"
        >
          {items.map((post, idx) => (
            <div
              key={`${post.title}-${idx}`}
              className="relative w-[250px] h-[400px] shrink-0 rounded-xl overflow-hidden group"
              onClick={() => handleVideoClick(post)}
            >
              <video
                src={post.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 rounded-lg flex items-center px-2 py-2 gap-2 z-10">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`${post.title} icon`}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-white text-sm font-medium truncate flex-1">
                  {post.title}
                </span>
                {/* Cart → open Quick View; stop click bubbling so video modal doesn't open */}
                <button
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center shrink-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    openQuick(post);
                  }}
                  aria-label="Quick view"
                >
                  <Image
                    src="/images/Bold White Cart.png"
                    alt="Cart icon"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          ))}

          {/* Sentinel to trigger more items */}
          <div ref={sentinelRef} className="w-px h-1" />
        </div>
      </section>

      {/* Fullscreen video modal */}
      {isModalOpen && selectedVideo && (
        <VideoModal post={selectedVideo} onClose={handleCloseVideo} />
      )}

      {/* Slide-in quick view with slideshow */}
      <QuickViewDrawer
        open={quickOpen}
        onClose={() => setQuickOpen(false)}
        product={quickProduct}
      />
    </>
  );
};

export default InstagramGrid;
