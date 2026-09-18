"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Calendar, CheckCircle } from "lucide-react";

export default function ExperienceTimeline() {
  const { language } = useLanguage();
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-2">
            02 // {language === "es" ? "Trayectoria Profesional" : "Professional Track"}
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
            <div key={exp.id} className="relative pl-5 sm:pl-8 group">
              {/* Timeline node marker */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover:bg-emerald-400 transition-colors" />

              {/* Job Card */}
              <div className="p-4 sm:p-7 rounded-xl bg-zinc-900/50 border border-zinc-800">
                {/* Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5 mb-0.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <span className="text-xs text-zinc-400 font-mono">
                        ({exp.location})
                      </span>
                    </div>
                    <p className="text-sm font-medium text-emerald-400">
                      {exp.role[language]}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.period[language]}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                  {exp.summary[language]}
                </p>

                {/* Sub-projects & Highlights */}
                {exp.projects.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-zinc-800">
                    {exp.projects.map((project) => (
                      <div
                        key={project.id}
                        className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/80"
                      >
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

                        {/* Project Techs */}
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Overall Company Tech Stack */}
                <div className="mt-5 pt-3.5 border-t border-zinc-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-zinc-400 font-mono mr-1">
                    {language === "es" ? "Stack:" : "Stack:"}
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700/60 text-xs text-zinc-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
