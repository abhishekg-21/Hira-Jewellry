// app/policies/terms-of-service/page.tsx
export const metadata = { title: "Terms of Use • Hira Jewellery" };

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#fbf7f0] text-black">
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-[34px] font-semibold tracking-tight">Terms of Use</h1>

        <p className="mt-6 leading-7 text-neutral-800">
          Welcome to Hira Jewellery. By accessing or using this Site, you agree to be bound by these Terms of
          Use and our policies referenced here (Privacy Policy, Shipping Policy, and Refund Policy). If you do
          not agree, please do not use the Site.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Use of the Site</h2>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-800">
          <li>You may use the Site only for lawful purposes and in accordance with these Terms.</li>
          <li>
            Product images, descriptions, and prices are subject to change. We reserve the right to modify or
            discontinue any part of the Site at any time.
          </li>
          <li>
            All content on the Site—including text, graphics, logos, and images—is the property of Hira
            Jewellery or its licensors and is protected by applicable intellectual property laws.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Orders &amp; Payments</h2>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-800">
          <li>Placing an order constitutes an offer to purchase. We may accept or decline any order.</li>
          <li>
            In the event of pricing or typographical errors, we reserve the right to cancel orders prior to
            shipment.
          </li>
          <li>Please review our Shipping and Refund policies for timelines and return eligibility.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Limitation of Liability</h2>
        <p className="mt-3 leading-7 text-neutral-800">
          To the fullest extent permitted by law, Hira Jewellery shall not be liable for any indirect,
          incidental, special, or consequential damages arising out of your use of the Site or products
          purchased through it.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Governing Law</h2>
        <p className="mt-3 leading-7 text-neutral-800">
          These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive
          jurisdiction of the courts located in Mumbai, Maharashtra.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-3 leading-7 text-neutral-800">
          For questions regarding these Terms, please contact us via{" "}
          <a className="underline" href="https://wa.me/917208247761" target="_blank">
            WhatsApp +91&nbsp;7208247761
          </a>{" "}
          or the “Contact Us” page.
        </p>
      </section>
    </main>
  );
}
