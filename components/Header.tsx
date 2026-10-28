"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset mobile menu state on route changes (including back/forward navigation)
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Automatically close mobile menu if resized to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Prevent background scrolling while open and restore scrolling when closed
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow || "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu and return focus to trigger button
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileMenuOpen(false);
        triggerButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Focus management: move focus into menu on open
  useEffect(() => {
    if (mobileMenuOpen) {
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [mobileMenuOpen]);

  // Keyboard navigation / focus trapping within the mobile menu dialog
  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Tab") {
      const focusable = menuContainerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  };

  const navLinks = [
    { name: "Home", href: "/", active: pathname === "/" },
    { name: "About", href: "/about", active: pathname === "/about" },
    { name: "Services", href: "/services", active: pathname === "/services" },
    { name: "Contact", href: "/contact", active: pathname === "/contact" },
  ];

  const mobileMenuOverlay = (
    <div
      ref={menuContainerRef}
      id="mobile-navigation-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      onKeyDown={handleMenuKeyDown}
      className={`fixed inset-0 z-[100] md:hidden bg-[#BC4639] text-[#F3E0DC] flex flex-col h-[100dvh] max-h-[100dvh] overflow-y-auto select-none transition-opacity duration-200 ${
        mobileMenuOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      {/* Top Header Bar inside Mobile Menu */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4 flex items-center justify-between shrink-0">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E0DC] rounded"
          aria-label="SKYVERIYA Home"
        >
          <Wordmark showSubtitle={true} light={true} />
        </Link>

        {/* Accessible Close Button */}
        <button
          ref={closeButtonRef}
          onClick={() => {
            setMobileMenuOpen(false);
            triggerButtonRef.current?.focus();
          }}
          className="p-2 text-[#F3E0DC] hover:text-[#FAF4F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E0DC] rounded transition-colors"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Main Content Area: Nav links & bottom CTA button */}
      <div className="flex-1 flex flex-col justify-between px-6 sm:px-8 lg:px-12 pt-6 pb-[max(2rem,env(safe-area-inset-bottom))] max-w-7xl mx-auto w-full">
        {/* Navigation items - Divider lines removed */}
        <nav className="flex flex-col space-y-5" aria-label="Mobile Navigation Links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xl font-display uppercase tracking-[0.18em] py-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E0DC] rounded ${
                link.active
                  ? "text-[#F3E0DC] font-medium"
                  : "text-[#F3E0DC]/80 hover:text-[#F3E0DC]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA Button - Divider line removed, reachable on short screens */}
        <div className="pt-8 mt-auto">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3.5 rounded-full btn-primary font-display text-xs uppercase tracking-[0.16em] font-medium block shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E0DC]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full select-none transition-colors duration-200 border-b bg-[#BC4639]/95 backdrop-blur-sm border-[#F3E0DC]/15 text-[#F3E0DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4 flex items-center justify-between">
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

          {/* Desktop Secondary Action */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 rounded-full font-display text-xs uppercase tracking-[0.16em] font-medium transition-colors btn-secondary-inverse"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            ref={triggerButtonRef}
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 focus:outline-none focus-visible:ring-2 rounded transition-colors text-[#F3E0DC] focus-visible:ring-[#F3E0DC]"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between items-end">
              <span className="h-[1.5px] w-5 transition-transform duration-200 bg-[#F3E0DC]" />
              <span className="h-[1.5px] w-4 transition-opacity duration-200 bg-[#F3E0DC]" />
              <span className="h-[1.5px] w-5 transition-transform duration-200 bg-[#F3E0DC]" />
            </div>
          </button>
        </div>
      </header>

      {/* Shared Mobile Menu Overlay (Rendered directly in document.body) */}
      {mounted && createPortal(mobileMenuOverlay, document.body)}
    </>
  );
}
