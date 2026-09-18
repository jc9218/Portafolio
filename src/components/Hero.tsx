"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Copy, 
  Check, 
  Mail, 
  MapPin, 
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const { language } = useLanguage();
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-26 pb-14 md:pt-40 md:pb-24 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Location line */}
          <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-mono mb-5 sm:mb-6">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>{personal.location}</span>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            {personal.name}
          </h1>

          {/* Role headline */}
          <p className="text-lg sm:text-2xl font-medium text-zinc-300 mb-5 sm:mb-6 tracking-tight">
            Fullstack Developer <span className="text-zinc-600 font-normal">/</span> Technical Lead
          </p>

          {/* Bio Summary */}
          <p className="text-sm sm:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8">
            {personal.summary[language]}
          </p>

          {/* Key tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
            {[
              language === "es" ? "Arquitecturas Desacopladas" : "Decoupled Architectures",
              "Next.js App Router",
              "Ibexa DXP",
              "Commerce Layer",
              language === "es" ? "Flujos Agénticos & IA" : "Agentic Workflows & AI",
              "AWS & Vercel",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] sm:text-xs font-mono text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
            {/* Primary Action: Email */}
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-colors shadow-sm w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 text-zinc-900" />
              <span>{language === "es" ? "Contactar por Correo" : "Contact via Email"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-mono transition-colors w-full sm:w-auto"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">
                    {language === "es" ? "Copiado" : "Copied"}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{personal.email}</span>
                </>
              )}
            </button>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-2 pt-1 sm:pt-0 sm:ml-1">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex-1 sm:flex-initial p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center justify-center"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex-1 sm:flex-initial p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center justify-center"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="flex-1 sm:flex-initial p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center justify-center"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
