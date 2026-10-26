import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormClient from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact — SKYVERIYA | Every engagement begins with a conversation.",
  description:
    "Direct channels and confidential inquiry salon for SKYVERIYA. Mumbai studio by appointment. Email and WhatsApp direct.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#BC4639] text-[#F3E0DC]">
      {/* Editorial Header */}
      <Header />

      {/* Main Contact Section with Suspense for URL search params */}
      <Suspense
        fallback={
          <div className="min-h-[70vh] flex items-center justify-center text-xs uppercase tracking-widest text-[#D4A59A] font-display">
            Loading Atelier Inquiry Salon...
          </div>
        }
      >
        <ContactFormClient />
      </Suspense>

      {/* Refined Footer */}
      <Footer />
    </main>
  );
}
