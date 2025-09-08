"use client";
import { useCart } from "@/app/context/CartContext";

type Props = {
  productId: string;
  slug: string;                 // required by CartLine
  title: string;
  image: string;
  priceCents: number;
  variant?: string;
};

export default function AddToCartButton({
  productId, slug, title, image, priceCents, variant,
}: Props) {
  const { add } = useCart();
  return (
    <button onClick={() => add({ productId, slug, title, image, priceCents, variant })}>
      ADD TO CART
    </button>
  );
}
