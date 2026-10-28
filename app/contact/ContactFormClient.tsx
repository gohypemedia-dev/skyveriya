"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";

export default function ContactFormClient() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceId: "not-sure",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      const match = servicesData.find((s) => s.id === serviceParam);
      if (match) {
        setFormData((prev) => ({ ...prev, serviceId: match.id }));
      }
    }
  }, [serviceParam]);

  const getSelectedServiceTitle = () => {
    if (formData.serviceId === "not-sure") return "Not sure yet";
    const found = servicesData.find((s) => s.id === formData.serviceId);
    return found ? found.title : "Not sure yet";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
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
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#BC4639] text-[#F3E0DC] select-none">
      <div className="max-w-5xl mx-auto">
        {/* Approved Heading & Lead */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="w-10 h-[1.5px] bg-[#D4A59A] mb-6" />
          <h1 className="font-display font-light text-2xl sm:text-4xl lg:text-5xl uppercase tracking-[0.12em] text-[#F3E0DC] leading-snug mb-4">
            Every engagement begins with a conversation.
          </h1>
          <p className="font-editorial italic text-lg sm:text-xl text-[#F3E0DC]/90 leading-relaxed">
            Tell us about your work, your collection or your space. We’ll listen first, then suggest where to begin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Supplied Contact Details */}
          <div className="lg:col-span-5 space-y-8 font-display text-xs tracking-wider text-[#F3E0DC]">
            <div>
              <span className="text-[11px] text-[#D4A59A] block uppercase tracking-[0.2em] mb-1 font-semibold">
                Email
              </span>
              <a
                href="mailto:info@skyveriya.com"
                className="text-base text-[#F3E0DC] hover:text-[#FAF4F2] underline underline-offset-4 transition-colors"
              >
                info@skyveriya.com
              </a>
            </div>

            <div className="pt-4 border-t border-[#F3E0DC]/15">
              <span className="text-[11px] text-[#D4A59A] block uppercase tracking-[0.2em] mb-2 font-semibold">
                WhatsApp
              </span>
              <div className="space-y-2 text-sm">
                <div>
                  <a
                    href="https://wa.me/917400032221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FAF4F2] underline underline-offset-4 transition-colors"
                  >
                    +91 74000 32221
                  </a>
                </div>
                <div>
                  <a
                    href="https://wa.me/919512216644"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FAF4F2] underline underline-offset-4 transition-colors"
                  >
                    +91 95122 16644
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F3E0DC]/15">
              <span className="text-[11px] text-[#D4A59A] block uppercase tracking-[0.2em] mb-1 font-semibold">
                Studio
              </span>
              <p className="font-editorial text-sm text-[#F3E0DC]/90">
                Mumbai · By appointment only
              </p>
            </div>

            <div className="pt-4 border-t border-[#F3E0DC]/15">
              <span className="text-[11px] text-[#D4A59A] block uppercase tracking-[0.2em] mb-1 font-semibold">
                Follow
              </span>
              <p className="text-xs text-[#D4A59A]">
                Instagram · LinkedIn
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form - Intentional Deep Wine Container */}
          <div className="lg:col-span-7 bg-[#3D130E] p-6 sm:p-8 rounded-xl border border-[#F3E0DC]/15 shadow-md">
            {submitted ? (
              <div className="space-y-6 py-4 animate-fade-in">
                <div className="space-y-2">
                  <h3 className="font-display text-lg uppercase tracking-[0.14em] text-[#F3E0DC]">
                    Message Prepared
                  </h3>
                  <p className="font-editorial text-sm text-[#F3E0DC]/85 leading-relaxed">
                    This form does not connect to a backend server. Please send your enquiry directly through your preferred channel below:
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#240A07]/60 border border-[#F3E0DC]/15 font-display text-xs space-y-1.5 text-[#F3E0DC]">
                  <p><span className="text-[#D4A59A] font-medium">Name:</span> {formData.name}</p>
                  <p><span className="text-[#D4A59A] font-medium">Email:</span> {formData.email}</p>
                  <p><span className="text-[#D4A59A] font-medium">Service of interest:</span> {getSelectedServiceTitle()}</p>
                  {formData.message && (
                    <p className="pt-2 font-editorial italic text-[#F3E0DC]/90">"{formData.message}"</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={emailHref}
                    className="flex-1 text-center py-3 rounded-full btn-primary font-display text-xs uppercase tracking-[0.16em] font-medium shadow-sm"
                  >
                    Send via Email
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-full btn-secondary font-display text-xs uppercase tracking-[0.16em] font-medium"
                  >
                    Send via WhatsApp
                  </a>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-display text-xs uppercase tracking-[0.16em] text-[#D4A59A] hover:text-[#F3E0DC] underline underline-offset-4"
                  >
                    Edit details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-display text-xs uppercase tracking-[0.16em] text-[#D4A59A] mb-1.5 font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#240A07]/60 border border-[#F3E0DC]/20 text-[#F3E0DC] font-display text-sm focus:outline-none focus:border-[#F3E0DC] focus:ring-1 focus:ring-[#F3E0DC]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-display text-xs uppercase tracking-[0.16em] text-[#D4A59A] mb-1.5 font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#240A07]/60 border border-[#F3E0DC]/20 text-[#F3E0DC] font-display text-sm focus:outline-none focus:border-[#F3E0DC] focus:ring-1 focus:ring-[#F3E0DC]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block font-display text-xs uppercase tracking-[0.16em] text-[#D4A59A] mb-1.5 font-medium"
                  >
                    Service of interest
                  </label>
                  <select
                    id="contact-service"
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#240A07]/60 border border-[#F3E0DC]/20 text-[#F3E0DC] font-display text-sm focus:outline-none focus:border-[#F3E0DC] focus:ring-1 focus:ring-[#F3E0DC]"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.id} className="bg-[#3D130E] text-[#F3E0DC]">
                        {s.title}
                      </option>
                    ))}
                    <option value="not-sure" className="bg-[#3D130E] text-[#F3E0DC]">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-display text-xs uppercase tracking-[0.16em] text-[#D4A59A] mb-1.5 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-[#240A07]/60 border border-[#F3E0DC]/20 text-[#F3E0DC] font-editorial text-sm focus:outline-none focus:border-[#F3E0DC] focus:ring-1 focus:ring-[#F3E0DC]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full btn-primary font-display text-xs uppercase tracking-[0.18em] font-medium shadow-sm"
                  >
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
