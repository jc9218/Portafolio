"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Metrics() {
  const { language } = useLanguage();
  const { metrics } = PORTFOLIO_DATA;

  return (
    <section className="py-10 sm:py-12 border-b border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-3.5 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors"
            >
              <div className="text-2xl sm:text-4xl font-semibold text-white font-mono tracking-tight mb-1 sm:mb-2">
                {typeof metric.value === "string" ? metric.value : metric.value[language]}
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-zinc-200 mb-1">
                {metric.label[language]}
              </h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                {metric.detail[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
