// app/components/CartDrawer.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "@/app/context/CartContext";
import { formatINR } from "@/app/lib/money";
import useLockBodyScroll from "@/app/hooks/useLockBodyScroll";

function Portal({ children }: { children: React.ReactNode }) {
  const [node, setNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.createElement("div");
    el.id = "cart-portal";
    document.body.appendChild(el);
    setNode(el);
    return () => {
      el.parentNode?.removeChild(el);
    };
  }, []);

  if (!node) return null;
  return createPortal(children, node);
}

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

  // --- Razorpay Checkout ---
  const handleCheckout = async () => {
    if (subtotalCents < 1) return;
    try {
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amountPaise: subtotalCents,
          cart: lines.map((l) => ({
            productId: l.productId,
            title: l.title,
            quantity: l.quantity,
            priceCents: l.priceCents,
          })),
          customer: {},
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Failed to create order");
        return;
      }

      const rz: any = (window as any).Razorpay;
      if (!rz) {
        alert("Razorpay SDK failed to load");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "Hira Jewellery",
        description: `Order ${data.id}`,
        image: "/images/HIRA.png",
        order_id: data.id,
        prefill: { name: "", email: "", contact: "" },
        notes: { cart_items: `${lines.length} item(s)` },
        theme: { color: "#000000" },
        handler: async (response: any) => {
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const v = await verifyRes.json();
          if (v.ok) {
            alert("Payment successful!");
          } else {
            alert(v.error || "Verification failed");
          }
        },
        modal: { ondismiss: () => {} },
      };

      const rzp = new rz(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong while starting checkout.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

          {/* Backdrop */}
          <motion.div
            aria-hidden
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99998]"
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
            className="fixed right-0 top-0 h-dvh w-full max-w-[420px] sm:max-w-[460px] bg-[#fbf5ea] z-[99999] flex flex-col shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6">
              <h2 id="cart-title" className="text-xl sm:text-[28px] font-semibold tracking-tight">
                Cart
              </h2>
              <button
                onClick={close}
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm tracking-wide text-black hover:opacity-70 cursor-pointer"
                data-autofocus
                aria-label="Close cart"
              >
                <span className="text-lg leading-none">✕</span>
                <span className="uppercase hidden sm:inline">Close</span>
              </button>
            </div>

            <div className="h-px bg-neutral-200" />

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-6 sm:space-y-8">
              {lines.length === 0 ? (
                <div className="text-center text-sm text-neutral-500 py-12 sm:py-20">
                  Your cart is empty.
                </div>
              ) : (
                lines.map((l) => {
                  const href = `/products/${encodeURIComponent(l.slug)}`;
                  return (
                    <div
                      key={l.id}
                      className="grid grid-cols-[80px_1fr_auto] sm:grid-cols-[92px_1fr_auto] gap-3 sm:gap-4 items-start"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-[80px] h-[80px] sm:w-[92px] sm:h-[92px] rounded-md overflow-hidden bg-[#fbf5ea]">
                        <Link href="" onClick={close} aria-label={`View ${l.title}`}>
                          <Image
                            src={l.image}
                            alt={l.title}
                            fill
                            sizes="92px"
                            className="object-contain"
                          />
                        </Link>
                      </div>

                      {/* Title + price + qty */}
                      <div className="min-w-0">
                        <Link
                          href={href}
                          onClick={close}
                          className="text-sm font-medium leading-snug line-clamp-2 underline-offset-4 hover:underline"
                        >
                          {l.title}
                        </Link>
                        <p className="mt-1 text-xs sm:text-sm text-neutral-700">
                          {formatINR(l.priceCents)}
                        </p>

                        <div className="mt-2 inline-flex items-center gap-2 sm:gap-3">
                          <button
                            className="w-6 h-6 sm:w-7 sm:h-7 grid place-items-center text-sm cursor-pointer"
                            onClick={() => updateQty(l.id, Math.max(1, l.quantity - 1))}
                          >
                            –
                          </button>
                          <span className="text-xs sm:text-sm">{l.quantity}</span>
                          <button
                            className="w-7 h-7 sm:w-9 sm:h-9 grid place-items-center text-sm cursor-pointer"
                            onClick={() => updateQty(l.id, l.quantity + 1)}
                          >
                            +
                          </button>
                          <button
                            className="text-[11px] sm:text-xs underline text-neutral-700 ml-1 sm:ml-2 hover:text-black cursor-pointer"
                            onClick={() => remove(l.id)}
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>

                      {/* Line total */}
                      <div className="text-xs sm:text-sm font-medium whitespace-nowrap mt-1">
                        {formatINR(l.priceCents * l.quantity)}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 p-4 sm:p-6 space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-neutral-700">ESTIMATED TOTAL</span>
                <span className="font-semibold">{formatINR(subtotalCents)}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-500">
                Taxes and <span className="underline">shipping</span> calculated at checkout
              </p>

              <button
                className="mt-1 w-full h-10 sm:h-11 border border-black text-xs sm:text-sm tracking-wide hover:bg-black hover:text-white transition rounded-none cursor-pointer"
                onClick={handleCheckout}
              >
                CHECKOUT
              </button>

              <Link
                href="/cart"
                onClick={close}
                className="block text-center text-[11px] sm:text-xs underline text-neutral-700 hover:text-black"
              >
                VIEW CART
              </Link>
            </div>
          </motion.aside>
        </Portal>
      )}
    </AnimatePresence>
  );
}
