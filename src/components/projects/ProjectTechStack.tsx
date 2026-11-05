"use client";

import React from "react";
import { TechIcon } from "@/components/TechIcon";
import { ProjectTechStackProps } from "./types";

/**
 * Single Responsibility Principle (SRP):
 * Renders technology badges with monochrome brand icons.
 */
export function ProjectTechStack({ technologies, language }: ProjectTechStackProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-1.5">
      <span className="text-xs text-zinc-400 font-mono mr-1">
        {language === "es" ? "Stack:" : "Stack:"}
      </span>
      {technologies.map((tech) => (
        <span
          key={tech}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700/60 text-xs text-zinc-300 font-mono"
        >
          <TechIcon name={tech} className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          <span>{tech}</span>
        </span>
      ))}
    </div>
  );
}
