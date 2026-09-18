"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Metrics() {
  const { language } = useLanguage();
  const { metrics } = PORTFOLIO_DATA;

  return (
    <section className="py-12 border-b border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`${index > 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}
            >
              <div className="text-3xl sm:text-4xl font-semibold text-white font-mono tracking-tight mb-2">
                {typeof metric.value === "string" ? metric.value : metric.value[language]}
              </div>
              <h3 className="text-sm font-medium text-zinc-200 mb-1">
                {metric.label[language]}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {metric.detail[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
