// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import your site chrome
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hira Jewellery",
  description: "Fine jewellery by Hira",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fefaf2]`}>
        {/* Page shell */}
        <div className="min-h-screen flex flex-col">
          {/* Global header on every route */}
          <Header />

          {/* Route content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Global footer on every route */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
