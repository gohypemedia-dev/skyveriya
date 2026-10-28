"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
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

    const previouslyFocused = triggerElement || (document.activeElement as HTMLElement | null);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

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
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
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
      previouslyFocused?.focus?.();
    };
  }, [isOpen, service, onClose, triggerElement]);

  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-dialog-title"
      aria-describedby="service-dialog-intro"
    >
      {/* Dim Backdrop */}
      <div
        className="fixed inset-0 bg-[#240A07]/60 transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog Window (Pale Ivory Surface with Oxblood Typography) */}
      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#FAF4F2] border border-[#5C2018]/20 text-[#5C2018] p-6 sm:p-10 shadow-xl focus:outline-none"
      >
        {/* Top Header Bar */}
        <div className="relative z-10 flex items-start justify-between border-b border-[#5C2018]/15 pb-5 gap-4">
          <div className="w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0 flex items-center justify-start">
            <NineCloudsArt
              cloudType={service.cloudType}
              className="w-full h-full"
              strokeColor="#5C2018"
              fillColor="#BC4639"
              secondaryColor="#D4A59A"
              accentColor="#BC4639"
            />
          </div>

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex-shrink-0 p-2 rounded-full border border-[#5C2018]/30 text-[#5C2018]/80 hover:text-[#5C2018] hover:border-[#5C2018] hover:bg-[#5C2018]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
            aria-label="Close"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Approved Service Content */}
        <div className="relative z-10 py-6 space-y-5">
          <h2
            id="service-dialog-title"
            className="font-display font-light text-2xl sm:text-3xl uppercase tracking-[0.12em] text-[#5C2018] leading-snug"
          >
            {service.title}
          </h2>

          <p
            id="service-dialog-intro"
            className="font-editorial italic text-lg sm:text-xl text-[#5C2018] leading-relaxed border-l-2 border-[#BC4639] pl-4 my-3"
          >
            {service.intro}
          </p>

          <p className="font-editorial text-base sm:text-lg text-[#5C2018]/85 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Coordinated Actions: Secondary Outline and Accessible Primary Blue Action */}
        <div className="relative z-10 pt-5 border-t border-[#5C2018]/15 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#5C2018]/30 text-[#5C2018] hover:border-[#5C2018] hover:bg-[#5C2018]/5 font-display text-xs uppercase tracking-[0.18em] transition-colors"
          >
            Close
          </button>

          <Link
            href={`/contact?service=${service.id}`}
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full btn-primary font-display text-xs uppercase tracking-[0.18em] font-semibold"
          >
            <span>Enquire about this service</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
