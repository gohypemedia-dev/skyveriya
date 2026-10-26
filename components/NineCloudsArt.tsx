"use client";

import React from "react";

interface CloudArtProps {
  className?: string;
  isParting?: boolean;
  strokeColor?: string;
  fillColor?: string;
}

// ---------------------------------------------------------------------------
// Cloud 01: The Sovereign Crest Scroll (Management & Legal)
// ---------------------------------------------------------------------------
export function CloudArt01({ className = "w-44 h-28", isParting = false, strokeColor = "#F3E0DC" }: CloudArtProps) {
  return (
    <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="c1glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="75" r="50" fill="url(#c1glow)" />
      
      {/* Outer contour */}
      <g className={isParting ? "transition-transform duration-500 ease-out origin-center -translate-y-3 -translate-x-2 scale-105 opacity-70" : undefined}>
        <path
          d="M45 105 C25 105 12 90 15 72 C18 56 32 46 48 46 C52 30 70 18 90 20 C102 21 112 28 118 36 C128 24 146 18 162 22 C180 26 194 40 196 58 C210 60 222 72 222 88 C222 104 210 118 194 118 L45 118"
          fill="#F3E0DC"
          fillOpacity="0.1"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Upper Curling Filigree Scroll */}
        <path
          d="M90 20 C80 20 72 28 74 38 C76 46 84 52 92 50 C98 48 100 42 98 36"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M162 22 C172 22 180 30 178 40 C176 48 168 54 160 52 C154 50 152 44 154 38"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>

      {/* Lower Layer & Flowing Tail */}
      <g className={isParting ? "transition-transform duration-500 ease-out origin-center translate-y-3 translate-x-2 scale-105 opacity-70" : undefined}>
        {/* Core Swirl */}
        <path
          d="M120 55 C108 55 98 65 98 78 C98 90 108 100 120 100 C132 100 142 90 142 78 C142 68 134 60 125 62 C118 64 115 70 118 75"
          stroke={strokeColor}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Flowing Tail Sweep */}
        <path
          d="M194 118 C215 118 232 110 238 98 C242 90 236 82 228 85 C220 88 218 96 206 102"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path d="M45 118 C28 118 14 125 4 135" stroke="#D4A59A" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="120" cy="78" r="2.5" fill="#4285F4" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Cloud 02: The Architectural Pavilion (Presentation & Operations)
// ---------------------------------------------------------------------------
export function CloudArt02({ className = "w-44 h-28", isParting = false, strokeColor = "#F3E0DC" }: CloudArtProps) {
  return (
    <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="c2glow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="75" r="45" fill="url(#c2glow)" />

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center -translate-y-3 scale-105 opacity-70" : undefined}>
        {/* Symmetrical Triple Peak Contour */}
        <path
          d="M50 110 C32 110 20 96 22 78 C24 62 38 52 54 52 C60 34 78 22 98 22 C108 22 116 26 120 32 C124 26 132 22 142 22 C162 22 180 34 186 52 C202 52 216 62 218 78 C220 96 208 110 190 110 L50 110 Z"
          fill="#F3E0DC"
          fillOpacity="0.09"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Crown Arches */}
        <path d="M98 22 C98 36 108 48 120 48 C132 48 142 36 142 22" stroke={strokeColor} strokeWidth="1.2" />
        <path d="M54 52 C64 52 74 62 74 74 C74 84 66 92 56 90" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M186 52 C176 52 166 62 166 74 C166 84 174 92 184 90" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
      </g>

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center translate-y-3 scale-105 opacity-70" : undefined}>
        {/* Center Plinth Portal Spiral */}
        <circle cx="120" cy="80" r="14" stroke={strokeColor} strokeWidth="1.2" strokeDasharray="3 2" />
        <circle cx="120" cy="80" r="4" fill="#4285F4" />
        {/* Stepped Symmetrical Flowing Tails */}
        <path d="M40 115 C20 115 8 124 2 135" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M200 115 C220 115 232 124 238 135" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M70 110 L170 110" stroke="#D4A59A" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Cloud 03: The Ascending Flare (Marketing)
// ---------------------------------------------------------------------------
export function CloudArt03({ className = "w-44 h-28", isParting = false, strokeColor = "#F3E0DC" }: CloudArtProps) {
  return (
    <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="c3glow" cx="60%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="130" cy="65" r="50" fill="url(#c3glow)" />

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center -translate-y-3 translate-x-2 scale-105 opacity-70" : undefined}>
        {/* Dynamic Angled Soaring Silhouette */}
        <path
          d="M30 115 C18 115 10 102 14 88 C18 74 32 66 46 68 C44 50 56 34 74 30 C90 26 106 32 116 44 C126 26 150 16 172 20 C196 24 214 44 216 68 C226 74 232 86 230 98 C228 110 216 120 200 120 L40 120"
          fill="#F3E0DC"
          fillOpacity="0.08"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Soaring Crest Tendrils */}
        <path d="M172 20 C184 8 205 6 220 14 C225 18 220 26 214 24 C205 22 198 28 194 36" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M74 30 C70 18 78 8 90 8 C96 8 98 14 94 18 C88 20 82 26 82 34" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      </g>

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center translate-y-3 -translate-x-2 scale-105 opacity-70" : undefined}>
        {/* Internal Dynamic Arcs */}
        <path d="M50 85 Q 90 70 130 80 T 190 75" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M70 98 Q 110 85 150 92" stroke="#D4A59A" strokeWidth="0.8" strokeDasharray="3 2" />
        {/* Trailing Tail Flare */}
        <path d="M200 120 C218 120 234 115 238 104" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="172" cy="50" r="3" fill="#4285F4" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Cloud 04: The Quad-Filigree Cluster (Business & Growth)
// ---------------------------------------------------------------------------
export function CloudArt04({ className = "w-44 h-28", isParting = false, strokeColor = "#F3E0DC" }: CloudArtProps) {
  return (
    <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="c4glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="75" r="48" fill="url(#c4glow)" />

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center -translate-y-2 -translate-x-2 scale-105 opacity-70" : undefined}>
        {/* 4 Harmonious Overlapping Cloud Lobes */}
        <path
          d="M40 95 C25 95 15 82 18 68 C22 54 36 46 50 48 C56 32 72 20 90 20 C104 20 114 26 120 34 C126 24 140 16 156 16 C176 16 194 30 198 50 C214 52 226 65 226 80 C226 96 212 110 194 110 L45 110"
          fill="#F3E0DC"
          fillOpacity="0.1"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Upper Left & Right Scrolls */}
        <path d="M90 20 C82 20 74 28 76 38 C78 46 86 52 94 50 C100 48 100 40 96 36" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M156 16 C166 16 174 24 172 34 C170 42 162 48 154 46 C148 44 146 38 150 32" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
      </g>

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center translate-y-2 translate-x-2 scale-105 opacity-70" : undefined}>
        {/* Center Diamond Quadrant Star */}
        <path d="M120 48 L124 70 L146 75 L124 80 L120 102 L116 80 L94 75 L116 70 Z" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.6" />
        <circle cx="120" cy="75" r="3" fill="#4285F4" />
        {/* Lower Left & Right Scrolls */}
        <path d="M50 48 C40 48 32 56 34 66 C36 74 44 80 52 78 C58 76 58 68 54 64" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M198 50 C206 50 214 58 212 68 C210 76 202 82 194 80 C188 78 188 70 192 66" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M194 110 C212 110 228 118 235 130" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Cloud 05: The Celestial Crescent (PR & Relationships)
// ---------------------------------------------------------------------------
export function CloudArt05({ className = "w-44 h-28", isParting = false, strokeColor = "#F3E0DC" }: CloudArtProps) {
  return (
    <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="c5glow" cx="45%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="115" cy="75" r="48" fill="url(#c5glow)" />

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center -translate-x-3 -translate-y-1 scale-105 opacity-70" : undefined}>
        {/* Lunar Sweeping Silhouette */}
        <path
          d="M35 110 C20 110 10 96 15 80 C20 64 36 54 52 56 C54 38 72 24 94 24 C104 24 114 28 120 36 C132 20 156 12 180 18 C204 24 220 46 220 72 C220 92 204 108 184 110 L45 110"
          fill="#F3E0DC"
          fillOpacity="0.08"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Crescent Arch Ribbon */}
        <path d="M52 56 C80 34 130 30 170 48" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M65 68 C90 48 135 45 168 60" stroke="#D4A59A" strokeWidth="0.8" strokeDasharray="3 2" />
      </g>

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center translate-x-3 translate-y-1 scale-105 opacity-70" : undefined}>
        {/* Delicate Connecting Tendrils */}
        <path d="M120 36 C124 50 134 60 148 60 C160 60 168 52 166 42" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M15 80 C8 88 4 100 8 112 C12 122 24 126 34 120" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
        <path d="M184 110 C204 110 224 118 235 130" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        {/* Celestial Star in Arch */}
        <circle cx="108" cy="62" r="3" fill="#4285F4" />
        <circle cx="140" cy="80" r="2" fill="#F3E0DC" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Cloud 06: The Nautilus Wave (Logistics & Customs)
// ---------------------------------------------------------------------------
export function CloudArt06({ className = "w-44 h-28", isParting = false, strokeColor = "#F3E0DC" }: CloudArtProps) {
  return (
    <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="c6glow" cx="45%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="80" r="48" fill="url(#c6glow)" />

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center -translate-y-2 translate-x-2 scale-105 opacity-70" : undefined}>
        {/* Maritime / Wave Inflected Cloud Silhouette */}
        <path
          d="M25 90 C15 90 8 80 12 68 C16 54 30 46 44 48 C46 32 62 18 80 18 C92 18 102 24 108 32 C118 18 138 10 158 14 C180 18 196 36 200 58 C214 62 225 74 225 90 C225 106 212 118 195 118 L40 118"
          fill="#F3E0DC"
          fillOpacity="0.09"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Wave Crest Contours */}
        <path d="M44 48 C60 48 72 60 72 74 C72 88 60 98 46 96 C36 94 34 84 40 78 C46 72 54 74 54 80" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M108 32 C124 32 136 44 136 60 C136 74 124 84 110 82 C100 80 98 70 104 64" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
      </g>

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center translate-y-2 -translate-x-2 scale-105 opacity-70" : undefined}>
        {/* Horizontal Navigation Wisps */}
        <path d="M150 90 L220 90" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M140 102 L235 102" stroke="#D4A59A" strokeWidth="0.8" strokeDasharray="4 2" />
        <path d="M195 118 C215 118 232 110 238 98" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="120" cy="72" r="3" fill="#4285F4" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Cloud 07: The Crown of Clouds (Wealth Management)
// ---------------------------------------------------------------------------
export function CloudArt07({ className = "w-44 h-28", isParting = false, strokeColor = "#F3E0DC" }: CloudArtProps) {
  return (
    <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="c7glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="70" r="48" fill="url(#c7glow)" />

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center -translate-y-3 scale-105 opacity-70" : undefined}>
        {/* Regal Tri-Peak Crown Silhouette */}
        <path
          d="M40 110 C22 110 10 96 14 78 C18 62 32 52 48 52 C52 32 72 18 94 18 C104 18 114 22 120 28 C126 22 136 18 146 18 C168 18 188 32 192 52 C208 52 222 62 226 78 C230 96 218 110 200 110 L40 110 Z"
          fill="#F3E0DC"
          fillOpacity="0.1"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Crown Jewel Peaks */}
        <circle cx="94" cy="18" r="2.5" fill="#4285F4" />
        <circle cx="120" cy="10" r="3" fill="#4285F4" />
        <circle cx="146" cy="18" r="2.5" fill="#4285F4" />
        <path d="M120 12 L120 28" stroke={strokeColor} strokeWidth="1" />
      </g>

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center translate-y-3 scale-105 opacity-70" : undefined}>
        {/* Concentric Vault Circles / Asset Coins Motif */}
        <circle cx="120" cy="68" r="18" stroke={strokeColor} strokeWidth="1.2" strokeDasharray="4 2" />
        <circle cx="120" cy="68" r="10" stroke="#D4A59A" strokeWidth="0.9" />
        <circle cx="120" cy="68" r="3.5" fill="#4285F4" />
        {/* Base Foundation Filigree */}
        <path d="M50 110 C65 110 75 100 75 90 C75 80 65 72 55 76" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M190 110 C175 110 165 100 165 90 C165 80 175 72 185 76" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M20 120 C8 120 2 128 4 136" stroke="#D4A59A" strokeWidth="0.8" />
        <path d="M220 120 C232 120 238 128 236 136" stroke="#D4A59A" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Cloud 08: The Flowing Wisp (Lifestyle Curation)
// ---------------------------------------------------------------------------
export function CloudArt08({ className = "w-44 h-28", isParting = false, strokeColor = "#F3E0DC" }: CloudArtProps) {
  return (
    <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="c8glow" cx="45%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="115" cy="75" r="48" fill="url(#c8glow)" />

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center -translate-y-2 -translate-x-3 scale-105 opacity-70" : undefined}>
        {/* Undulating Ethereal Wisp Silhouette */}
        <path
          d="M20 85 C20 70 32 58 48 58 C56 58 64 62 70 68 C76 52 94 40 114 40 C130 40 144 48 150 62 C158 56 168 52 178 52 C194 52 208 64 210 80 C220 82 228 90 228 102 C228 114 218 124 204 124 L55 124 C35 124 20 110 20 85 Z"
          fill="#F3E0DC"
          fillOpacity="0.08"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Flowing Ribbon Waves */}
        <path d="M48 58 C62 58 72 68 72 80 C72 90 64 98 54 96" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M114 40 C100 40 90 52 90 66 C90 78 100 88 112 88 C122 88 128 80 126 72" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
      </g>

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center translate-y-2 translate-x-3 scale-105 opacity-70" : undefined}>
        {/* Elongated Horizontal Streamers */}
        <path d="M204 124 C225 124 240 118 244 108" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M180 112 C210 108 230 98 238 88" stroke="#D4A59A" strokeWidth="0.8" strokeDasharray="3 2" />
        <path d="M30 115 C15 115 5 108 2 98" stroke="#D4A59A" strokeWidth="0.8" />
        <circle cx="112" cy="72" r="2.8" fill="#4285F4" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Cloud 09: The Sacred Lotus Blossom (Creative CSR)
// ---------------------------------------------------------------------------
export function CloudArt09({ className = "w-44 h-28", isParting = false, strokeColor = "#F3E0DC" }: CloudArtProps) {
  return (
    <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="c9glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#BC4639" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="75" r="48" fill="url(#c9glow)" />

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center -translate-y-3 scale-105 opacity-70" : undefined}>
        {/* Lotus Blooming Petal Silhouette */}
        <path
          d="M45 105 C28 105 16 92 18 76 C20 62 32 52 46 52 C52 34 70 20 90 20 C102 20 112 26 120 34 C128 26 138 20 150 20 C170 20 188 34 194 52 C208 52 220 62 222 76 C224 92 212 105 195 105 L45 105 Z"
          fill="#F3E0DC"
          fillOpacity="0.1"
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Central Blooming Lotus Bud */}
        <path d="M120 34 C112 48 112 65 120 78 C128 65 128 48 120 34 Z" fill="#4285F4" fillOpacity="0.3" stroke={strokeColor} strokeWidth="1.2" />
        <circle cx="120" cy="56" r="3" fill="#4285F4" />
      </g>

      <g className={isParting ? "transition-transform duration-500 ease-out origin-center translate-y-3 scale-105 opacity-70" : undefined}>
        {/* Radiating Petal Curves */}
        <path d="M102 46 C94 58 96 74 104 84" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
        <path d="M138 46 C146 58 144 74 136 84" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
        {/* Root Tendrils Connecting Outward to Community */}
        <path d="M45 105 C30 115 15 122 2 125" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M195 105 C210 115 225 122 238 125" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M85 110 Q 120 130 155 110" stroke="#D4A59A" strokeWidth="0.9" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Unified Renderer for the 9 Clouds
// ---------------------------------------------------------------------------
export default function NineCloudsArt({
  cloudType,
  className = "w-44 h-28",
  isParting = false,
  strokeColor = "#F3E0DC",
}: {
  cloudType: number;
  className?: string;
  isParting?: boolean;
  strokeColor?: string;
}) {
  switch (cloudType) {
    case 1:
      return <CloudArt01 className={className} isParting={isParting} strokeColor={strokeColor} />;
    case 2:
      return <CloudArt02 className={className} isParting={isParting} strokeColor={strokeColor} />;
    case 3:
      return <CloudArt03 className={className} isParting={isParting} strokeColor={strokeColor} />;
    case 4:
      return <CloudArt04 className={className} isParting={isParting} strokeColor={strokeColor} />;
    case 5:
      return <CloudArt05 className={className} isParting={isParting} strokeColor={strokeColor} />;
    case 6:
      return <CloudArt06 className={className} isParting={isParting} strokeColor={strokeColor} />;
    case 7:
      return <CloudArt07 className={className} isParting={isParting} strokeColor={strokeColor} />;
    case 8:
      return <CloudArt08 className={className} isParting={isParting} strokeColor={strokeColor} />;
    case 9:
    default:
      return <CloudArt09 className={className} isParting={isParting} strokeColor={strokeColor} />;
  }
}
