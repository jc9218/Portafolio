"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle, ExternalLink } from "lucide-react";

export default function ExperienceTimeline() {
  const { language } = useLanguage();
  const { experiences } = PORTFOLIO_DATA;
  const [expandedJobId, setExpandedJobId] = useState<string>("aplyca");

  const toggleExpand = (id: string) => {
    setExpandedJobId(expandedJobId === id ? "" : id);
  };

  return (
    <section id="experience" className="py-24 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {language === "es" ? "Experiencia Profesional" : "Professional Experience"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {language === "es"
              ? "Más de una década liderando el diseño y desarrollo de arquitecturas de software empresarial de alto impacto y escala intensiva."
              : "Over a decade leading the design and development of high-impact, enterprise-scale software architectures."}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedJobId === exp.id;
            return (
              <div key={exp.id} className="relative pl-6 md:pl-10 group">
                {/* Timeline node marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-emerald-400 group-hover:scale-125 transition-all" />

                {/* Job Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300">
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {exp.company}
                        </h3>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-base font-semibold text-emerald-400">
                        {exp.role[language]}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period[language]}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {exp.summary[language]}
                  </p>

                  {/* Sub-projects & Highlights */}
                  {exp.projects.length > 0 && (
                    <div className="space-y-6 pt-4 border-t border-slate-800/80">
                      {exp.projects.map((project) => (
                        <div
                          key={project.id}
                          className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700/80 transition-colors"
                        >
                          <div className="mb-3">
                            <h4 className="text-base font-bold text-slate-100 mb-0.5">
                              {project.title[language]}
                            </h4>
                            <p className="text-xs text-cyan-400 font-mono">
                              {project.subtitle[language]}
                            </p>
                          </div>

                          <p className="text-sm text-slate-300 leading-relaxed mb-4">
                            {project.description[language]}
                          </p>

                          {/* Bullet highlights */}
                          <ul className="space-y-2 mb-4">
                            {project.highlights[language].map((highlight, hIdx) => (
                              <li
                                key={hIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                              >
                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Project Techs */}
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
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
                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-400 font-mono mr-2">
                      {language === "es" ? "Tecnologías:" : "Technologies:"}
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
