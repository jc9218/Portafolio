import React from "react";

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      aria-label="Juan Camilo López Logo"
    >
      <defs>
        <linearGradient id="logoGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22232b" />
          <stop offset="100%" stopColor="#0e0f15" />
        </linearGradient>
      </defs>

      {/* Base Badge Background */}
      <rect width="128" height="128" rx="28" fill="#090a0f" />
      <rect
        width="126"
        height="126"
        x="1"
        y="1"
        rx="27"
        fill="none"
        stroke="#27272a"
        strokeWidth="1.5"
      />

      {/* Subtle Radial Glow in Center */}
      <circle cx="64" cy="64" r="48" fill="#10b981" opacity="0.08" />

      {/* Bicycle Chainring (12-Tooth Sprocket Gear) */}
      <path
        d="M 57.94 6.32 L 70.06 6.32 L 73.35 15.90 L 79.95 17.67 L 87.59 11.01 L 98.09 17.08 L 96.15 27.02 L 100.98 31.85 L 110.92 29.91 L 116.99 40.41 L 110.33 48.05 L 112.10 54.65 L 121.68 57.94 L 121.68 70.06 L 112.10 73.35 L 110.33 79.95 L 116.99 87.59 L 110.92 98.09 L 100.98 96.15 L 96.15 100.98 L 98.09 110.92 L 87.59 116.99 L 79.95 110.33 L 73.35 112.10 L 70.06 121.68 L 57.94 121.68 L 54.65 112.10 L 48.05 110.33 L 40.41 116.99 L 29.91 110.92 L 31.85 100.98 L 27.02 96.15 L 17.08 98.09 L 11.01 87.59 L 17.67 79.95 L 15.90 73.35 L 6.32 70.06 L 6.32 57.94 L 15.90 54.65 L 17.67 48.05 L 11.01 40.41 L 17.08 29.91 L 27.02 31.85 L 31.85 27.02 L 29.91 17.08 L 40.41 11.01 L 48.05 17.67 L 54.65 15.90 Z"
        fill="url(#logoGearGrad)"
        stroke="#3f3f46"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Inner Chainring Recess Ring */}
      <circle
        cx="64"
        cy="64"
        r="43"
        fill="#0c0d12"
        stroke="#27272a"
        strokeWidth="1.5"
      />

      {/* 6 Chainring Lightening Cutouts (Weight-saving Drillium Holes) */}
      <circle cx="64" cy="28" r="3.5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <circle cx="95.18" cy="46" r="3.5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <circle cx="95.18" cy="82" r="3.5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <circle cx="64" cy="100" r="3.5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <circle cx="32.82" cy="82" r="3.5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <circle cx="32.82" cy="46" r="3.5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />

      {/* Inner Plate Accent Ring */}
      <circle
        cx="64"
        cy="64"
        r="33"
        fill="none"
        stroke="#27272a"
        strokeWidth="1"
        strokeDasharray="2 3"
      />

      {/* Left Code Bracket < */}
      <path
        d="M 37 53 L 28 64 L 37 75"
        fill="none"
        stroke="#10b981"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Code Bracket > */}
      <path
        d="M 91 53 L 100 64 L 91 75"
        fill="none"
        stroke="#10b981"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter 'J' (Modern Architectural Monogram) */}
      <path
        d="M 46 46 L 53 46 M 50 46 L 50 72 C 50 78.5 42 81 37 76.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Diagonal Code Slash / Bicycle Chain Link Pin Connector */}
      <line
        x1="65"
        y1="46"
        x2="59"
        y2="81"
        stroke="#10b981"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="65" cy="46" r="2" fill="#34d399" />
      <circle cx="59" cy="81" r="2" fill="#34d399" />

      {/* Letter 'L' (Precision Tech Monogram) */}
      <path
        d="M 71 46 L 71 78 L 83 78"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
