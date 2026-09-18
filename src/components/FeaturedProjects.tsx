"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  ExternalLink, 
  Activity, 
  CheckCircle2
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

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
            02 // {language === "es" ? "Proyectos & Código Abierto" : "Projects & Open Source"}
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

        {/* Projects List */}
        <div className="space-y-8 sm:space-y-10">
          {personalProjects.map((project) => (
            <div
              key={project.id}
              className="p-4.5 sm:p-8 rounded-xl bg-zinc-900/50 border border-zinc-800"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-zinc-400">
                      {project.badge[language]}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.name}
                  </h3>
                </div>

                <div className="pt-1 sm:pt-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-medium transition-colors w-full sm:w-auto"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{language === "es" ? "Repositorio en GitHub" : "View on GitHub"}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-sm sm:text-base text-zinc-300 font-medium mb-6">
                {project.tagline[language]}
              </p>

              {/* Two Column details */}
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

                {/* Telemetry Visual Widget */}
                <div className="lg:col-span-5 p-3.5 sm:p-5 rounded-lg bg-zinc-950/80 border border-zinc-800 font-mono">
                  <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800/80 pb-2.5 mb-3">
                    <span className="flex items-center gap-1.5 text-zinc-200 font-medium">
                      <Activity className="w-3.5 h-3.5 text-emerald-500" />
                      <span>
                        {language === "es" ? "TELEMETRÍA / MODELO BANISTER" : "TELEMETRY / BANISTER MODEL"}
                      </span>
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      {language === "es" ? "SINCRONIZADO" : "SYNC READY"}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 text-center">
                    <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
                      <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
                        {language === "es" ? "CTL (CONDICIÓN)" : "CTL (FITNESS)"}
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-zinc-100 mt-0.5">84</div>
                      <div className="text-[8px] sm:text-[9px] text-zinc-500">
                        {language === "es" ? "42 Días" : "42 Days"}
                      </div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
                      <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
                        {language === "es" ? "ATL (FATIGA)" : "ATL (FATIGUE)"}
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-zinc-100 mt-0.5">72</div>
                      <div className="text-[8px] sm:text-[9px] text-zinc-500">
                        {language === "es" ? "7 Días" : "7 Days"}
                      </div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
                      <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
                        {language === "es" ? "TSB (FORMA)" : "TSB (FORM)"}
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-emerald-400 mt-0.5">+12</div>
                      <div className="text-[8px] sm:text-[9px] text-zinc-500">
                        {language === "es" ? "Óptimo" : "Optimal"}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 text-[11px] sm:text-xs text-zinc-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
                      <span className="text-zinc-400">
                        {language === "es" ? "Distribución Potencia:" : "Power Distribution:"}
                      </span>
                      <span className="text-zinc-200">
                        {language === "es" ? "7 Zonas Coggan (Z1-Z7)" : "Coggan 7-Zones (Z1-Z7)"}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
                      <span className="text-zinc-400">
                        {language === "es" ? "Sincronización GPS:" : "Device Push:"}
                      </span>
                      <span className="text-zinc-200">Garmin • Wahoo • Karoo</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
                      <span className="text-zinc-400">
                        {language === "es" ? "Regla Recuperación:" : "Recovery Rule:"}
                      </span>
                      <span className="text-zinc-200 font-medium">
                        {language === "es" ? "Límite 48h Carga Muscular" : "48h Heavy-Leg Guardrail"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="pt-4 border-t border-zinc-800 mb-5">
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-3">
                  {language === "es" ? "Capacidades Clave:" : "Key Capabilities:"}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {project.features[language].map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-zinc-400 font-mono mr-1">
                  {language === "es" ? "Stack:" : "Stack:"}
                </span>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700/60 text-xs text-zinc-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
