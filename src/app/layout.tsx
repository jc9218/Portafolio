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
  title: "Juan Camilo López Espitia | Fullstack Developer & Technical Lead",
  description:
    "Fullstack Developer & Technical Lead. 10+ years specializing in enterprise headless commerce ecosystems, decoupled architectures, Next.js, Ibexa DXP, Commerce Layer, and mass-scale transactional payments.",
  keywords: [
    "Juan Camilo López Espitia",
    "Fullstack Developer",
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
    title: "Juan Camilo López Espitia | Fullstack Developer & Technical Lead",
    description:
      "Fullstack Developer & Technical Lead specialized in enterprise web architecture, headless commerce ecosystems, and mission-critical checkout pipelines.",
    type: "website",
    locale: "es_CO",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
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
