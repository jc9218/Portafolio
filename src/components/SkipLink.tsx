"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function SkipLink() {
  const { language } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-zinc-100 focus:text-zinc-950 focus:font-medium focus:text-sm"
    >
      {language === "es" ? "Ir al contenido principal" : "Skip to main content"}
    </a>
  );
}
