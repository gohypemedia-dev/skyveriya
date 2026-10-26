"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on ESC and prevent background scroll when open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", active: pathname === "/", numeral: "01" },
    { name: "About", href: "/about", active: pathname === "/about", numeral: "02" },
    { name: "Services", href: "/services", active: pathname === "/services", numeral: "03" },
    { name: "Contact", href: "/contact", active: pathname === "/contact", numeral: "04" },
  ];

  return (
    <header className="relative z-50 w-full select-none">
      {/* Top Hairline Editorial Bar */}
      <div className="w-full border-b border-[#F3E0DC]/15 bg-[#5C2018]/40 backdrop-blur-sm px-4 sm:px-8 py-1.5 flex items-center justify-between text-[9px] sm:text-[10px] tracking-[0.25em] text-[#D4A59A] uppercase font-display">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] animate-pulse inline-block" />
          <span>Atelier Edition 01 / 2026</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[#F3E0DC]/70">
          <span>Nine Skies Entrusted</span>
          <span className="opacity-40">|</span>
          <span>Bespoke Creative Atelier · Mumbai</span>
        </div>
        <div>
          <span className="tracking-widest">Skyveriya © Studio</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-4 sm:py-5 flex items-center justify-between border-b border-[#F3E0DC]/15 bg-[#BC4639]/90 backdrop-blur-md">
        {/* Left: SVG Wordmark Proposal */}
        <Link href="/" className="focus:outline-none" aria-label="SKYVERIYA Home">
          <Wordmark showSubtitle={true} light={true} />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`group relative py-2 font-display text-[12px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                link.active ? "text-[#F3E0DC] font-medium" : "text-[#F3E0DC]/70 hover:text-[#F3E0DC]"
              }`}
            >
              <span className="text-[9px] text-[#D4A59A] tracking-widest mr-1.5 font-light">
                {link.numeral}/
              </span>
              <span>{link.name}</span>
              {/* Active / Hover Underline indicator */}
              <span
                className={`absolute bottom-0 left-0 h-[1px] bg-[#F3E0DC] transition-all duration-300 ${
                  link.active ? "w-full" : "w-0 group-hover:w-full opacity-60"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#F3E0DC]/40 text-[#F3E0DC] font-display text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#F3E0DC] hover:bg-[#F3E0DC] hover:text-[#5C2018] shadow-sm active:scale-95"
          >
            <span>Get in touch</span>
            <svg
              className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>


        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#F3E0DC] focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span
              className={`h-[1.5px] bg-[#F3E0DC] transition-all duration-300 ${
                mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`h-[1.5px] bg-[#F3E0DC] transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-[1.5px] bg-[#F3E0DC] transition-all duration-300 ${
                mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer (optimized without expensive full-screen backdrop-blur) */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[73px] sm:top-[85px] bottom-0 z-50 bg-[#421711] transition-all duration-300 overflow-y-auto ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        <div className="absolute inset-0 editorial-grain opacity-20 pointer-events-none" />
        <div className="relative z-10 px-6 py-8 flex flex-col min-h-full justify-between">
          <div className="flex flex-col space-y-6">
            <div className="border-b border-[#F3E0DC]/15 pb-4 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4A59A] font-display">
                Index / Navigation
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#D4A59A]/60 font-display">
                Esc to Close
              </span>
            </div>
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-xl font-display uppercase tracking-[0.2em] transition-colors py-2 border-b border-[#F3E0DC]/10 ${
                    link.active ? "text-[#4285F4] font-medium" : "text-[#F3E0DC] hover:text-[#D4A59A]"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#D4A59A] font-light tracking-widest">{link.numeral} / IX</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#F3E0DC]/15 flex flex-col gap-4 mt-8">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-full border border-[#F3E0DC] bg-[#F3E0DC] text-[#5C2018] font-display text-xs uppercase tracking-[0.22em] font-medium shadow-md block"
            >
              Get in touch
            </Link>
            <p className="text-center text-[10px] tracking-[0.25em] uppercase text-[#D4A59A] font-display">
              Nine Clouds, infinite values
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
