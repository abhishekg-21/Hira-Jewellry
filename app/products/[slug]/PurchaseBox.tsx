"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function PurchaseBox({
  productId, title, imageUrl, priceCents,
}: { productId:string; title:string; imageUrl:string; priceCents:number }) {
  const { add, open } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <>
      <div className="mt-3">
        <div className="text-center text-xs tracking-wide text-black">QUANTITY</div>
        <div className="mt-1 mx-auto max-w-[520px]">
          <div className="flex items-center justify-between text-lg">
            <button className="px-2 leading-none" aria-label="Decrease" onClick={() => setQty(q => Math.max(1, q-1))}>−</button>
            <span className="select-none">{qty}</span>
            <button className="px-2 leading-none" aria-label="Increase" onClick={() => setQty(q => q+1)}>+</button>
          </div>
        </div>
      </div>

      <div className="mt-2 h-px bg-black max-w-[520px] mx-auto" />

      <div className="mt-1 max-w-[320px] mx-auto grid gap-2">
        <button
          className="w-full border border-black py-2 text-sm tracking-wide hover:bg-black hover:text-white transition "
          onClick={() => { add({ productId, title, image: imageUrl, priceCents, quantity: qty }); open(); }}
        >
          ADD TO CART
        </button>
        <button
          className="w-full border border-black py-2 text-sm tracking-wide hover:bg-black hover:text-white transition "
          onClick={() => { add({ productId, title, image: imageUrl, priceCents, quantity: qty }); open(); }}
        >
          BUY IT NOW
        </button>
      </div>
    </>
  );
}
