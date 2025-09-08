"use client";
import { useCart } from "@/app/context/CartContext";

type Props = {
  productId: string;
  slug: string; // required by CartLine
  title: string;
  image: string;
  priceCents: number;
  variant?: string;
};

export default function AddToCartButton({
  productId,
  slug,
  title,
  image,
  priceCents,
  variant,
}: Props) {
  const { add } = useCart();
  return (
    <button
      onClick={() => add({ productId, slug, title, image, priceCents, variant })}
      className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wide border border-black bg-white hover:bg-black hover:text-white transition-colors"
    >
      ADD TO CART
    </button>
  );
}
