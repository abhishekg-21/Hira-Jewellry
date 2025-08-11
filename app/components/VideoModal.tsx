// components/VideoModal.tsx

import React from "react";
import Image from "next/image";

type Post = {
  video: string;
  title: string;
  link: string;
  topText: string;
};

type VideoModalProps = {
  post: Post;
  onClose: () => void;
};

const VideoModal: React.FC<VideoModalProps> = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl z-50"
      >
        &times;
      </button>

      <div className="w-full max-w-sm h-[90%] bg-black rounded-xl overflow-hidden relative shadow-lg">
        {/* Video */}
        <video
          src={post.video}
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 z-20 flex items-center gap-2">
          <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center shrink-0">
            <Image
              src="/images/monogram-icon.png"
              alt="Product icon"
              width={28}
              height={28}
            />
          </div>
          <div className="flex-1 text-white">
            <p className="text-sm font-medium">{post.title}</p>
            <p className="text-xs text-gray-300">₹2,450</p>
          </div>
          <button className="w-9 h-9 bg-black rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.3 5.2a1 1 0 001 1.3h11.6a1 1 0 001-1.3L17 13M9 21h.01M15 21h.01"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
