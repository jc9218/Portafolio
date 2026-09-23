"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { TechIcon, getTechIconKey } from "@/components/TechIcon";
import { 
  Cpu, 
  Layers, 
  Code2, 
  Palette, 
  Package, 
  Bot, 
  Cloud, 
  Zap,
  ShieldCheck
} from "lucide-react";

export default function PortfolioTechStack() {
  const { language } = useLanguage();
  const { thisSiteTechStack } = PORTFOLIO_DATA;

  if (!thisSiteTechStack || thisSiteTechStack.length === 0) return null;

  const icons = [Cpu, Layers, Code2, Palette, Package, Zap, Bot, Cloud, ShieldCheck];

  return (
    <section id="tech-stack" className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-2">
            04 // {language === "es" ? "Arquitectura de este Sitio" : "Site Architecture"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {language === "es" ? "Stack & Especificaciones del Sitio" : "Site Stack & Specifications"}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {language === "es"
              ? "Especificación técnica de las herramientas y servicios utilizados para construir y servir este portafolio."
              : "Technical specifications of the tooling and runtime infrastructure powering this portfolio website."}
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {thisSiteTechStack.map((tech, index) => {
            const hasTechIcon = Boolean(getTechIconKey(tech.name));
            const IconComponent = icons[index % icons.length];

            return (
              <div
                key={tech.name}
                className="p-4 sm:p-5 rounded-xl bg-zinc-900/50 border border-zinc-800"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700/80 text-zinc-300 flex items-center justify-center">
                    {hasTechIcon ? (
                      <TechIcon name={tech.name} className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <IconComponent className="w-4 h-4 text-zinc-300" />
                    )}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
                    {tech.badge}
                  </span>
                </div>

                <div className="mb-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-400">
                    {tech.category[language]}
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {tech.name}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
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
