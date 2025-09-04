import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BrandStrip from "./components/BrandStrip";
import SiteChrome from "./components/SiteChrome";   // ← new wrapper
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hira Jewellery",
  description: "Fine jewellery by Hira",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fefaf2]`}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            {/* keep the brand strip everywhere */}
            {/* <BrandStrip /> */}

            {/* decides whether to show global header/footer */}
            <SiteChrome>{children}</SiteChrome>
          </div>

          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
