"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Code2, 
  Server, 
  ShoppingBag, 
  Cloud, 
  Database, 
  Award,
  Bot,
  Sparkles,
  Check
} from "lucide-react";

export default function SkillsSection() {
  const { language } = useLanguage();
  const { skillCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-cyan-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-indigo-400" />;
      case "Award":
        return <Award className="w-5 h-5 text-rose-400" />;
      case "Bot":
        return <Bot className="w-5 h-5 text-teal-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES & TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {language === "es" ? "Competencias & Stack Tecnológico" : "Core Competencies & Tech Stack"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {language === "es"
              ? "Dominio integral del ciclo de vida de desarrollo de software empresarial, desde la arquitectura y la nube hasta la experiencia frontend y la optimización de bases de datos."
              : "Comprehensive mastery of the enterprise software lifecycle, from cloud architecture and databases to frontend user experience and API orchestration."}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const isHighlighted = selectedCategory === index;
            return (
              <div
                key={index}
                onClick={() => setSelectedCategory(isHighlighted ? null : index)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHighlighted
                    ? "bg-slate-900 border-emerald-500/80 shadow-lg shadow-emerald-950/20"
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title[language]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 transition-colors"
                    >
                      <Check className="w-3 h-3 text-emerald-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
