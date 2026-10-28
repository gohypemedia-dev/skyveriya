import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/servicesData";
import NineCloudsArt from "@/components/NineCloudsArt";

export const metadata: Metadata = {
  title: "Services — SKYVERIYA",
  description: "Services at Skyveriya. Nine connected services for world of creators.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#BC4639] text-[#F3E0DC]">
      {/* Services Header */}
      <section className="relative w-full pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-16 bg-[#BC4639] text-[#F3E0DC] select-none">
        <div className="max-w-4xl mx-auto">
          <div className="w-10 h-[1.5px] bg-[#D4A59A] mb-6" />
          <h1 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.14em] text-[#F3E0DC] mb-4">
            Services at Skyveriya
          </h1>
          <p className="font-editorial italic text-xl sm:text-2xl text-[#F3E0DC]/85 font-normal">
            Nine connected services for world of creators
          </p>
        </div>
      </section>

      {/* Nine Services Listing on Brick Red */}
      <div className="w-full flex flex-col">
        {servicesData.map((service) => (
          <section
            key={service.id}
            id={`service-${service.id}`}
            className="relative w-full py-14 sm:py-18 px-4 sm:px-8 lg:px-16 bg-[#BC4639] text-[#F3E0DC] border-t border-[#F3E0DC]/15"
          >
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Cloud Artwork Column */}
              <div className="md:col-span-4 flex items-center justify-start overflow-visible">
                <div className="w-48 h-32 flex items-center justify-start overflow-visible">
                  <NineCloudsArt
                    cloudType={service.cloudType}
                    className="w-full h-full overflow-visible"
                    strokeColor="#5C2018"
                    fillColor="#F3E0DC"
                    secondaryColor="#D4A59A"
                    accentColor="#5C2018"
                  />
                </div>
              </div>

              {/* Service Approved Content Column */}
              <div className="md:col-span-8 space-y-4">
                <h2 className="font-display font-light text-2xl sm:text-3xl uppercase tracking-[0.12em] text-[#F3E0DC] leading-snug">
                  {service.title}
                </h2>

                <p className="font-editorial italic text-lg sm:text-xl text-[#F3E0DC] leading-relaxed border-l-2 border-[#D4A59A] pl-4">
                  {service.intro}
                </p>

                <p className="font-editorial text-base sm:text-lg text-[#F3E0DC]/85 leading-relaxed pt-1">
                  {service.description}
                </p>

                {/* Secondary Button Style */}
                <div className="pt-4">
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#F3E0DC]/40 text-[#F3E0DC] hover:border-[#F3E0DC] hover:bg-[#F3E0DC]/10 font-display text-xs uppercase tracking-[0.16em] font-medium transition-colors"
                  >
                    <span>Enquire about this service</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
}
