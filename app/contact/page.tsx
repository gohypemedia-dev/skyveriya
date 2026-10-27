import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormClient from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact — SKYVERIYA",
  description: "Every engagement begins with a conversation. SKYVERIYA.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#BC4639] text-[#F3E0DC]">
      <Header />
      <Suspense
        fallback={
          <div className="min-h-[50vh] flex items-center justify-center font-display text-xs uppercase tracking-widest text-[#D4A59A]">
            Loading...
          </div>
        }
      >
        <ContactFormClient />
      </Suspense>
      <Footer />
    </main>
  );
}
