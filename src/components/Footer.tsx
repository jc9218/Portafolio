"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { TechIcon } from "@/components/TechIcon";
import Logo from "@/components/Logo";

export default function Footer() {
  const { language } = useLanguage();
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#090a0f] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Block */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800">
          {/* Brand Info & Mobile Back to Top */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8 shrink-0" />
              <div>
                <span className="font-semibold text-white text-sm block">
                  Juan Camilo López Espitia
                </span>
                <p className="text-xs text-zinc-400">
                  {personal.title[language]}
                </p>
              </div>
            </div>

            {/* Back to top on mobile (top-right aligned) */}
            <button
              onClick={scrollToTop}
              className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors flex items-center justify-center shrink-0"
              aria-label="Back to top"
              title={language === "es" ? "Subir al inicio" : "Back to top"}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Social Links as touch-friendly buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto text-xs font-mono">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            {/* Desktop Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors ml-2"
              aria-label="Back to top"
            >
              <span>{language === "es" ? "Subir" : "Top"}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & tech stack row */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono text-center md:text-left">
          <div>
            <p>
              © {new Date().getFullYear()} Juan Camilo López Espitia. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
            <p className="text-zinc-500 text-[11px] mt-1">
              {personal.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 text-[11px] text-zinc-400">
            <span className="text-zinc-500 mr-1">
              {language === "es" ? "Stack del sitio:" : "Site stack:"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              <TechIcon name="nextjs" className="w-3 h-3 text-zinc-400 shrink-0" />
              <span>Next.js 16</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              <TechIcon name="react" className="w-3 h-3 text-zinc-400 shrink-0" />
              <span>React 19</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              <TechIcon name="tailwind" className="w-3 h-3 text-zinc-400 shrink-0" />
              <span>Tailwind CSS v4</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              <TechIcon name="typescript" className="w-3 h-3 text-zinc-400 shrink-0" />
              <span>TypeScript</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              <TechIcon name="antigravity" className="w-3 h-3 text-zinc-400 shrink-0" />
              <span>Antigravity</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
