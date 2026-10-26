"use client";

import React, { useEffect, useRef } from "react";
import { ServiceItem } from "@/data/servicesData";
import NineCloudsArt from "./NineCloudsArt";

interface ServiceDialogProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

export default function ServiceDialog({
  service,
  isOpen,
  onClose,
  triggerElement,
}: ServiceDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap, Escape key, and body scroll lock
  useEffect(() => {
    if (!isOpen || !service) return;

    // Save previous active element for focus restoration
    const previouslyFocused = triggerElement || (document.activeElement as HTMLElement | null);

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Set initial focus to the close button or first interactive element
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
      // Restore focus
      previouslyFocused?.focus?.();
    };
  }, [isOpen, service, onClose, triggerElement]);

  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-dialog-title"
      aria-describedby="service-dialog-intro"
    >
      {/* Backdrop (optimized without expensive full-screen blur) */}
      <div
        className="fixed inset-0 bg-[#240A07]/92 transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog Window */}
      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-[#5C2018] via-[#4A1913] to-[#3D130E] border border-[#F3E0DC]/25 text-[#F3E0DC] p-6 sm:p-10 shadow-2xl focus:outline-none"
      >
        {/* Subtle Paper Grain */}
        <div className="absolute inset-0 editorial-grain opacity-25 pointer-events-none rounded-2xl" />

        {/* Top Header Bar */}
        <div className="relative z-10 flex items-start justify-between border-b border-[#F3E0DC]/15 pb-6 gap-4">
          <div className="flex items-center gap-4">
            {/* Miniature Ornamental Cloud Icon */}
            <div className="w-14 h-10 sm:w-16 sm:h-12 flex-shrink-0 flex items-center justify-center">
              <NineCloudsArt cloudType={service.cloudType} className="w-full h-full" strokeColor="#F3E0DC" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-display text-[10px] tracking-[0.3em] uppercase text-[#D4A59A] font-medium">
                  Cloud {service.id} · {service.numeral} of IX
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
              </div>
              <span className="font-display text-xs tracking-[0.2em] uppercase text-[#F3E0DC]/80 font-light">
                {service.shortLabel}
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex-shrink-0 p-2.5 rounded-full border border-[#F3E0DC]/30 text-[#F3E0DC]/80 hover:text-[#F3E0DC] hover:border-[#F3E0DC] hover:bg-[#F3E0DC]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
            aria-label="Close service dialog"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Core Content Body */}
        <div className="relative z-10 py-6 space-y-6">
          {/* Full Official Title */}
          <h2
            id="service-dialog-title"
            className="font-display font-normal text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.16em] text-[#F3E0DC] leading-snug"
          >
            {service.fullTitle}
          </h2>

          {/* Introductory Line */}
          <p
            id="service-dialog-intro"
            className="font-editorial italic text-lg sm:text-xl text-[#F3E0DC]/90 leading-relaxed border-l-2 border-[#BC4639] pl-4 sm:pl-6 my-4"
          >
            “{service.intro}”
          </p>

          {/* Editorial Summary */}
          <p className="font-editorial text-base sm:text-lg text-[#F3E0DC]/80 leading-relaxed">
            {service.summary}
          </p>

          {/* Core Pillars */}
          <div className="pt-4">
            <h3 className="font-display text-xs uppercase tracking-[0.28em] text-[#D4A59A] mb-4 font-semibold">
              Core Methodologies & Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#5C2018]/50 border border-[#F3E0DC]/10 hover:border-[#F3E0DC]/25 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BC4639]" />
                    <h4 className="font-display text-xs uppercase tracking-[0.18em] text-[#F3E0DC] font-medium">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-editorial text-xs sm:text-sm text-[#F3E0DC]/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Deliverables */}
          <div className="pt-4 border-t border-[#F3E0DC]/15">
            <h3 className="font-display text-xs uppercase tracking-[0.28em] text-[#D4A59A] mb-3 font-semibold">
              Commission Deliverables
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-display tracking-wider text-[#F3E0DC]/80">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#4285F4]">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="relative z-10 pt-6 mt-4 border-t border-[#F3E0DC]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A59A] font-display">
            Skyveriya Atelier Commission Protocol
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-6 py-3 rounded-full border border-[#F3E0DC]/30 text-[#F3E0DC] font-display text-xs uppercase tracking-[0.2em] hover:bg-[#F3E0DC]/10 transition-colors"
            >
              Close
            </button>
            <a
              href={`#contact?service=${service.id}`}
              onClick={onClose}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#F3E0DC] text-[#5C2018] font-display text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#FAF4F2] hover:shadow-lg transition-all"
            >
              <span>Enquire about this service</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
