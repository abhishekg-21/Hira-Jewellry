// app/components/CartDrawer.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCart } from "@/app/context/CartContext";
import { formatINR } from "@/app/lib/money";
import useLockBodyScroll from "@/app/hooks/useLockBodyScroll";

export default function CartDrawer() {
  const { isOpen, close, lines, subtotalCents, updateQty, remove } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(isOpen);

  // ESC to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  // focus first actionable when opened
  useEffect(() => {
    if (!isOpen) return;
    const first = panelRef.current?.querySelector<HTMLElement>("[data-autofocus]");
    first?.focus();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (blur + dim) */}
          <motion.div
            aria-hidden
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Drawer Panel */}
          <motion.aside
            role="dialog"
            aria-labelledby="cart-title"
            aria-modal="true"
            ref={panelRef}
            className="fixed right-0 top-0 h-dvh w-full max-w-[460px] bg-[#fbf5ea] z-50 flex flex-col shadow-2xl "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6">
              <h2 id="cart-title" className="text-[28px] font-semibold tracking-tight">
                Cart
              </h2>

              {/* “X  CLOSE” like screenshot */}
              <button
                onClick={close}
                className="flex items-center gap-2 text-sm tracking-wide text-black hover:opacity-70"
                data-autofocus
                aria-label="Close cart"
              >
                <span className="text-lg leading-none">✕</span>
                <span className="uppercase">Close</span>
              </button>
            </div>

            {/* Divider under header */}
            <div className="h-px bg-neutral-200" />

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
              {lines.length === 0 ? (
                <div className="text-center text-sm text-neutral-500 py-20">
                  Your cart is empty.
                </div>
              ) : (
                lines.map((l) => (
                  <div key={l.id} className="grid grid-cols-[92px_1fr_auto] gap-4 items-start">
                    {/* Thumbnail */}
                    <div className="relative w-[92px] h-[92px] rounded-md overflow-hidden bg-[#fbf5ea]">
                      <Image
                        src={l.image}
                        alt={l.title}
                        fill
                        sizes="92px"
                        className="object-contain"
                      />
                    </div>

                    {/* Title, price, qty/remove */}
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-snug line-clamp-2">
                        {l.title}
                      </p>
                      <p className="mt-1 text-sm text-neutral-700">{formatINR(l.priceCents)}</p>

                      {/* qty controls + REMOVE (inline) */}
                      <div className="mt-2 inline-flex items-center gap-3">
                        <button
                          className="w-7 h-7 grid place-items-center text-sm hover:bg-neutral-50"
                          onClick={() => updateQty(l.id, Math.max(1, l.quantity - 1))}
                          aria-label="Decrease quantity"
                        >
                          –
                        </button>
                        <span className="text-sm">{l.quantity}</span>
                        <button
                          className="w-9 h-9 grid place-items-center text-sm hover:bg-neutral-50"
                          onClick={() => updateQty(l.id, l.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>

                        <button
                          className="text-xs underline text-neutral-700 ml-2 hover:text-black"
                          onClick={() => remove(l.id)}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>

                    {/* Line total at far right */}
                    <div className="text-sm font-medium whitespace-nowrap mt-1">
                      {formatINR(l.priceCents * l.quantity)}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 p-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-700">ESTIMATED TOTAL</span>
                <span className="font-semibold">{formatINR(subtotalCents)}</span>
              </div>

              <p className="text-xs text-neutral-500">
                Taxes and <span className="underline">shipping</span> calculated at checkout
              </p>

              {/* Thin-outline button like screenshot */}
              <button
                className="mt-1 w-full h-11 border border-black text-sm tracking-wide hover:bg-black hover:text-white transition rounded-none"
                onClick={() => {
                  // hook to your checkout route / Razorpay etc.
                }}
              >
                CHECKOUT
              </button>

              <Link
                href="/cart"
                onClick={close}
                className="block text-center text-xs underline text-neutral-700 hover:text-black"
              >
                VIEW CART
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
