"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GraduationCap, Languages, CheckCircle2, Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  const { language } = useLanguage();
  const { education, languages } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 bg-slate-950/40 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Education Card */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC BACKGROUND</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-8">
              {language === "es" ? "Educación Superior" : "Higher Education"}
            </h2>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {education.year}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{education.location}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {education.degree[language]}
              </h3>
              <p className="text-emerald-400 font-semibold text-base mb-4">
                {education.institution}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {language === "es"
                  ? "Formación rigurosa en fundamentos de ciencias de la computación, arquitectura de software, modelado de sistemas distribuidos y optimización de bases de datos."
                  : "Rigorous training in computer science foundations, software architecture, distributed system modeling, and database optimization."}
              </p>
            </div>
          </div>

          {/* Languages Card */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
              <Languages className="w-3.5 h-3.5" />
              <span>COMMUNICATION & PROFICIENCY</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-8">
              {language === "es" ? "Idiomas & Comunicación" : "Languages & Alignment"}
            </h2>

            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {lang.name[language]}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-cyan-400">
                      {lang.level[language]}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {lang.detail[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
