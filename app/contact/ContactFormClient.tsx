"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { CelestialStar } from "@/components/OrnamentalCloud";

export default function ContactFormClient() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceId: "not-sure",
    message: "",
  });

  const [preparedForTransmit, setPreparedForTransmit] = useState(false);

  // Prefill service of interest from URL parameter
  useEffect(() => {
    if (serviceParam) {
      const match = servicesData.find((s) => s.id === serviceParam);
      if (match) {
        setFormData((prev) => ({ ...prev, serviceId: match.id }));
      }
    }
  }, [serviceParam]);

  const getSelectedServiceName = () => {
    if (formData.serviceId === "not-sure") return "Not sure yet";
    const found = servicesData.find((s) => s.id === formData.serviceId);
    return found ? found.shortLabel : "Not sure yet";
  };

  const handleReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setPreparedForTransmit(true);
  };

  const emailSubject = encodeURIComponent(
    `Commission Inquiry: ${getSelectedServiceName()} — from ${formData.name || "Client"}`
  );
  const formattedBody = encodeURIComponent(
    `Dear SKYVERIYA Atelier Directors,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService of Interest: ${getSelectedServiceName()}\n\nMessage & Creative Vision:\n${formData.message || "(No additional details entered)"}\n\nSent via SKYVERIYA Atelier Portal`
  );

  const whatsappMessage1 = encodeURIComponent(
    `Hello SKYVERIYA Atelier,\n\nI would like to initiate an inquiry regarding: ${getSelectedServiceName()}.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nDetails:\n${formData.message || "I look forward to discussing representation."}`
  );

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-[#BC4639] via-[#8C2E24] to-[#3D130E] text-[#F3E0DC] select-none">
      <div className="absolute inset-0 editorial-grain opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ==============================================================
            SUPPLIED HEADING & INTRODUCTION
           ============================================================== */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-4">
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#F3E0DC]/40" />
            <span className="font-display text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4A59A] font-semibold">
              Atelier Correspondence
            </span>
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#F3E0DC]/40" />
          </div>

          <h1 className="font-display font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] sm:tracking-[0.14em] uppercase text-[#F3E0DC] leading-snug sm:leading-tight mb-5">
            Every engagement begins with a conversation.
          </h1>

          <p className="font-editorial italic text-base sm:text-xl md:text-2xl text-[#F3E0DC]/90 max-w-3xl mx-auto leading-relaxed">
            Whether you seek sovereign atelier representation across all nine clouds or require bespoke counsel on an upcoming commission, we invite you to initiate an introductory dialogue.
          </p>

          <div className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#F3E0DC]/40 to-transparent mx-auto mt-6" />
        </div>

        {/* ==============================================================
            CONFIRMED CHANNELS & INTERACTIVE FORM
           ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Confirmed Client Contact Details */}
          <div className="lg:col-span-5 flex flex-col space-y-8 bg-[#5C2018]/40 p-8 sm:p-10 rounded-2xl border border-[#F3E0DC]/15 backdrop-blur-sm">
            <div>
              <span className="font-display text-xs uppercase tracking-[0.3em] text-[#D4A59A] block mb-2 font-medium">
                Confirmed Channels
              </span>
              <h2 className="font-display font-light text-2xl uppercase tracking-[0.18em] text-[#F3E0DC]">
                Direct Contacts
              </h2>
            </div>

            {/* Email */}
            <div className="pt-4 border-t border-[#F3E0DC]/15">
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#D4A59A] block mb-1">
                Official Email
              </span>
              <a
                href="mailto:info@skyveriya.com"
                className="font-display text-base tracking-wider text-[#F3E0DC] hover:text-[#4285F4] transition-colors inline-flex items-center gap-2"
              >
                <span>info@skyveriya.com</span>
                <span className="text-xs text-[#D4A59A]">↗</span>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="pt-4 border-t border-[#F3E0DC]/15">
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#D4A59A] block mb-2">
                WhatsApp Direct (Functional)
              </span>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://wa.me/917400032221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-3 rounded-lg bg-[#3D130E]/60 border border-[#F3E0DC]/15 hover:border-[#4285F4] hover:text-[#4285F4] transition-all font-display text-xs tracking-wider"
                >
                  <span>+91 74000 32221</span>
                  <span className="text-[10px] text-[#D4A59A] uppercase tracking-widest">Chat on WhatsApp ↗</span>
                </a>
                <a
                  href="https://wa.me/919512216644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-3 rounded-lg bg-[#3D130E]/60 border border-[#F3E0DC]/15 hover:border-[#4285F4] hover:text-[#4285F4] transition-all font-display text-xs tracking-wider"
                >
                  <span>+91 95122 16644</span>
                  <span className="text-[10px] text-[#D4A59A] uppercase tracking-widest">Chat on WhatsApp ↗</span>
                </a>
              </div>
            </div>

            {/* Studio */}
            <div className="pt-4 border-t border-[#F3E0DC]/15">
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#D4A59A] block mb-1">
                Atelier Studio
              </span>
              <p className="font-display text-sm tracking-wide text-[#F3E0DC]/90">
                Mumbai · By appointment only
              </p>
              <p className="font-editorial italic text-xs text-[#D4A59A] mt-1">
                Private appointments coordinated exclusively through direct correspondence.
              </p>
            </div>

            {/* Plain Text Socials (Strictly as instructed) */}
            <div className="pt-4 border-t border-[#F3E0DC]/15">
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#D4A59A] block mb-1">
                Social Presence
              </span>
              <p className="font-display text-xs tracking-wider text-[#F3E0DC]/70">
                Instagram · LinkedIn
              </p>
              <span className="text-[10px] text-[#D4A59A]/60 block mt-0.5">
                (Profile URLs forthcoming)
              </span>
            </div>
          </div>

          {/* Right Column: Consultation Form (Preview Mode Disclosed) */}
          <div className="lg:col-span-7 bg-[#5C2018]/60 p-6 sm:p-10 rounded-2xl border border-[#F3E0DC]/20 backdrop-blur-sm relative">
            {/* Clear Preview Notice Banner */}
            <div className="mb-6 p-3.5 rounded-lg bg-[#3D130E]/80 border border-[#BC4639]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-display uppercase tracking-wider text-[#D4A59A]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                <span className="font-semibold text-[#F3E0DC]">Preview Mode · Staging Environment</span>
              </span>
              <span className="text-[10px] text-[#D4A59A]">
                Direct Email & WhatsApp Alternatives Active
              </span>
            </div>

            {preparedForTransmit ? (
              <div className="py-6 space-y-6 animate-fade-in">
                <div className="text-center space-y-2">
                  <CelestialStar className="w-8 h-8 mx-auto text-[#4285F4]" />
                  <h3 className="font-display text-xl uppercase tracking-[0.2em] text-[#F3E0DC]">
                    Inquiry Formatted & Ready
                  </h3>
                  <p className="font-editorial text-sm text-[#F3E0DC]/80 max-w-md mx-auto">
                    Because our client portal operates without a public database backend, your inquiry is pre-filled below and ready to transmit directly via official channels:
                  </p>
                </div>

                {/* Formatted Summary Box */}
                <div className="p-4 rounded-xl bg-[#3D130E]/80 border border-[#F3E0DC]/15 font-display text-xs space-y-2 text-[#F3E0DC]/85">
                  <p><strong className="text-[#D4A59A]">From:</strong> {formData.name} ({formData.email})</p>
                  <p><strong className="text-[#D4A59A]">Discipline:</strong> {getSelectedServiceName()}</p>
                  <p className="pt-2 border-t border-[#F3E0DC]/10 font-editorial italic text-sm text-[#F3E0DC]/90">
                    "{formData.message || "Consultation requested."}"
                  </p>
                </div>

                {/* Direct Transmission Buttons (Honest & Functional) */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={`mailto:info@skyveriya.com?subject=${emailSubject}&body=${formattedBody}`}
                    className="flex-1 text-center py-3.5 rounded-full bg-[#F3E0DC] text-[#5C2018] font-display text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#FAF4F2] transition-all"
                  >
                    Transmit via Email (info@skyveriya.com)
                  </a>
                  <a
                    href={`https://wa.me/917400032221?text=${whatsappMessage1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3.5 rounded-full border border-[#F3E0DC]/40 text-[#F3E0DC] font-display text-xs uppercase tracking-[0.2em] hover:bg-[#F3E0DC]/10 transition-all"
                  >
                    Transmit via WhatsApp
                  </a>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => setPreparedForTransmit(false)}
                    className="font-display text-[11px] uppercase tracking-[0.25em] text-[#D4A59A] hover:text-[#F3E0DC] underline underline-offset-4"
                  >
                    ← Edit or Adjust Form Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReview} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-display text-[11px] uppercase tracking-[0.25em] text-[#D4A59A] mb-2 font-medium"
                  >
                    Name / Atelier Representation *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Master Artisan / Studio Moreau"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#3D130E]/60 border border-[#F3E0DC]/20 text-[#F3E0DC] placeholder-[#F3E0DC]/30 font-display text-sm focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-display text-[11px] uppercase tracking-[0.25em] text-[#D4A59A] mb-2 font-medium"
                  >
                    Direct Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="creator@domain.com"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#3D130E]/60 border border-[#F3E0DC]/20 text-[#F3E0DC] placeholder-[#F3E0DC]/30 font-display text-sm focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                  />
                </div>

                {/* Service of Interest (All 9 + "Not sure yet") */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block font-display text-[11px] uppercase tracking-[0.25em] text-[#D4A59A] mb-2 font-medium"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="contact-service"
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg bg-[#3D130E] border border-[#F3E0DC]/20 text-[#F3E0DC] font-display text-sm focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.shortLabel}
                      </option>
                    ))}
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-display text-[11px] uppercase tracking-[0.25em] text-[#D4A59A] mb-2 font-medium"
                  >
                    Message & Commission Scope
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your creative requirements, exhibition timeline, or representation vision..."
                    className="w-full px-4 py-3.5 rounded-lg bg-[#3D130E]/60 border border-[#F3E0DC]/20 text-[#F3E0DC] placeholder-[#F3E0DC]/30 font-editorial text-sm focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#F3E0DC] text-[#5C2018] font-display text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#FAF4F2] hover:shadow-[0_8px_30px_rgba(243,224,220,0.2)] transition-all active:scale-[0.99] flex items-center justify-center gap-3"
                  >
                    <span>Proceed with Inquiry</span>
                    <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                  </button>
                  <p className="text-[10px] text-center tracking-[0.2em] text-[#D4A59A] mt-3 uppercase font-display">
                    Confidential & Non-Disclosure Protected · Mumbai Atelier
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
