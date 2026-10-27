"use client";

import React, { useState, useRef } from "react";
import { servicesData, ServiceItem } from "@/data/servicesData";
import NineCloudsArt from "./NineCloudsArt";
import ServiceDialog from "./ServiceDialog";

export default function NineCloudsSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const triggerRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleCloudClick = (service: ServiceItem) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section
      id="services"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#F3E0DC] text-[#5C2018] select-none border-t border-[#5C2018]/15"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.16em] text-[#5C2018]">
            Services
          </h2>
        </div>

        {/* Nine Interactive Service Clouds Grid on Pale Ivory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {servicesData.map((service) => (
            <button
              key={service.id}
              ref={(el) => {
                triggerRefs.current[service.id] = el;
              }}
              onClick={() => handleCloudClick(service)}
              className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-xl border border-[#5C2018]/15 bg-[#FAF4F2] hover:border-[#5C2018]/40 hover:bg-[#FAF4F2]/90 transition-all focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
              aria-label={`Open details for ${service.title}`}
              aria-haspopup="dialog"
            >
              {/* Cohesive Cloud Artwork in Oxblood & Terracotta */}
              <div className="w-full h-32 sm:h-36 flex items-center justify-center mb-4">
                <NineCloudsArt
                  cloudType={service.cloudType}
                  className="w-48 h-28 sm:w-56 sm:h-32 transition-transform duration-200 group-hover:scale-105"
                  strokeColor="#5C2018"
                  fillColor="#BC4639"
                  secondaryColor="#D4A59A"
                  accentColor="#BC4639"
                />
              </div>

              {/* Consistently Oxblood Service Title */}
              <h3 className="font-display font-medium text-xs sm:text-sm uppercase tracking-[0.14em] text-[#5C2018] leading-relaxed max-w-xs transition-colors">
                {service.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {/* Accessible Service Dialog */}
      <ServiceDialog
        service={selectedService}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        triggerElement={selectedService ? triggerRefs.current[selectedService.id] : null}
      />
    </section>
  );
}
