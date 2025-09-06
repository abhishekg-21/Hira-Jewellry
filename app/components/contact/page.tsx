// app/pages/contact/page.tsx
import ContactForm from "./ContactForm";

export const metadata = { title: "Contact • Hira Jewellery" };

export default function ContactPage() {
  return (
    <main className="bg-[#fbf7f0] text-black">
      <section className="px-4 sm:px-6 lg:px-8 pt-14 pb-20">
        <header className="max-w-[700px] mx-auto">
          <h1 className="text-[44px] font-semibold tracking-tight">Contact</h1>
        </header>

        {/* EXACT single-column view */}
        <div className="mt-10 max-w-[600px] mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
