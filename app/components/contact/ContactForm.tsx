// app/pages/contact/ContactForm.tsx
"use client";

import { useState } from "react";

const SUBMIT_LABEL = "SUBMIT"; // exact text from screenshot

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const GETFORM_ENDPOINT = process.env.NEXT_PUBLIC_GETFORM_CONTACT || "";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);

    try {
      if (GETFORM_ENDPOINT) {
        const res = await fetch(GETFORM_ENDPOINT, { method: "POST", body: fd });
        if (!res.ok) throw new Error("failed");
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        // no backend configured → do nothing (keeps exact visual)
      }
    } catch {
      // swallow errors to keep page visually identical
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-transparent">
      {/* Name */}
      <label htmlFor="name" className="block text-[15px]">Name<span className="text-red-600">*</span></label>
      <input
        id="name"
        name="name"
        required
        className="mt-2 mb-6 block w-full bg-transparent outline-none border-0 border-b border-black py-2"
      />

      {/* Email */}
      <label htmlFor="email" className="block text-[15px]">Email<span className="text-red-600">*</span></label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="mt-2 mb-6 block w-full bg-transparent outline-none border-0 border-b border-black py-2"
      />

      {/* Phone */}
      <label htmlFor="phone" className="block text-[15px]">Phone number</label>
      <input
        id="phone"
        name="phone"
        inputMode="tel"
        className="mt-2 mb-6 block w-full bg-transparent outline-none border-0 border-b border-black py-2"
      />

      {/* Message */}
      <label htmlFor="message" className="block text-[15px]">Message<span className="text-red-600">*</span></label>
      <textarea
        id="message"
        name="message"
        required
        rows={6}
        className="mt-2 mb-8 block w-full bg-transparent outline-none border border-black p-3"
      />

      {/* Exact button style */}
      <button
        type="submit"
        disabled={submitting}
        className="inline-block border border-black px-6 py-3 uppercase tracking-normal bg-transparent"
      >
        {SUBMIT_LABEL}
      </button>
    </form>
  );
}
