// app/(sale)/engagement-sale/_sections/ProductGrid.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatINR } from "@/app/lib/money";

/** UI shape used by the grid */
type UIProduct = {
  id: string;
  title: string;
  price: string;
  img: string;
  href: string;
  rating?: number;
  reviews?: number;
};

function Stars({ n = 4 }: { n?: number }) {
  const safe = Math.max(0, Math.min(5, n));
  return (
    <div className="text-[11px] text-yellow-500" aria-label={`${safe} out of 5`}>
      {"★★★★★".slice(0, safe)}
      <span className="text-neutral-300">{"★★★★★".slice(safe)}</span>
    </div>
  );
}

type Props =
  | {
      /** If you already fetched products in the page, pass them here. */
      products: UIProduct[];
      where?: never;
      take?: never;
      order?: never;
    }
  | {
      /** Optional DB filter; e.g. { productType: "RING" } */
      where?: Record<string, unknown>;
      /** Max number of products to fetch (default 48) */
      take?: number;
      /** Sort order by title (default "asc") */
      order?: "asc" | "desc";
      /** When fetching from DB, products prop is omitted */
      products?: undefined;
    };

/**
 * Server component: if `products` is provided, it renders them.
 * Otherwise it fetches from Prisma using `where` / `take` / `order`.
 */
export default async function ProductGrid(props: Props) {
  let list: UIProduct[] = [];

  if (props.products) {
    // Use provided data
    list = props.products;
  } else {
    // Fetch from DB
    const where = props.where ?? {};
    const take = props.take ?? 48;
    const order = props.order ?? "asc";

    const db = await prisma.product.findMany({
      where,
      orderBy: { title: order },
      take,
      select: {
        productId: true,
        slug: true,
        title: true,
        priceCents: true,
        imageUrl: true,
      },
    });

    list = db.map((p) => ({
      id: p.productId,
      title: p.title,
      price: formatINR(p.priceCents),
      img: p.imageUrl || "/images/placeholder.jpg",
      href: `/products/${p.slug}`,
      // demo fields; wire these up if you store ratings
      rating: 4,
      reviews: 0,
    }));
  }

  if (!list.length) {
    return (
      <section className="mt-4">
        <div className="text-center text-sm text-neutral-600">No products found.</div>
      </section>
    );
  }

  return (
    <section className="mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {list.map((p) => (
          <Link key={p.id} href={p.href} className="group block" prefetch={false}>
            {/* Image */}
            <div className="relative w-full aspect-[4/5] bg-white overflow-hidden rounded-sm">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-contain"
              />
            </div>

            {/* Details */}
            <div className="mt-2 space-y-1">
              <div className="text-[12px] leading-5 line-clamp-2">{p.title}</div>
              <div className="text-[12px] font-semibold">{p.price}</div>
              <div className="flex items-center gap-2">
                <Stars n={p.rating ?? 4} />
                <span className="text-[10px] text-neutral-500">{p.reviews ?? 0}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
