"use client";

import React, { useState, useEffect, useRef } from "react";
import { servicesData } from "@/data/servicesData";
import { CelestialStar, CloudWisp } from "./OrnamentalCloud";
import { useScrollParallax } from "@/hooks/useScrollParallax";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceId: "all",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  // Zero-re-render scroll parallax directly on decorative cloud element
  useScrollParallax(sectionRef, {
    targetRef: cloudRef,
    speed: 0.06,
    maxOffset: 24,
    transformTemplate: (val) => `translate3d(0, ${val}px, 0)`,
  });

  // Check URL parameters or hash on mount to pre-select service if clicked from dialog
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash.includes("service=")) {
        const match = hash.match(/service=([0-9]{2})/);
        if (match && match[1]) {
          setFormData((prev) => ({ ...prev, serviceId: match[1] }));
        }
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#5C2018] via-[#4A1913] to-[#3D130E] text-[#F3E0DC] overflow-hidden select-none border-t border-[#F3E0DC]/15"
    >
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 editorial-grain opacity-20 pointer-events-none" />

      {/* Subtle Ethereal Cerulean Accent Light */}
      <div
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(66,133,244,0.07),transparent_70%)] pointer-events-none"
      />

      {/* Decorative Cloud Flank (Subtle Parallax 15-24px, zero re-renders) */}
      <div
        ref={cloudRef}
        className="absolute top-10 -right-16 opacity-30 pointer-events-none md:animate-cloud-medium lg:will-change-transform"
      >
        <CloudWisp className="w-64 h-32" opacity={0.5} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ==============================================================
            SECTION HEADER
           ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 sm:w-12 h-[1px] bg-[#BC4639]" />
            <span className="font-display text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4A59A] font-semibold">
              Atelier Inquiries
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#BC4639]" />
          </div>

          <h2 className="font-display font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] sm:tracking-[0.14em] uppercase text-[#F3E0DC] leading-snug sm:leading-tight mb-5">
            Every engagement begins with a conversation.
          </h2>

          <p className="font-editorial italic text-base sm:text-xl text-[#F3E0DC]/85 max-w-2xl mx-auto leading-relaxed">
            Whether you seek sovereign representation across all nine clouds or strategic counsel on a single commission, our directors welcome your dialogue.
          </p>

          <div className="w-16 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#F3E0DC]/40 to-transparent mx-auto mt-6" />
        </div>

        {/* ==============================================================
            INTERACTIVE CONSULTATION FORM & CONFIRMED DETAILS
           ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Confirmed Atelier Details & Protocol */}
          <div className="lg:col-span-5 flex flex-col space-y-10">
            <div>
              <span className="font-display text-xs uppercase tracking-[0.28em] text-[#D4A59A] block mb-2 font-medium">
                Confidential Stewardship
              </span>
              <p className="font-editorial text-base sm:text-lg text-[#F3E0DC]/80 leading-relaxed">
                All communications are protected under strict non-disclosure conventions. We represent high-profile creators, private family offices, and institutions with total discretion.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6 pt-6 border-t border-[#F3E0DC]/15">
              <div>
                <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#D4A59A] block mb-1">
                  Direct Email
                </span>
                <a
                  href="mailto:info@skyveriya.com"
                  className="font-display text-base tracking-wider text-[#F3E0DC] hover:text-[#4285F4] transition-colors"
                >
                  info@skyveriya.com
                </a>
              </div>

              <div>
                <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#D4A59A] block mb-1">
                  WhatsApp Direct
                </span>
                <div className="font-display text-sm tracking-wider text-[#F3E0DC]/90 space-y-1">
                  <p>
                    <a
                      href="https://wa.me/917400032221"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#4285F4] transition-colors"
                    >
                      +91 74000 32221
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://wa.me/919512216644"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#4285F4] transition-colors"
                    >
                      +91 95122 16644
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#D4A59A] block mb-1">
                  Studio Location
                </span>
                <p className="font-editorial text-sm text-[#F3E0DC]/80 leading-relaxed">
                  Mumbai · By appointment only
                </p>
              </div>

              <div>
                <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#D4A59A] block mb-1">
                  Social Channels
                </span>
                <p className="font-display text-xs tracking-wider text-[#F3E0DC]/60">
                  Instagram · LinkedIn
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Consultation Form (Preview Mode Enabled) */}
          <div className="lg:col-span-7 bg-[#5C2018]/50 p-6 sm:p-10 rounded-2xl border border-[#F3E0DC]/20 relative">
            {/* Clear Preview Notice Banner */}
            <div className="mb-6 p-3 rounded-lg bg-[#3D130E]/70 border border-[#BC4639]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-display uppercase tracking-wider text-[#D4A59A]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                <span className="font-semibold text-[#F3E0DC]">Preview Mode · Staging Environment</span>
              </span>
              <span className="text-[10px] text-[#D4A59A]">Direct Email & WhatsApp Connected</span>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-fade-in">
                <CelestialStar className="w-8 h-8 mx-auto text-[#4285F4]" />
                <h3 className="font-display text-xl uppercase tracking-[0.2em] text-[#F3E0DC]">
                  Inquiry Ready to Transmit
                </h3>
                <p className="font-editorial italic text-sm text-[#F3E0DC]/85 max-w-md mx-auto leading-relaxed">
                  As our digital backend is in staging, your inquiry is ready to be sent directly to our directors via email or WhatsApp:
                </p>

                {/* Direct Working Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <a
                    href={`mailto:info@skyveriya.com?subject=Commission%20Inquiry%20from%20${encodeURIComponent(
                      formData.name
                    )}&body=${encodeURIComponent(
                      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.serviceId}\n\nMessage:\n${formData.message}`
                    )}`}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#F3E0DC] text-[#5C2018] font-display text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#FAF4F2] transition-all"
                  >
                    Open in Email App
                  </a>
                  <a
                    href={`https://wa.me/917400032221?text=${encodeURIComponent(
                      `Hello SKYVERIYA Atelier,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.serviceId}\n\nMessage:\n${formData.message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#F3E0DC]/40 text-[#F3E0DC] font-display text-xs uppercase tracking-[0.2em] hover:bg-[#F3E0DC]/10 transition-all"
                  >
                    Send on WhatsApp
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-display text-[11px] uppercase tracking-[0.25em] text-[#D4A59A] hover:text-[#F3E0DC] underline underline-offset-4"
                  >
                    Edit Inquiry Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-display text-[11px] uppercase tracking-[0.25em] text-[#D4A59A] mb-2 font-medium">
                    Creator, Studio or Atelier Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Atelier V. Moreau / Studio Aurelius"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#3D130E]/60 border border-[#F3E0DC]/20 text-[#F3E0DC] placeholder-[#F3E0DC]/30 font-display text-sm focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-display text-[11px] uppercase tracking-[0.25em] text-[#D4A59A] mb-2 font-medium">
                    Direct Correspondence Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="creator@atelier.com"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#3D130E]/60 border border-[#F3E0DC]/20 text-[#F3E0DC] placeholder-[#F3E0DC]/30 font-display text-sm focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="serviceId" className="block font-display text-[11px] uppercase tracking-[0.25em] text-[#D4A59A] mb-2 font-medium">
                    Discipline of Interest
                  </label>
                  <select
                    id="serviceId"
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg bg-[#3D130E] border border-[#F3E0DC]/20 text-[#F3E0DC] font-display text-sm focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                  >
                    <option value="all">Full Atelier Partnership (All Nine Clouds)</option>
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.shortLabel}
                      </option>
                    ))}
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-display text-[11px] uppercase tracking-[0.25em] text-[#D4A59A] mb-2 font-medium">
                    Creative Vision & Commission Scope
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current creative phase, upcoming exhibition, or representation requirements..."
                    className="w-full px-4 py-3.5 rounded-lg bg-[#3D130E]/60 border border-[#F3E0DC]/20 text-[#F3E0DC] placeholder-[#F3E0DC]/30 font-editorial text-sm focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#F3E0DC] text-[#5C2018] font-display text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#FAF4F2] hover:shadow-[0_8px_30px_rgba(243,224,220,0.2)] transition-all active:scale-[0.99] flex items-center justify-center gap-3"
                  >
                    <span>Transmit Commission Inquiry</span>
                    <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                  </button>
                  <p className="text-[10px] text-center tracking-[0.2em] text-[#D4A59A] mt-3 uppercase font-display">
                    Confidential & Non-Disclosure Bound
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
