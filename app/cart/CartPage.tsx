"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useCart } from "@/app/context/CartContext";

function formatINR(paise: number) {
  const rupees = Math.round(paise / 100);
  return `RS. ${rupees.toLocaleString("en-IN")}.00`;
}

export default function CartPage() {
  const { lines, updateQty, remove, subtotalCents } = useCart();

  // ⬇️ moved inside the component so it can see lines/subtotalCents
  const handleCheckout = async () => {
    if (subtotalCents < 1) return;

    const res = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amountPaise: subtotalCents,
        cart: lines.map((l: any) => ({
          productId: l.productId,
          title: l.title,
          quantity: l.quantity,
          priceCents: l.priceCents,
        })),
        customer: {},
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || "Failed to create order");
      return;
    }

    const rz: any = (window as any).Razorpay;
    if (!rz) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Hira Jewellery",
      description: `Order ${data.id}`,
      image: "/images/HIRA.png",
      order_id: data.id,
      prefill: { name: "", email: "", contact: "" },
      notes: { cart_items: `${lines.length} item(s)` },
      theme: { color: "#000000" },
      handler: async (response: any) => {
        const verifyRes = await fetch("/api/razorpay/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });
        const v = await verifyRes.json();
        if (v.ok) {
          alert("Payment successful!");
        } else {
          alert(v.error || "Verification failed");
        }
      },
      modal: { ondismiss: () => {} },
    };

    const rzp = new rz(options);
    rzp.open();
  };

  return (
    <main className="bg-[#fbf7f0] min-h-screen">
      {/* ⬇️ Script must live inside a component */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <h1 className="text-[56px] leading-none font-medium tracking-tight text-black mb-10">Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12">
          <div className="lg:col-start-1">
            {lines.length === 0 ? (
              <div className="text-sm text-black py-20">
                Your cart is empty.{" "}
                <Link href="/" className="underline underline-offset-4">
                  Continue shopping
                </Link>
              </div>
            ) : (
              <>
                {lines.map((l: any) => (
                  <div key={l.id} className="py-2">
                    <div className="flex items-start gap-6">
                      <div className="w-[120px] h-[120px] rounded-sm overflow-hidden bg-[#f7f2e8] shrink-0">
  <Image
    src={l.image}
    alt={l.title}
    width={120}
    height={120}
    className="w-full h-full object-contain"
  />
</div>

                      <div className="flex-1 min-w-0">
                        <div className="text-lg text-black">{l.title}</div>
                        <div className="mt-1 text-sm text-black">{formatINR(l.priceCents)}</div>

                        <div className="mt-6 flex items-center gap-6">
                          <div className="flex items-center gap-4 text-base">
                            <button className="px-2 leading-none hover:opacity-70" aria-label="Decrease" onClick={() => updateQty(l.id, l.quantity - 1)}>–</button>
                            <span className="select-none">{l.quantity}</span>
                            <button className="px-2 leading-none hover:opacity-70" aria-label="Increase" onClick={() => updateQty(l.id, l.quantity + 1)}>+</button>
                          </div>

                          <button className="text-sm underline underline-offset-4 text-black hover:text-black" onClick={() => remove(l.id)}>
                            REMOVE
                          </button>
                        </div>
                      </div>

                      <div className="text-sm font-medium text-black whitespace-nowrap">
                        {formatINR(l.priceCents * l.quantity)}
                      </div>
                    </div>

                    
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="col-span-full h-px bg-black" />

          <aside className="lg:col-start-2">
            <div className="pt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-black tracking-wide">ESTIMATED TOTAL</span>
                <span className="font-bold text-black">{formatINR(subtotalCents)}</span>
              </div>
              <p className="mt-2 text-xs text-black">
                Taxes and <span className="underline">shipping</span> calculated at checkout
              </p>

              <button
                className="mt-6 w-full h-11 border border-black text-sm tracking-wide hover:bg-black hover:text-white transition"
                onClick={handleCheckout}
              >
                CHECKOUT
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
