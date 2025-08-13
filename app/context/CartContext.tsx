"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

export type CartLine = {
  id: string;              // unique line id
  productId: string;       // your product id/slug
  title: string;
  image: string;
  priceCents: number;      // store as paise/cents
  quantity: number;
  variant?: string | null;
};

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
};

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (line: Omit<CartLine, "id" | "quantity"> & { quantity?: number }) => void;
  remove: (lineId: string) => void;
  updateQty: (lineId: string, qty: number) => void;
  clear: () => void;
  subtotalCents: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "hj_cart_v1";

function useLocalStorage<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(initial);
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) setState(JSON.parse(raw));
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);
  return [state, setState] as const;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [{ lines, isOpen }, setCart] = useLocalStorage<CartState>(STORAGE_KEY, { lines: [], isOpen: false });

  const api = useMemo<CartContextValue>(() => {
    const open = () => setCart((c) => ({ ...c, isOpen: true }));
    const close = () => setCart((c) => ({ ...c, isOpen: false }));
    const toggle = () => setCart((c) => ({ ...c, isOpen: !c.isOpen }));

    const add: CartContextValue["add"] = (line) =>
      setCart((c) => {
        const existing = c.lines.find((l) => l.productId === line.productId && l.variant === line.variant);
        if (existing) {
          return {
            ...c,
            lines: c.lines.map((l) =>
              l === existing ? { ...l, quantity: l.quantity + (line.quantity ?? 1) } : l
            ),
            isOpen: true,
          };
        }
        const id = crypto.randomUUID();
        return { ...c, lines: [...c.lines, { ...line, id, quantity: line.quantity ?? 1 }], isOpen: true };
      });

    const remove = (lineId: string) =>
      setCart((c) => ({ ...c, lines: c.lines.filter((l) => l.id !== lineId) }));

    const updateQty = (lineId: string, qty: number) =>
      setCart((c) => ({
        ...c,
        lines: c.lines.map((l) => (l.id === lineId ? { ...l, quantity: Math.max(1, qty) } : l)),
      }));

    const clear = () => setCart((c) => ({ ...c, lines: [] }));

    const subtotalCents = lines.reduce((sum, l) => sum + l.priceCents * l.quantity, 0);

    return { lines, isOpen, open, close, toggle, add, remove, updateQty, clear, subtotalCents };
  }, [lines, isOpen, setCart]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
