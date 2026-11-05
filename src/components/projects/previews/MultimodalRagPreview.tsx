"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { ProjectPreviewProps } from "../types";

/**
 * Liskov Substitution Principle (LSP):
 * Conforms to ProjectPreviewProps and renders the Multimodal RAG pipeline,
 * spatial bounding-box extraction, and Qdrant/RRF architecture preview.
 */
export function MultimodalRagPreview({ language }: ProjectPreviewProps) {
  return (
    <div className="lg:col-span-5 p-3.5 sm:p-5 rounded-lg bg-zinc-950/80 border border-zinc-800 font-mono">
      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800/80 pb-2.5 mb-3">
        <span className="flex items-center gap-1.5 text-zinc-200 font-medium">
          <Cpu className="w-3.5 h-3.5 text-emerald-500" />
          <span>
            {language === "es" ? "PIPELINE RAG MULTIMODAL" : "MULTIMODAL RAG PIPELINE"}
          </span>
        </span>
        <span className="text-[11px] text-emerald-400 font-semibold">
          {language === "es" ? "TESTS 47/47 OK" : "47/47 TESTS PASS"}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 text-center">
        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
            {language === "es" ? "DIMENSIÓN" : "DIMENSION"}
          </div>
          <div className="text-base sm:text-lg font-semibold text-zinc-100 mt-0.5">768</div>
          <div className="text-[8px] sm:text-[9px] text-zinc-500">
            Gemini 001
          </div>
        </div>
        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
            {language === "es" ? "FUSIÓN RRF" : "RRF FUSION"}
          </div>
          <div className="text-base sm:text-lg font-semibold text-zinc-100 mt-0.5">k=60</div>
          <div className="text-[8px] sm:text-[9px] text-zinc-500">
            Dense + BM25
          </div>
        </div>
        <div className="p-2 sm:p-2.5 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="text-[9px] sm:text-[10px] text-zinc-400 truncate">
            {language === "es" ? "TIMEOUT" : "TIMEOUT"}
          </div>
          <div className="text-base sm:text-lg font-semibold text-emerald-400 mt-0.5">120s</div>
          <div className="text-[8px] sm:text-[9px] text-zinc-500">
            Cold-Start Safe
          </div>
        </div>
      </div>

      <div className="space-y-1 text-[11px] sm:text-xs text-zinc-300">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
          <span className="text-zinc-400">
            {language === "es" ? "Extracción Espacial:" : "Spatial Extraction:"}
          </span>
          <span className="text-zinc-200">
            PyMuPDF BBoxes [x0, y0, x1, y1]
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
          <span className="text-zinc-400">
            {language === "es" ? "Recuperación Vectorial:" : "Vector Engine:"}
          </span>
          <span className="text-zinc-200">Qdrant Cloud + BM25Okapi</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-t border-zinc-900 gap-0.5">
          <span className="text-zinc-400">
            {language === "es" ? "Arquitectura Backend:" : "Backend Architecture:"}
          </span>
          <span className="text-zinc-200 font-medium">
            Clean Architecture (Hexagonal)
          </span>
        </div>
      </div>
    </div>
  );
}
