// app/products/[slug]/ClientAddToCart.tsx
"use client";
import { useParams } from "next/navigation";
import AddToCartButton from "@/app/components/AddToCartButton";

type Props = {
  productId: string;
  title: string;
  image: string;       // e.g. "/images/mahakaal.jpg" or https://...
  priceCents: number;  // paise (₹2650 → 265000)
  variant?: string;
};

export default function ClientAddToCart({
  productId, title, image, priceCents, variant,
}: Props) {
  const params = useParams<{ slug: string | string[] }>();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam; // normalize

  return (
    <AddToCartButton
      productId={productId}
      slug={slug}
      title={title}
      image={image}
      priceCents={priceCents}
      variant={variant}
    />
  );
}
