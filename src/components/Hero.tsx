"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Copy, 
  Check, 
  Mail, 
  MessageSquare, 
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
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status & Location line */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{personal.statusBadge[language]}</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            {personal.name}
          </h1>

          {/* Role headline */}
          <p className="text-xl sm:text-2xl font-medium text-zinc-300 mb-6 tracking-tight">
            Solutions Architect <span className="text-zinc-600 font-normal">/</span> Technical Lead
          </p>

          {/* Bio Summary */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8">
            {personal.summary[language]}
          </p>

          {/* Key tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              "Decoupled Architectures",
              "Next.js App Router",
              "Ibexa DXP",
              "Commerce Layer",
              "Agentic Workflows",
              "AWS & Vercel",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Primary Action */}
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>{language === "es" ? "Contactar por WhatsApp" : "Chat on WhatsApp"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
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
            <div className="flex items-center gap-1.5 ml-1">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
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
