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
    <main className="min-h-screen flex flex-col bg-[#F3E0DC] text-[#5C2018]">
      <Header />

      {/* Hero: Nine skies entrusted. Built for artists. */}
      <section className="relative w-full pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-16 bg-[#F3E0DC] text-[#5C2018] select-none">
        <div className="max-w-4xl mx-auto">
          <div className="w-10 h-[1.5px] bg-[#BC4639] mb-6" />
          <h1 className="font-editorial italic text-3xl sm:text-5xl lg:text-6xl text-[#5C2018] font-normal leading-tight">
            Nine skies entrusted. Built for artists.
          </h1>
        </div>
      </section>

      {/* Why "nine skies" Section */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#F3E0DC] text-[#5C2018] select-none border-t border-[#5C2018]/15">
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
      <section className="relative w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[#FAF4F2] text-[#5C2018] select-none border-t border-[#5C2018]/15">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-light text-2xl sm:text-3xl uppercase tracking-[0.14em] text-[#5C2018] mb-10">
            What we believe
          </h2>https://127.0.0.1:56345/static/artifacts/5debe0e6-fe0a-4afb-8d19-6b0e4da99ca0/.user_uploaded/media_1793100306934.png?csrf=1ec88d73-9772-4e99-914a-4e9307202eea

          <div className="space-y-6 border-l-2 border-[#BC4639] pl-6 font-editorial text-xl sm:text-2xl text-[#5C2018] leading-snug">
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
