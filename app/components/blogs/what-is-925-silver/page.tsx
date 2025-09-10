// app/blog/what-is-925-silver/page.tsx
"use client";

import Image from "next/image";

export default function BlogArticle925Silver() {
  return (
    <main className="bg-[#fefcf8]">
      <article className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-0 py-10">
        {/* Category tags */}
        <div className="flex gap-2 text-[11px] font-medium uppercase tracking-wide mb-5">
          <span className="border border-black px-2 py-0.5">New</span>
          <span className="border border-black px-2 py-0.5">Silver</span>
          <span className="border border-black px-2 py-0.5">Stories</span>
        </div>

        {/* Title */}
        <h1 className="text-[32px] md:text-[42px] leading-tight font-semibold mb-3">
          What Is 925 Silver? Everything You Need to Know About Sterling Silver
        </h1>

        {/* Meta */}
        <div className="text-[13px] text-black mb-8 flex gap-3">
          <span>May 15, 2025</span>
          <span className="text-black">
            Blogs
          </span>
        </div>

        {/* Hero image */}
        <div className="relative w-130 h-200 mb-8">
          <Image
            src="/images/brands/hira_vermile/recentblogpost/1747824236_c3e777b1-3e97-453b-9406-c6a8d682957f.jpg"
            alt="What is 925 silver jewellery"
            fill
            className="object-cover"
          />
        </div>

        {/* Blog content */}
        <div className="prose prose-lg max-w-none">
          {/* Intro */}
          <h2 className="text-[20px] font-bold">Introduction</h2>
          <p>
            When shopping for silver jewelry, you may have come across the term
            “925 silver” – but what does it actually mean? Is it real silver? Is
            it good quality? In this article, we break down what 925 silver is,
            how it’s made, why it’s loved in fine jewelry, and how to care for
            it to make it last for generations.
          </p>

          {/* Section 1 */}
          <h2 className="mt-8 text-[20px] font-bold">Is 925 Silver Real?</h2>
          <p>Yes — it’s real silver, just not 100% pure.</p>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>
              925 silver is recognized worldwide as a high-quality standard.
            </li>
            <li>
              If it’s stamped “925,” “Sterling,” or “Ster,” it’s genuine.
            </li>
            <li>
              Be cautious of cheap imitations labeled “silver-plated” or “nickel
              silver.”
            </li>
          </ol>

          {/* Section 2 */}
          <h2 className="mt-8 text-[20px] font-bold">
            How to Identify Authentic 925 Silver
          </h2>
          <p>Look for:</p>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>Hallmark or stamp: 925, .925, STER, or Sterling</li>
            <li>Minimal tarnishing if stored properly</li>
            <li>Reputable brands and certifications</li>
            <li>Optional: Magnetic test (silver is non-magnetic)</li>
          </ol>

          {/* Section 3 */}
          <h2 className="mt-8 text-[20px] font-bold">
            Should You Buy 925 Silver?
          </h2>
          <p>Absolutely — if you’re looking for:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              A <strong>timeless, elegant material</strong>
            </li>
            <li>
              That’s <strong>affordable, high-quality, and versatile</strong>
            </li>
            <li>
              And can be passed down as{" "}
              <strong>heirloom-quality</strong> with the right care
            </li>
          </ul>

          {/* Conclusion */}
          <h2 className="mt-8 text-[20px] font-bold">Conclusion</h2>
          <p>
            925 silver is more than just a metal — it’s a symbol of refined
            style, durability, and authenticity. Whether you’re buying your
            first piece or adding to your collection, sterling silver jewelry
            offers timeless beauty with modern value.
          </p>
        </div>
      </article>
    </main>
  );
}
