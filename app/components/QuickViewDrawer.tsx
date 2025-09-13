// app/components/QuickViewDrawer.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/app/context/CartContext";

type QuickViewProduct = {
  title: string;
  priceCents: number;
  slug: string;
  images: string[];
  options?: { name: string; values: string[] }[];
  description?: string;
};

export default function QuickViewDrawer({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: QuickViewProduct | null;
}) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [idx, setIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [selected, setSelected] = useState<Record<string, string>>({});
  const { add } = useCart();

  useEffect(() => {
    const el = document.createElement("div");
    el.id = "quickview-portal";
    document.body.appendChild(el);
    setNode(el);
    return () => el.remove();
  }, []);

  useEffect(() => {
    if (!product) return;
    setIdx(0);
    setQty(1);
    if (product.options?.length) {
      const firsts: Record<string, string> = {};
      product.options.forEach((o) => (firsts[o.name] = o.values[0]));
      setSelected(firsts);
    } else {
      setSelected({});
    }
  }, [product]);

  const priceText = useMemo(() => {
    const rupees = Math.round((product?.priceCents || 0) / 100);
    return `₹${rupees.toLocaleString("en-IN")}`;
  }, [product]);

  if (!node) return null;

  const handleAdd = () => {
    if (!product) return;
    const variant =
      Object.keys(selected).length > 0
        ? Object.entries(selected)
            .map(([k, v]) => `${k}:${v}`)
            .join(" / ")
        : null;

    add({
      productId: product.slug,
      slug: product.slug,
      title: product.title,
      image: product.images[0],
      priceCents: product.priceCents,
      variant,
      quantity: qty,
    });
  };

  return createPortal(
    <AnimatePresence>
      {open && product && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99990]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer (bottom sheet style) */}
          <motion.aside
            className="fixed bottom-0 left-0 right-0 h-[80vh] w-99 mx-auto bg-white z-[99999] rounded-t-2xl shadow-xl flex flex-col"
            role="dialog"
            aria-modal="true"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 text-4xl w-9 h-9 flex items-center justify-center rounded-full bg-black/70 text-white font-light"
            >
              ×
            </button>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-5 pt-3">
              {/* Product Image */}
              <div className="relative w-[220px] h-[260px] bg-[#f9f9f9] rounded-md overflow-hidden mx-auto">
                <Image
                  src={product.images[idx]}
                  alt={product.title}
                  fill
                  sizes="420px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Title + Price */}
              <div className="">
                <div className="text-lg font-semibold">{product.title}</div>
                <div className="text-base text-black font-medium mt-1 mb-5">
                  {priceText}
                </div>
              </div>

              {/* Options Dropdown */}
{product.options?.map((o) => (
  <div key={o.name} className="flex items-center justify-between border-b border-neutral-200 py-3">
    {/* Label on left */}
    <label className="text-sm font-medium text-neutral-800">
      {o.name}
    </label>

    {/* Select on right */}
    <select
      value={selected[o.name]}
      onChange={(e) =>
        setSelected((s) => ({
          ...s,
          [o.name]: e.target.value,
        }))
      }
      className="text-sm text-neutral-900 bg-transparent focus:outline-none"
    >
      {o.values.map((v) => (
        <option key={v} value={v}>
          {v}
        </option>
      ))}
    </select>
  </div>
))}


              {/* Quantity */}
<div className="flex items-center justify-between border-b border-neutral-200 py-2">
  {/* Label on the left */}
  <label className="text-sm font-medium text-neutral-800">
    Quantity
  </label>

  {/* Stepper on the right */}
  <div className="inline-flex items-center bg-neutral-100 rounded-md overflow-hidden">
    <button
      onClick={() => setQty((q) => Math.max(1, q - 1))}
      aria-label="Decrease"
      className="px-2.5 text-2xl text-bold"
    >
      –
    </button>
    <span className="px-2.5 select-none text-2xl">{qty}</span>
    <button
      onClick={() => setQty((q) => q + 1)}
      aria-label="Increase"
      className="px-2.5 text-2xl text-bold"
    >
      +
    </button>
  </div>
</div>


              {/* Description */}
              <div className="mt-5">
                <div className="text-sm font-medium text-neutral-900 mb-1">
                  Description
                </div>
                <p className="text-sm leading-6 text-neutral-700">
                  {product.description ||
                    `This Beautiful piece of jewelry is made up of 92.5 pure sterling silver and is coated with 18kt gold. Handcrafted by skilled workers and fairly priced for your everyday use. 
Purity – 92.5 Pure Silver coated with 18kt gold.
Diamond Quality – Swarovski zircon
Pearl Quality – Good Quality Fresh water Pearls`}
                </p>
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="p-6 sticky bottom-0 bg-white">
              <button
                onClick={handleAdd}
                className="w-full h-11 bg-black text-white text-sm font-medium rounded-xl hover:opacity-90 transition"
              >
                Add to cart
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    node
  );
}
