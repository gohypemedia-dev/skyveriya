"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/servicesData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceId: "not-sure",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const getSelectedServiceTitle = () => {
    if (formData.serviceId === "not-sure") return "Not sure yet";
    const found = servicesData.find((s) => s.id === formData.serviceId);
    return found ? found.title : "Not sure yet";
  };

  const emailHref = `mailto:info@skyveriya.com?subject=${encodeURIComponent(
    `Enquiry: ${getSelectedServiceTitle()} — ${formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nService of interest: ${getSelectedServiceTitle()}\n\nMessage:\n${formData.message}`
  )}`;

  const whatsappHref = `https://wa.me/917400032221?text=${encodeURIComponent(
    `Hello Skyveriya,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService of interest: ${getSelectedServiceTitle()}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#5C2018] text-[#F3E0DC] select-none border-t border-[#F3E0DC]/15">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-display font-light text-2xl sm:text-4xl lg:text-5xl uppercase tracking-[0.12em] text-[#F3E0DC] leading-snug mb-4">
            Every engagement begins with a conversation.
          </h2>
          <p className="font-editorial italic text-lg sm:text-xl text-[#F3E0DC]/90 leading-relaxed">
            Tell us about your work, your collection or your space. We’ll listen first, then suggest where to begin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8 font-display text-xs tracking-wider text-[#F3E0DC]/85">
            <div>
              <span className="text-[11px] text-[#D4A59A] block uppercase tracking-[0.2em] mb-1">Email</span>
              <a href="mailto:info@skyveriya.com" className="text-base text-[#F3E0DC] hover:text-[#4285F4] transition-colors">
                info@skyveriya.com
              </a>
            </div>

            <div className="pt-4 border-t border-[#F3E0DC]/15">
              <span className="text-[11px] text-[#D4A59A] block uppercase tracking-[0.2em] mb-2">WhatsApp</span>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="https://wa.me/917400032221" target="_blank" rel="noopener noreferrer" className="hover:text-[#4285F4] transition-colors">
                    +91 74000 32221
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/919512216644" target="_blank" rel="noopener noreferrer" className="hover:text-[#4285F4] transition-colors">
                    +91 95122 16644
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F3E0DC]/15">
              <span className="text-[11px] text-[#D4A59A] block uppercase tracking-[0.2em] mb-1">Studio</span>
              <p className="font-editorial text-sm text-[#F3E0DC]/90">Mumbai · By appointment only</p>
            </div>

            <div className="pt-4 border-t border-[#F3E0DC]/15">
              <span className="text-[11px] text-[#D4A59A] block uppercase tracking-[0.2em] mb-1">Follow</span>
              <p className="text-xs text-[#F3E0DC]/70">Instagram · LinkedIn</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#3D130E] p-6 sm:p-8 rounded-xl border border-[#F3E0DC]/20">
            {submitted ? (
              <div className="space-y-6 py-4 animate-fade-in">
                <div className="space-y-2">
                  <h3 className="font-display text-lg uppercase tracking-[0.14em] text-[#F3E0DC]">Message Prepared</h3>
                  <p className="font-editorial text-sm text-[#F3E0DC]/85 leading-relaxed">
                    This form does not connect to a backend server. Please send your enquiry directly through your preferred channel below:
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#240A07] border border-[#F3E0DC]/15 font-display text-xs space-y-1.5 text-[#F3E0DC]/85">
                  <p><span className="text-[#D4A59A]">Name:</span> {formData.name}</p>
                  <p><span className="text-[#D4A59A]">Email:</span> {formData.email}</p>
                  <p><span className="text-[#D4A59A]">Service of interest:</span> {getSelectedServiceTitle()}</p>
                  {formData.message && <p className="pt-2 font-editorial italic text-[#F3E0DC]/90">"{formData.message}"</p>}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a href={emailHref} className="flex-1 text-center py-3 rounded-full bg-[#F3E0DC] text-[#5C2018] font-display text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#FAF4F2] transition-colors">
                    Send via Email
                  </a>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 rounded-full border border-[#F3E0DC]/40 text-[#F3E0DC] font-display text-xs uppercase tracking-[0.16em] hover:bg-[#F3E0DC]/10 transition-colors">
                    Send via WhatsApp
                  </a>
                </div>
                <div className="pt-2 text-center">
                  <button onClick={() => setSubmitted(false)} className="font-display text-xs uppercase tracking-[0.16em] text-[#D4A59A] hover:text-[#F3E0DC] underline underline-offset-4">
                    Edit details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="sec-name" className="block font-display text-xs uppercase tracking-[0.16em] text-[#D4A59A] mb-1.5">Name</label>
                  <input id="sec-name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-md bg-[#240A07] border border-[#F3E0DC]/20 text-[#F3E0DC] font-display text-sm focus:outline-none focus:border-[#4285F4]" />
                </div>
                <div>
                  <label htmlFor="sec-email" className="block font-display text-xs uppercase tracking-[0.16em] text-[#D4A59A] mb-1.5">Email</label>
                  <input id="sec-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-md bg-[#240A07] border border-[#F3E0DC]/20 text-[#F3E0DC] font-display text-sm focus:outline-none focus:border-[#4285F4]" />
                </div>
                <div>
                  <label htmlFor="sec-service" className="block font-display text-xs uppercase tracking-[0.16em] text-[#D4A59A] mb-1.5">Service of interest</label>
                  <select id="sec-service" value={formData.serviceId} onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })} className="w-full px-4 py-3 rounded-md bg-[#240A07] border border-[#F3E0DC]/20 text-[#F3E0DC] font-display text-sm focus:outline-none focus:border-[#4285F4]">
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="sec-message" className="block font-display text-xs uppercase tracking-[0.16em] text-[#D4A59A] mb-1.5">Message</label>
                  <textarea id="sec-message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-md bg-[#240A07] border border-[#F3E0DC]/20 text-[#F3E0DC] font-editorial text-sm focus:outline-none focus:border-[#4285F4]" />
                </div>
                <div className="pt-2">
                  <button type="submit" className="w-full py-3.5 rounded-full bg-[#F3E0DC] text-[#5C2018] font-display text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#FAF4F2] transition-colors">
                    Get in touch
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
