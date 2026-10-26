"use client";

import React, { useRef } from "react";
import { CloudWisp, CelestialStar } from "./OrnamentalCloud";
import { useScrollParallax } from "@/hooks/useScrollParallax";

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  // Zero-re-render scroll parallax directly on decorative cloud element
  useScrollParallax(sectionRef, {
    targetRef: cloudRef,
    speed: 0.06,
    maxOffset: 20,
    transformTemplate: (val) => `translate3d(0, ${val}px, 0)`,
  });

  const principles = [
    {
      numeral: "01",
      roman: "I",
      title: "Selectively",
      tagline: "Uncompromising focus through deliberate curation.",
      body: "We do not operate as a high-volume agency or commercial clearinghouse. At any given moment, our atelier collaborates with a strictly limited cohort of visionary creators, artist studios, and cultural institutions. This deliberate exclusivity ensures that every commission receives principal-level devotion, forensic attention to detail, and absolute creative immersion.",
      highlight: "Direct principal counsel · Maximum 12 active creator partnerships annually",
    },
    {
      numeral: "02",
      roman: "II",
      title: "Rigorously",
      tagline: "Forensic precision behind ethereal beauty.",
      body: "Artistic sovereignty cannot endure without structural invulnerability. From multi-jurisdictional copyright architectures and international museum loan agreements to climate-regulated vault logistics, our standards mirror those of premier institutional archives. We demand the same technical mastery in our contracts and operations as you demand in your art.",
      highlight: "Institutional-grade standards · Zero-compromise legal & operational architecture",
    },
    {
      numeral: "03",
      roman: "III",
      title: "In step with you",
      tagline: "Invisible custody aligned with creative cycles.",
      body: "True creative production defies quarterly corporate cycles. We do not enforce generic business templates or rigid timelines. Instead, we synchronize our rhythm with the seasons of your creative conception, intense studio production, and exhibition debuts—acting as invisible custodians who absorb operational friction so you remain in undisturbed flow.",
      highlight: "Symbiotic collaboration · Adaptive to artistic seasons and global debuts",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      className="relative w-full py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-16 bg-[#F3E0DC] text-[#5C2018] overflow-hidden select-none"
    >
      {/* Subtle Paper Grain */}
      <div className="absolute inset-0 editorial-grain opacity-30 pointer-events-none" />

      {/* Decorative Cloud Wisp on Top Perimeter (Subtle Parallax 15-20px, zero re-renders) */}
      <div
        ref={cloudRef}
        className="absolute -top-10 right-8 sm:right-16 opacity-40 pointer-events-none md:animate-cloud-slow lg:will-change-transform"
      >
        <CloudWisp className="w-64 h-32" opacity={0.6} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ==============================================================
            SECTION EDITORIAL HEADER
           ============================================================== */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 sm:w-12 h-[1px] bg-[#BC4639]" />
            <span className="font-display text-[10px] sm:text-xs uppercase tracking-[0.32em] text-[#BC4639] font-semibold">
              Atelier Methodology
            </span>
          </div>

          <h2 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl tracking-[0.16em] uppercase text-[#5C2018] mb-6">
            How We Work
          </h2>

          <p className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-[#5C2018]/90 leading-tight">
            Three guiding philosophies that govern our stewardship of visionary minds.
          </p>
        </div>

        {/* ==============================================================
            THREE PRINCIPLES: EDITORIAL TYPOGRAPHY & FINE SEPARATORS
            (NO GENERIC CARDS — PURE EDITORIAL MONOGRAPH LAYOUT)
           ============================================================== */}
        <div className="flex flex-col space-y-16 sm:space-y-24">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="pt-10 sm:pt-14 border-t border-[#BC4639]/30 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 group"
            >
              {/* Left Column: Number & Principle Title */}
              <div className="w-full lg:w-5/12 flex items-baseline gap-6">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#BC4639] transition-transform duration-500 group-hover:translate-x-1">
                  {item.numeral}
                </span>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-display text-[10px] tracking-[0.3em] uppercase text-[#BC4639] font-medium">
                      Principle {item.roman}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                  </div>

                  <h3 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.18em] text-[#5C2018] leading-tight">
                    {item.title}
                  </h3>

                  <p className="font-editorial italic text-base sm:text-lg text-[#BC4639] mt-2">
                    {item.tagline}
                  </p>
                </div>
              </div>

              {/* Right Column: Narrative Copy & Institutional Standard */}
              <div className="w-full lg:w-7/12 flex flex-col justify-between">
                <p className="font-editorial text-lg sm:text-xl lg:text-2xl text-[#5C2018]/85 leading-relaxed mb-6 font-normal">
                  {item.body}
                </p>

                {/* Fine Architectural Accent Bar */}
                <div className="pt-4 border-t border-[#5C2018]/15 flex items-center justify-between text-[11px] sm:text-xs font-display tracking-[0.2em] uppercase text-[#BC4639]">
                  <span className="flex items-center gap-2">
                    <CelestialStar className="w-3.5 h-3.5 text-[#BC4639]" />
                    <span>{item.highlight}</span>
                  </span>
                  <span className="text-[#5C2018]/40 hidden sm:inline">SKYVERIYA STANDARD</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Hairline & Direct Transition */}
        <div className="mt-20 sm:mt-28 pt-8 border-t border-[#BC4639]/30 flex flex-col sm:flex-row items-center justify-between text-xs font-display tracking-[0.25em] uppercase text-[#5C2018]/70 gap-4">
          <div className="flex items-center gap-2">
            <span>Crafted for Permanence</span>
            <span className="opacity-40">·</span>
            <span>Uncompromised Integrity</span>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[#BC4639] hover:text-[#5C2018] transition-colors"
          >
            <span>Inquire About Representation</span>
            <svg
              className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
