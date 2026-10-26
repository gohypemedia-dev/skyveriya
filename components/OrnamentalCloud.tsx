import React from "react";

interface CloudProps {
  className?: string;
  variant?: "scroll" | "cascade" | "wisp" | "halo";
  opacity?: number;
  glowColor?: string;
}

/**
 * Variant 1: Ornamental Cloud Scroll
 * Classical Chinese / Renaissance celestial scroll cloud with curling spirals and fine-line hatching.
 */
export function CloudScroll({ className = "w-64 h-40", opacity = 0.85 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <radialGradient id="scrollGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#D4A59A" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="scrollFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3E0DC" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#D4A59A" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#5C2018" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {/* Ambient Glow */}
      <circle cx="160" cy="100" r="85" fill="url(#scrollGlow)" />

      {/* Main Outer Contour */}
      <path
        d="M60 140 C40 140 25 125 25 105 C25 88 38 74 55 72 C58 52 75 36 98 36 C108 36 118 40 126 47 C138 32 158 22 180 22 C210 22 235 42 240 70 C256 72 268 85 268 100 C268 108 264 115 258 120 C272 122 285 134 285 150 C285 168 270 182 250 182 L70 182 C50 182 40 168 40 156 C40 146 48 140 60 140 Z"
        fill="url(#scrollFill)"
        stroke="#F3E0DC"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Delicate Secondary Hairline Contour */}
      <path
        d="M65 136 C50 136 38 124 38 108 C38 94 48 83 62 81 C65 65 79 50 99 50 C108 50 117 53 124 59 C134 47 150 38 170 38 C196 38 217 55 222 79 C236 81 247 92 247 105 C247 112 243 118 238 122 C250 124 261 134 261 148 C261 163 248 174 232 174 L78 174"
        stroke="#D4A59A"
        strokeWidth="0.8"
        strokeDasharray="4 2"
        opacity="0.6"
      />

      {/* Classical Filigree Scroll Centerpieces */}
      {/* Scroll Left */}
      <path
        d="M60 140 C75 140 88 128 88 112 C88 98 76 86 62 86 C50 86 42 95 44 106 C46 114 53 120 62 118 C69 116 72 110 70 104"
        stroke="#F3E0DC"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Scroll Center Peak */}
      <path
        d="M140 85 C140 68 154 54 172 54 C190 54 204 68 204 86 C204 102 190 114 174 114 C160 114 150 104 150 92 C150 82 158 74 168 76 C176 77 180 84 178 90"
        stroke="#F3E0DC"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Scroll Right Flank */}
      <path
        d="M230 110 C242 110 252 120 252 132 C252 144 242 154 230 154 C218 154 210 145 210 135 C210 127 216 121 223 122 C229 123 232 128 230 133"
        stroke="#F3E0DC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Concentric Engraving Hatching / Radiations */}
      <path d="M110 70 Q 125 85 145 88" stroke="#F3E0DC" strokeWidth="0.75" opacity="0.4" />
      <path d="M105 78 Q 120 92 138 96" stroke="#F3E0DC" strokeWidth="0.75" opacity="0.35" />
      <path d="M100 86 Q 115 100 132 104" stroke="#F3E0DC" strokeWidth="0.75" opacity="0.3" />

      <path d="M188 120 Q 172 136 150 144" stroke="#F3E0DC" strokeWidth="0.75" opacity="0.4" />
      <path d="M196 126 Q 180 142 160 150" stroke="#F3E0DC" strokeWidth="0.75" opacity="0.35" />

      {/* Trailing Celestial Tendrils / Wisps */}
      <path
        d="M250 182 C280 182 300 170 308 158 C312 152 308 144 300 146 C292 148 290 156 282 162 C274 168 262 170 250 170"
        stroke="#F3E0DC"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M50 175 C30 175 12 165 6 150 C2 140 10 136 16 140 C22 144 24 154 36 160"
        stroke="#D4A59A"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Celestial Cerulean Highlight Jewels */}
      <circle cx="174" cy="92" r="3" fill="#4285F4" />
      <circle cx="174" cy="92" r="6" stroke="#4285F4" strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.8" />
      <circle cx="62" cy="118" r="2" fill="#4285F4" opacity="0.9" />
    </svg>
  );
}

/**
 * Variant 2: Ornamental Cloud Cascade
 * Stately vertical-tiered cloud formation with intricate concentric loops.
 */
export function CloudCascade({ className = "w-60 h-44", opacity = 0.85 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 300 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <radialGradient id="cascadeGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.22" />
          <stop offset="80%" stopColor="#D4A59A" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="150" cy="110" r="80" fill="url(#cascadeGlow)" />

      {/* Multi-layered Cloud Crests */}
      <path
        d="M70 170 C50 170 35 155 35 135 C35 118 48 105 65 102 C68 82 85 66 108 66 C116 66 124 69 130 74 C140 50 165 34 195 34 C232 34 262 62 265 98 C278 103 286 115 286 128 C286 144 274 156 258 158 C265 166 265 178 255 186 C245 194 230 196 220 190 L85 190 C75 190 70 180 70 170 Z"
        fill="#F3E0DC"
        fillOpacity="0.1"
        stroke="#F3E0DC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Inner Spiraling Scroll Linework */}
      <path
        d="M195 34 C175 34 160 50 160 70 C160 88 174 102 192 102 C206 102 216 92 216 80 C216 70 208 62 198 64 C190 65 186 72 188 78"
        stroke="#F3E0DC"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M108 66 C92 66 80 80 80 96 C80 110 90 120 104 120 C114 120 122 112 122 102 C122 94 116 88 108 90"
        stroke="#F3E0DC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M80 140 C95 140 108 152 108 166 C108 178 98 188 84 188 C74 188 66 180 66 172"
        stroke="#F3E0DC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Fine Ornamental Hairline Accents */}
      <path d="M125 130 C145 125 170 135 185 155" stroke="#D4A59A" strokeWidth="0.8" opacity="0.6" />
      <path d="M135 140 C152 135 172 144 185 162" stroke="#D4A59A" strokeWidth="0.8" opacity="0.4" />

      {/* Cardinal Star Accents */}
      <circle cx="192" cy="80" r="2.8" fill="#4285F4" />
      <circle cx="108" cy="102" r="2.2" fill="#4285F4" />
    </svg>
  );
}

/**
 * Variant 3: Ornamental Cloud Wisp
 * Elongated, horizontal drifting cloud with elegant trailing ribbons.
 */
export function CloudWisp({ className = "w-72 h-32", opacity = 0.85 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 340 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <radialGradient id="wispGlow" cx="45%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.2" />
          <stop offset="75%" stopColor="#D4A59A" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="160" cy="80" r="70" fill="url(#wispGlow)" />

      {/* Drifting Horizontal Silhouette */}
      <path
        d="M25 85 C25 68 38 55 55 55 C65 55 74 60 80 68 C88 48 108 34 132 34 C152 34 170 44 178 60 C185 54 195 50 205 50 C222 50 236 62 238 78 C250 80 260 90 260 102 C260 115 250 125 236 125 L60 125 C40 125 25 110 25 85 Z"
        fill="#F3E0DC"
        fillOpacity="0.08"
        stroke="#F3E0DC"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Internal Flowing Ribbons & Spirals */}
      <path
        d="M55 55 C70 55 82 66 82 80 C82 92 72 102 60 102 C50 102 42 94 44 85 C46 78 52 74 58 76"
        stroke="#F3E0DC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M132 34 C116 34 104 48 104 64 C104 78 116 90 130 90 C142 90 150 82 150 72 C150 64 144 58 136 60"
        stroke="#F3E0DC"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M205 50 C218 50 228 60 228 72 C228 84 218 94 206 94 C196 94 188 86 190 78"
        stroke="#F3E0DC"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      {/* Horizontal Drifting Wisps */}
      <path
        d="M236 125 C265 125 295 118 315 106 C326 99 320 88 310 92 C300 95 292 104 275 108"
        stroke="#F3E0DC"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M250 112 C275 110 300 102 320 90"
        stroke="#D4A59A"
        strokeWidth="0.8"
        strokeDasharray="4 2"
        opacity="0.6"
      />
      <path
        d="M40 120 C25 120 12 114 4 104"
        stroke="#D4A59A"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Celestial Blue Accents */}
      <circle cx="130" cy="72" r="2.8" fill="#4285F4" />
      <circle cx="60" cy="85" r="2" fill="#4285F4" />
    </svg>
  );
}

/**
 * Celestial Star Accent
 * 8-pointed fine-line editorial star
 */
export function CelestialStar({ className = "w-6 h-6", color = "#F3E0DC" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="0.6" strokeDasharray="2 2" opacity="0.3" />
      <path
        d="M20 2 L22 17 L37 19 L23 22 L20 37 L17 22 L3 19 L18 17 Z"
        fill="none"
        stroke={color}
        strokeWidth="1"
      />
      <circle cx="20" cy="20" r="2.2" fill="#4285F4" />
    </svg>
  );
}

export default function OrnamentalCloud({
  className = "",
  variant = "scroll",
  opacity = 0.85,
}: CloudProps) {
  switch (variant) {
    case "cascade":
      return <CloudCascade className={className} opacity={opacity} />;
    case "wisp":
      return <CloudWisp className={className} opacity={opacity} />;
    case "halo":
    case "scroll":
    default:
      return <CloudScroll className={className} opacity={opacity} />;
  }
}
