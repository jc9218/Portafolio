import React from "react";

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      aria-label="Juan Camilo López Logo"
    >
      {/* Bicycle Sprocket Cog Base */}
      <path
        d="M 51.5 19.7 L 56.7 6.5 L 71.3 6.5 L 76.5 19.7 L 86.5 23.9 L 99.5 18.2 L 109.8 28.5 L 104.1 41.5 L 108.3 51.5 L 121.5 56.7 L 121.5 71.3 L 108.3 76.5 L 104.1 86.5 L 109.8 99.5 L 99.5 109.8 L 86.5 104.1 L 76.5 108.3 L 71.3 121.5 L 56.7 121.5 L 51.5 108.3 L 41.5 104.1 L 28.5 109.8 L 18.2 99.5 L 23.9 86.5 L 19.7 76.5 L 6.5 71.3 L 6.5 56.7 L 19.7 51.5 L 23.9 41.5 L 18.2 28.5 L 28.5 18.2 L 41.5 23.9 Z"
        fill="#090d16"
        stroke="#10b981"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Left Code Bracket < */}
      <path
        d="M 34 51 L 23 64 L 34 77"
        fill="none"
        stroke="#10b981"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter 'J' (Crisp High-Contrast White Monogram) */}
      <path
        d="M 45 44 L 57 44 M 53 44 L 53 74 A 9 9 0 0 1 40 82"
        fill="none"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter 'L' (Crisp High-Contrast White Monogram) */}
      <path
        d="M 68 44 L 68 82 L 84 82"
        fill="none"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Code Bracket > */}
      <path
        d="M 94 51 L 105 64 L 94 77"
        fill="none"
        stroke="#10b981"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
