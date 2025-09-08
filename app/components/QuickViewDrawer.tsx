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

  // Portal mount
  useEffect(() => {
    const el = document.createElement("div");
    el.id = "quickview-portal";
    document.body.appendChild(el);
    setNode(el);
    return () => el.remove();
  }, []);

  // Reset when product changes
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
    return `₹${rupees.toLocaleString("en-IN")}.00`;
  }, [product]);

  if (!node) return null;

  const next = () => {
    if (!product) return;
    setIdx((p) => (p + 1) % product.images.length);
  };
  const prev = () => {
    if (!product) return;
    setIdx((p) => (p - 1 + product.images.length) % product.images.length);
  };

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
            className="fixed right-0 top-0 h-dvh w-full max-w-full sm:max-w-[420px] bg-white z-[99999] shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 border-b">
              <div className="text-xs sm:text-sm font-medium">Quick view</div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-lg sm:text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
              {/* Gallery */}
              <div>
                <div className="relative w-[200px] sm:w-[230px] h-[280px] sm:h-[320px] bg-[#f5f5f5] rounded-md overflow-hidden mx-auto">
                  <Image
                    src={product.images[idx]}
                    alt={product.title}
                    fill
                    sizes="420px"
                    className="object-cover"
                    priority
                  />
                  {/* Arrows */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={prev}
                        aria-label="Previous"
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 grid place-items-center text-lg sm:text-xl"
                      >
                        ‹
                      </button>
                      <button
                        onClick={next}
                        aria-label="Next"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 grid place-items-center text-lg sm:text-xl"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-2">
                    {product.images.map((src, i) => (
                      <button
                        key={src + i}
                        onClick={() => setIdx(i)}
                        className={`relative aspect-square rounded border ${
                          idx === i ? "border-black" : "border-transparent"
                        } overflow-hidden`}
                        aria-label={`Image ${i + 1}`}
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Title + price */}
              <div>
                <div className="text-sm sm:text-base font-semibold">{product.title}</div>
                <div className="text-xs sm:text-sm text-neutral-700 mt-1">{priceText}</div>
              </div>

              {/* Options */}
              {product.options?.map((o) => (
                <div key={o.name}>
                  <div className="text-xs mb-1 text-neutral-600">{o.name}</div>
                  <div className="flex flex-wrap gap-2">
                    {o.values.map((v) => {
                      const active = selected[o.name] === v;
                      return (
                        <button
                          key={v}
                          onClick={() =>
                            setSelected((s) => ({
                              ...s,
                              [o.name]: v,
                            }))
                          }
                          className={`px-2 sm:px-3 py-1 text-xs sm:text-sm border ${
                            active ? "border-black" : "border-neutral-300"
                          }`}
                        >
                          {v}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Quantity */}
              <div>
                <div className="text-xs mb-1 text-neutral-600">Quantity</div>
                <div className="inline-flex items-center gap-3 sm:gap-4 border px-2 sm:px-3 py-1.5 sm:py-2 text-sm">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease"
                  >
                    –
                  </button>
                  <span className="select-none">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 border-t">
              <button
                onClick={handleAdd}
                className="w-full h-10 sm:h-11 border border-black text-xs sm:text-sm tracking-wide hover:bg-black hover:text-white transition"
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
