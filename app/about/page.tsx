import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — SKYVERIYA",
  description: "Nine skies entrusted. Built for artists. The World of Creators.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#BC4639] text-[#F3E0DC]">
      <Header />

      {/* Hero Banner: Nine skies entrusted. Built for artists. */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#BC4639] text-[#F3E0DC] select-none">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-editorial italic text-3xl sm:text-5xl lg:text-6xl text-[#F3E0DC] font-normal leading-tight">
            Nine skies entrusted. Built for artists.
          </h1>
        </div>
      </section>

      {/* Why "nine skies" Section (Pale Ivory Reading Area) */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#F3E0DC] text-[#5C2018] select-none">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-light text-2xl sm:text-3xl uppercase tracking-[0.14em] text-[#5C2018] mb-8">
            Why “nine skies”
          </h2>

          <div className="space-y-6 font-editorial text-base sm:text-lg text-[#5C2018]/90 leading-relaxed">
            <p>
              Every creative life has many horizons: the legal, the commercial, the public, the personal. We bring nine of them under one roof, connected and in conversation with each other.
            </p>
            <p>
              Every creative career rests on more than talent. Behind the work are contracts to manage, records to protect, opportunities to weigh, relationships to build and a business to grow. Too often, artists carry all of this alone.
            </p>
            <p>
              Skyveriya exists to change that. We are one team that looks after the whole structure around your practice, so that what you make is protected, presented and placed where it belongs. We are a one-stop service company for the creative industry, looking after the business behind creativity so artists can stay focused on the work they were meant to do.
            </p>
          </div>
        </div>
      </section>

      {/* What we believe Section */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#5C2018] text-[#F3E0DC] select-none border-t border-[#F3E0DC]/15">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-light text-2xl sm:text-3xl uppercase tracking-[0.14em] text-[#F3E0DC] mb-10">
            What we believe
          </h2>

          <div className="space-y-6 border-l-2 border-[#BC4639] pl-6 font-editorial text-xl sm:text-2xl text-[#F3E0DC] leading-snug">
            <p>Art that is documented lasts.</p>
            <p>Art that is presented well travels.</p>
            <p>Art that is protected grows in value.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
