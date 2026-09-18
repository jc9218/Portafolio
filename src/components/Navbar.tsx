"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#architecture", label: language === "es" ? "Arquitectura" : "Architecture" },
    { href: "#experience", label: language === "es" ? "Experiencia" : "Experience" },
    { href: "#projects", label: language === "es" ? "Proyectos" : "Projects" },
    { href: "#skills", label: language === "es" ? "Competencias" : "Skills" },
    { href: "#tech-stack", label: language === "es" ? "Stack Web" : "Site Stack" },
    { href: "#education", label: language === "es" ? "Educación" : "Education" },
    { href: "#contact", label: language === "es" ? "Contacto" : "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/90 backdrop-blur-md border-b border-zinc-800/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-zinc-200 font-mono text-xs font-semibold group-hover:border-zinc-500 transition-colors">
            JL
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-zinc-100 tracking-tight text-sm group-hover:text-white transition-colors">
              Juan Camilo López
            </span>
            <span className="text-[11px] text-zinc-400">
              Solutions Architect
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wide text-zinc-400 hover:text-zinc-100 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Segmented Language Switcher (ES / EN) */}
          <div className="flex items-center p-0.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
            <button
              onClick={() => setLanguage("es")}
              aria-label="Cambiar idioma a Español"
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-all ${
                language === "es"
                  ? "bg-zinc-800 text-zinc-100 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              aria-label="Switch language to English"
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-all ${
                language === "en"
                  ? "bg-zinc-800 text-zinc-100 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              EN
            </button>
          </div>

          {/* Contact CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-colors shadow-sm"
          >
            <span>{language === "es" ? "Contacto" : "Contact"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Nav Header */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Language Switcher */}
          <div className="flex items-center p-0.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setLanguage("es")}
              className={`px-2 py-1 rounded text-xs font-mono font-medium ${
                language === "es"
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded text-xs font-mono font-medium ${
                language === "en"
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a0f]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-300 hover:text-white font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white transition-colors"
            >
              {language === "es" ? "Contacto" : "Contact Me"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
