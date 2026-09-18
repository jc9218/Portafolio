"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  Send, 
  ArrowRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const { language } = useLanguage();
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto: ${senderName || "Consulta de Proyecto"}`);
    const body = encodeURIComponent(
      `Hola Juan Camilo,\n\nMi nombre es ${senderName} (${senderEmail}).\n\n${message}\n\nSaludos.`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-2">
            07 // {language === "es" ? "Contacto Directo" : "Direct Contact"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {language === "es"
              ? "Hablemos de Arquitectura y Nuevos Desafíos"
              : "Let's Talk Architecture & Key Challenges"}
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            {language === "es"
              ? "Disponible para consultoría técnica, liderazgo de ingeniería o nuevos retos estratégicos. Conversemos por WhatsApp o correo electrónico."
              : "Available for technical consulting, engineering leadership roles, and ambitious system architectures. Reach out via WhatsApp or email."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-3">
            {/* WhatsApp Card */}
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    WhatsApp Directo
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    {personal.phone}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Email Card */}
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {language === "es" ? "Correo Electrónico" : "Email"}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    {personal.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              >
                {copiedEmail ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>{language === "es" ? "Copiado" : "Copied"}</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{language === "es" ? "Copiar" : "Copy"}</span>
                  </span>
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors">
                    LinkedIn
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    in/juan-camilo-lopez-espitia
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors">
                    GitHub
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    github.com/jc9218
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-1">
                {language === "es" ? "Enviar un Mensaje" : "Send a Message"}
              </h3>
              <p className="text-xs text-zinc-400 mb-5">
                {language === "es"
                  ? "Genera un borrador directo hacia mi correo electrónico."
                  : "This will prepare an email directly addressed to my inbox."}
              </p>

              {formSubmitted ? (
                <div className="p-5 rounded-lg bg-zinc-950 border border-zinc-800 text-center">
                  <Check className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">
                    {language === "es" ? "Borrador de Correo Generado" : "Email Draft Created"}
                  </h4>
                  <p className="text-xs text-zinc-400 mb-3">
                    {language === "es"
                      ? "Si no se abrió tu cliente automáticamente, escríbeme directamente a "
                      : "If your email client didn't launch automatically, please email "}
                    <span className="text-zinc-200 font-mono">{personal.email}</span>
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-zinc-400 hover:text-white underline font-mono"
                  >
                    {language === "es" ? "Redactar otro mensaje" : "Draft another message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1 uppercase">
                      {language === "es" ? "Nombre / Organización" : "Name / Organization"}
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder={language === "es" ? "Ej. Carlos Gómez" : "e.g. Alex Smith"}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1 uppercase">
                      {language === "es" ? "Correo Electrónico" : "Email Address"}
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="nombre@empresa.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1 uppercase">
                      {language === "es" ? "Detalles del Proyecto / Consulta" : "Message / Project Scope"}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        language === "es"
                          ? "Cuéntame sobre el reto técnico, volumen o rol requerido..."
                          : "Tell me about the technical requirements, scale, or role..."
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 text-sm text-white placeholder-zinc-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5 text-zinc-800" />
                    <span>{language === "es" ? "Enviar Mensaje" : "Send Inquiry"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
