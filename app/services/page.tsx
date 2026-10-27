import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
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
      <Header />

      {/* Services Header */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#BC4639] text-[#F3E0DC] select-none">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.14em] text-[#F3E0DC] mb-4">
            Services at Skyveriya
          </h1>
          <p className="font-editorial italic text-xl sm:text-2xl text-[#F3E0DC]/90 font-normal">
            Nine connected services for world of creators
          </p>
        </div>
      </section>

      {/* Nine Services Listing */}
      <div className="w-full flex flex-col">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={`service-${service.id}`}
              className={`relative w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-16 border-t ${
                isEven
                  ? "bg-[#F3E0DC] text-[#5C2018] border-[#BC4639]/20"
                  : "bg-[#5C2018] text-[#F3E0DC] border-[#F3E0DC]/15"
              }`}
            >
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                {/* Cloud Artwork Column */}
                <div className="md:col-span-4 flex items-center justify-start">
                  <div className="w-48 h-32 flex items-center justify-start">
                    <NineCloudsArt
                      cloudType={service.cloudType}
                      className="w-full h-full"
                      strokeColor={isEven ? "#5C2018" : "#F3E0DC"}
                    />
                  </div>
                </div>

                {/* Service Approved Content Column */}
                <div className="md:col-span-8 space-y-4">
                  <h2
                    className="font-display font-light text-2xl sm:text-3xl uppercase tracking-[0.12em] leading-snug"
                    style={{ color: isEven ? "#5C2018" : "#F3E0DC" }}
                  >
                    {service.title}
                  </h2>

                  <p
                    className="font-editorial italic text-lg sm:text-xl leading-relaxed border-l-2 pl-4"
                    style={{
                      borderColor: isEven ? "#BC4639" : "#BC4639",
                      color: isEven ? "#5C2018" : "#F3E0DC",
                    }}
                  >
                    {service.intro}
                  </p>

                  <p
                    className="font-editorial text-base sm:text-lg leading-relaxed pt-1"
                    style={{ color: isEven ? "rgba(92,32,24,0.85)" : "rgba(243,224,220,0.85)" }}
                  >
                    {service.description}
                  </p>

                  {/* Concise Functional Action */}
                  <div className="pt-4">
                    <Link
                      href={`/contact?service=${service.id}`}
                      className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-display text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                        isEven
                          ? "bg-[#5C2018] text-[#F3E0DC] hover:bg-[#3D130E]"
                          : "bg-[#F3E0DC] text-[#5C2018] hover:bg-[#FAF4F2]"
                      }`}
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
          );
        })}
      </div>

      <Footer />
    </main>
  );
}
