// app/components/RecentBlogPosts.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type BlogCard = {
  href: string;
  image: string;
  title: string;
  tags: string[]; // e.g. ["NEW", "SILVER", "STORIES"]
};

const posts: BlogCard[] = [
  {
    href: "/blogs/news/why-925-silver-with-18kt-gold-coating-makes-the-perfect-gift",
    image: "/images/Necklace.jpeg", // replace with your asset
    title:
      "Why 925 Silver with 18kt Gold Coating Makes the Perfect Gift",
    tags: ["NEW", "SILVER", "STORIES"],
  },
  {
    href: "/blogs/news/how-to-care-for-925-silver-jewellery-with-18kt-gold-coating",
    image: "/images/Earring1.jpg",
    title:
      "How to Care for 925 Silver Jewellery with 18kt Gold Coating",
    tags: ["NEW", "SILVER", "STORIES"],
  },
  {
    href: "/blogs/news/what-is-925-silver-everything-you-need-to-know",
    image: "/images/Bracelet.jpg",
    title:
      "What Is 925 Silver? Everything You Need to Know About Sterling Silver",
    tags: ["NEW |", "SILVER |", "STORIES"],
  },
];

export default function RecentBlogPosts() {
  return (
    <section className="w-full bg-[#fdeedf] md:bg-[#fdeedf] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="text-[12px] tracking-[0.25em] uppercase text-black/70">
            Blogs
          </div>
          <h2 style={{ fontFamily: "Open Sans" }}className="mt-3 text-[34px] leading-tight md:text-[56px]  font-semibold">
            Recent blog posts
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <article key={i} className="flex flex-col">
              <Link
                href={post.href}
                className="group block relative w-full aspect-[3/5] overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500"
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
                className="mt-2 text-[26px] md:text-[32px] leading-snug font-medium hover:opacity-80 transition-opacity"
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
