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
        <span className="absolute -top-1 -right-1 text-[10px] leading-none px-1.5 py-1 rounded-full bg-black text-white">
          {count}
        </span>
      )}
    </button>
  );
}
