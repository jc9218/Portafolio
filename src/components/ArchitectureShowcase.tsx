"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Cpu, 
  Layers, 
  Workflow, 
  CreditCard, 
  Cloud, 
  ArrowRight, 
  ChevronDown,
  CheckCircle2
} from "lucide-react";

export default function ArchitectureShowcase() {
  const { language } = useLanguage();
  const { architectureShowcase } = PORTFOLIO_DATA;
  const [selectedNodeId, setSelectedNodeId] = useState<string>("frontend");

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Cpu className="w-4 h-4 text-zinc-300" />,
    api: <Workflow className="w-4 h-4 text-zinc-300" />,
    cms: <Layers className="w-4 h-4 text-zinc-300" />,
    payment: <CreditCard className="w-4 h-4 text-zinc-300" />,
    cloud: <Cloud className="w-4 h-4 text-zinc-300" />,
  };

  const categoryLabels: Record<string, { es: string; en: string }> = {
    frontend: { es: "Frontend", en: "Frontend" },
    api: { es: "API & Mesh", en: "API & Mesh" },
    cms: { es: "Headless CMS", en: "Headless CMS" },
    payment: { es: "Pagos & Motor", en: "Payments & Engine" },
    cloud: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
  };

  const selectedNode = architectureShowcase.nodes.find((n) => n.id === selectedNodeId) || architectureShowcase.nodes[0];

  return (
    <section id="architecture" className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-2">
            01 // {language === "es" ? "Arquitectura de Soluciones" : "Solutions Architecture"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {architectureShowcase.title[language]}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {architectureShowcase.subtitle[language]}
          </p>
        </div>

        {/* Interactive Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Architecture Pipeline Flow */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-zinc-400 font-mono pb-2 border-b border-zinc-800">
              <span>{language === "es" ? "Pipeline desacoplado de 5 niveles" : "5-tier decoupled pipeline"}</span>
              <span className="text-zinc-500 text-[11px] sm:text-xs">RFC / Production Spec</span>
            </div>

            <div className="space-y-3 sm:space-y-2.5">
              {architectureShowcase.nodes.map((node, index) => {
                const isSelected = node.id === selectedNodeId;
                return (
                  <div
                    key={node.id}
                    className={`rounded-xl border transition-all ${
                      isSelected
                        ? "bg-zinc-900/90 border-zinc-600 ring-1 ring-zinc-500/20"
                        : "bg-zinc-950/60 border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/40"
                    }`}
                  >
                    {/* Header clickable trigger */}
                    <button
                      onClick={() => setSelectedNodeId(node.id)}
                      className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between group min-w-0"
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1 pr-1">
                        <div
                          className={`p-2 sm:p-2.5 rounded-lg border shrink-0 transition-colors ${
                            isSelected
                              ? "bg-zinc-800 border-zinc-600 text-white"
                              : "bg-zinc-900 border-zinc-800 text-zinc-400 group-hover:text-zinc-200"
                          }`}
                        >
                          {categoryIcons[node.category]}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-zinc-500 shrink-0">
                              0{index + 1}.
                            </span>
                            <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white truncate">
                              {node.name}
                            </h3>
                          </div>
                          <p className="text-xs text-zinc-400 mt-0.5 truncate">
                            {node.role[language]}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
                        <span className="text-[11px] font-mono text-zinc-500 uppercase hidden sm:inline">
                          {categoryLabels[node.category]?.[language] || node.category}
                        </span>
                        {/* Desktop arrow */}
                        <ArrowRight
                          className={`hidden lg:block w-4 h-4 transition-transform ${
                            isSelected ? "text-emerald-400 translate-x-0.5" : "text-zinc-600"
                          }`}
                        />
                        {/* Mobile chevron */}
                        <ChevronDown
                          className={`lg:hidden w-4 h-4 transition-transform duration-200 ${
                            isSelected ? "text-emerald-400 rotate-180" : "text-zinc-600"
                          }`}
                        />
                      </div>
                    </button>

                    {/* Mobile inline expansion */}
                    {isSelected && (
                      <div className="lg:hidden px-3.5 pb-4 pt-1 sm:px-4 border-t border-zinc-800 space-y-4">
                        <div className="pt-2">
                          <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono mb-1">
                            {language === "es" ? "Descripción & Responsabilidades" : "Responsibilities"}
                          </h4>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {node.description[language]}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono mb-2">
                            {language === "es" ? "Tecnologías & Estándares" : "Technologies & Standards"}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {node.techs.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700/80 text-[11px] font-mono text-zinc-300"
                              >
                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                          <span>{language === "es" ? "SLA / Rendimiento:" : "SLA / Performance:"}</span>
                          <span className="text-zinc-200">
                            {language === "es" ? "Alta Concurrencia 99.9%" : "High-Concurrency 99.9%"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Inspector Panel (hidden on mobile, sticky on desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="p-6 rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                <div>
                  <span className="text-xs font-mono text-emerald-500 uppercase">
                    {language === "es" ? "Especificación Técnica" : "Technical Specs"}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {selectedNode.name}
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300">
                  {categoryIcons[selectedNode.category]}
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-1.5">
                    {language === "es" ? "Rol de Arquitectura" : "Architecture Role"}
                  </h4>
                  <p className="text-sm font-medium text-zinc-200">
                    {selectedNode.role[language]}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-1.5">
                    {language === "es" ? "Descripción & Responsabilidades" : "Responsibilities"}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {selectedNode.description[language]}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-2">
                    {language === "es" ? "Tecnologías & Estándares" : "Technologies & Standards"}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.techs.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700 text-xs font-mono text-zinc-300"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>{language === "es" ? "SLA / Rendimiento:" : "SLA / Performance:"}</span>
                  <span className="text-zinc-200">
                    {language === "es" ? "Alta Concurrencia 99.9%" : "High-Concurrency 99.9%"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
