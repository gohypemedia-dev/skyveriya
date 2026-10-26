"use client";

import { useEffect, RefObject } from "react";

export interface ParallaxOptions {
  speed?: number; // 0.05 to 0.15 for subtle 15-45px movement
  maxOffset?: number; // max movement in pixels, e.g. 35
  reverse?: boolean;
  targetRef?: RefObject<HTMLElement | null>;
  transformTemplate?: (clampedOffset: number) => string;
}

/**
 * Ultra-lightweight, zero-re-render scroll parallax hook.
 *
 * Performance features:
 * 1. Zero React re-renders during scroll (uses direct DOM transform via targetRef).
 * 2. Caches element geometry on resize/intersection; reads window.scrollY on scroll (no getBoundingClientRect layout thrashing).
 * 3. IntersectionObserver halts execution and toggles .motion-paused when offscreen.
 * 4. Automatically disables on mobile screens (< 768px) and prefers-reduced-motion.
 * 5. Pauses on document visibilitychange (background tab).
 * 6. Uses passive scroll listeners and rAF batching.
 */
export function useScrollParallax<T extends HTMLElement = HTMLElement>(
  containerRef: RefObject<T | null>,
  options: ParallaxOptions = {}
) {
  const {
    speed = 0.08,
    maxOffset = 35,
    reverse = false,
    targetRef,
    transformTemplate,
  } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Accessibility: prefers-reduced-motion check
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      if (targetRef?.current) targetRef.current.style.transform = "";
      return;
    }

    // 2. Mobile restraint: disable parallax on narrow touch devices (< 768px)
    if (window.innerWidth < 768) {
      if (targetRef?.current) targetRef.current.style.transform = "";
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Cached measurements (updated only on resize / intersection, NOT on scroll)
    let cachedTop = 0;
    let cachedHeight = 0;
    let windowHeight = window.innerHeight;
    let isVisible = false;
    let ticking = false;
    let rafId: number | null = null;

    const updateMeasurements = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      cachedTop = rect.top + scrollY;
      cachedHeight = rect.height;
      windowHeight = window.innerHeight;
    };

    const applyTransform = () => {
      if (!isVisible || !targetRef?.current) {
        ticking = false;
        return;
      }

      const scrollY = window.scrollY || window.pageYOffset;
      const elementCenter = cachedTop + cachedHeight / 2;
      const viewportCenter = scrollY + windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      const rawOffset = distanceFromCenter * speed * (reverse ? -1 : 1);
      const clamped = Math.max(-maxOffset, Math.min(maxOffset, rawOffset));
      const rounded = Math.round(clamped * 10) / 10;

      targetRef.current.style.transform = transformTemplate
        ? transformTemplate(rounded)
        : `translate3d(0, ${rounded}px, 0)`;

      ticking = false;
    };

    const handleScroll = () => {
      if (!isVisible || ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(applyTransform);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        if (targetRef?.current) targetRef.current.style.transform = "";
        isVisible = false;
        return;
      }
      updateMeasurements();
      handleScroll();
    };

    // 3. Intersection Observer: pauses execution and toggles motion-paused when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (containerRef.current) {
          containerRef.current.classList.toggle("motion-paused", !entry.isIntersecting);
        }
        if (isVisible) {
          updateMeasurements();
          applyTransform();
        }
      },
      { rootMargin: "80px 0px" }
    );

    observer.observe(container);

    // 4. Tab visibility handler
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (rafId) window.cancelAnimationFrame(rafId);
        ticking = false;
      } else if (isVisible) {
        updateMeasurements();
        applyTransform();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial measurement
    updateMeasurements();
    applyTransform();

    return () => {
      observer.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (targetRef?.current) {
        targetRef.current.style.transform = "";
      }
    };
  }, [containerRef, targetRef, speed, maxOffset, reverse, transformTemplate]);

  // Backward compatibility: components can still destructure offset and isIntersecting if needed
  return { offset: 0, isIntersecting: true };
}
