"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  LargeSweepingCloudBottomLeft,
  ComplementaryCloudTopRight,
  SupportingCloudTopLeft,
  SupportingCloudBottomRight,
  BackgroundCelestialContours,
  BoundaryTransitionOrnament,
} from "./HeroCloudArtwork";
import { CelestialStar } from "./OrnamentalCloud";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const fgBLRef = useRef<HTMLDivElement>(null);
  const fgTRRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Accessibility: prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    // 2. Mobile restraint: static hero on narrow touch screens (< 768px)
    if (window.innerWidth < 768) return;

    const hero = heroRef.current;
    if (!hero) return;

    let cachedHeroHeight = hero.offsetHeight || 1;
    let isVisible = true;
    let ticking = false;
    let rafId: number | null = null;

    const updateMeasurements = () => {
      if (heroRef.current) {
        cachedHeroHeight = heroRef.current.offsetHeight || 1;
      }
    };

    // Lightweight scroll parallax: updates only 2 decorative layers via direct transform (0 React re-renders)
    const applyParallax = () => {
      if (!isVisible) {
        ticking = false;
        return;
      }

      const scrollY = window.scrollY || window.pageYOffset;
      // Progress clamped strictly between 0 and 1 while hero is in view
      const progress = Math.max(0, Math.min(1, scrollY / cachedHeroHeight));

      // Layer 1: Background celestial contours (restrained 14px subtle shift)
      if (bgRef.current) {
        const bgY = Math.round(progress * 14 * 10) / 10;
        bgRef.current.style.transform = `translate3d(0, ${bgY}px, 0)`;
      }

      // Layer 2: Foreground framing clouds (small restrained outward diagonal movement, 25-35px max)
      if (fgBLRef.current) {
        const blX = Math.round(-progress * 35 * 10) / 10;
        const blY = Math.round(progress * 28 * 10) / 10;
        fgBLRef.current.style.transform = `translate3d(${blX}px, ${blY}px, 0)`;
      }

      if (fgTRRef.current) {
        const trX = Math.round(progress * 35 * 10) / 10;
        const trY = Math.round(-progress * 24 * 10) / 10;
        fgTRRef.current.style.transform = `translate3d(${trX}px, ${trY}px, 0)`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!isVisible || ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(applyParallax);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Reset transforms on narrow screens
        if (bgRef.current) bgRef.current.style.transform = "";
        if (fgBLRef.current) fgBLRef.current.style.transform = "";
        if (fgTRRef.current) fgTRRef.current.style.transform = "";
        isVisible = false;
        return;
      }
      updateMeasurements();
      handleScroll();
    };

    // 3. IntersectionObserver: pauses execution and continuous keyframes when hero is offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (heroRef.current) {
          heroRef.current.classList.toggle("motion-paused", !entry.isIntersecting);
        }
        if (isVisible) {
          updateMeasurements();
          applyParallax();
        }
      },
      { rootMargin: "60px 0px" }
    );
    observer.observe(hero);

    // 4. Tab visibility handler: suspend animation when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (rafId) window.cancelAnimationFrame(rafId);
        ticking = false;
        if (heroRef.current) heroRef.current.classList.add("motion-paused");
      } else {
        if (heroRef.current && isVisible) {
          heroRef.current.classList.remove("motion-paused");
          updateMeasurements();
          applyParallax();
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial positioning
    updateMeasurements();
    applyParallax();

    return () => {
      observer.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (bgRef.current) bgRef.current.style.transform = "";
      if (fgBLRef.current) fgBLRef.current.style.transform = "";
      if (fgTRRef.current) fgTRRef.current.style.transform = "";
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-85px)] w-full flex flex-col justify-between items-center px-4 sm:px-8 lg:px-16 pt-10 sm:pt-14 md:pt-16 pb-12 overflow-hidden bg-gradient-to-b from-[#BC4639] via-[#A83A2E] to-[#5C2018] select-none"
    >
      {/* Tactile Editorial Paper Texture Overlay */}
      <div className="absolute inset-0 editorial-grain pointer-events-none opacity-35" />

      {/* Subtle Radial Vignette for Lighting Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(243,224,220,0.14),transparent_70%)] pointer-events-none" />

      {/* ==============================================================
          LAYER 1: BACKGROUND (Restrained 14px subtle contour parallax)
         ============================================================== */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none z-0 lg:will-change-transform"
        aria-hidden="true"
      >
        <div className="w-full h-full">
          <BackgroundCelestialContours className="w-full h-full" opacity={0.15} />
        </div>
      </div>

      {/* Ambient Floating Celestial Stars (CSS opacity pulse only, stable positions) */}
      <div
        className="absolute top-[18%] left-[28%] z-10 pointer-events-none opacity-60 animate-celestial-pulse"
        aria-hidden="true"
      >
        <CelestialStar className="w-5 h-5 text-[#F3E0DC]" />
      </div>
      <div
        className="absolute top-[22%] right-[24%] z-10 pointer-events-none opacity-70 animate-celestial-pulse"
        style={{ animationDelay: "1.8s" }}
        aria-hidden="true"
      >
        <CelestialStar className="w-6 h-6 text-[#F3E0DC]" />
      </div>
      <div
        className="hidden lg:block absolute bottom-[28%] left-[22%] z-10 pointer-events-none opacity-50 animate-celestial-pulse"
        style={{ animationDelay: "2.7s" }}
        aria-hidden="true"
      >
        <CelestialStar className="w-4 h-4 text-[#4285F4]" />
      </div>
      <div
        className="hidden lg:block absolute bottom-[26%] right-[22%] z-10 pointer-events-none opacity-50 animate-celestial-pulse"
        style={{ animationDelay: "0.9s" }}
        aria-hidden="true"
      >
        <CelestialStar className="w-4 h-4 text-[#F3E0DC]" />
      </div>

      {/* Midground Supporting Clouds (Desktop only; static decorative balance) */}
      <div
        className="hidden xl:block absolute -top-4 left-4 z-10 pointer-events-none"
        aria-hidden="true"
      >
        <SupportingCloudTopLeft className="w-56 h-36 opacity-70" />
      </div>

      <div
        className="hidden lg:block absolute bottom-14 right-6 z-10 pointer-events-none"
        aria-hidden="true"
      >
        <SupportingCloudBottomRight className="w-64 h-36 lg:w-72 lg:h-40 opacity-70" />
      </div>

      {/* ==============================================================
          LAYER 2: FOREGROUND (Restrained opening outward diagonal parallax)
         ============================================================== */}
      {/* Foreground Cloud 1: Large Sweeping Cloud from Bottom-Left */}
      <div
        ref={fgBLRef}
        className="absolute -bottom-10 -left-20 sm:-bottom-8 sm:-left-16 md:-bottom-6 md:-left-10 lg:bottom-0 lg:left-0 z-10 pointer-events-none lg:will-change-transform"
        aria-hidden="true"
      >
        <LargeSweepingCloudBottomLeft
          className="w-[240px] sm:w-[340px] md:w-[440px] lg:w-[540px] xl:w-[620px]"
          opacity={0.92}
        />
      </div>

      {/* Foreground Cloud 2: Complementary Cloud from Upper-Right */}
      <div
        ref={fgTRRef}
        className="absolute -top-10 -right-20 sm:-top-8 sm:-right-16 md:-top-6 md:-right-10 lg:top-0 lg:right-0 z-10 pointer-events-none lg:will-change-transform"
        aria-hidden="true"
      >
        <ComplementaryCloudTopRight
          className="w-[230px] sm:w-[320px] md:w-[420px] lg:w-[500px] xl:w-[580px]"
          opacity={0.9}
        />
      </div>

      {/* ==============================================================
          CENTRAL CONTENT (Visually calm 55–60% zone, STABLE, no parallax)
         ============================================================== */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center my-auto px-4">
        {/* Curated Editorial Metadata Overline */}
        <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
          <span className="w-6 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#F3E0DC]/40" />
          <span className="font-display text-[9px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.35em] text-[#D4A59A] font-medium">
            The Celestial Atelier · Est. 2026
          </span>
          <span className="w-6 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#F3E0DC]/40" />
        </div>

        {/* Hero Title: SKYVERIYA (Josefin Sans Light) */}
        <h1 className="font-display font-light text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.16em] sm:tracking-[0.24em] md:tracking-[0.28em] lg:tracking-[0.32em] uppercase text-[#F3E0DC] leading-none mb-3 sm:mb-4 drop-shadow-sm transition-all duration-500 hover:tracking-[0.18em] sm:hover:tracking-[0.34em]">
          SKYVERIYA
        </h1>

        {/* Hero Subtitle: The World of Creators (Editorial Serif Italic) */}
        <p className="font-editorial italic text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F3E0DC] font-normal tracking-wide mb-5 sm:mb-8 leading-tight">
          The World of Creators
        </p>

        {/* Editorial Divider Hairline */}
        <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#F3E0DC]/50 to-transparent mb-5 sm:mb-8" />

        {/* Hero Philosophy Statement: Nine Clouds, infinite values */}
        <p className="font-display text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-[0.18em] sm:tracking-[0.24em] md:tracking-[0.26em] text-[#D4A59A] font-light max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          Nine Clouds, infinite values
        </p>

        {/* Actions / Editorial CTA Buttons (Touch targets >= 44x44px) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6 w-full sm:w-auto px-2">
          {/* Action 1: Explore the nine clouds */}
          <a
            href="#nine-clouds"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 min-h-[48px] rounded-full bg-[#F3E0DC] text-[#5C2018] font-display text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] font-semibold transition-all duration-300 hover:bg-[#FAF4F2] hover:shadow-[0_8px_30px_rgba(243,224,220,0.25)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore the nine clouds</span>
            <span className="w-2 h-2 rounded-full bg-[#4285F4] transition-transform duration-300 group-hover:scale-125" />
          </a>

          {/* Action 2: Get in touch */}
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 min-h-[48px] rounded-full border border-[#F3E0DC]/40 text-[#F3E0DC] font-display text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium transition-all duration-300 hover:border-[#F3E0DC] hover:bg-[#F3E0DC]/10 hover:tracking-[0.22em] active:scale-[0.98]"
          >
            <span>Get in touch</span>
            <svg
              className="w-3.5 h-3.5 text-[#F3E0DC] transform transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ==============================================================
          BOTTOM EDITORIAL BAR & RESTRAINED "SCROLL TO EXPLORE" CUE
         ============================================================== */}
      <div className="relative z-20 w-full pt-8 mt-auto flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-[0.25em] text-[#D4A59A] uppercase font-display border-t border-[#F3E0DC]/15 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[#F3E0DC] font-medium">01 / IX</span>
          <span className="opacity-40">—</span>
          <span>Nine Bespoke Disciplines</span>
        </div>

        {/* Restrained Scroll to Explore Cue */}
        <a
          href="#nine-clouds"
          className="group flex flex-col sm:flex-row items-center gap-2 text-[#F3E0DC]/85 hover:text-[#F3E0DC] transition-colors cursor-pointer py-1"
          aria-label="Scroll to explore the nine clouds"
        >
          <span className="text-[9px] tracking-[0.3em] font-display uppercase group-hover:tracking-[0.35em] transition-all">
            Scroll to explore
          </span>
          <div className="w-4 h-6 rounded-full border border-[#F3E0DC]/50 flex items-start justify-center p-1 group-hover:border-[#F3E0DC] transition-colors">
            <span className="w-1 h-1.5 rounded-full bg-[#4285F4] animate-bounce" />
          </div>
        </a>

        <div className="hidden sm:block text-right">
          <span>Curated for Creators</span>
        </div>
      </div>

      {/* ==============================================================
          TRANSITION INTO SERVICES: PALE-IVORY BOUNDARY ORNAMENT
         ============================================================== */}
      <BoundaryTransitionOrnament className="absolute bottom-0 inset-x-0 translate-y-1/2 z-30 pointer-events-none" />
    </section>
  );
}
