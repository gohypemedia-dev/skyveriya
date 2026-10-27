"use client";

import React from "react";
import Link from "next/link";

export default function PromiseSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#F3E0DC] text-[#5C2018] select-none border-t border-[#5C2018]/15">
      <div className="max-w-3xl mx-auto flex flex-col items-start text-left">
        <h2 className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-[#5C2018] leading-snug font-normal mb-8 sm:mb-10">
          Our promise is in our tagline: nine skies entrusted.
        </h2>

        <div className="space-y-6 font-editorial text-base sm:text-lg text-[#5C2018]/85 leading-relaxed mb-10 sm:mb-12">
          <p>
            Nine connected services, from legal assistance and documentation to marketing, logistics, wealth and purpose, come together under one roof. You don't piece together nine different providers, you trust one team with all of them.
          </p>

          <p>
            We believe support should arrive at the right time, in the right measure. Whether you are just beginning or already established, we meet you where you are and help you become more organised, more visible and ready for growth.
          </p>

          <p>
            Creativity deserves a strong foundation. When the business side is in safe hands, art has room to grow, travel and last.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3.5 rounded-full btn-primary font-display text-xs uppercase tracking-[0.16em] font-medium shadow-sm"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
