"use client";
import { useCart } from "@/app/context/CartContext";

export default function AddToCartButton({
  productId, title, image, priceCents, variant,
}: { productId: string; title: string; image: string; priceCents: number; variant?: string }) {
  const { add } = useCart();
  return (
    <button onClick={() => add({ productId, title, image, priceCents, variant })}>
      ADD TO CART
    </button>
  );
}
