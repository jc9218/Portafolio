"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const { language } = useLanguage();
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#090a0f] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pb-8 border-b border-zinc-850 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 font-mono text-xs font-semibold shrink-0">
              JL
            </div>
            <div>
              <span className="font-semibold text-white text-sm">
                Juan Camilo López Espitia
              </span>
              <p className="text-xs text-zinc-400">
                Fullstack Developer & Technical Lead
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-zinc-400">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
            aria-label="Back to top"
          >
            <span>{language === "es" ? "Subir" : "Top"}</span>
            <ArrowUp className="w-3.5 h-3.5 text-zinc-400" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Juan Camilo López Espitia. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>
                {language === "es" ? "Desarrollo Agéntico" : "Agentic Engineering"}
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-200">
                Powered by: Antigravity
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
