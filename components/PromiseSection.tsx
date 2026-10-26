"use client";

import React, { useRef } from "react";
import { SkyveriyaEmblem } from "./Wordmark";
import { CloudScroll, CelestialStar } from "./OrnamentalCloud";
import { useScrollParallax } from "@/hooks/useScrollParallax";

export default function PromiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  // Zero-re-render scroll parallax directly on decorative cloud element
  useScrollParallax(sectionRef, {
    targetRef: cloudRef,
    speed: 0.07,
    maxOffset: 24,
    transformTemplate: (val) => `translate3d(0, ${val}px, 0)`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#BC4639] via-[#A83A2E] to-[#5C2018] text-[#F3E0DC] overflow-hidden select-none border-t border-[#F3E0DC]/15"
    >
      {/* Tactile Paper Texture */}
      <div className="absolute inset-0 editorial-grain opacity-25 pointer-events-none" />

      {/* Subtle Radial Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(243,224,220,0.1),transparent_70%)] pointer-events-none" />

      {/* Selective Ornamental Cloud Floating in the Flank (Subtle Parallax 15-24px, zero re-renders) */}
      <div
        ref={cloudRef}
        className="absolute top-12 -left-16 sm:left-4 opacity-40 pointer-events-none md:animate-cloud-slow lg:will-change-transform"
      >
        <CloudScroll className="w-56 h-36 sm:w-72 sm:h-44" opacity={0.6} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Emblem Accent */}
        <div className="mb-8">
          <SkyveriyaEmblem className="w-12 h-12 sm:w-14 sm:h-14 animate-celestial-pulse" light={true} />
        </div>

        {/* Delicate Overline */}
        <div className="inline-flex items-center gap-3 sm:gap-4 mb-6">
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#F3E0DC]/40" />
          <span className="font-display text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4A59A] font-medium">
            The Atelier Manifesto
          </span>
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#F3E0DC]/40" />
        </div>

        {/* The Supplied Core Promise Headline */}
        <h2 className="font-editorial italic text-3xl sm:text-5xl lg:text-6xl text-[#F3E0DC] leading-snug font-normal mb-8 sm:mb-12 max-w-3xl">
          “Our promise is in our tagline: nine skies entrusted.”
        </h2>

        {/* Editorial Divider */}
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#F3E0DC]/50 to-transparent mb-8 sm:mb-12" />

        {/* Narrative Manifesto Paragraphs */}
        <div className="space-y-6 sm:space-y-8 font-editorial text-lg sm:text-xl lg:text-2xl text-[#F3E0DC]/85 leading-relaxed sm:leading-loose max-w-3xl text-left sm:text-center">
          <p>
            We believe every creator possesses a distinct celestial domain—a realm of singular vision that deserves both boundless freedom and uncompromising guardianship. When you entrust us with your skies, we take on the gravitational weight of management, legal architecture, global logistics, and commercial strategy, freeing you to ascend without restraint.
          </p>

          <p>
            Across nine interlinked disciplines, we do not simply manage careers; we build enduring cultural institutions. From safeguarding your intellectual heritage to curating your physical exhibitions and expanding your commercial horizons, our commitment is absolute: infinite values sculpted with eternal craft.
          </p>
        </div>

        {/* Editorial Signature & Coordinates */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#F3E0DC]/15 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-display tracking-[0.25em] uppercase text-[#D4A59A]">
          <div className="flex items-center gap-2">
            <CelestialStar className="w-3.5 h-3.5 text-[#4285F4]" />
            <span>SKYVERIYA ATELIER CHARTER</span>
          </div>
          <div>
            <span>NINE SKIES · INFINITE VALUES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
