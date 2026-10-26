import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/servicesData";
import NineCloudsArt from "@/components/NineCloudsArt";
import { CelestialStar } from "@/components/OrnamentalCloud";

export const metadata: Metadata = {
  title: "Services — SKYVERIYA | The Nine Celestial Disciplines",
  description:
    "Explore the nine sovereign disciplines of SKYVERIYA. Strategic management, exhibition architecture, marketing, logistics, and legacy governance.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#BC4639] text-[#F3E0DC]">
      {/* Editorial Header */}
      <Header />

      {/* ==============================================================
          HERO BANNER: THE NINE CELESTIAL DISCIPLINES
         ============================================================== */}
      <section className="relative w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-[#BC4639] via-[#A83A2E] to-[#5C2018] select-none">
        <div className="absolute inset-0 editorial-grain opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-6">
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#F3E0DC]/40" />
            <span className="font-display text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4A59A] font-medium">
              Atelier Compendium · 09 Disciplines
            </span>
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#F3E0DC]/40" />
          </div>

          <h1 className="font-display font-light text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#F3E0DC] leading-none mb-4 sm:mb-6">
            The Nine Disciplines
          </h1>

          <p className="font-editorial italic text-xl sm:text-2xl lg:text-3xl text-[#F3E0DC] font-normal leading-tight max-w-3xl mb-6 sm:mb-8">
            “Nine clouds entrusted to preserve the creator’s sovereignty.”
          </p>

          <div className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#F3E0DC]/50 to-transparent mb-6 sm:mb-8" />

          <p className="font-editorial text-lg sm:text-xl text-[#F3E0DC]/85 max-w-2xl leading-relaxed">
            Every service is engineered with institutional rigor, archival permanence, and profound alignment with your creative spirit.
          </p>
        </div>
      </section>

      {/* ==============================================================
          NUMBERED ANCHOR INDEX (QUICK NAVIGATION RIBBON)
         ============================================================== */}
      <div className="sticky top-0 z-40 w-full bg-[#3D130E]/95 backdrop-blur-md border-y border-[#F3E0DC]/15 py-3 px-4 sm:px-8 overflow-x-auto scrollbar-none select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 min-w-max">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4A59A] font-display font-semibold mr-2">
            Index:
          </span>
          <div className="flex items-center gap-4 sm:gap-6">
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#service-${s.id}`}
                className="group flex items-center gap-1.5 font-display text-xs uppercase tracking-wider text-[#F3E0DC]/70 hover:text-[#F3E0DC] transition-colors"
              >
                <span className="text-[10px] text-[#D4A59A] font-light">{s.id}</span>
                <span className="group-hover:underline underline-offset-4">{s.shortLabel.replace(/^[0-9]{2}\s*/, "")}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ==============================================================
          NINE DETAILED SERVICE SECTIONS
         ============================================================== */}
      <div className="w-full flex flex-col">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={`service-${service.id}`}
              className={`relative w-full py-24 sm:py-32 lg:py-36 px-4 sm:px-8 lg:px-16 scroll-mt-14 select-none ${
                isEven
                  ? "bg-[#F3E0DC] text-[#5C2018]"
                  : "bg-gradient-to-b from-[#5C2018] via-[#4A1913] to-[#3D130E] text-[#F3E0DC]"
              }`}
            >
              {/* Paper Grain Overlay */}
              <div
                className={`absolute inset-0 editorial-grain pointer-events-none ${
                  isEven ? "opacity-25" : "opacity-20"
                }`}
              />

              <div className="relative z-10 max-w-6xl mx-auto">
                {/* Top Section Header: Number & Artwork */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-8 mb-12 gap-8"
                  style={{ borderColor: isEven ? "rgba(188,70,57,0.25)" : "rgba(243,224,220,0.15)" }}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="font-display text-5xl sm:text-6xl font-light"
                      style={{ color: isEven ? "#BC4639" : "#F3E0DC" }}
                    >
                      {service.id}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-display text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold"
                          style={{ color: isEven ? "#BC4639" : "#D4A59A" }}
                        >
                          Discipline {service.numeral} / IX
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                      </div>
                      <h2
                        className="font-display font-medium text-xs sm:text-sm uppercase tracking-[0.25em]"
                        style={{ color: isEven ? "#5C2018" : "#F3E0DC" }}
                      >
                        {service.shortLabel}
                      </h2>
                    </div>
                  </div>

                  {/* Matching Ornamental Cloud Artwork */}
                  <div className="w-48 h-28 sm:w-56 sm:h-32 flex items-center justify-center">
                    <NineCloudsArt
                      cloudType={service.cloudType}
                      className="w-full h-full drop-shadow-sm"
                      strokeColor={isEven ? "#5C2018" : "#F3E0DC"}
                    />
                  </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  {/* Left Column: Full Official Title & Narrative */}
                  <div className="lg:col-span-7 space-y-6">
                    <h3
                      className="font-display font-light text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.16em] leading-snug"
                      style={{ color: isEven ? "#5C2018" : "#F3E0DC" }}
                    >
                      {service.fullTitle}
                    </h3>

                    {/* Introductory Line Quote */}
                    <p
                      className="font-editorial italic text-lg sm:text-xl lg:text-2xl leading-relaxed pl-5 border-l-2"
                      style={{
                        borderColor: isEven ? "#BC4639" : "#BC4639",
                        color: isEven ? "#5C2018" : "#F3E0DC",
                      }}
                    >
                      “{service.intro}”
                    </p>

                    {/* Full Narrative Details */}
                    <p
                      className="font-editorial text-base sm:text-lg leading-relaxed pt-2"
                      style={{ color: isEven ? "rgba(92,32,24,0.85)" : "rgba(243,224,220,0.85)" }}
                    >
                      {service.summary}
                    </p>

                    {/* Service-Specific Enquiry Link Button */}
                    <div className="pt-6">
                      <Link
                        href={`/contact?service=${service.id}`}
                        className={`inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-display text-xs uppercase tracking-[0.22em] font-semibold transition-all shadow-sm ${
                          isEven
                            ? "bg-[#5C2018] text-[#F3E0DC] hover:bg-[#3D130E] hover:shadow-md"
                            : "bg-[#F3E0DC] text-[#5C2018] hover:bg-[#FAF4F2] hover:shadow-lg"
                        }`}
                      >
                        <span>Enquire About {service.shortLabel.replace(/^[0-9]{2}\s*/, "")}</span>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: 4 Pillars & Deliverables */}
                  <div className="lg:col-span-5 space-y-8">
                    {/* Core Pillars */}
                    <div>
                      <span
                        className="font-display text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold block mb-4"
                        style={{ color: isEven ? "#BC4639" : "#D4A59A" }}
                      >
                        Core Methodology Architecture
                      </span>
                      <div className="space-y-3">
                        {service.pillars.map((pillar, pIdx) => (
                          <div
                            key={pIdx}
                            className={`p-4 rounded-xl border transition-colors ${
                              isEven
                                ? "bg-[#FAF4F2] border-[#BC4639]/20"
                                : "bg-[#5C2018]/50 border-[#F3E0DC]/10"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#BC4639]" />
                              <h4
                                className="font-display text-xs uppercase tracking-[0.16em] font-medium"
                                style={{ color: isEven ? "#5C2018" : "#F3E0DC" }}
                              >
                                {pillar.title}
                              </h4>
                            </div>
                            <p
                              className="font-editorial text-xs sm:text-sm leading-relaxed"
                              style={{ color: isEven ? "rgba(92,32,24,0.75)" : "rgba(243,224,220,0.7)" }}
                            >
                              {pillar.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div
                      className="pt-6 border-t"
                      style={{ borderColor: isEven ? "rgba(188,70,57,0.2)" : "rgba(243,224,220,0.15)" }}
                    >
                      <span
                        className="font-display text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold block mb-3"
                        style={{ color: isEven ? "#BC4639" : "#D4A59A" }}
                      >
                        Commission Deliverables
                      </span>
                      <ul className="space-y-2 text-xs font-display tracking-wider">
                        {service.deliverables.map((del, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-center gap-2"
                            style={{ color: isEven ? "#5C2018" : "rgba(243,224,220,0.85)" }}
                          >
                            <span className="text-[#4285F4]">✦</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ==============================================================
          BOTTOM INQUIRY BRIDGE
         ============================================================== */}
      <section className="relative w-full py-20 px-4 sm:px-8 lg:px-16 bg-[#3D130E] text-[#F3E0DC] text-center border-t border-[#F3E0DC]/15 select-none">
        <div className="max-w-3xl mx-auto space-y-6">
          <CelestialStar className="w-8 h-8 mx-auto text-[#4285F4]" />
          <h3 className="font-display font-light text-2xl sm:text-4xl uppercase tracking-[0.18em] text-[#F3E0DC]">
            Initiate Atelier Governance
          </h3>
          <p className="font-editorial italic text-base sm:text-lg text-[#F3E0DC]/80">
            Our directors are available for confidential consultations on single commissions or full representation across all nine skies.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#F3E0DC] text-[#5C2018] font-display text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#FAF4F2] transition-all"
            >
              <span>Begin a Conversation</span>
              <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Refined Footer */}
      <Footer />
    </main>
  );
}
