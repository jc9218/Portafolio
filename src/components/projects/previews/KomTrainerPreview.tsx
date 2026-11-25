"use client";

import React from "react";
import { Activity } from "lucide-react";
import { ProjectPreviewProps } from "../types";

/**
 * Liskov Substitution Principle (LSP):
 * Conforms to ProjectPreviewProps and renders the Banister impulse-response
 * telemetry dashboard and Coggan power distribution preview.
 */
export function KomTrainerPreview({ language }: ProjectPreviewProps) {
  return (
    <div className="lg:col-span-5 p-3.5 sm:p-5 rounded-lg bg-zinc-950/80 border border-zinc-800 font-mono">
      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800/80 pb-2.5 mb-3">
        <span className="flex items-center gap-1.5 text-zinc-200 font-medium">
          <Activity className="w-3.5 h-3.5 text-emerald-500" />
          <span>
            {language === "es" ? "TELEMETRÍA / MODELO BANISTER" : "TELEMETRY / BANISTER MODEL"}
          </span>
        </span>
        <span className="text-[11px] text-emerald-400 font-semibold">
          {language === "es" ? "v1.21.0 • ACTIVO" : "v1.21.0 • LIVE"}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 text-center">
        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
            {language === "es" ? "CTL (CONDICIÓN)" : "CTL (FITNESS)"}
          </div>
          <div className="text-base sm:text-lg font-semibold text-zinc-100 mt-0.5">84</div>
          <div className="text-[10px] text-zinc-400">
            {language === "es" ? "42 Días" : "42 Days"}
          </div>
        </div>
        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
            {language === "es" ? "ATL (FATIGA)" : "ATL (FATIGUE)"}
          </div>
          <div className="text-base sm:text-lg font-semibold text-zinc-100 mt-0.5">72</div>
          <div className="text-[10px] text-zinc-400">
            {language === "es" ? "7 Días" : "7 Days"}
          </div>
        </div>
        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
            {language === "es" ? "TSB (FORMA)" : "TSB (FORM)"}
          </div>
          <div className="text-base sm:text-lg font-semibold text-emerald-400 mt-0.5">+12</div>
          <div className="text-[10px] text-zinc-400">
            {language === "es" ? "Óptimo" : "Optimal"}
          </div>
        </div>
      </div>

      <div className="space-y-1 text-[11px] sm:text-xs text-zinc-300">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
          <span className="text-zinc-400">
            {language === "es" ? "Modos & Zonas:" : "Modes & Zones:"}
          </span>
          <span className="text-zinc-200">
            {language === "es" ? "Potencia (Z1-Z7) • Pulso (FC)" : "Power (Z1-Z7) • Heart Rate"}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
          <span className="text-zinc-400">
            {language === "es" ? "Biometría & IA:" : "Readiness & AI:"}
          </span>
          <span className="text-zinc-200">
            {language === "es" ? "Sueño / HRV • Coach Chat" : "Sleep / HRV • AI Coach Chat"}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
          <span className="text-zinc-400">
            {language === "es" ? "Cumplimiento & GPS:" : "Compliance & Push:"}
          </span>
          <span className="text-zinc-200 font-medium">
            {language === "es" ? "% Bloque a Bloque • Garmin/Wahoo" : "Block-by-Block % • Garmin/Wahoo"}
          </span>
        </div>
      </div>
    </div>
  );
}
