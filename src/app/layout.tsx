import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Camilo López Espitia | Solutions Architect & Technical Lead",
  description:
    "Solutions Architect, Technical Lead & Senior Full Stack Engineer. 10+ years specializing in enterprise headless commerce ecosystems, decoupled architectures, Next.js, Ibexa DXP, Commerce Layer, and mass-scale transactional payments.",
  keywords: [
    "Juan Camilo López Espitia",
    "Solutions Architect",
    "Technical Lead",
    "Next.js",
    "React",
    "Headless Commerce",
    "Commerce Layer",
    "Ibexa DXP",
    "AWS",
    "Vercel",
    "Full Stack Engineer",
    "Software Architecture",
  ],
  authors: [{ name: "Juan Camilo López Espitia" }],
  openGraph: {
    title: "Juan Camilo López Espitia | Solutions Architect & Technical Lead",
    description:
      "Specialized in enterprise web architecture, headless commerce ecosystems, and mission-critical checkout pipelines.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950 font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
