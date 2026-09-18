"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Download, 
  Copy, 
  Check, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Layers
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

export default function Hero() {
  const { language } = useLanguage();
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#10b981", "#06b6d4", "#3b82f6"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-indigo-500/5 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/5 blur-2xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-8 shadow-sm shadow-emerald-950">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.statusBadge[language]}</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            {personal.name}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-lg sm:text-2xl font-semibold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Solutions Architect
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-200">Technical Lead</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 font-normal">Senior Full Stack</span>
          </div>

          {/* Bio Summary */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">
            {personal.summary[language]}
          </p>

          {/* Location & Quick Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-10 font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Next.js • Ibexa DXP • Commerce Layer</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4">
            {/* WhatsApp CTA */}
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === "es" ? "Contactar por WhatsApp" : "Chat on WhatsApp"}</span>
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 font-medium text-sm transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-xs">
                    {language === "es" ? "¡Correo Copiado!" : "Email Copied!"}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span className="font-mono text-xs">{personal.email}</span>
                </>
              )}
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send Email"
                className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
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
