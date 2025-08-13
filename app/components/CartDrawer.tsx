"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { formatINR } from "../lib/money";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

export default function CartDrawer() {
  const { isOpen, close, lines, subtotalCents, updateQty, remove } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(isOpen);

  // Close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  // Simple focus trap when open
  useEffect(() => {
    if (!isOpen) return;
    const first = panelRef.current?.querySelector<HTMLElement>("[data-autofocus]");
    first?.focus();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            aria-hidden
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Panel */}
          <motion.aside
            role="dialog"
            aria-labelledby="cart-title"
            aria-modal="true"
            ref={panelRef}
            className="fixed right-0 top-0 h-dvh w-full max-w-[440px] bg-white shadow-2xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <h2 id="cart-title" className="text-2xl font-semibold tracking-tight">Cart</h2>
              <button
                className="rounded-full w-9 h-9 grid place-items-center hover:bg-neutral-100"
                onClick={close}
                aria-label="Close cart"
                data-autofocus
              >
                ✕
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {lines.length === 0 ? (
                <div className="text-center text-sm text-neutral-500 py-20">
                  Your cart is empty.
                </div>
              ) : (
                lines.map((l) => (
                  <div key={l.id} className="grid grid-cols-[88px_1fr_auto] gap-4 items-start">
                    <div className="relative aspect-square w-20 rounded-md overflow-hidden bg-neutral-50">
                      <Image src={l.image} alt={l.title} fill sizes="80px" className="object-contain" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium line-clamp-2">{l.title}</p>
                      {l.variant ? (
                        <p className="text-xs text-neutral-500 mt-0.5">{l.variant}</p>
                      ) : null}
                      <p className="text-sm text-neutral-700 mt-1">{formatINR(l.priceCents)}</p>

                      {/* qty controls */}
                      <div className="mt-2 inline-flex items-center gap-3">
                        <button
                          className="w-7 h-7 rounded border text-sm hover:bg-neutral-50"
                          onClick={() => updateQty(l.id, l.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          –
                        </button>
                        <span className="text-sm">{l.quantity}</span>
                        <button
                          className="w-7 h-7 rounded border text-sm hover:bg-neutral-50"
                          onClick={() => updateQty(l.id, l.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <button
                          className="text-xs underline text-neutral-600 ml-2 hover:text-black"
                          onClick={() => remove(l.id)}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>

                    <div className="text-sm font-medium whitespace-nowrap">
                      {formatINR(l.priceCents * l.quantity)}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="border-t p-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">ESTIMATED TOTAL</span>
                <span className="font-semibold">{formatINR(subtotalCents)}</span>
              </div>
              <p className="text-xs text-neutral-500">
                Taxes and <span className="underline">shipping</span> calculated at checkout.
              </p>

              <button
                className="w-full h-11 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition text-sm font-medium"
                onClick={() => {/* integrate with your checkout route */}}
              >
                CHECKOUT
              </button>

              <Link
                href="/cart"
                className="block text-center text-xs underline text-neutral-600 hover:text-black"
                onClick={() => close()}
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
