// app/blog/how-to-care-silver/page.tsx
"use client";

import Image from "next/image";

export default function BlogArticleCare() {
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
          How to Care for 925 Silver Jewellery with 18kt Gold Coating
        </h1>

        {/* Meta */}
        <div className="text-[13px] text-gray mb-8 flex gap-3">
          <span>June 10, 2025</span>
          <span className="text-black">
            Blog
          </span>
        </div>

        {/* Hero image */}
        <div className="relative w-130 h-200 mb-8">
          <Image
            src="/images/brands/hira_vermile/recentblogpost/639cdc8cc15dd31cf7c5e7518725c0a6_d6172333-2ffb-4aad-9777-2e02c41ba18f.webp"
            alt="Care for 925 silver jewellery"
            fill
            className="object-cover"
          />
        </div>

        {/* Blog content */}
        <div className="prose prose-lg max-w-none">
          <p>
            925 silver jewellery with an 18k gold coating—also known as gold
            vermeil—is both stunning and delicate. This combination offers the
            timeless appeal of gold at a more accessible price, with the
            strength of sterling silver underneath. But to maintain its shine
            and elegance, it requires a little extra care.
          </p>
          <p className="mt-3">
            Below are expert tips to help you keep your gold-coated silver
            jewellery looking brand new for years:
          </p>

          {/* Section 1 */}
          <h2 className="mt-8 text-[20px] font-bold">
            1. Understand the Material
          </h2>
          <p>
            Gold-coated sterling silver, or vermeil, is created by plating a
            thick layer of 18kt gold over 92.5% pure silver. While durable, the
            outer gold layer can wear off over time—especially with rough use,
            sweat, chemicals, or improper storage.
          </p>

          {/* Section 2 */}
          <h2 className="mt-8 text-[20px] font-bold">
            2. Clean Gently and Infrequently
          </h2>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              Use a <strong>soft, lint-free cloth</strong> (like a microfiber
              jewellery cloth) to wipe your piece after each wear.
            </li>
            <li>
              Avoid polishing too hard—it can wear down the gold layer.
            </li>
            <li>
              If deeper cleaning is needed, dip the jewellery in{" "}
              <strong>lukewarm water with mild soap</strong>, rinse thoroughly,
              and dry with a soft towel. Never soak it.
            </li>
          </ul>

          {/* Section 3 */}
          <h2 className="mt-8 text-[20px] font-bold">
            3. Avoid Exposure to Harsh Chemicals
          </h2>
          <p>Keep your jewellery away from:</p>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>Perfumes</li>
            <li>Lotions and oils</li>
            <li>Hair sprays</li>
            <li>Cleaning products</li>
          </ol>
          <p className="mt-3">
            These can break down the gold layer and tarnish the silver beneath.
          </p>

          {/* Section 4 */}
          <h2 className="mt-8 text-[20px] font-bold">
            4. Remove Before Certain Activities
          </h2>
          <p>Take off your jewellery before:</p>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>Showering or bathing</li>
            <li>Swimming</li>
            <li>Exercising (sweat can be acidic)</li>
            <li>Doing household chores</li>
          </ol>
          <p className="mt-3">
            Even water and sweat can damage the coating over time.
          </p>

          {/* Section 5 */}
          <h2 className="mt-8 text-[20px] font-bold">
            5. Store It Properly
          </h2>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              Always store your jewellery in a{" "}
              <strong>soft pouch or a fabric-lined box</strong> to avoid
              scratches.
            </li>
            <li>
              Keep each piece separate to prevent tangling or rubbing.
            </li>
            <li>
              Store in a cool, dry place—ideally with anti-tarnish strips.
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
