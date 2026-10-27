"use client";

import React from "react";
import Link from "next/link";
import Wordmark from "./Wordmark";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-[#3D130E] text-[#F3E0DC] border-t border-[#F3E0DC]/15 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-12 border-b border-[#F3E0DC]/15">
          {/* Brand Identity */}
          <div className="flex flex-col space-y-3">
            <Link href="/" className="inline-block focus:outline-none" aria-label="SKYVERIYA Home">
              <Wordmark showSubtitle={true} light={true} />
            </Link>
            <p className="font-display text-xs uppercase tracking-[0.16em] text-[#D4A59A]">
              Nine Clouds, infinite values
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="font-display text-xs uppercase tracking-[0.18em] text-[#D4A59A] block mb-4 font-semibold">
              Navigation
            </span>
            <ul className="space-y-2.5 font-display text-xs tracking-[0.14em] uppercase text-[#F3E0DC]/80">
              <li>
                <Link href="/" className="hover:text-[#F3E0DC] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F3E0DC] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F3E0DC] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F3E0DC] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Supplied Contact Information */}
          <div>
            <span className="font-display text-xs uppercase tracking-[0.18em] text-[#D4A59A] block mb-4 font-semibold">
              Contact
            </span>
            <div className="space-y-3 font-display text-xs tracking-wider text-[#F3E0DC]/85">
              <div>
                <a href="mailto:info@skyveriya.com" className="hover:text-[#4285F4] transition-colors">
                  info@skyveriya.com
                </a>
              </div>

              <div className="space-y-1">
                <div>
                  <a
                    href="https://wa.me/917400032221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4285F4] transition-colors"
                  >
                    +91 74000 32221
                  </a>
                </div>
                <div>
                  <a
                    href="https://wa.me/919512216644"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4285F4] transition-colors"
                  >
                    +91 95122 16644
                  </a>
                </div>
              </div>

              <div className="font-editorial text-xs text-[#F3E0DC]/75">
                Mumbai · By appointment only
              </div>

              <div className="text-xs text-[#F3E0DC]/60 pt-1">
                Instagram · LinkedIn
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-display uppercase tracking-[0.16em] text-[#D4A59A] gap-4">
          <div>
            SKYVERIYA
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#F3E0DC] hover:text-[#4285F4] transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 13V3M4 7l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
