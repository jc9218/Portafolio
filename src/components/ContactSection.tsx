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
  Sparkles,
  ArrowRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

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
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#10b981", "#06b6d4"],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde Portafolio: ${senderName || "Proyecto / Oportunidad"}`);
    const body = encodeURIComponent(
      `Hola Juan Camilo,\n\nMi nombre es ${senderName} (${senderEmail}).\n\n${message}\n\nSaludos.`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#10b981", "#38bdf8", "#818cf8"],
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {language === "es"
              ? "Hablemos de Arquitectura y Nuevos Desafíos"
              : "Let's Talk Architecture & High-Impact Projects"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {language === "es"
              ? "Disponible para consultoría técnica, liderazgo de ingeniería o nuevos retos estratégicos. Escríbeme por WhatsApp, correo o agenda una conversación."
              : "Open for technical consulting, engineering leadership roles, and ambitious digital transformation initiatives. Reach out via WhatsApp or email."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 hover:border-emerald-400 flex items-center justify-between group transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    WhatsApp Directo
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {personal.phone}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {language === "es" ? "Correo Electrónico" : "Email Address"}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {personal.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title={language === "es" ? "Copiar correo" : "Copy email"}
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800 text-sky-400">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    LinkedIn
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    in/juan-camilo-lopez-espitia
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800 text-slate-300">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-slate-200 transition-colors">
                    GitHub
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    github.com/jc9218
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">
                {language === "es" ? "Enviar un Mensaje Rápido" : "Send a Direct Message"}
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                {language === "es"
                  ? "Se abrirá tu cliente de correo preparado con el mensaje para enviarlo directamente."
                  : "This will prepare an email directly to my inbox with your notes."}
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-white mb-1">
                    {language === "es" ? "¡Mensaje Preparado!" : "Message Ready!"}
                  </h4>
                  <p className="text-xs text-slate-300 mb-4">
                    {language === "es"
                      ? "Se ha generado la plantilla de correo. Si no se abrió tu cliente automáticamente, puedes escribirme directamente a "
                      : "Email drafted. If your client didn't launch automatically, write directly to "}
                    <span className="text-emerald-400 font-mono">{personal.email}</span>
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-white underline font-mono"
                  >
                    {language === "es" ? "Redactar otro mensaje" : "Draft another message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      {language === "es" ? "Tu Nombre / Empresa" : "Your Name / Organization"}
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder={language === "es" ? "Ej. Carlos Gómez o Empresa XYZ" : "e.g. Alex Smith or Tech Corp"}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      {language === "es" ? "Tu Correo Electrónico" : "Your Email"}
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="nombre@empresa.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      {language === "es" ? "Detalles del Proyecto / Consulta" : "Project Details / Inquiry"}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        language === "es"
                          ? "Cuéntame sobre el reto técnico, arquitectura, volumen o rol requerido..."
                          : "Tell me about the technical challenge, architecture requirements, or role..."
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white placeholder-slate-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === "es" ? "Enviar Mensaje Directo" : "Send Direct Inquiry"}</span>
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
