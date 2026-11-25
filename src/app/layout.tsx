import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SITE_URL } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#090a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Juan Camilo López Espitia | Desarrollador Full Stack & Tech Lead",
    template: "%s | Juan Camilo López Espitia",
  },
  description:
    "Desarrollador Full Stack & Líder Técnico (+10 años) en Next.js, React, comercio headless (Ibexa DXP, Commerce Layer), IA y AWS. Cali, Colombia / Remoto.",
  applicationName: "Juan Camilo López Espitia Portfolio",
  authors: [{ name: "Juan Camilo López Espitia", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "Juan Camilo López Espitia",
    "Desarrollador Full Stack",
    "Fullstack Developer",
    "Líder Técnico",
    "Technical Lead",
    "Ingeniero de Sistemas",
    "Software Architect",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Headless Commerce",
    "Comercio Headless",
    "Ibexa DXP",
    "Commerce Layer",
    "Contentful",
    "Arquitecturas Desacopladas",
    "PHP Symfony Laravel",
    "Python FastAPI",
    "Multimodal RAG",
    "Agentic Engineering",
    "AWS",
    "Vercel",
    "PostgreSQL",
    "Desarrollador Cali Colombia",
    "Remote Senior Developer",
    "KOM Trainer",
    "Polyva",
  ],
  creator: "Juan Camilo López Espitia",
  publisher: "Juan Camilo López Espitia",
  category: "technology",
  classification: "Software Engineering & Full Stack Web Development Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  ...(googleVerification || bingVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(bingVerification
            ? { other: { "msvalidate.01": bingVerification } }
            : {}),
        },
      }
    : {}),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Juan Camilo López Espitia | Desarrollador Full Stack & Tech Lead",
    description:
      "Desarrollador Full Stack & Líder Técnico (+10 años) en Next.js, React, comercio headless (Ibexa DXP, Commerce Layer), IA y cloud en AWS y Vercel.",
    url: SITE_URL,
    siteName: "Juan Camilo López Espitia — Portafolio Profesional",
    type: "profile",
    firstName: "Juan Camilo",
    lastName: "López Espitia",
    username: "jc9218",
    gender: "male",
    locale: "es_CO",
    alternateLocale: ["en_US", "es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Camilo López Espitia | Desarrollador Full Stack & Tech Lead",
    description:
      "Desarrollador Full Stack & Líder Técnico (+10 años) en Next.js, Headless Commerce, Ibexa DXP, Commerce Layer, IA y arquitecturas cloud.",
    creator: "@jc9218",
  },
  other: {
    "geo.region": "CO-VAC",
    "geo.placename": "Cali",
    "geo.position": "3.4516;-76.5320",
    ICBM: "3.4516, -76.5320",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
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
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#090a0f] text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300 font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
