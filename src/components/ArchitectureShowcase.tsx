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

  const selectedNode = architectureShowcase.nodes.find((n) => n.id === selectedNodeId) || architectureShowcase.nodes[0];

  return (
    <section id="architecture" className="py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-2">
            01 // {language === "es" ? "Arquitectura de Soluciones" : "Solutions Architecture"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {architectureShowcase.title[language]}
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            {architectureShowcase.subtitle[language]}
          </p>
        </div>

        {/* Interactive Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Architecture Pipeline Flow */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pb-2 border-b border-zinc-800">
              <span>{language === "es" ? "Pipeline desacoplado de 5 niveles" : "5-tier decoupled pipeline"}</span>
              <span className="text-zinc-300">RFC / Production Spec</span>
            </div>

            <div className="space-y-2.5">
              {architectureShowcase.nodes.map((node, index) => {
                const isSelected = node.id === selectedNodeId;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors flex items-center justify-between group ${
                      isSelected
                        ? "bg-zinc-900 border-zinc-500 ring-1 ring-zinc-500/30"
                        : "bg-zinc-950/60 border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/40"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-2.5 rounded-lg border ${
                          isSelected
                            ? "bg-zinc-800 border-zinc-600 text-white"
                            : "bg-zinc-900 border-zinc-800 text-zinc-400"
                        }`}
                      >
                        {categoryIcons[node.category]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-400">
                            0{index + 1}.
                          </span>
                          <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white">
                            {node.name}
                          </h3>
                        </div>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          {node.role[language]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase hidden sm:inline">
                        {node.category}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? "text-emerald-400 translate-x-0.5" : "text-zinc-600"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Node Inspector Panel */}
          <div className="lg:col-span-5 sticky top-28">
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
                  <span>SLA / Performance:</span>
                  <span className="text-zinc-200">High-Concurrency 99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
