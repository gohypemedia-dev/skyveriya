import React from "react";

interface WordmarkProps {
  className?: string;
  showSubtitle?: boolean;
  emblemOnly?: boolean;
  light?: boolean;
}

export function SkyveriyaEmblem({ className = "w-8 h-8", light = true }: { className?: string; light?: boolean }) {
  const strokeColor = light ? "#F3E0DC" : "#5C2018";
  const cerulean = "#4285F4";
  const blush = "#D4A59A";

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SKYVERIYA Emblem"
    >
      {/* Outer Editorial Geometrics */}
      <circle cx="50" cy="50" r="46" stroke={strokeColor} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="50" cy="50" r="41" stroke={strokeColor} strokeWidth="1.2" opacity="0.85" />
      <circle cx="50" cy="50" r="37.5" stroke={blush} strokeWidth="0.75" opacity="0.5" />

      {/* Cardinal Celestial Points */}
      <circle cx="50" cy="9" r="1.5" fill={cerulean} />
      <circle cx="91" cy="50" r="1.5" fill={cerulean} />
      <circle cx="50" cy="91" r="1.5" fill={cerulean} />
      <circle cx="9" cy="50" r="1.5" fill={cerulean} />

      {/* Central 8-Pointed Celestial Star */}
      <path
        d="M50 24 L52.5 45 L68 40 L54.5 50 L68 60 L52.5 55 L50 76 L47.5 55 L32 60 L45.5 50 L32 40 L47.5 45 Z"
        fill="none"
        stroke={strokeColor}
        strokeWidth="0.8"
        opacity="0.3"
      />

      {/* Core Ornamental Intertwined Cloud Motif */}
      <g transform="translate(18, 28) scale(0.64)">
        {/* Base Cloud Silhouette */}
        <path
          d="M20 54 C12 54 6 48 6 40 C6 33 11 27 18 26 C19 16 28 8 39 8 C48 8 56 13 59 21 C62 19 66 18 70 18 C80 18 88 26 88 36 C93 38 97 43 97 49 C97 56 91 62 84 62 L20 62"
          fill={blush}
          fillOpacity="0.12"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Interior Classical Swirls & Filigree */}
        <path
          d="M20 54 C24 54 28 50 28 46 C28 41 23 37 17 38 C14 38 12 40 12 43"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M40 28 C45 23 52 23 56 27 C60 31 59 38 54 41 C48 44 42 40 42 34"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M66 38 C72 34 78 37 80 43 C81 48 77 53 71 53 C66 53 62 49 63 44"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Central Celestial Blue Jewel */}
        <circle cx="50" cy="38" r="3.2" fill={cerulean} />
        <circle cx="50" cy="38" r="6" stroke={cerulean} strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.8" />
      </g>
    </svg>
  );
}

export default function Wordmark({
  className = "",
  showSubtitle = true,
  emblemOnly = false,
  light = true,
}: WordmarkProps) {
  const primaryText = light ? "#F3E0DC" : "#5C2018";
  const subText = light ? "#D4A59A" : "#8C2E24";

  if (emblemOnly) {
    return <SkyveriyaEmblem className={className} light={light} />;
  }

  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Brand Emblem */}
      <SkyveriyaEmblem className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-500 group-hover:rotate-12" light={light} />

      {/* Bespoke Wordmark Typography */}
      <div className="flex flex-col">
        <span
          className="font-display font-medium text-lg sm:text-xl tracking-[0.28em] uppercase transition-colors duration-300"
          style={{ color: primaryText }}
        >
          SKYVERIYA
        </span>
        {showSubtitle && (
          <span
            className="font-display text-[9px] sm:text-[10px] tracking-[0.32em] uppercase font-light mt-0.5"
            style={{ color: subText }}
          >
            The World of Creators
          </span>
        )}
      </div>
    </div>
  );
}
