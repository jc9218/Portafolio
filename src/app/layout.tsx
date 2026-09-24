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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Juan Camilo López Espitia | Desarrollador Full Stack & Líder Técnico",
    template: "%s | Juan Camilo López Espitia",
  },
  description:
    "Portafolio profesional de Juan Camilo López Espitia: Desarrollador Full Stack & Líder Técnico (Fullstack Developer & Tech Lead) con más de 10 años de experiencia en Next.js, React, arquitecturas web desacopladas, comercio headless (Commerce Layer, Ibexa DXP) y computación cloud (AWS, Vercel). Ubicado en Cali, Colombia.",
  applicationName: "Juan Camilo López Espitia Portfolio",
  authors: [{ name: "Juan Camilo López Espitia", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    // Búsquedas generales de perfil (Español & Inglés)
    "desarrollador",
    "developer",
    "desarrollador full stack",
    "fullstack developer",
    "full stack developer",
    "desarrollador web",
    "web developer",
    "líder técnico",
    "technical lead",
    "tech lead",
    "ingeniero de sistemas",
    "systems engineer",
    "ingeniero de software",
    "software engineer",
    "arquitecto de software",
    "software architect",
    "programador",
    "programador web",
    "senior developer",
    "senior full stack developer",

    // Tecnologías principales
    "desarrollador next.js",
    "next.js developer",
    "desarrollador react",
    "react developer",
    "desarrollador typescript",
    "typescript developer",
    "desarrollador javascript",
    "javascript developer",
    "desarrollador php",
    "php developer",
    "symfony",
    "laravel",
    "docker",
    "aws",
    "amazon web services",
    "vercel",
    "postgresql",
    "mysql",
    "sql",

    // Comercio Headless & Arquitectura Empresarial
    "headless commerce",
    "comercio headless",
    "ibexa dxp",
    "commerce layer",
    "contentful",
    "arquitecturas desacopladas",
    "decoupled architectures",
    "microservicios",
    "graphql",
    "restful apis",
    "antigravity",
    "antigravity ai",
    "desarrollo agéntico",
    "agentic engineering",

    // Ubicación & Alcance Geográfico
    "desarrollador cali",
    "desarrollador colombia",
    "developer cali",
    "developer colombia",
    "desarrollador remoto",
    "remote developer",
    "desarrollo web cali",
    "ingeniero cali",
    "ingeniero de sistemas cali",
    "valle del cauca",

    // Nombre y Marca Personal
    "juan camilo lopez espitia",
    "juan camilo lopez",
    "camilo lopez",
    "jc9218",
    "kom trainer",
    "kom-trainer"
  ],
  creator: "Juan Camilo López Espitia",
  publisher: "Juan Camilo López Espitia",
  category: "technology",
  classification: "Software Engineering & Full Stack Web Development Portfolio",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-CO": SITE_URL,
      "es": SITE_URL,
      "en": SITE_URL,
      "x-default": SITE_URL,
    },
  },
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
    title: "Juan Camilo López Espitia | Desarrollador Full Stack & Líder Técnico",
    description:
      "Desarrollador Full Stack & Líder Técnico con más de 10 años de experiencia construyendo plataformas web empresariales, arquitecturas desacopladas con Next.js y ecosistemas de comercio headless (Ibexa DXP, Commerce Layer). Ubicado en Cali, Colombia.",
    url: SITE_URL,
    siteName: "Juan Camilo López Espitia — Portafolio Profesional",
    type: "profile",
    firstName: "Juan Camilo",
    lastName: "López Espitia",
    username: "jc9218",
    gender: "male",
    locale: "es_CO",
    alternateLocale: ["en_US", "es_ES"],
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Juan Camilo López Espitia — Desarrollador Full Stack & Líder Técnico",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Camilo López Espitia | Desarrollador Full Stack & Líder Técnico",
    description:
      "Desarrollador Full Stack & Líder Técnico con +10 años en Next.js, Headless Commerce, Ibexa DXP, Commerce Layer y arquitecturas cloud.",
    images: ["/og-image.svg"],
    creator: "@jc9218",
  },
  other: {
    "geo.region": "CO-VAC",
    "geo.placename": "Cali",
    "geo.position": "3.4516;-76.5320",
    "ICBM": "3.4516, -76.5320",
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
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950 font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
