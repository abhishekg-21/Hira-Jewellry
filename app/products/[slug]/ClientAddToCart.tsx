// app/products/[slug]/ClientAddToCart.tsx
"use client";
import AddToCartButton from "@/app/components/AddToCartButton";

export default function ClientAddToCart({
  productId, title, image, priceCents, variant,
}: { productId: string; title: string; image: string; priceCents: number; variant?: string }) {
  return (
    <AddToCartButton
      productId={productId}
      title={title}
      image={image}                 // e.g. "/images/mahakaal.jpg" or https://...
      priceCents={priceCents}       // paise (₹2650 → 265000)
      variant={variant}
    />
  );
}
