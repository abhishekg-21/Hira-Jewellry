// components/VideoModal.tsx

import React from "react";

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
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-3 sm:px-6">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white text-2xl sm:text-3xl z-50"
      >
        &times;
      </button>

      <div className="w-full max-w-[95%] sm:max-w-md md:max-w-lg h-[70%] sm:h-[85%] bg-black rounded-lg sm:rounded-xl overflow-hidden relative shadow-lg">
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

        {/* Overlay content (reserved) */}
      </div>
    </div>
  );
};

export default VideoModal;
