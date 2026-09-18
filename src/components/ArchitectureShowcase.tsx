"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA, ArchitectureNode } from "@/data/portfolio";
import { 
  Cpu, 
  Layers, 
  Workflow, 
  CreditCard, 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Info
} from "lucide-react";

export default function ArchitectureShowcase() {
  const { language } = useLanguage();
  const { architectureShowcase } = PORTFOLIO_DATA;
  const [selectedNodeId, setSelectedNodeId] = useState<string>("frontend");

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Cpu className="w-5 h-5 text-emerald-400" />,
    api: <Workflow className="w-5 h-5 text-cyan-400" />,
    cms: <Layers className="w-5 h-5 text-amber-400" />,
    payment: <CreditCard className="w-5 h-5 text-violet-400" />,
    cloud: <Cloud className="w-5 h-5 text-sky-400" />,
  };

  const selectedNode = architectureShowcase.nodes.find((n) => n.id === selectedNodeId) || architectureShowcase.nodes[0];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {architectureShowcase.title[language]}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {architectureShowcase.subtitle[language]}
          </p>
        </div>

        {/* Interactive Architecture Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Architecture Pipeline Flow (Interactive Diagram Nodes) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 font-mono flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-400" />
                {language === "es" ? "Haz clic en cada componente para ver sus especificaciones" : "Click any module to inspect its architecture specs"}
              </span>
              <span className="text-emerald-400 font-bold">5 TIERS DECOUPLED</span>
            </div>

            <div className="flex flex-col gap-3">
              {architectureShowcase.nodes.map((node, index) => {
                const isSelected = node.id === selectedNodeId;
                return (
                  <div key={node.id} className="relative">
                    <button
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                        isSelected
                          ? "bg-slate-900 border-emerald-500/80 shadow-xl shadow-emerald-950/30 ring-1 ring-emerald-500/40"
                          : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-xl border transition-colors ${
                            isSelected
                              ? "bg-emerald-500/20 border-emerald-500/40"
                              : "bg-slate-900 border-slate-800 group-hover:border-slate-700"
                          }`}
                        >
                          {categoryIcons[node.category]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-slate-500">
                              0{index + 1}.
                            </span>
                            <h3 className="text-base font-semibold text-slate-100 group-hover:text-white">
                              {node.name}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-400 font-mono mt-0.5">
                            {node.role[language]}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-md font-mono hidden sm:inline-block ${
                            isSelected
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-slate-800/80 text-slate-400"
                          }`}
                        >
                          {node.category.toUpperCase()}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected
                              ? "text-emerald-400 translate-x-1"
                              : "text-slate-600 group-hover:text-slate-400"
                          }`}
                        />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Node Inspector Panel */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  {categoryIcons[selectedNode.category]}
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 tracking-wide uppercase">
                    {language === "es" ? "Especificación Técnica" : "Technical Specs"}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedNode.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                    {language === "es" ? "Rol de Arquitectura" : "Architecture Role"}
                  </h4>
                  <p className="text-sm font-medium text-slate-200">
                    {selectedNode.role[language]}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                    {language === "es" ? "Descripción y Responsabilidades" : "Responsibilities & Description"}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedNode.description[language]}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-3">
                    {language === "es" ? "Tecnologías & Estándares" : "Technologies & Standards"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.techs.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-xs font-mono text-slate-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>{language === "es" ? "Diseñado para:" : "Engineered for:"}</span>
                    <span className="text-emerald-400 font-mono font-medium">
                      High-Throughput & SLA 99.9%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
