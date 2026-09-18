"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Code2, 
  Server, 
  ShoppingBag, 
  Cloud, 
  Database, 
  Award,
  Bot
} from "lucide-react";

export default function SkillsSection() {
  const { language } = useLanguage();
  const { skillCategories } = PORTFOLIO_DATA;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Code2 className="w-4 h-4 text-zinc-300" />;
      case "Server":
        return <Server className="w-4 h-4 text-zinc-300" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-4 h-4 text-zinc-300" />;
      case "Cloud":
        return <Cloud className="w-4 h-4 text-zinc-300" />;
      case "Database":
        return <Database className="w-4 h-4 text-zinc-300" />;
      case "Award":
        return <Award className="w-4 h-4 text-zinc-300" />;
      case "Bot":
        return <Bot className="w-4 h-4 text-zinc-300" />;
      default:
        return <Code2 className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-2">
            03 // {language === "es" ? "Stack & Competencias" : "Stack & Competencies"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {language === "es" ? "Competencias Técnicas" : "Core Competencies"}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {language === "es"
              ? "Dominio integral del ciclo de vida de desarrollo de software empresarial, arquitecturas desacopladas y flujos de ingeniería asistidos por agentes."
              : "Comprehensive mastery across enterprise software lifecycles, decoupled architectures, and agentic engineering workflows."}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-xl bg-zinc-900/50 border border-zinc-800"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700/80">
                  {getIcon(category.iconName)}
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {category.title[language]}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800/90 text-[11px] sm:text-xs font-mono text-zinc-300"
                  >
                    {skill}
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
