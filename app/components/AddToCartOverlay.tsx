// app/components/AddToCartOverlay.tsx
"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function AddToCartOverlay({
  productId,
  title,
  image,
  priceCents,
}: {
  productId: string;
  title: string;
  image: string;
  priceCents: number;
}) {
  const cart = useCart() as any;

  return (
    <button
      type="button"
      aria-label="Add to cart"
      className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 border border-black grid place-items-center bg-white/90 hover:bg-white transition rounded"
      onClick={(e) => {
        e.preventDefault();
        cart.add?.({ productId, title, image, priceCents });
        cart.open?.();
      }}
    >
      <Image
        src="/images/ChatGPT Image Aug 8, 2025, 11_35_04 AM.png"
        alt="Cart"
        width={16}
        height={16}
        className="sm:w-[18px] sm:h-[18px] object-contain"
      />
    </button>
  );
}
