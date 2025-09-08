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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 w-full px-3 sm:px-4 md:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
