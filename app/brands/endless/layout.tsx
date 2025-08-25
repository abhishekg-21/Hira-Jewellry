// app/brands/endless/layout.tsx
import type { Metadata } from "next";
import HeaderEndless from "./_sections/HeaderEndless";
import FooterEndless from "./_sections/FooterEndless";

export const metadata: Metadata = { title: "Endless — Hira Jewellery" };

export default function EndlessBrandLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderEndless />
      <main className="min-h-[50vh]">{children}</main>
      <FooterEndless />
    </>
  );
}
