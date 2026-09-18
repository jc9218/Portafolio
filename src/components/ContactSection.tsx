"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const { language } = useLanguage();
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-2">
            07 // {language === "es" ? "Contacto & Redes" : "Contact & Links"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {language === "es" ? "Contacto" : "Get in Touch"}
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            {language === "es"
              ? "Si estás evaluando mi perfil para roles de Solutions Architect o Technical Lead, puedes escribirme directamente por correo electrónico o conectar a través de mis redes profesionales."
              : "If you are evaluating my profile for Solutions Architect or Technical Lead positions, feel free to reach out directly via email or connect through my professional profiles."}
          </p>
        </div>

        {/* 3 Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Email Card (Primary Contact Method) */}
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-200">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-emerald-400">
                  {language === "es" ? "Principal" : "Primary"}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">
                {language === "es" ? "Correo Electrónico" : "Direct Email"}
              </h3>
              <p className="text-xs text-zinc-400 font-mono mb-4 break-all">
                {personal.email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/80">
              <a
                href={`mailto:${personal.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-medium transition-colors"
              >
                <span>{language === "es" ? "Escribir" : "Send Email"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                title={language === "es" ? "Copiar correo" : "Copy email"}
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-200">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
                  Network
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">
                LinkedIn
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {language === "es"
                  ? "Trayectoria profesional completa, experiencia corporativa y red de contactos."
                  : "Comprehensive professional trajectory, corporate track, and career background."}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 text-zinc-200 hover:text-white text-xs font-medium transition-colors"
              >
                <span>{language === "es" ? "Ver Perfil en LinkedIn" : "View LinkedIn Profile"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-200">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
                  Code
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">
                GitHub
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {language === "es"
                  ? "Repositorios de código, proyectos personales, experimentación y contribuciones técnicas."
                  : "Source code repositories, personal projects, experiments, and technical contributions."}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 text-zinc-200 hover:text-white text-xs font-medium transition-colors"
              >
                <span>{language === "es" ? "Ver Perfil en GitHub" : "View GitHub Profile"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
