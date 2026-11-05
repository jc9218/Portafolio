"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ExperienceCard } from "./experience/ExperienceCard";

/**
 * Single Responsibility Principle (SRP):
 * Orchestrates the "Professional Track" section layout and renders the timeline rail
 * by delegating individual milestone presentation to the modular ExperienceCard component.
 */
export default function ExperienceTimeline() {
  const { language } = useLanguage();
  const { experiences } = PORTFOLIO_DATA;

  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-2">
            01 // {language === "es" ? "Trayectoria Profesional" : "Professional Track"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {language === "es" ? "Experiencia Profesional" : "Professional Experience"}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {language === "es"
              ? "Más de una década liderando el diseño y desarrollo de arquitecturas de software empresarial y guiando equipos de ingeniería."
              : "Over a decade leading the design and development of enterprise software architectures and engineering teams."}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 ml-2.5 sm:ml-4 space-y-8 sm:space-y-10">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
