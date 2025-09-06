// app/policies/refund-policy/page.tsx
export const metadata = { title: "Refund Policy • Hira Jewellery" };

export default function RefundPolicyPage() {
  return (
    <main className="bg-[#fbf7f0] text-black">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">REFUND POLICY</h1>

        <p className="text-[15px] leading-7 text-neutral-800">
          We offer a <strong>7-day return policy</strong> for all unused and unworn items. However, please note that
          the 7-day return does not apply to <strong>personalized/custom jewellery</strong>, except in cases of
          defective or spurious products. HIRA reserves the right to process refunds after checking the returned
          items.
        </p>

        <p className="mt-4 text-[15px] leading-7 text-neutral-800">
          In case of missing items in return orders (e.g., the customer claims to have returned multiple products but
          the actual pickup doesn’t include all items), the company has a right to deduct up to the <strong>full MRP</strong> of
          the missing product from the refund amount. This extends to promotional products, including but not limited
          to <strong>free gifts and silver coins</strong>.
        </p>

        <h2 className="mt-8 font-semibold">Refund Policy:</h2>
        <p className="mt-2 text-[15px] leading-7 text-neutral-800">
          If you have requested a return, the refund of the same shall be initiated once we receive the product
          back in our warehouse.
        </p>

        <h2 className="mt-6 font-semibold">Replacement &amp; Exchange:</h2>
        <p className="mt-2 text-[15px] leading-7 text-neutral-800">
          You can request a replacement or exchange of your order as per your requirements. The conditions remain
          the same as those applicable to returns. The replacement will only be shipped after the initial return has
          been picked up or delivered.
        </p>

        <p className="mt-4 text-[15px] leading-7 text-neutral-800">
          In case of <strong>missing, damaged, or broken products</strong> upon receiving the parcel, an
          <strong> unboxing video</strong> of the parcel is <strong>mandatory</strong> to avail a new product.
        </p>

        <h2 className="mt-6 font-semibold">Cancellation Policy:</h2>
        <p className="mt-2 text-[15px] leading-7 text-neutral-800">
          Once an order is placed, it cannot be canceled.
        </p>

        <h2 className="mt-6 font-semibold">Return Process:</h2>
        <ol className="list-decimal pl-5 space-y-2 text-[15px] leading-7 text-neutral-800 mt-2">
          <li>Submit a return request from your account (profile icon → returns) or the Refund Policy page.</li>
          <li>Log in to your account. Enter your email and click <em>Continue</em>.</li>
          <li>Open the email sent from our store and copy the six-digit verification code.</li>
          <li>Return to the store and enter the six-digit code.</li>
          <li>Choose the order you want to return and select the item(s).</li>
          <li>Select a reason, add a note (optional), then click <em>Request return</em>.</li>
          <li>
            If approved and shipping is required, you’ll receive an email with instructions and a return label.
            After the product is received, your refund will be processed.
          </li>
        </ol>

        <h2 className="mt-6 font-semibold">Return Window &amp; Condition:</h2>
        <p className="mt-2 text-[15px] leading-7 text-neutral-800">
          Items must be returned within <strong>7 days</strong> of receiving the order. Jewellery must be unworn and in
          original condition, accompanied by original packaging and any certificates.
          <br />
          <strong>Non-returnable unless defective:</strong> custom/personalized pieces, engraved items, rings, and sale items.
        </p>

        <h2 className="mt-6 font-semibold">Please note:</h2>
        <ul className="list-disc pl-5 space-y-2 text-[15px] leading-7 text-neutral-800">
          <li>Liking or disliking a product is not a valid reason for return or replacement.</li>
          <li>False claims may result in strict action.</li>
        </ul>
      </section>
    </main>
  );
}
