"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { ProjectPreviewProps } from "../types";

/**
 * Liskov Substitution Principle (LSP):
 * Conforms to ProjectPreviewProps and renders the Polyva AI conversational tutor,
 * mutating roadmap, and FSRS memory engine preview.
 */
export function PolyvaPreview({ language }: ProjectPreviewProps) {
  return (
    <div className="lg:col-span-5 p-3.5 sm:p-5 rounded-lg bg-zinc-950/80 border border-zinc-800 font-mono">
      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800/80 pb-2.5 mb-3">
        <span className="flex items-center gap-1.5 text-zinc-200 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>
            {language === "es" ? "TUTOR CONVERSACIONAL IA" : "AI CONVERSATIONAL TUTOR"}
          </span>
        </span>
        <span className="text-[11px] text-indigo-400 font-semibold">
          {language === "es" ? "MOTOR FSRS ACTIVO" : "FSRS ENGINE READY"}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 text-center">
        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
            {language === "es" ? "ESTÁNDAR" : "STANDARD"}
          </div>
          <div className="text-base sm:text-lg font-semibold text-zinc-100 mt-0.5">CEFR</div>
          <div className="text-[8px] sm:text-[9px] text-zinc-500">
            A1 – C2
          </div>
        </div>
        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
            {language === "es" ? "ROADMAP" : "ROADMAP"}
          </div>
          <div className="text-base sm:text-lg font-semibold text-indigo-400 mt-0.5">
            {language === "es" ? "Óptimo" : "Optimal"}
          </div>
          <div className="text-[8px] sm:text-[9px] text-zinc-500">
            {language === "es" ? "Muta en Vivo" : "Live Mutating"}
          </div>
        </div>
        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
            {language === "es" ? "MEMORIA" : "MEMORY"}
          </div>
          <div className="text-base sm:text-lg font-semibold text-zinc-100 mt-0.5">FSRS</div>
          <div className="text-[8px] sm:text-[9px] text-zinc-500">
            {language === "es" ? "Anclada a Errores" : "Error-Rooted"}
          </div>
        </div>
      </div>

      <div className="space-y-1 text-[11px] sm:text-xs text-zinc-300">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
          <span className="text-zinc-400">
            {language === "es" ? "Tutor Interactivo:" : "Conversational AI:"}
          </span>
          <span className="text-zinc-200">
            {language === "es" ? "Corrección Contextual Invisible" : "Non-Intrusive Feedback"}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
          <span className="text-zinc-400">
            {language === "es" ? "Persistencia & ORM:" : "Database & ORM:"}
          </span>
          <span className="text-zinc-200">Neon PostgreSQL + Drizzle</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
          <span className="text-zinc-400">
            {language === "es" ? "Seguridad & Auth:" : "Auth Flow:"}
          </span>
          <span className="text-zinc-200 font-medium">
            NextAuth v5 (Google OAuth)
          </span>
        </div>
      </div>
    </div>
  );
}
