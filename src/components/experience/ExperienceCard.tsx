"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { TechIcon } from "@/components/TechIcon";
import { ExperienceCardProps } from "./types";
import { ProjectExperienceItem } from "./ProjectExperienceItem";

/**
 * Single Responsibility Principle (SRP) & Interface Segregation Principle (ISP):
 * Renders an individual career trajectory milestone, including organizational details,
 * narrative summary, enterprise project deliverables, and technology stack.
 */
export function ExperienceCard({ experience, language }: ExperienceCardProps) {
  const locationText =
    typeof experience.location === "string"
      ? experience.location
      : experience.location[language];

  return (
    <div className="relative pl-5 sm:pl-8 group">
      {/* Timeline node marker */}
      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover:bg-emerald-400 transition-colors" />

      {/* Career Role Card */}
      <article className="p-4 sm:p-7 rounded-xl bg-zinc-900/50 border border-zinc-800">
        {/* Top Bar: Company, Location, Role, Period */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2.5 mb-0.5">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {experience.company}
              </h3>
              <span className="text-xs text-zinc-400 font-mono">
                ({locationText})
              </span>
            </div>
            <p className="text-sm font-medium text-emerald-400">
              {experience.role[language]}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
            <span>{experience.period[language]}</span>
          </div>
        </div>

        {/* Executive Summary */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-5">
          {experience.summary[language]}
        </p>

        {/* Enterprise Client Projects & Case Studies */}
        {experience.projects.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-zinc-800">
            {experience.projects.map((project) => (
              <ProjectExperienceItem
                key={project.id}
                project={project}
                language={language}
              />
            ))}
          </div>
        )}

        {/* Overall Company Tech Stack */}
        <div className="mt-5 pt-3.5 border-t border-zinc-800 flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-zinc-400 font-mono mr-1">
            {language === "es" ? "Stack:" : "Stack:"}
          </span>
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700/60 text-xs text-zinc-300 font-mono"
            >
              <TechIcon name={tech} className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
