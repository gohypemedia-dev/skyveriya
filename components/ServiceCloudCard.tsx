"use client";

import React from "react";
import { ServiceItem } from "@/data/servicesData";
import NineCloudsArt from "./NineCloudsArt";

export interface ServiceCloudCardProps {
  service: ServiceItem;
  onClick: (service: ServiceItem) => void;
  buttonRef?: (el: HTMLButtonElement | null) => void;
  className?: string;
}

/**
 * Shared ServiceCloudCard component
 * Displays only the cloud illustration and centred service name directly on the brick-red background.
 * Free of card rectangles, borders, shadows, or box-shaped hover backgrounds.
 * Uses pale ivory and dusty rose cloud fills with oxblood linework for distinct contrast against #BC4639.
 */
export default function ServiceCloudCard({
  service,
  onClick,
  buttonRef,
  className = "",
}: ServiceCloudCardProps) {
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={() => onClick(service)}
      className={`group flex flex-col items-center text-center p-4 sm:p-6 bg-transparent border-0 shadow-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#BC4639] rounded-xl transition-all duration-200 select-none ${className}`}
      aria-label={`Open details for ${service.title}`}
      aria-haspopup="dialog"
    >
      {/* Cloud Illustration - full silhouette, overflow visible, no clipping */}
      <div className="w-full h-32 sm:h-36 flex items-center justify-center mb-3 sm:mb-4 overflow-visible">
        <NineCloudsArt
          cloudType={service.cloudType}
          className="w-48 h-28 sm:w-56 sm:h-32 transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105 overflow-visible"
          strokeColor="#5C2018"
          fillColor="#F3E0DC"
          secondaryColor="#D4A59A"
          accentColor="#5C2018"
        />
      </div>

      {/* Service Name Centred Beneath Cloud - Pale Ivory on Brick Red */}
      <h3 className="font-display font-medium text-xs sm:text-sm uppercase tracking-[0.14em] text-[#F3E0DC] group-hover:text-[#FAF4F2] leading-relaxed max-w-xs transition-colors">
        {service.title}
      </h3>
    </button>
  );
}
