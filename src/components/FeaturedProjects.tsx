"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Sparkles, 
  ExternalLink, 
  Activity, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Compass,
  Cpu
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function FeaturedProjects() {
  const { language } = useLanguage();
  const { personalProjects } = PORTFOLIO_DATA;

  if (!personalProjects || personalProjects.length === 0) return null;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED INNOVATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {language === "es" ? "Proyectos Personales & AI" : "Personal Projects & AI"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {language === "es"
              ? "Aplicaciones de vanguardia diseñadas y desarrolladas de forma independiente para resolver problemas complejos combinando inteligencia artificial, telemetría y arquitecturas modernas."
              : "Cutting-edge applications independently engineered to solve complex problems combining artificial intelligence, telemetry, and modern full-stack architectures."}
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {personalProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/80 border border-slate-800 hover:border-emerald-500/50 shadow-2xl transition-all duration-300"
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{project.badge[language]}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-100 font-medium text-xs transition-all shadow-md"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>{language === "es" ? "Ver Código en GitHub" : "View on GitHub"}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-base sm:text-lg text-emerald-400 font-medium mb-6">
                {project.tagline[language]}
              </p>

              {/* Two Column details: Utility / Description + Metric Simulation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                      {language === "es" ? "¿Para qué sirve? (Utilidad):" : "Utility & Purpose:"}
                    </h4>
                    <p className="text-slate-300">
                      {project.utility[language]}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                      {language === "es" ? "Arquitectura & Enfoque Técnico:" : "Architecture & Technical Approach:"}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {project.description[language]}
                    </p>
                  </div>
                </div>

                {/* Telemetry Visual Widget Preview */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 font-mono">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 mb-4">
                    <span className="flex items-center gap-2 text-emerald-400">
                      <Activity className="w-4 h-4" />
                      <span>TELEMETRY & BANISTER MODEL</span>
                    </span>
                    <span className="text-[11px] text-slate-500">LIVE SYNC</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                      <div className="text-[10px] text-slate-400">CTL (FITNESS)</div>
                      <div className="text-xl font-bold text-emerald-400 mt-1">84</div>
                      <div className="text-[9px] text-slate-500">42 Days</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                      <div className="text-[10px] text-slate-400">ATL (FATIGUE)</div>
                      <div className="text-xl font-bold text-amber-400 mt-1">72</div>
                      <div className="text-[9px] text-slate-500">7 Days</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                      <div className="text-[10px] text-slate-400">TSB (FORM)</div>
                      <div className="text-xl font-bold text-cyan-400 mt-1">+12</div>
                      <div className="text-[9px] text-slate-500">Optimal</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between items-center py-1 border-t border-slate-900">
                      <span className="text-slate-500">Power Distribution:</span>
                      <span className="text-slate-200">Coggan 7-Zones (Z1-Z7)</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-t border-slate-900">
                      <span className="text-slate-500">Device Push:</span>
                      <span className="text-slate-200">Garmin • Wahoo • Karoo</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-t border-slate-900">
                      <span className="text-slate-500">Recovery Rule:</span>
                      <span className="text-emerald-400 font-semibold">48h Heavy-Leg Guardrail</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="mb-8 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-4">
                  {language === "es" ? "Capacidades Destacadas:" : "Key Architectural Capabilities:"}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features[language].map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-mono mr-2">
                  {language === "es" ? "Herramientas Utilizadas:" : "Tools & Technologies:"}
                </span>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200 font-mono"
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
