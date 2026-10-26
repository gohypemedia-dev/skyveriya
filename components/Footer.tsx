"use client";

import React from "react";
import Link from "next/link";
import Wordmark from "./Wordmark";
import { servicesData } from "@/data/servicesData";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-[#3D130E] text-[#F3E0DC] border-t border-[#F3E0DC]/15 select-none overflow-hidden">
      {/* Subtle Paper Grain */}
      <div className="absolute inset-0 editorial-grain opacity-20 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F3E0DC]/15">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <Link href="/" className="inline-block focus:outline-none" aria-label="SKYVERIYA Home">
              <Wordmark showSubtitle={true} light={true} />
            </Link>

            <p className="font-editorial italic text-base sm:text-lg text-[#F3E0DC]/80 leading-relaxed max-w-sm">
              “Our promise is in our tagline: nine skies entrusted. Infinite values sculpted with eternal craft.”
            </p>

            <div className="pt-2 text-xs font-display tracking-[0.25em] uppercase text-[#D4A59A]">
              Bespoke Creative Atelier · Est. 2026
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-2">
            <span className="font-display text-[11px] uppercase tracking-[0.3em] text-[#D4A59A] block mb-5 font-semibold">
              Index
            </span>
            <ul className="space-y-3 font-display text-xs tracking-[0.2em] uppercase text-[#F3E0DC]/80">
              <li>
                <Link href="/" className="hover:text-[#F3E0DC] transition-colors">
                  01 / Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F3E0DC] transition-colors">
                  02 / About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F3E0DC] transition-colors">
                  03 / Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F3E0DC] transition-colors">
                  04 / Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Nine Clouds Directory Column */}
          <div className="lg:col-span-3">
            <span className="font-display text-[11px] uppercase tracking-[0.3em] text-[#D4A59A] block mb-5 font-semibold">
              Nine Disciplines
            </span>
            <ul className="space-y-2 font-display text-[11px] tracking-wider text-[#F3E0DC]/70">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#service-${s.id}`}
                    className="hover:text-[#4285F4] transition-colors flex items-center justify-between"
                  >
                    <span>{s.shortLabel}</span>
                    <span className="text-[9px] text-[#D4A59A] font-light">{s.numeral}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Confirmed Contact Details Column */}
          <div className="lg:col-span-2">
            <span className="font-display text-[11px] uppercase tracking-[0.3em] text-[#D4A59A] block mb-5 font-semibold">
              Confirmed Channels
            </span>
            <div className="space-y-4 font-display text-xs tracking-wider text-[#F3E0DC]/85">
              <div>
                <span className="text-[10px] text-[#D4A59A] block uppercase tracking-[0.25em]">Direct Email</span>
                <a href="mailto:info@skyveriya.com" className="hover:text-[#4285F4] transition-colors">
                  info@skyveriya.com
                </a>
              </div>

              <div>
                <span className="text-[10px] text-[#D4A59A] block uppercase tracking-[0.25em]">WhatsApp Direct</span>
                <div className="flex flex-col space-y-1">
                  <a
                    href="https://wa.me/917400032221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4285F4] transition-colors text-[11px]"
                  >
                    +91 74000 32221
                  </a>
                  <a
                    href="https://wa.me/919512216644"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4285F4] transition-colors text-[11px]"
                  >
                    +91 95122 16644
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-[#D4A59A] block uppercase tracking-[0.25em]">Studio</span>
                <p className="text-[11px] text-[#F3E0DC]/80">Mumbai · By appointment only</p>
              </div>

              <div>
                <span className="text-[10px] text-[#D4A59A] block uppercase tracking-[0.25em]">Social</span>
                <p className="text-[11px] text-[#F3E0DC]/60 tracking-wider">
                  Instagram · LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-display uppercase tracking-[0.25em] text-[#D4A59A] gap-4">
          <div>
            © 2026 SKYVERIYA Atelier. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Edition I · Nine Skies Entrusted</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#F3E0DC] hover:text-[#4285F4] transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Ascend</span>
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 13V3M4 7l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
