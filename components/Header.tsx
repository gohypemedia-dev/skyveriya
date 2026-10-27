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
    { name: "Home", href: "/", active: pathname === "/" },
    { name: "About", href: "/about", active: pathname === "/about" },
    { name: "Services", href: "/services", active: pathname === "/services" },
    { name: "Contact", href: "/contact", active: pathname === "/contact" },
  ];

  return (
    <header className="relative z-50 w-full select-none bg-[#BC4639] border-b border-[#F3E0DC]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="focus:outline-none" aria-label="SKYVERIYA Home">
          <Wordmark showSubtitle={true} light={true} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-display text-xs uppercase tracking-[0.16em] transition-colors py-1 ${
                link.active
                  ? "text-[#F3E0DC] font-medium border-b border-[#F3E0DC]"
                  : "text-[#F3E0DC]/75 hover:text-[#F3E0DC]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2 rounded-full border border-[#F3E0DC]/40 text-[#F3E0DC] font-display text-xs uppercase tracking-[0.16em] font-medium transition-colors hover:border-[#F3E0DC] hover:bg-[#F3E0DC]/10"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F3E0DC] focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-5 h-4 flex flex-col justify-between items-end">
            <span
              className={`h-[1.5px] bg-[#F3E0DC] transition-transform duration-200 ${
                mobileMenuOpen ? "w-5 rotate-45 translate-y-1.5" : "w-5"
              }`}
            />
            <span
              className={`h-[1.5px] bg-[#F3E0DC] transition-opacity duration-200 ${
                mobileMenuOpen ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-[1.5px] bg-[#F3E0DC] transition-transform duration-200 ${
                mobileMenuOpen ? "w-5 -rotate-45 -translate-y-1.5" : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bottom-0 z-50 bg-[#5C2018] transition-opacity duration-200 overflow-y-auto ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        <div className="px-6 py-8 flex flex-col min-h-full justify-between">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-display uppercase tracking-[0.16em] py-2 border-b border-[#F3E0DC]/10 ${
                  link.active ? "text-[#F3E0DC] font-medium" : "text-[#F3E0DC]/75 hover:text-[#F3E0DC]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#F3E0DC]/15 mt-8">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-[#F3E0DC] text-[#5C2018] font-display text-xs uppercase tracking-[0.16em] font-medium block"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
