"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  LargeSweepingCloudBottomLeft,
  ComplementaryCloudTopRight,
} from "./HeroCloudArtwork";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const fgBLRef = useRef<HTMLDivElement>(null);
  const fgTRRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Accessibility: respects prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    // Mobile restraint: static composition on touch devices (< 768px)
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

    const applyOpening = () => {
      if (!isVisible) {
        ticking = false;
        return;
      }

      const scrollY = window.scrollY || window.pageYOffset;
      const progress = Math.max(0, Math.min(1, scrollY / cachedHeroHeight));

      if (fgBLRef.current) {
        const blX = Math.round(-progress * 28 * 10) / 10;
        const blY = Math.round(progress * 18 * 10) / 10;
        fgBLRef.current.style.transform = `translate3d(${blX}px, ${blY}px, 0)`;
      }

      if (fgTRRef.current) {
        const trX = Math.round(progress * 28 * 10) / 10;
        const trY = Math.round(-progress * 18 * 10) / 10;
        fgTRRef.current.style.transform = `translate3d(${trX}px, ${trY}px, 0)`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!isVisible || ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(applyOpening);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        if (fgBLRef.current) fgBLRef.current.style.transform = "";
        if (fgTRRef.current) fgTRRef.current.style.transform = "";
        isVisible = false;
        return;
      }
      updateMeasurements();
      handleScroll();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (isVisible) {
          updateMeasurements();
          applyOpening();
        }
      },
      { rootMargin: "60px 0px" }
    );
    observer.observe(hero);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    updateMeasurements();
    applyOpening();

    return () => {
      observer.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (fgBLRef.current) fgBLRef.current.style.transform = "";
      if (fgTRRef.current) fgTRRef.current.style.transform = "";
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[75vh] md:min-h-[82vh] w-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20 sm:py-28 overflow-hidden bg-[#BC4639] text-[#F3E0DC] select-none"
    >
      {/* Subtle Paper Grain */}
      <div className="absolute inset-0 editorial-grain-inverse pointer-events-none opacity-25" />

      {/* Foreground Framing Cloud: Bottom-Left (Ivory & Dusty Rose on Terracotta) */}
      <div
        ref={fgBLRef}
        className="absolute -bottom-6 -left-12 sm:bottom-0 sm:left-0 z-10 pointer-events-none opacity-85"
        aria-hidden="true"
      >
        <LargeSweepingCloudBottomLeft className="w-[260px] sm:w-[380px] lg:w-[480px]" />
      </div>

      {/* Foreground Framing Cloud: Upper-Right (Ivory & Dusty Rose on Terracotta) */}
      <div
        ref={fgTRRef}
        className="absolute -top-6 -right-12 sm:top-0 sm:right-0 z-10 pointer-events-none opacity-85"
        aria-hidden="true"
      >
        <ComplementaryCloudTopRight className="w-[240px] sm:w-[360px] lg:w-[440px]" />
      </div>

      {/* Central Content */}
      <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center text-center px-4">
        {/* Brand Name */}
        <h1 className="font-display font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.18em] uppercase text-[#F3E0DC] leading-none mb-3 sm:mb-4">
          SKYVERIYA
        </h1>

        {/* Subtitle */}
        <p className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#F3E0DC] font-normal leading-tight mb-4 sm:mb-6">
          The World of Creators
        </p>

        {/* Hairline Divider */}
        <div className="w-16 sm:w-20 h-[1px] bg-[#F3E0DC]/35 mb-4 sm:mb-6" />

        {/* Philosophy Statement */}
        <p className="font-display text-xs sm:text-sm uppercase tracking-[0.18em] text-[#D4A59A] font-light max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed">
          Nine Clouds, infinite values
        </p>

        {/* Coordinated Actions: Primary Blue & Secondary Inverse Outline */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full btn-primary font-display text-xs uppercase tracking-[0.16em] font-medium shadow-sm"
          >
            Get in touch
          </Link>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full btn-secondary-inverse font-display text-xs uppercase tracking-[0.16em] font-medium"
          >
            View services
          </a>
        </div>
      </div>
    </section>
  );
}
