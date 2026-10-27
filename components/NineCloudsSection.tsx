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
      className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#5C2018] text-[#F3E0DC] select-none border-t border-[#F3E0DC]/15"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.16em] text-[#F3E0DC]">
            Services
          </h2>
        </div>

        {/* Nine Interactive Service Clouds Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {servicesData.map((service) => (
            <button
              key={service.id}
              ref={(el) => {
                triggerRefs.current[service.id] = el;
              }}
              onClick={() => handleCloudClick(service)}
              className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-lg border border-[#F3E0DC]/15 bg-[#5C2018] hover:border-[#F3E0DC]/40 hover:bg-[#F3E0DC]/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#4285F4]"
              aria-label={`Open details for ${service.title}`}
              aria-haspopup="dialog"
            >
              {/* Ornamental Cloud Artwork */}
              <div className="w-full h-32 sm:h-36 flex items-center justify-center mb-4">
                <NineCloudsArt
                  cloudType={service.cloudType}
                  className="w-44 h-28 sm:w-48 sm:h-30 transition-transform duration-200 group-hover:scale-105"
                  strokeColor="#F3E0DC"
                />
              </div>

              {/* Full Service Title (Cleanly wrapped) */}
              <h3 className="font-display font-medium text-xs sm:text-sm uppercase tracking-[0.14em] text-[#F3E0DC] leading-relaxed max-w-xs">
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
