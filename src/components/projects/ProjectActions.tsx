"use client";

import React from "react";
import { ExternalLink, Globe, Lock } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { ProjectActionsProps } from "./types";

/**
 * Single Responsibility Principle (SRP):
 * Renders call-to-action buttons for a project showcase.
 *
 * Mandatory Placement Rule:
 * Repository CTA (or private repo badge) is ALWAYS rendered on the left,
 * and the live application CTA is ALWAYS rendered on the right.
 */
export function ProjectActions({
  githubUrl,
  liveUrl,
  isPrivateRepo,
  language,
}: ProjectActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-0">
      {/* 1. Left CTA: GitHub Repository */}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-medium transition-colors w-full sm:w-auto"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>{language === "es" ? "Repositorio en GitHub" : "View on GitHub"}</span>
          <ExternalLink className="w-3 h-3 text-zinc-400" />
        </a>
      )}

      {/* Alternative Left Badge: Private Repository */}
      {isPrivateRepo && (
        <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-950/90 border border-zinc-800 text-zinc-400 text-xs font-mono">
          <Lock className="w-3.5 h-3.5 text-zinc-500" />
          <span>{language === "es" ? "Repositorio Privado" : "Private Repository"}</span>
        </span>
      )}

      {/* 2. Right CTA: Live Application */}
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium text-xs transition-colors shadow-sm w-full sm:w-auto"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{language === "es" ? "Visitar Aplicación" : "Visit Application"}</span>
          <ExternalLink className="w-3 h-3 text-zinc-950 opacity-70" />
        </a>
      )}
    </div>
  );
}
