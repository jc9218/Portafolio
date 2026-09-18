"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ShieldCheck, Users, Clock, Zap } from "lucide-react";

export default function Metrics() {
  const { language } = useLanguage();
  const { metrics } = PORTFOLIO_DATA;

  const icons = [Clock, Users, ShieldCheck, Zap];

  return (
    <section className="py-12 border-y border-slate-800/60 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-950/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors">
                    {metric.value}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-800/60 text-slate-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-slate-200 mb-1">
                  {metric.label[language]}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {metric.detail[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
