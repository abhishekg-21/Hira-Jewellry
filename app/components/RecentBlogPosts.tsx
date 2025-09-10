// app/components/RecentBlogPosts.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type BlogCard = {
  href: string;
  image: string;
  title: string;
  tags: string[];
};

const posts: BlogCard[] = [
  {
    href: "/components/blogs/news",
    image: "/images/brands/hira_vermile/recentblogpost/403a843679c4cc67622d831a10cfa3a2.webp",
    title: "Why 925 Silver with 18kt Gold Coating Makes the Perfect Gift",
    tags: ["NEW", "SILVER", "STORIES"],
  },
  {
    href: "/components/blogs/how-to-care-silver",
    image: "/images/brands/hira_vermile/recentblogpost/639cdc8cc15dd31cf7c5e7518725c0a6_d6172333-2ffb-4aad-9777-2e02c41ba18f.webp",
    title: "How to Care for 925 Silver Jewellery with 18kt Gold Coating",
    tags: ["NEW", "SILVER", "STORIES"],
  },
  {
    href: "/components/blogs/what-is-925-silver",
    image: "/images/brands/hira_vermile/recentblogpost/1747824236_c3e777b1-3e97-453b-9406-c6a8d682957f.jpg",
    title: "What Is 925 Silver? Everything You Need to Know About Sterling Silver",
    tags: ["NEW", "SILVER", "STORIES"],
  },
];

export default function RecentBlogPosts() {
  return (
    <section className="w-full bg-[#fdeedf] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <div className="text-[12px] tracking-[0.25em] uppercase text-black/70">
            Blogs
          </div>
          <h2
            style={{ fontFamily: "Open Sans" }}
            className="mt-3 text-[28px] sm:text-[34px] md:text-[56px] font-semibold"
          >
            Recent blog posts
          </h2>
        </div>

        {/* Blog List */}
        <div
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4
            sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:overflow-visible sm:pb-0
          "
        >
          {posts.map((post, i) => (
            <article
              key={i}
              className="flex flex-col min-w-[80%] sm:min-w-0 snap-center"
            >
              <Link
                href={post.href}
                className="group block relative w-full aspect-[3/5] overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 80vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={i === 0}
                />
              </Link>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[12px] tracking-wide text-black/70 uppercase">
                {post.tags.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              {/* Title */}
              <Link
                href={post.href}
                className="mt-2 text-[20px] sm:text-[24px] md:text-[32px] leading-snug font-medium hover:opacity-80 transition-opacity"
              >
                {post.title}
              </Link>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <Link
            href="/blogs/news"
            className="inline-flex items-center justify-center h-[48px] px-8 border border-black text-black text-sm tracking-wide uppercase hover:bg-black hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
