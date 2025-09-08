// app/_components/HideOnBrands.tsx
"use client";

import { usePathname } from "next/navigation";

export default function HideOnBrands({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Hide global chrome on any brand route
  if (pathname?.startsWith("/brands/")) return null;
  return <>{children}</>;
}
