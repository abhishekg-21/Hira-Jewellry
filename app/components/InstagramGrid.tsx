"use client";

import React, { useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";
import Link from "next/link";

// Type for each post
interface InstaPost {
  video: string;
  title: string;
  link: string;
  topText: string;
}

const instaPosts: InstaPost[] = [
  {
    video: "/video/hiravermeil_1749657428_3652712330308021399_49035025956.mp4",
    title: "Monogram...",
    link: "/products/monogram",
    topText: "GRWM for a Date ✨",
  },
  {
    video: "/video/hiravermeil_1749657428_3652712330308021399_49035025956.mp4",
    title: "Marquise fish tail Earrings",
    link: "/products/marquise",
    topText: "Hira Jewellery.\n92.5 silver studs with...",
  },
  {
    video: "/video/hiravermeil_1749657428_3652712330308021399_49035025956.mp4",
    title: "Bow with...",
    link: "/products/bow",
    topText: "Prettiest minimal jewellery\nI’ve ever seen 🤍✨",
  },
  {
    video: "/video/hiravermeil_1749657428_3652712330308021399_49035025956.mp4",
    title: "Golden Heartfall",
    link: "/products/heartfall",
    topText: "Hey Guys,",
  },
  {
    video: "/videos/video5.mp4",
    title: "Crescent Moon...",
    link: "/products/moon",
    topText: "Imagine him giving you a moon bracelet this eid 🌙",
  },
  {
    video: "/videos/video6.mp4",
    title: "Hidden Message...",
    link: "/products/message",
    topText: "HIRA",
  },
];

const InstagramGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState<InstaPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (post: InstaPost) => {
    setSelectedVideo(post);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <section className="py-12 bg-[#fdf9f4] overflow-x-auto">
        <div className="flex gap-4 px-6 md:px-10 overflow-x-scroll scrollbar-hide">
          {instaPosts.map((post, idx) => (
            <div
              key={idx}
              className="relative w-[200px] h-[350px] shrink-0 rounded-xl overflow-hidden group"
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
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center shrink-0">
                  <Image
                    src="/images/monogram-icon.png"
                    alt="Product icon"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-white text-sm font-medium truncate flex-1">
                  {post.title}
                </span>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shrink-0">
  <Image
    src="/images/Bold White Cart.png" // <-- update this path to your actual image
    alt="Cart icon"
    width={20}
    height={20}
    className="object-contain"
  />
</div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen video modal */}
      {isModalOpen && selectedVideo && (
        <VideoModal post={selectedVideo} onClose={handleClose} />
      )}
    </>
  );
};

export default InstagramGrid;
