"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectCard } from "./projects/ProjectCard";

/**
 * Single Responsibility Principle (SRP):
 * Orchestrates the "Featured Projects" section layout and renders the list of
 * personal projects by delegating presentation to the modular ProjectCard component.
 */
export default function FeaturedProjects() {
  const { language } = useLanguage();
  const { personalProjects } = PORTFOLIO_DATA;

  if (!personalProjects || personalProjects.length === 0) return null;

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-2">
            02 // {language === "es" ? "Proyectos Destacados" : "Featured Projects"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {language === "es" ? "Proyectos Personales" : "Personal Projects"}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {language === "es"
              ? "Desarrollo independiente de sistemas complejos integrando modelos matemáticos de rendimiento, procesamiento de telemetría y arquitecturas modernas."
              : "Independent engineering of complex systems integrating physiological performance models, telemetry streaming, and modern web architectures."}
          </p>
        </div>

        {/* Projects Showcase List */}
        <div className="space-y-8 sm:space-y-10">
          {personalProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
