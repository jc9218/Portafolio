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
  metadataBase: new URL("https://jclopezespitia.sytes.net"),
  alternates: {
    canonical: "https://jclopezespitia.sytes.net",
  },
  title: "Juan Camilo López Espitia | Fullstack Developer & Technical Lead",
  description:
    "Fullstack Developer & Technical Lead. 10+ years specializing in enterprise headless commerce ecosystems, decoupled architectures, Next.js, Ibexa DXP, Commerce Layer, and mass-scale transactional payments.",
  keywords: [
    "Juan Camilo López Espitia",
    "Fullstack Developer",
    "Technical Lead",
    "Desarrollador Full Stack",
    "Líder Técnico",
    "Next.js",
    "React",
    "Headless Commerce",
    "Commerce Layer",
    "Ibexa DXP",
    "AWS",
    "Vercel",
    "Software Architecture",
  ],
  authors: [{ name: "Juan Camilo López Espitia", url: "https://jclopezespitia.sytes.net" }],
  creator: "Juan Camilo López Espitia",
  openGraph: {
    title: "Juan Camilo López Espitia | Fullstack Developer & Technical Lead",
    description:
      "Fullstack Developer & Technical Lead. 10+ years specializing in enterprise headless commerce ecosystems, decoupled architectures, Next.js, Ibexa DXP, Commerce Layer.",
    url: "https://jclopezespitia.sytes.net",
    siteName: "Juan Camilo López Espitia — Portfolio",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/icon.svg",
        width: 128,
        height: 128,
        alt: "Juan Camilo López Espitia Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Juan Camilo López Espitia | Fullstack Developer & Technical Lead",
    description:
      "Fullstack Developer & Technical Lead. 10+ years enterprise web architectures, Next.js, Ibexa DXP, Commerce Layer.",
    images: ["/icon.svg"],
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
