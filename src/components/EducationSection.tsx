"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { MapPin, GraduationCap, Languages, Globe } from "lucide-react";

export default function EducationSection() {
  const { language } = useLanguage();
  const { education, languages } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-2">
            05 // {language === "es" ? "Formación & Comunicación" : "Education & Languages"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {language === "es" ? "Educación & Idiomas" : "Education & Languages"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 items-start">
          {/* Education Card */}
          <div className="p-4.5 sm:p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                {education.year}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{education.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700/80 text-zinc-300 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-zinc-300" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {education.degree[language]}
                </h3>
                <p className="text-zinc-300 font-medium text-sm">
                  {education.institution}
                </p>
                <p className="text-xs text-zinc-500 font-mono mt-0.5">
                  Cali, Colombia
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              {language === "es"
                ? "Formación rigurosa en fundamentos de ciencias de la computación, arquitectura de software, modelado de sistemas distribuidos y optimización de bases de datos."
                : "Rigorous training in computer science foundations, software architecture, distributed system modeling, and database optimization."}
            </p>
          </div>

          {/* Languages Card */}
          <div className="space-y-4">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800"
              >
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700/80 text-zinc-300 flex items-center justify-center shrink-0">
                      {idx === 0 ? (
                        <Languages className="w-4.5 h-4.5 text-zinc-300" />
                      ) : (
                        <Globe className="w-4.5 h-4.5 text-zinc-300" />
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {lang.name[language]}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-300 shrink-0">
                    {lang.level[language]}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pl-0 sm:pl-12">
                  {lang.detail[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
