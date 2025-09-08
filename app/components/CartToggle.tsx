"use client";
import { useCart } from "@/app/context/CartContext";

export default function CartToggle({ children }: { children: React.ReactNode }) {
  const { toggle, lines } = useCart();
  const count = lines.reduce((n, l) => n + l.quantity, 0);

  return (
    <button
      onClick={toggle}
      aria-label="Open cart"
      className="relative"
    >
      {children}
      {count > 0 && (
        <span
          className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 text-[9px] sm:text-[10px] md:text-[11px] leading-none px-1 py-0.5 sm:px-1.5 sm:py-1 rounded-full bg-black text-white min-w-[16px] sm:min-w-[18px] text-center"
        >
          {count}
        </span>
      )}
    </button>
  );
}
