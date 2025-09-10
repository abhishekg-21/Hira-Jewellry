// app/blog/[slug]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogArticle() {
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
          Why 925 Silver with 18kt Gold Coating Makes the Perfect Gift
        </h1>

        {/* Meta */}
        <div className="text-[13px] text-black mb-8 flex gap-3">
          <span>June 10, 2025</span>
          <span className="text-black">blog</span>
        </div>

        {/* Hero image */}
        <div className="relative w-130 h-200 mb-8">
          <Image
            src="/images/brands/hira_vermile/recentblogpost/403a843679c4cc67622d831a10cfa3a2.webp"
            alt="Gold plated silver necklaces"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p>
            When it comes to finding the perfect gift, you want something that’s meaningful,
            beautiful, and lasting. Whether it’s a birthday, anniversary, wedding, or just a
            thoughtful gesture, 925 sterling silver jewellery with 18k gold coating checks every
            box.
          </p>
          <p className="mt-4">
            Here’s why it makes such an unforgettable gift:
          </p>

          {/* Section 1 */}
          <h2 className="mt-8 text-[20px] font-bold">1. Luxury Without the Price Tag</h2>
          <p>
            Gifting gold feels luxurious—but solid gold can be out of budget for many. That’s
            where gold-coated silver jewellery (also known as vermeil!) shines. You get the
            elegant, golden finish of 18k gold with the strength of sterling silver underneath—at
            a far more affordable price.
          </p>
          <ul className="mt-3 space-y-2 text-black">
            <li>✅ Looks premium</li>
            <li>✅ Feels meaningful</li>
            <li>✅ Fits more budgets</li>
          </ul>

          {/* Section 2 */}
          <h2 className="mt-8 text-[20px] font-bold">2. Timeless and Versatile Design</h2>
          <p>
            Gold never goes out of style. Whether your recipient is into minimalist or bold
            statement pieces, gold-coated jewellery adds that perfect golden glow. Plus, 925
            silver base makes it hypoallergenic, safe for most skin types—so you don’t have to
            worry about allergies.
          </p>
          <p className="mt-3 italic text-black/80">
            It’s the kind of gift that can be worn every day or on special occasions, making it
            feel more personal.
          </p>

          {/* Section 3 */}
          <h2 className="mt-8 text-[20px] font-bold">3. Beautifully Packaged – Ready to Gift</h2>
          <p>
            At Hira Jewellery we believe that your brand and intent, we believe the true unboxing
            experience should feel just as special as the gift itself.
          </p>
          <ul className="mt-3 space-y-2 text-black">
            <li>✨ Each order comes in a premium gift box</li>
            <li>📝 Option for a handwritten gift note</li>
            <li>🎀 With elegant ribbons and protective inner wrapping</li>
          </ul>
          <p className="mt-3">
            You can also upgrade to our <span className="underline">luxury gift packaging</span>{" "}
            with a personalised message card and reusable velvet pouch.
          </p>

          {/* Section 4 */}
          <h2 className="mt-8 text-[20px] font-bold">4. Perfect for Every Occasion</h2>
          <p>
            Looking for the ideal gift for a:
          </p>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>Birthday? Choose a birthstone necklace or initials.</li>
            <li>Anniversary? Surprise them with a romantic bracelet or locket.</li>
            <li>
              Valentine’s Day or Wedding? A heart-shaped pendant or couple set says it all.
            </li>
            <li>
              Graduation? Go for a timeless gold-plated chain they’ll treasure forever.
            </li>
          </ol>
          <p className="mt-3">
            There’s a perfect piece for every age and every story.
          </p>

          {/* Section 5 */}
          <h2 className="mt-8 text-[20px] font-bold">5. Thoughtful, Yet Practical</h2>
          <p>
            Unlike tech gadgets or trendy accessories, jewellery is personal and sentimental—
            and doesn’t become outdated.
          </p>
          <p className="mt-3">Your gift can become:</p>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>A daily reminder of your bond</li>
            <li>A lucky charm or signature piece</li>
            <li>A token of love and milestones</li>
          </ol>
          <p className="mt-3">
            Plus, 925 silver with 18k gold coating is durable when cared for properly—so your
            gift stands the test of time.
          </p>

          {/* Section 6 */}
          <h2 className="mt-8 text-[20px] font-bold flex items-center gap-2">
            📸 6. Bonus: Makes Stunning Instagram-Worthy Moments
          </h2>
          <p>
            From the shine of the jewellery to the elegance of the packaging, your gift is
            picture-perfect. Whether it’s a surprise unboxing, a birthday celebration, or a flat
            lay for Instagram, your recipient will love showing it off!
          </p>
          <p className="mt-3">
            Encourage them to tag your brand for a chance to be featured—building brand
            awareness and UGC (user-generated content)!
          </p>
        </div>
      </article>
    </main>
  );
}
