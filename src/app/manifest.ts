import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Juan Camilo López Espitia — Desarrollador Full Stack & Líder Técnico",
    short_name: "JC López",
    description:
      "Portafolio profesional de Juan Camilo López Espitia: Desarrollador Full Stack y Líder Técnico (+10 años) en Next.js, comercio headless, IA y cloud.",
    start_url: "/",
    display: "standalone",
    background_color: "#090a0f",
    theme_color: "#090a0f",
    lang: "es",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
