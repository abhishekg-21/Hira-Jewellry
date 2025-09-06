// app/policies/shipping-policy/page.tsx
export const metadata = { title: "Shipping Policy • Hira Jewellery" };

export default function ShippingPolicyPage() {
  return (
    <main className="bg-[#fbf7f0] text-black">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">Shipping Policy</h1>

        <p className="text-[15px] leading-7 text-neutral-800">
          <strong>Orders are usually shipped within 10–15 working days</strong>, while in-stock items are dispatched in
          <strong> 1–2 working days</strong>. Personalized and made-to-order products take longer and may cause your order to
          arrive in parts. We offer <strong>free shipping across India</strong>; international shipping and returns are chargeable.
          Tracking details will be shared via WhatsApp, email, and SMS once your order is shipped. Please note,
          <strong> Saturdays, Sundays, and national holidays are non-working days</strong>.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-4 divide-y divide-neutral-200 border-t border-b">
          <details className="py-4 group">
            <summary className="cursor-pointer font-medium flex justify-between">
              When will my order be shipped?
              <span className="text-neutral-400 group-open:rotate-180 transition">▾</span>
            </summary>
            <p className="mt-2 text-[15px] leading-7 text-neutral-800">
              In-stock: 1–2 working days; Made-to-order: 10–15 working days.
            </p>
          </details>

          <details className="py-4 group">
            <summary className="cursor-pointer font-medium flex justify-between">
              Do personalized items take longer?
              <span className="text-neutral-400 group-open:rotate-180 transition">▾</span>
            </summary>
            <p className="mt-2 text-[15px] leading-7 text-neutral-800">
              Yes, they require additional processing time.
            </p>
          </details>

          <details className="py-4 group">
            <summary className="cursor-pointer font-medium flex justify-between">
              Will my order arrive in parts?
              <span className="text-neutral-400 group-open:rotate-180 transition">▾</span>
            </summary>
            <p className="mt-2 text-[15px] leading-7 text-neutral-800">
              If your order includes both personalized and non-personalized items, the non-personalized items may ship first.
              Your order may be split and delivered in parts.
            </p>
          </details>

          <details className="py-4 group">
            <summary className="cursor-pointer font-medium flex justify-between">
              Is shipping free?
              <span className="text-neutral-400 group-open:rotate-180 transition">▾</span>
            </summary>
            <p className="mt-2 text-[15px] leading-7 text-neutral-800">
              We offer free shipping on all domestic orders. International orders and return shipments do not qualify for free shipping.
            </p>
          </details>

          <details className="py-4 group">
            <summary className="cursor-pointer font-medium flex justify-between">
              How will I get tracking info?
              <span className="text-neutral-400 group-open:rotate-180 transition">▾</span>
            </summary>
            <p className="mt-2 text-[15px] leading-7 text-neutral-800">
              Tracking details are shared via WhatsApp, email, and SMS after shipping.
            </p>
          </details>

          <details className="py-4 group">
            <summary className="cursor-pointer font-medium flex justify-between">
              Are weekends counted as working days?
              <span className="text-neutral-400 group-open:rotate-180 transition">▾</span>
            </summary>
            <p className="mt-2 text-[15px] leading-7 text-neutral-800">
              No. Saturdays, Sundays, and national holidays are non-working.
            </p>
          </details>

          <details className="py-4 group">
            <summary className="cursor-pointer font-medium flex justify-between">
              Does COD affect delivery time?
              <span className="text-neutral-400 group-open:rotate-180 transition">▾</span>
            </summary>
            <p className="mt-2 text-[15px] leading-7 text-neutral-800">
              Yes. COD shipping durations can vary based on your location, product type (especially personalized items), and the courier.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
