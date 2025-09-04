// app/products/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ProductGallery from "@/app/components/ProductGallery";

export const runtime = "nodejs";

function formatINR(paise: number) {
  const rupees = Math.round(paise / 100);
  return `RS. ${rupees.toLocaleString("en-IN")}.00`;
}

export default async function ProductPage({
  params,
}: {
  // ✅ Next 15 server pages: params is a Promise
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
    select: {
      productId: true,
      slug: true,
      title: true,
      priceCents: true,
      imageUrl: true,
      productType: true,
    },
  });

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-black/70">Product not found.</p>
      </main>
    );
  }

  const images = [product.imageUrl || "/images/placeholder.jpg"];
  const priceText = formatINR(product.priceCents);

  const related = await prisma.product.findMany({
    where: { productType: product.productType, productId: { not: product.productId } },
    select: { slug: true, title: true, priceCents: true, imageUrl: true },
    take: 4,
  });

  return (
    <main className="bg-[#fbf7f0] min-h-screen">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery images={images} alt={product.title} />

          <div className="lg:sticky lg:top-24 self-start">
            <h1 className="mt-20 text-center text-[28px] sm:text-[26px] font-medium text-black">
              {product.title}
            </h1>

            <div className="text-center text-[14px] text-black">{priceText}</div>

            <p className="mt-1 text-center text-sm text-black">
              Shipping calculated at{" "}
              <Link href="#shipping" className="underline underline-offset-4">
                checkout
              </Link>
              .
            </p>

            {/* Quantity */}
            <div className="mt-3">
              <div className="text-center text-xs tracking-wide text-black">QUANTITY</div>
              <div className="mt-1 mx-auto max-w-[520px]">
                <div className="flex items-center justify-between text-lg">
                  <button className="px-2 leading-none" aria-label="Decrease">−</button>
                  <span className="select-none">1</span>
                  <button className="px-2 leading-none" aria-label="Increase">+</button>
                </div>
              </div>
            </div>

            {/* divider */}
            <div className="mt-2 h-px bg-black max-w-[520px] mx-auto" />

            {/* CTAs */}
            <div className="mt-1 max-w-[320px] mx-auto grid gap-2">
              <button className="w-full border border-black py-2 text-sm tracking-wide hover:bg-black hover:text-white transition">
                ADD TO CART
              </button>
              <button className="w-full border border-black py-2 text-sm tracking-wide hover:bg-black hover:text-white transition">
                BUY IT NOW
              </button>
            </div>

            {/* Badges */}
            <ul className="mt-7 max-w-[520px] mx-auto grid grid-cols-2 gap-y-2 gap-x-6 text-[11px] text-black">
              <li className="flex items-center gap-2 justify-center sm:justify-start">🪙 Fine 925 pure silver</li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">↩️ 7 Days exchange & Return</li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">🚚 Free Shipping</li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">💳 Lifetime Plating</li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">💳 Cash On Delivery</li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">💳 Authenticity Certificate</li>
            </ul>

            {/* Accordions */}
            <div
              className="mt-9 max-w-[520px] mx-auto divide-y divide-black border-y border-black"
              id="shipping"
            >
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none py-3">
                  <span className="font-medium">Description</span><span>+</span>
                </summary>
                <p className="pb-3 text-sm text-black">
                  Handcrafted Rakhi in 92.5 sterling silver with fine detailing.
                </p>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none py-3">
                  <span className="font-medium">Shipping</span><span>+</span>
                </summary>
                <div className="pb-3 text-sm text-black space-y-2">
                  <div>We offer free shipping within India.</div>
                  <div>We have both standard and express shipping options.</div>
                  <div>
                    Delivery time may vary from 8–10 days for in-stock products and 15–20 days for custom products.
                  </div>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none py-3">
                  <span className="font-medium">Payment Options</span><span>+</span>
                </summary>
                <p className="pb-3 text-sm text-black">
                  We offer both cash on delivery and prepaid options (credit cards, debit cards, net banking).
                </p>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none py-3">
                  <span className="font-medium">More Information</span><span>+</span>
                </summary>
                <div className="pb-3 text-sm text-black space-y-1">
                  <div>Imported by</div>
                  <div>Hira Jewellery</div>
                  <div className="mt-2">Marketed by</div>
                  <div>HIRA</div>
                  <div>Kalbadevi, Zaveri Bazar, Mumbai 400002</div>
                  <div className="mt-2">Country of origin:</div>
                  <div>India</div>
                </div>
              </details>
            </div>

            {/* Bottom image */}
            <div className="mt-6">
              <div className="mx-auto w-full max-w-[320px] aspect-[1/1] relative">
                <Image
                  src={"/images/packing.png"}
                  alt="Box contents"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 520px, 100vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="mt-16 pb-15">
          <h2 className="text-2xl font-medium mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map((r) => (
              <Link key={r.slug} href={`/products/${r.slug}`} className="group block">
                <div className="bg-[#fbf5ea] aspect-[3/5] relative rounded-sm">
                  <Image
                    src={r.imageUrl || "/images/packing.png"}
                    alt={r.title}
                    fill
                    className="object-contain"
                    sizes="(min-width:1024px) 25vw, 50vw"
                  />
                  <div className="absolute bottom-7 right-4 border border-black w-9 h-9 flex items-center justify-center">
                    <Image src="/images/Cart icon.png" alt="" width={22} height={24} />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-sm font-medium">{r.title}</div>
                  <div className="text-sm text-black/70">{formatINR(r.priceCents)}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
