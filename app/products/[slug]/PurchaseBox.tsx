// app/products/[slug]/PurchaseBox.tsx
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

type Props = {
  productId: string;
  title: string;
  imageUrl: string;
  priceCents: number;
  variant?: string;
};

export default function PurchaseBox({
  productId, title, imageUrl, priceCents, variant,
}: Props) {
  const { add, open } = useCart();
  const [qty, setQty] = useState(1);

  // read slug from the dynamic route
  const params = useParams<{ slug: string | string[] }>();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const onAdd = () => {
    // `add` expects: Omit<CartLine, "id" | "quantity"> & { quantity?: number }
    add({
      productId,
      slug,                 // ✅ include required slug
      title,
      image: imageUrl,
      priceCents,
      variant,
      quantity: qty,        // if your `add` signature takes quantity separately, remove this
    });
    open();
  };

  return (
    <>
      <div className="mt-3">
        <div className="text-center text-xs tracking-wide text-black">QUANTITY</div>
        <div className="mt-1 mx-auto max-w-[520px]">
          <div className="flex items-center justify-between text-lg">
            <button
              className="px-2 leading-none"
              aria-label="Decrease"
              onClick={() => setQty(q => Math.max(1, q - 1))}
            >
              −
            </button>
            <span className="select-none">{qty}</span>
            <button
              className="px-2 leading-none"
              aria-label="Increase"
              onClick={() => setQty(q => q + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="mt-2 h-px bg-black max-w-[520px] mx-auto" />

      <div className="mt-1 max-w-[320px] mx-auto grid gap-2">
        <button
          className="w-full border border-black py-2 text-sm tracking-wide hover:bg-black hover:text-white transition"
          onClick={onAdd}           // ✅ use the handler with slug
        >
          ADD TO CART
        </button>
        <button
          className="w-full border border-black py-2 text-sm tracking-wide hover:bg-black hover:text-white transition"
          onClick={onAdd}           // ✅ same here
        >
          BUY IT NOW
        </button>
      </div>
    </>
  );
}
