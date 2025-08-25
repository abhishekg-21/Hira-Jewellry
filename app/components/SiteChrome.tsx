"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEndless = pathname?.startsWith("/brands/endless");

  // On Endless routes, don't render the global header/footer.
  if (isEndless) return <>{children}</>;

  // Everywhere else, keep your normal shell.
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
