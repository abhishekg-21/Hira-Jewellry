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
  const cart = useCart() as any; // supports add(), maybe open()

  return (
    <button
      type="button"
      aria-label="Add to cart"
      className="absolute top-100 right-3 w-10 h-10 border border-black  grid place-items-center hover:bg-white transition"
      onClick={(e) => {
        e.preventDefault(); // keep from navigating the Link
        cart.add?.({ productId, title, image, priceCents });
        cart.open?.(); // if your context exposes open()
      }}
    >
      {/* use your existing cart icon asset */}
      <Image src="/images/ChatGPT Image Aug 8, 2025, 11_35_04 AM.png" alt="" width={18} height={18} />
    </button>
  );
}
