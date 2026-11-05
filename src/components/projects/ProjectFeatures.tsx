"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { ProjectFeaturesProps } from "./types";

/**
 * Single Responsibility Principle (SRP):
 * Renders the categorized key capabilities bullet grid.
 */
export function ProjectFeatures({ features, language }: ProjectFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <div className="pt-4 border-t border-zinc-800 mb-5">
      <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-3">
        {language === "es" ? "Capacidades Clave:" : "Key Capabilities:"}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {features.map((feature, fIdx) => (
          <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
