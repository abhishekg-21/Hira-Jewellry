// app/brands/endless/_sections/FooterEndless.tsx
"use client";

import Link from "next/link";

function IconSocial({ label }: { label: string }) {
  const map = {
    Facebook: "f",
    Instagram: "◎",
    Twitter: "✕",
    Pinterest: "●",
  } as const;
  return (
    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full border border-current text-[12px]">
      {map[label as keyof typeof map]}
    </span>
  );
}

export default function FooterEndless() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-3">Customer Care</h3>
            <ul className="space-y-2 text-[15px]">
              <li><Link href="#" className="hover:underline">Live Chat</Link></li>
              <li>1-800-242-2728</li>
              <li><Link href="#" className="hover:underline">Email Us</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
              <li><Link href="#" className="hover:underline">Returns</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-3">Why Blue Nile</h3>
            <ul className="space-y-2 text-[15px]">
              <li>Returns Are Free</li>
              <li>Conflict Free Diamonds</li>
              <li>Diamond Price Matching</li>
              <li>Diamond Upgrade Program</li>
              <li>Free Lifetime Warranty</li>
              <li>Free Secure Shipping</li>
              <li>Blue Nile Packaging</li>
              <li>Blue Nile Credit Card</li>
              <li>Jewelry Insurance</li>
              <li>Jewelry Protection Plans</li>
              <li>Tax &amp; Duty Calculator</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-3">About Blue Nile</h3>
            <ul className="space-y-2 text-[15px]">
              <li>Quality &amp; Value</li>
              <li>Reviews</li>
              <li>Diamond Sustainability</li>
              <li>Blue Nile Blog</li>
              <li>Locations</li>
              <li>Careers</li>
              <li>Affiliate Program</li>
            </ul>
          </div>

          {/* Column 4 – Join list */}
          <div>
            <h3 className="font-semibold mb-3">Join the Blue Nile - List</h3>
            <p className="text-[15px]">Get Exclusive Offers and News</p>
            <div className="mt-3">
              <div className="flex items-center border-b border-neutral-300 pb-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 outline-none text-[15px] placeholder:text-neutral-500"
                />
                <button className="ml-3 text-[14px] font-semibold">JOIN</button>
              </div>
              <p className="mt-3 text-[13px] text-neutral-600">
                I agree to receive promotional emails from Blue Nile. You can unsubscribe at any time.
                By clicking join, you accept our <Link href="#" className="underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Social row */}
        <div className="mt-8 flex items-center gap-6">
          <Link href="#" className="flex items-center gap-2">
            <IconSocial label="Facebook" /> Facebook
          </Link>
          <Link href="#" className="flex items-center gap-2">
            <IconSocial label="Instagram" /> Instagram
          </Link>
          <Link href="#" className="flex items-center gap-2">
            <IconSocial label="Twitter" /> Twitter
          </Link>
          <Link href="#" className="flex items-center gap-2">
            <IconSocial label="Pinterest" /> Pinterest
          </Link>
        </div>

        {/* Bottom legal row */}
        <div className="mt-10 border-t border-neutral-200 pt-6 flex flex-col md:flex-row items-center gap-4">
          <div className="text-[32px] font-semibold mr-auto">Blue Nile</div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]">
            <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Site Map</Link>
            <Link href="#" className="hover:underline">Accessibility</Link>
            <Link href="#" className="hover:underline">Cookies Settings</Link>
            <Link href="#" className="hover:underline">Cookies Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
