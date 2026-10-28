"use client";

import React, { useState, useRef } from "react";
import { servicesData, ServiceItem } from "@/data/servicesData";
import ServiceCloudCard from "./ServiceCloudCard";
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
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#BC4639] text-[#F3E0DC] select-none border-t border-[#F3E0DC]/15"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.16em] text-[#F3E0DC]">
            Services
          </h2>
        </div>

        {/* Nine Interactive Service Clouds Grid on Brick Red (Transparent surrounding area, no card boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start">
          {servicesData.map((service) => (
            <ServiceCloudCard
              key={service.id}
              service={service}
              onClick={handleCloudClick}
              buttonRef={(el) => {
                triggerRefs.current[service.id] = el;
              }}
            />
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
