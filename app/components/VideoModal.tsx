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
        
        
      </div>
    </div>
  );
};

export default VideoModal;
