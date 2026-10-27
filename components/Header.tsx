"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const pathname = usePathname();

  // Detect scroll state on Home page to coordinate header over terracotta hero vs pale ivory sections
  useEffect(() => {
    if (pathname !== "/") {
      setScrolledPastHero(true);
      return;
    }

    const handleScroll = () => {
      // Transition when scrolled past the top hero portion (~400px)
      const scrollY = window.scrollY || window.pageYOffset;
      setScrolledPastHero(scrollY > 380);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

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

  // Coordinated variant: Pale ivory over terracotta hero; Oxblood over pale ivory surfaces
  const isOverTerracotta = pathname === "/" && !scrolledPastHero;

  return (
    <header
      className={`sticky top-0 z-50 w-full select-none transition-colors duration-200 border-b ${
        isOverTerracotta
          ? "bg-[#BC4639] border-[#F3E0DC]/20 text-[#F3E0DC]"
          : "bg-[#F3E0DC]/95 backdrop-blur-sm border-[#5C2018]/15 text-[#5C2018]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="focus:outline-none" aria-label="SKYVERIYA Home">
          <Wordmark showSubtitle={true} light={isOverTerracotta} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-display text-xs uppercase tracking-[0.16em] transition-colors py-1 ${
                isOverTerracotta
                  ? link.active
                    ? "text-[#F3E0DC] font-medium border-b border-[#F3E0DC]"
                    : "text-[#F3E0DC]/75 hover:text-[#F3E0DC]"
                  : link.active
                  ? "text-[#5C2018] font-medium border-b border-[#5C2018]"
                  : "text-[#5C2018]/75 hover:text-[#5C2018]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Secondary Action */}
        <div className="hidden sm:flex items-center">
          <Link
            href="/contact"
            className={`inline-flex items-center px-5 py-2 rounded-full font-display text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
              isOverTerracotta
                ? "btn-secondary-inverse"
                : "btn-secondary"
            }`}
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 focus:outline-none ${
            isOverTerracotta ? "text-[#F3E0DC]" : "text-[#5C2018]"
          }`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-5 h-4 flex flex-col justify-between items-end">
            <span
              className={`h-[1.5px] transition-transform duration-200 ${
                isOverTerracotta ? "bg-[#F3E0DC]" : "bg-[#5C2018]"
              } ${mobileMenuOpen ? "w-5 rotate-45 translate-y-1.5" : "w-5"}`}
            />
            <span
              className={`h-[1.5px] transition-opacity duration-200 ${
                isOverTerracotta ? "bg-[#F3E0DC]" : "bg-[#5C2018]"
              } ${mobileMenuOpen ? "opacity-0" : "w-4"}`}
            />
            <span
              className={`h-[1.5px] transition-transform duration-200 ${
                isOverTerracotta ? "bg-[#F3E0DC]" : "bg-[#5C2018]"
              } ${mobileMenuOpen ? "w-5 -rotate-45 -translate-y-1.5" : "w-5"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] sm:top-[65px] bottom-0 z-50 transition-opacity duration-200 overflow-y-auto ${
          isOverTerracotta
            ? "bg-[#BC4639] text-[#F3E0DC]"
            : "bg-[#F3E0DC] text-[#5C2018]"
        } ${
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
                className={`text-lg font-display uppercase tracking-[0.16em] py-2 border-b ${
                  isOverTerracotta
                    ? link.active
                      ? "text-[#F3E0DC] font-medium border-[#F3E0DC]/30"
                      : "text-[#F3E0DC]/75 hover:text-[#F3E0DC] border-[#F3E0DC]/15"
                    : link.active
                    ? "text-[#5C2018] font-medium border-[#5C2018]/30"
                    : "text-[#5C2018]/75 hover:text-[#5C2018] border-[#5C2018]/15"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div
            className={`pt-8 border-t mt-8 ${
              isOverTerracotta ? "border-[#F3E0DC]/20" : "border-[#5C2018]/15"
            }`}
          >
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full btn-primary font-display text-xs uppercase tracking-[0.16em] font-medium block"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
