"use client";

import React from "react";
import { ProjectCardProps } from "./types";
import { ProjectActions } from "./ProjectActions";
import { ProjectFeatures } from "./ProjectFeatures";
import { ProjectTechStack } from "./ProjectTechStack";
import { ProjectPreview } from "./previews/registry";

/**
 * Single Responsibility Principle (SRP) & Interface Segregation Principle (ISP):
 * Encapsulates the presentation structure of an individual personal project showcase card.
 * Delegates specialized concerns (CTAs, previews, features, tech stack) to focused subcomponents.
 */
export function ProjectCard({ project, language }: ProjectCardProps) {
  return (
    <article
      className="p-4.5 sm:p-8 rounded-xl bg-zinc-900/50 border border-zinc-800"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Header row: Title, Badge and CTAs */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-zinc-400">
              {project.badge[language]}
            </span>
          </div>
          <h3
            id={`project-title-${project.id}`}
            className="text-xl sm:text-3xl font-bold text-white tracking-tight"
          >
            {project.name}
          </h3>
        </div>

        {/* Action CTAs (Repo on left, Visit App on right) */}
        <ProjectActions
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
          isPrivateRepo={project.isPrivateRepo}
          language={language}
        />
      </div>

      {/* Tagline */}
      <p className="text-sm sm:text-base text-zinc-300 font-medium mb-6">
        {project.tagline[language]}
      </p>

      {/* Two Column details: Narrative & Architecture Preview Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
        <div className="lg:col-span-7 space-y-4 text-sm text-zinc-300 leading-relaxed">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-1">
              {language === "es" ? "Utilidad & Propósito:" : "Utility & Purpose:"}
            </h4>
            <p className="text-zinc-300">
              {project.utility[language]}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-1">
              {language === "es" ? "Enfoque Arquitectónico:" : "Architecture Approach:"}
            </h4>
            <p className="text-zinc-400">
              {project.description[language]}
            </p>
          </div>
        </div>

        {/* Dynamic Project Preview Widget resolved via OCP Registry */}
        <ProjectPreview projectId={project.id} language={language} />
      </div>

      {/* Key Capabilities */}
      <ProjectFeatures
        features={project.features[language]}
        language={language}
      />

      {/* Tech Stack */}
      <ProjectTechStack
        technologies={project.technologies}
        language={language}
      />
    </article>
  );
}
