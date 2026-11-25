"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "@/components/Logo";

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col items-center justify-center px-4 text-center">
      <Logo className="w-12 h-12 mb-6" />
      <p className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2">
        404 // {language === "es" ? "Página no encontrada" : "Page Not Found"}
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
        {language === "es"
          ? "Esta ruta no existe"
          : "This route does not exist"}
      </h1>
      <p className="text-sm text-zinc-400 max-w-md mb-8 leading-relaxed">
        {language === "es"
          ? "El recurso que buscas fue movido o no está disponible. Puedes volver al inicio del portafolio."
          : "The resource you are looking for was moved or is unavailable. You can return to the portfolio home page."}
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        <span>{language === "es" ? "Volver al inicio" : "Back to home"}</span>
      </Link>
    </div>
  );
}
