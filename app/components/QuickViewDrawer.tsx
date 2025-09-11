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

          {/* Drawer */}
          <motion.aside
            className="fixed right-0 top-0 h-dvh w-full max-w-[420px] bg-white z-[99999] shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <div className="text-sm font-medium">Quick view</div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {/* Product Image */}
              <div className="relative w-[260px] h-[320px] bg-[#f9f9f9] rounded-md overflow-hidden mx-auto">
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
              <div>
                <div className="text-lg font-semibold">{product.title}</div>
                <div className="text-base text-black font-medium mt-1">
                  {priceText}
                </div>
              </div>

              {/* Options Dropdown */}
              {product.options?.map((o) => (
                <div key={o.name}>
                  <label className="text-sm text-neutral-700 block mb-1">
                    {o.name}
                  </label>
                  <select
                    value={selected[o.name]}
                    onChange={(e) =>
                      setSelected((s) => ({
                        ...s,
                        [o.name]: e.target.value,
                      }))
                    }
                    className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm"
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
              <div>
                <label className="text-sm text-neutral-700 block mb-1">
                  Quantity
                </label>
                <div className="inline-flex items-center border border-neutral-300 rounded-md overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease"
                    className="px-3 py-2 border-r"
                  >
                    –
                  </button>
                  <span className="px-4 select-none">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Increase"
                    className="px-3 py-2 border-l"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Description */}
              <div>
                <div className="text-sm text-neutral-700 mb-1">Description</div>
                <p className="text-sm leading-6 text-neutral-800">
                  {product.description ||
                    `This Beautiful piece of jewelry is made up of 92.5 pure sterling silver and is coated with 18kt gold. Handcrafted by skilled workers and fairly priced for your everyday use. 

Purity – 92.5 Pure Silver coated with 18kt gold.
Diamond Quality – Swarovski zircon
Pearl Quality – Good Quality Fresh water Pearls`}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t sticky bottom-0 bg-white">
              <button
                onClick={handleAdd}
                className="w-full h-11 bg-black text-white text-sm font-medium rounded-md hover:opacity-90 transition"
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
