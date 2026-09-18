"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Cpu, 
  Layers, 
  Code2, 
  Palette, 
  Package, 
  Sparkles, 
  Bot, 
  Cloud, 
  Zap
} from "lucide-react";

export default function PortfolioTechStack() {
  const { language } = useLanguage();
  const { thisSiteTechStack } = PORTFOLIO_DATA;

  if (!thisSiteTechStack || thisSiteTechStack.length === 0) return null;

  const icons = [Cpu, Layers, Code2, Palette, Package, Sparkles, Zap, Bot, Cloud];

  return (
    <section id="tech-stack" className="py-24 border-t border-slate-800/80 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>BUILT WITH PRECISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {language === "es" ? "Tecnologías que Utiliza este Portafolio" : "Technologies Powering this Portfolio"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {language === "es"
              ? "Diseñado bajo los estándares más exigentes de la ingeniería de software moderna: rendimiento instantáneo, seguridad estricta de tipos y desarrollo asistido por IA agéntica."
              : "Built according to the most rigorous modern software engineering standards: sub-second performance, strict type safety, and agentic AI development."}
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thisSiteTechStack.map((tech, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={tech.name}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-emerald-500/40 hover:bg-slate-900/70 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 group-hover:border-emerald-500/40 group-hover:scale-105 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-emerald-400">
                    {tech.badge}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-mono text-slate-500">
                    {tech.category[language]}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {tech.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {tech.description[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
