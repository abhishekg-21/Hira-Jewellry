// app/components/policies/privacy-policy/page.tsx
export const metadata = { title: "Privacy Policy • Hira Jewellery" };

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fbf7f0] text-black">
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-[34px] font-semibold tracking-tight">Privacy Policy</h1>

        <p className="mt-6 leading-7 text-neutral-800">
          This Privacy Policy explains how Hira Jewellery (“us,” “we,” or “our”) collects, uses, maintains,
          and discloses information collected from users of <strong>https://hirajewellery.com/</strong> (the
          “Site”). This policy applies to the Site and all products and services offered by Hira Jewellery.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Personal Identification Information</h2>
        <p className="mt-3 leading-7 text-neutral-800">
          We may collect personal identification information from users in various ways, including when users
          visit the Site, register, place an order, subscribe to a newsletter, or engage with other site
          features. Users may be asked for, as appropriate, name, email address, mailing address, phone
          number, and payment information.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Non-personal Identification Information</h2>
        <p className="mt-3 leading-7 text-neutral-800">
          We may collect non-personal information about users whenever they interact with the Site, including
          browser name, computer type, technical information about users’ means of connection to the Site,
          such as operating system and internet service providers utilized.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Web Browser Cookies</h2>
        <p className="mt-3 leading-7 text-neutral-800">
          We may use “cookies” to enhance user experience. Users can set their web browsers to refuse cookies
          or to alert when cookies are being sent. Some parts of the Site may not function properly if cookies
          are disabled.
        </p>

        <h2 className="mt-8 text-xl font-semibold">How We Use Collected Information</h2>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-800">
          <li>To improve customer service and respond to support needs efficiently.</li>
          <li>To personalize user experience and understand usage of our services.</li>
          <li>
            To process payments (information is used only to provide service; it is not shared with third
            parties except as necessary to provide the service).
          </li>
          <li>
            To send periodic emails/SMS/WhatsApp regarding orders, updates, inquiries, and—if opted in—our
            mailing list with news, updates, related product or service information, etc.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">How We Protect Your Information</h2>
        <p className="mt-3 leading-7 text-neutral-800">
          We adopt appropriate data collection, storage, and processing practices and security measures to
          protect against unauthorized access, alteration, disclosure, or destruction of personal information,
          transaction information, and data stored on our Site.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Sharing Your Personal Information</h2>
        <p className="mt-3 leading-7 text-neutral-800">
          We do not sell, trade, or rent users’ personal identification information. We may share generic,
          aggregated demographic information not linked to any personal identification information with our
          business partners, trusted affiliates, and advertisers for the purposes outlined above.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Changes to This Policy</h2>
        <p className="mt-3 leading-7 text-neutral-800">
          Hira Jewellery may update this policy at any time. When we do, we will revise the updated date on
          this page. We encourage users to check this page frequently to stay informed about how we help
          protect the information we collect.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Your Acceptance of These Terms</h2>
        <p className="mt-3 leading-7 text-neutral-800">
          By using this Site, you signify your acceptance of this policy. If you do not agree, please refrain
          from using our Site.
        </p>
      </section>
    </main>
  );
}
