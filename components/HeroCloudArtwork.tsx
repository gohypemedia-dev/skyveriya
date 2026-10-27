import React from "react";

/**
 * 1. Large Sweeping Cloud (Bottom-Left Foreground)
 * Cropped deliberately at the bottom-left edge.
 * Features an elongated flowing base tail, multi-lobed crests,
 * interior filigree scroll spirals, and subtle cerulean core highlight.
 */
export function LargeSweepingCloudBottomLeft({ className = "", opacity = 0.9 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 560 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroBLFill" x1="10%" y1="90%" x2="70%" y2="20%">
          <stop offset="0%" stopColor="#5C2018" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#D4A59A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F3E0DC" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Main Outer Contour Silhouette */}
      <path
        d="M-20 380 C40 380 90 365 130 330 C160 305 180 270 205 260 C235 248 260 262 285 240 C310 218 315 185 345 175 C385 160 425 185 455 220 C480 250 490 290 510 320 C530 350 550 375 580 390 L-20 400 Z"
        fill="url(#heroBLFill)"
      />

      {/* Primary Decorative Cloud Contour Line */}
      <path
        d="M-20 360 C50 360 100 340 140 300 C165 275 185 240 215 235 C245 230 270 250 295 230 C320 210 325 170 360 160 C400 150 435 175 465 210 C490 240 500 280 520 310 C540 340 560 360 590 370"
        stroke="#F3E0DC"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Secondary Delicate Dashed Contour Line */}
      <path
        d="M-10 345 C55 345 105 325 142 288 C168 262 188 230 218 224 C248 218 272 238 298 218 C322 198 328 158 362 148 C402 138 438 162 468 198 C492 228 502 268 522 298"
        stroke="#D4A59A"
        strokeWidth="0.9"
        strokeDasharray="5 3"
        opacity="0.65"
      />

      {/* Interior Filigree Spirals & Classical Volutes */}
      {/* Primary Heart Spiral */}
      <path
        d="M215 235 C240 235 260 215 260 190 C260 160 235 135 200 135 C160 135 130 170 130 215 C130 265 170 300 220 300 C265 300 295 270 295 230"
        stroke="#F3E0DC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Secondary Crest Spiral */}
      <path
        d="M360 160 C385 160 405 180 405 205 C405 230 385 250 360 250 C335 250 320 230 325 210 C330 195 345 185 360 190"
        stroke="#F3E0DC"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Tertiary Left Base Spiral */}
      <path
        d="M60 350 C85 350 105 330 105 305 C105 280 85 260 60 260 C35 260 20 280 25 300 C30 315 45 325 60 320"
        stroke="#F3E0DC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Fine Concentric Engraving Hatching */}
      <path d="M175 165 C185 155 200 150 215 152" stroke="#D4A59A" strokeWidth="0.8" opacity="0.6" />
      <path d="M165 178 C178 166 195 160 212 163" stroke="#D4A59A" strokeWidth="0.8" opacity="0.5" />
      <path d="M158 192 C172 178 190 172 208 175" stroke="#D4A59A" strokeWidth="0.8" opacity="0.4" />
      <path d="M335 185 C345 175 360 172 375 175" stroke="#D4A59A" strokeWidth="0.75" opacity="0.5" />
      <path d="M340 198 C350 188 362 185 375 188" stroke="#D4A59A" strokeWidth="0.75" opacity="0.4" />

      {/* Sweeping Trailing Ribbons & Tapered Tendrils */}
      <path
        d="M295 300 C340 300 390 285 435 260 C465 242 490 220 520 210 C540 204 550 212 540 224 C530 236 505 250 480 265 C435 292 385 315 330 320"
        stroke="#F3E0DC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M320 330 C365 330 420 310 465 285 C485 274 505 262 525 260"
        stroke="#D4A59A"
        strokeWidth="0.8"
        strokeDasharray="4 2"
        opacity="0.5"
      />

      {/* Cerulean Jewel Accents */}
      <circle cx="215" cy="210" r="3.5" fill="#4285F4" />
      <circle cx="215" cy="210" r="7" stroke="#4285F4" strokeWidth="0.9" strokeDasharray="2 2" opacity="0.7" />
      <circle cx="360" cy="205" r="2.5" fill="#4285F4" opacity="0.9" />
    </svg>
  );
}

/**
 * 2. Complementary Cloud (Upper-Right Foreground)
 * Cropped deliberately at the top-right corner.
 * Enters horizontally with cascading lobes, curling wisps,
 * and delicate filigree spirals.
 */
export function ComplementaryCloudTopRight({ className = "", opacity = 0.88 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 540 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroTRFill" x1="90%" y1="10%" x2="20%" y2="80%">
          <stop offset="0%" stopColor="#5C2018" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#D4A59A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F3E0DC" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Outer Contour Silhouette */}
      <path
        d="M580 -20 C520 -20 460 0 410 35 C370 62 340 75 300 70 C260 65 230 40 190 40 C145 40 110 75 80 115 C55 150 40 195 10 230 C-10 255 -30 270 -50 280 L580 340 Z"
        fill="url(#heroTRFill)"
      />

      {/* Primary Decorative Contour Line */}
      <path
        d="M580 0 C515 0 455 20 405 55 C365 82 335 95 295 90 C255 85 225 60 185 60 C140 60 105 95 75 135 C50 170 35 215 5 250 C-15 272 -30 285 -50 295"
        stroke="#F3E0DC"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Secondary Dashed Hairline Contour */}
      <path
        d="M570 15 C510 15 452 35 402 70 C362 96 332 108 294 104 C256 99 228 75 188 75 C145 75 112 108 82 148 C58 182 44 225 15 258"
        stroke="#D4A59A"
        strokeWidth="0.85"
        strokeDasharray="5 3"
        opacity="0.6"
      />

      {/* Intricate Filigree Spirals */}
      {/* Upper-Right Major Spiral */}
      <path
        d="M405 55 C430 55 450 75 450 100 C450 130 425 155 390 155 C350 155 320 120 320 80 C320 35 360 0 410 0 C450 0 480 30 480 70"
        stroke="#F3E0DC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Center Crest Volute */}
      <path
        d="M295 90 C270 90 250 110 250 135 C250 160 270 180 295 180 C320 180 335 160 330 140 C325 125 310 115 295 120"
        stroke="#F3E0DC"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Lower Wisp Spiral */}
      <path
        d="M185 60 C160 60 140 80 140 105 C140 130 160 150 185 150 C210 150 225 130 220 110 C215 95 200 85 185 90"
        stroke="#F3E0DC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Trailing Tendrils & Ornamental Streamers */}
      <path
        d="M320 150 C270 170 210 185 150 190 C100 195 60 215 30 245 C15 260 25 270 40 265 C60 258 90 238 130 230 C190 220 250 200 300 180"
        stroke="#F3E0DC"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M280 190 C230 205 180 218 130 220 C85 222 55 240 30 265"
        stroke="#D4A59A"
        strokeWidth="0.8"
        strokeDasharray="4 2"
        opacity="0.5"
      />

      {/* Engraving Hatching Accents */}
      <path d="M370 110 C380 120 395 125 410 122" stroke="#D4A59A" strokeWidth="0.75" opacity="0.5" />
      <path d="M365 122 C376 132 390 136 405 133" stroke="#D4A59A" strokeWidth="0.75" opacity="0.4" />
      <path d="M260 145 C270 155 285 158 300 155" stroke="#D4A59A" strokeWidth="0.75" opacity="0.4" />

      {/* Cerulean Jewels */}
      <circle cx="390" cy="100" r="3.2" fill="#4285F4" />
      <circle cx="390" cy="100" r="6.5" stroke="#4285F4" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.7" />
      <circle cx="295" cy="135" r="2.2" fill="#4285F4" opacity="0.85" />
    </svg>
  );
}

/**
 * 3. Supporting Cloud (Upper-Left Midground)
 * Sits near top-left edge to provide subtle counterweight to the bottom-left giant.
 */
export function SupportingCloudTopLeft({ className = "", opacity = 0.75 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="suppTLGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.18" />
          <stop offset="70%" stopColor="#D4A59A" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="160" cy="90" r="75" fill="url(#suppTLGlow)" />

      {/* Flowing Cloud Plume */}
      <path
        d="M20 110 C20 85 40 65 68 65 C80 65 92 70 100 78 C110 55 135 40 165 40 C195 40 220 58 228 85 C240 85 252 95 255 108 C265 110 275 120 275 135 C275 152 260 165 240 165 L60 165 C35 165 20 145 20 110 Z"
        fill="#5C2018"
        fillOpacity="0.2"
        stroke="#F3E0DC"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Internal Spirals */}
      <path
        d="M68 65 C85 65 100 80 100 98 C100 112 88 124 72 124 C60 124 50 115 52 104 C54 96 62 90 70 92"
        stroke="#F3E0DC"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M165 40 C145 40 130 58 130 78 C130 95 145 110 162 110 C176 110 186 100 186 88 C186 78 178 72 170 74"
        stroke="#F3E0DC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Trailing Wisps */}
      <path
        d="M240 165 C270 165 295 152 310 140 C316 135 312 126 304 128 C294 130 286 140 270 144"
        stroke="#F3E0DC"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M250 152 C275 150 295 140 310 130"
        stroke="#D4A59A"
        strokeWidth="0.75"
        strokeDasharray="3 2"
        opacity="0.6"
      />

      <circle cx="162" cy="88" r="2.2" fill="#4285F4" />
    </svg>
  );
}

/**
 * 4. Supporting Cloud (Bottom-Right Midground)
 * Delicately framed on the lower-right flank to counter the bottom-left giant.
 */
export function SupportingCloudBottomRight({ className = "", opacity = 0.75 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 340 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="suppBRGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.18" />
          <stop offset="70%" stopColor="#D4A59A" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="170" cy="90" r="75" fill="url(#suppBRGlow)" />

      {/* Horizontal Plume */}
      <path
        d="M40 95 C40 75 55 60 75 60 C88 60 100 66 108 76 C118 52 142 36 172 36 C200 36 224 52 232 76 C242 70 255 66 268 66 C290 66 308 82 310 102 C320 108 328 118 328 130 C328 145 315 156 298 156 L65 156 C45 156 40 135 40 95 Z"
        fill="#5C2018"
        fillOpacity="0.18"
        stroke="#F3E0DC"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Internal Spirals */}
      <path
        d="M172 36 C152 36 138 52 138 72 C138 90 152 104 170 104 C184 104 194 94 194 82 C194 72 186 66 178 68"
        stroke="#F3E0DC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M268 66 C282 66 294 78 294 92 C294 105 284 116 270 116 C260 116 252 108 254 100"
        stroke="#F3E0DC"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      {/* Trailing Tendril to Left */}
      <path
        d="M65 156 C40 156 20 148 8 136 C2 130 8 122 16 125 C26 128 32 136 48 140"
        stroke="#F3E0DC"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="170" cy="82" r="2.2" fill="#4285F4" />
    </svg>
  );
}

/**
 * 5. Background Celestial Contours (Background Layer: 10–20px parallax)
 * Ultra-subtle, grand flowing celestial contour lines sweeping across
 * the atmospheric background, creating depth without encroaching on central text.
 */
export function BackgroundCelestialContours({ className = "", opacity = 0.16 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Top Atmospheric Contour Flow */}
      <path
        d="M-40 220 C220 140 460 260 720 180 C980 100 1220 220 1480 140"
        stroke="#F3E0DC"
        strokeWidth="1"
        strokeDasharray="6 4"
      />
      <path
        d="M-60 260 C200 180 440 300 700 220 C960 140 1200 260 1460 180"
        stroke="#D4A59A"
        strokeWidth="0.75"
        strokeDasharray="3 3"
      />

      {/* Bottom Atmospheric Contour Flow */}
      <path
        d="M-40 680 C240 760 480 620 740 700 C1000 780 1240 640 1500 720"
        stroke="#F3E0DC"
        strokeWidth="1"
        strokeDasharray="6 4"
      />
      <path
        d="M-60 720 C220 800 460 660 720 740 C980 820 1220 680 1480 760"
        stroke="#D4A59A"
        strokeWidth="0.75"
        strokeDasharray="3 3"
      />

      {/* Ambient Celestial Horizon Loop */}
      <ellipse cx="720" cy="450" rx="680" ry="380" stroke="#F3E0DC" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.4" />
    </svg>
  );
}

/**
 * 6. Section Boundary Transition Ornament
 * A clean pale-ivory section boundary with a selectively overlapping
 * cloud ornament that bridges the Hero into the Nine Clouds section.
 */
export function BoundaryTransitionOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full flex items-center justify-center select-none ${className}`} aria-hidden="true">
      {/* Left Hairline */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#F3E0DC]/40 to-[#F3E0DC]/60" />

      {/* Central Overlapping Cloud Emblem Lockup */}
      <div className="px-4 sm:px-6 relative flex items-center justify-center">
        <svg
          viewBox="0 0 240 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-36 sm:w-48 h-10 sm:h-12 overflow-visible"
        >
          <defs>
            <radialGradient id="transGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4285F4" stopOpacity="0.3" />
              <stop offset="80%" stopColor="#D4A59A" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#5C2018" stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse cx="120" cy="32" rx="45" ry="24" fill="url(#transGlow)" />

          {/* Symmetrical Classical Cloud Crest */}
          <path
            d="M30 40 C45 40 55 30 65 30 C75 30 82 38 95 38 C105 38 112 20 120 20 C128 20 135 38 145 38 C158 38 165 30 175 30 C185 30 195 40 210 40"
            stroke="#F3E0DC"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Center Finial Spiral */}
          <path
            d="M120 20 C110 20 102 28 102 38 C102 46 110 52 120 52 C130 52 138 46 138 38 C138 28 130 20 120 20"
            stroke="#F3E0DC"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M120 28 C115 28 110 32 110 38 C110 42 114 46 120 46 C126 46 130 42 130 38"
            stroke="#D4A59A"
            strokeWidth="0.8"
            strokeLinecap="round"
          />

          {/* Cerulean Center Jewel */}
          <circle cx="120" cy="38" r="2.8" fill="#4285F4" />
          <circle cx="120" cy="38" r="5" stroke="#4285F4" strokeWidth="0.7" strokeDasharray="1.5 1.5" opacity="0.8" />
        </svg>
      </div>

      {/* Right Hairline */}
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#F3E0DC]/40 to-[#F3E0DC]/60" />
    </div>
  );
}
