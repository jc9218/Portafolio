"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { TechIcon } from "@/components/TechIcon";
import { ProjectExperienceItemProps } from "./types";

/**
 * Single Responsibility Principle (SRP):
 * Renders an enterprise client project or architectural deliverable within a career role.
 */
export function ProjectExperienceItem({ project, language }: ProjectExperienceItemProps) {
  return (
    <div className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/80">
      <div className="mb-2">
        <h4 className="text-sm font-semibold text-zinc-100">
          {project.title[language]}
        </h4>
        <p className="text-xs text-zinc-400 font-mono">
          {project.subtitle[language]}
        </p>
      </div>

      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
        {project.description[language]}
      </p>

      {/* Bullet highlights */}
      <ul className="space-y-1.5 mb-3">
        {project.highlights[language].map((highlight, hIdx) => (
          <li
            key={hIdx}
            className="flex items-start gap-2 text-xs text-zinc-300"
          >
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {/* Project Technologies */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
          >
            <TechIcon name={tech} className="w-3 h-3 text-zinc-400 shrink-0" />
            <span>{tech}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
