"use client";

import React, { useState, useRef } from "react";
import { servicesData, ServiceItem } from "@/data/servicesData";
import NineCloudsArt from "./NineCloudsArt";
import ServiceDialog from "./ServiceDialog";
import { useScrollParallax } from "@/hooks/useScrollParallax";

export default function NineCloudsSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const triggerRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const sectionRef = useRef<HTMLElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);

  // Zero-re-render scroll parallax directly on background ambient glow
  useScrollParallax(sectionRef, {
    targetRef: bgGlowRef,
    speed: 0.05,
    maxOffset: 25,
    transformTemplate: (val) => `translate3d(-50%, ${val}px, 0)`,
  });

  const handleCloudClick = (service: ServiceItem) => {
    // Immediate, responsive dialog opening without artificial 360ms delay
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  // Subtle float animations active on desktop only (disabled on mobile to avoid 9 simultaneous animation layers)
  const getFloatClass = (idx: number) => {
    if (idx % 3 === 0) return "md:animate-cloud-slow";
    if (idx % 3 === 1) return "md:animate-cloud-medium";
    return "md:animate-cloud-fast";
  };

  // Desktop staggered vertical offsets (Column 1: 0, Column 2: +48px, Column 3: +24px)
  const getStaggerClass = (idx: number) => {
    const col = idx % 3;
    if (col === 1) return "lg:translate-y-12";
    if (col === 2) return "lg:translate-y-6";
    return "lg:translate-y-0";
  };

  return (
    <section
      ref={sectionRef}
      id="nine-clouds"
      className="relative w-full pt-16 sm:pt-20 lg:pt-28 pb-24 sm:pb-32 lg:pb-40 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#5C2018] via-[#4A1913] to-[#3D130E] text-[#F3E0DC] overflow-hidden select-none border-t border-[#F3E0DC]/15"
    >
      {/* Tactile Editorial Paper Texture Overlay */}
      <div className="absolute inset-0 editorial-grain opacity-20 pointer-events-none" />

      {/* Subtle Celestial Ambient Glow in Backdrop (Subtle Parallax 15-25px, zero re-renders) */}
      <div
        ref={bgGlowRef}
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(66,133,244,0.08),transparent_70%)] pointer-events-none lg:will-change-transform"
      />

      {/* ==============================================================
          SECTION INTRODUCTORY EDITORIAL HEADER
         ============================================================== */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16 sm:mb-24 lg:mb-32">
        {/* Curated Editorial Metadata Overline */}
        <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#F3E0DC]/40" />
          <span className="font-display text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4A59A] font-medium">
            The Celestial Pantheon · 09 Disciplines
          </span>
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#F3E0DC]/40" />
        </div>

        {/* Section Main Title: Nine connected services */}
        <h2 className="font-display font-light text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.12em] sm:tracking-[0.2em] uppercase text-[#F3E0DC] mb-4">
          Nine connected services.
        </h2>

        {/* Editorial Subtitle */}
        <p className="font-editorial italic text-lg sm:text-2xl md:text-3xl text-[#F3E0DC]/85 font-normal max-w-2xl mx-auto leading-relaxed">
          The Nine Clouds — each ornamental cloud opens an uncompromised pillar of creator sovereignty.
        </p>

        {/* Delicate Hairline Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#F3E0DC]/40 to-transparent mx-auto mt-6" />
      </div>

      {/* ==============================================================
          STAGGERED CELESTIAL CLOUDS GRID (DESKTOP & MOBILE RESPONSIVE)
         ============================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 pb-16">
          {servicesData.map((service, idx) => {
            return (
              <div
                key={service.id}
                className={`transition-all duration-700 ease-out ${getStaggerClass(idx)}`}
              >
                {/* Cloud Interactive Card Container */}
                <button
                  ref={(el) => {
                    triggerRefs.current[service.id] = el;
                  }}
                  onClick={() => handleCloudClick(service)}
                  className="group relative w-full flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-[#F3E0DC]/15 bg-[#5C2018]/30 hover:bg-[#5C2018]/60 hover:border-[#F3E0DC]/35 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:ring-offset-2 focus:ring-offset-[#3D130E] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] active:scale-[0.99]"
                  aria-label={`Open details for ${service.shortLabel}`}
                  aria-haspopup="dialog"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_40%,rgba(66,133,244,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Badge: Visible Number & Roman Numeral */}
                  <div className="relative z-10 flex items-center justify-between w-full border-b border-[#F3E0DC]/10 pb-3 mb-5">
                    <span className="font-display text-xs tracking-[0.25em] uppercase text-[#D4A59A] font-semibold">
                      Cloud {service.id}
                    </span>
                    <span className="font-editorial italic text-xs text-[#F3E0DC]/60 tracking-widest">
                      {service.numeral} / IX
                    </span>
                  </div>

                  {/* Animated Ornamental Cloud Artwork (Desktop ambient drift, touch optimized) */}
                  <div className="relative z-10 w-full h-36 sm:h-40 flex items-center justify-center my-2">
                    <div
                      className={`w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${getFloatClass(
                        idx
                      )}`}
                      style={{ animationDelay: `${(idx * 0.4).toFixed(1)}s` }}
                    >
                      <NineCloudsArt
                        cloudType={service.cloudType}
                        className="w-48 h-32 sm:w-56 sm:h-36"
                        strokeColor="#F3E0DC"
                      />
                    </div>
                  </div>

                  {/* Stable, Readable Short Cloud Label */}
                  <div className="relative z-10 w-full pt-4 border-t border-[#F3E0DC]/10 mt-3 flex flex-col items-center">
                    <h3 className="font-display font-medium text-sm sm:text-base uppercase tracking-[0.2em] text-[#F3E0DC] transition-colors duration-300 group-hover:text-[#FAF4F2]">
                      {service.shortLabel}
                    </h3>

                    {/* Micro-Interaction Cue */}
                    <div className="flex items-center gap-1.5 mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[#D4A59A]">
                        Explore Discipline
                      </span>
                      <svg
                        className="w-3 h-3 text-[#4285F4] transform transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accessible Service Dialog */}
      <ServiceDialog
        service={selectedService}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        triggerElement={selectedService ? triggerRefs.current[selectedService.id] : null}
      />
    </section>
  );
}
