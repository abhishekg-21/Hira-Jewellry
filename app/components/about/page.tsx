// app/about/page.tsx
import Image from "next/image";

export const metadata = {
  title: "About Hira Jewellery",
};

export default function AboutPage() {
  return (
    <main className="bg-[#fbf7f0] text-black">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-14">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-600">
            About Hira Jewellery
          </p>
          <h1 className="mt-2 text-3xl sm:text-[34px] font-semibold tracking-tight">
            A Story of Unparalleled
            <br />
            Craftsmanship
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-neutral-700">
            We are manufacturers of fine Gold and Silver jewelry. With the experience of 35+ years we offer
            you great work, quality and prices. Quality should never be a compromise. We design our pieces
            to be unique, durable, attractive and can be passed on to future generations. We are here to
            cultivate sparkling relationships. When you order from us, whether it is for first time, you
            become part of our family. We treat our customers with honesty and respect they deserve.
          </p>
        </header>

        {/* 5-tile strip (center diamond) */}
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-5 gap-2">
          <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-[#f2ecdf]">
            <Image
              src="/images/about/hero1.jpg"
              alt=""
              fill
              sizes="(min-width:1024px) 18vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-[#f2ecdf]">
            <Image src="/images/about/hero2.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] rounded-md overflow-hidden grid place-items-center bg-[#f2ecdf]">
            <svg width="120" height="80" viewBox="0 0 120 80" className="text-[#c7a766]">
              <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
                <path d="M10 30 L30 10 L90 10 L110 30 L60 75 Z" />
                <path d="M30 10 L60 30 L90 10" />
                <path d="M10 30 L60 30 L110 30" />
                <path d="M60 30 L60 75" />
              </g>
            </svg>
          </div>
          <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-[#f2ecdf]">
            <Image src="/images/about/hero4.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-[#f2ecdf]">
            <Image src="/images/about/hero5.jpg" alt="" fill className="object-cover" />
          </div>
        </div>

        {/* tiny pager dots under strip */}
        <div className="mt-6 flex items-center justify-center gap-2 pb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-black/70" />
          <span className="inline-block w-2 h-2 rounded-full bg-black/20" />
        </div>
      </section>

      {/* Split section: left image, right beige with heading + paragraph + table */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 rounded-md overflow-hidden">
          {/* Left image (black & white workshop) */}
          <div className="relative min-h-[360px]">
            <Image
              src="/images/about/karigar_bw.jpg"
              alt="Crafting jewellery"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right beige block */}
          <div className="bg-[#f3e5d6] px-6 sm:px-10 py-10">
            <h2 className="text-4xl md:text-5xl font-medium text-center">Our Backbone</h2>

            <p className="mt-6 text-[17px] leading-8 text-black/80 text-center">
              As we all know that best jewellery karigars are mostly from Calcutta. History has it that Bengali
              karigars from the region are amongst the most preferred labors in manufacturing of gold and
              diamond jewelry. We follow the same ancient tradition for more than 35+ years of making gold and
              diamond jewelry from our skilled Bengali karigars who specialize in curating imagination into
              reality. We want our clients to feel the same pride when wearing the pieces from our store that
              we do in making your jewelry.
            </p>

            {/* Comparison table */}
            <div className="mt-10">
              <table className="w-full border-2 border-black text-center">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="w-1/2 py-5 md:py-6 text-4xl md:text-5xl font-medium border-r-2 border-black">
                      Hira
                    </th>
                    <th className="w-1/2 py-5 md:py-6 text-4xl md:text-5xl font-medium">Others</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-top border-r-2 border-black">
                      <div className="px-6 md:px-10 py-8 md:py-10 space-y-8 text-[16px] md:text-[17px] text-black/85">
                        <div>Manufacturer → consumer</div>
                        <div>50–100% off on making charges</div>
                        <div>Customisable jewellery</div>
                        <div>No extra charges</div>
                      </div>
                    </td>
                    <td className="align-top">
                      <div className="px-6 md:px-10 py-8 md:py-10 space-y-8 text-[16px] md:text-[17px] text-black/85">
                        <div>Manufacturer → wholesaler → retailer → consumer</div>
                        <div>Expensive making charges</div>
                        <div>Cannot be customised</div>
                        <div>Extra retail price and taxes</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
