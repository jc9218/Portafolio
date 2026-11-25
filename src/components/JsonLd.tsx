import React from "react";
import { SITE_URL } from "@/config/site";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const PROJECT_CATEGORIES: Record<string, string> = {
  "kom-trainer": "SportsApplication, HealthApplication",
  polyva: "EducationalApplication",
  "multimodal-rag": "DeveloperApplication",
};

export default function JsonLd() {
  const { personal, skillCategories, personalProjects, education } =
    PORTFOLIO_DATA;

  // Aggregate all technical skills
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: personal.name,
        givenName: "Juan Camilo",
        familyName: "López Espitia",
        alternateName: [
          "jc9218",
          "Camilo López",
          "Juan Camilo Lopez",
          "Juan Camilo Lopez Espitia",
        ],
        url: SITE_URL,
        email: `mailto:${personal.email}`,
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
        },
        description: personal.summary.es,
        jobTitle: [
          "Desarrollador Full Stack",
          "Fullstack Developer",
          "Líder Técnico",
          "Technical Lead",
          "Ingeniero de Sistemas",
          "Software Engineer",
          "Arquitecto de Software",
        ],
        hasOccupation: [
          {
            "@type": "Occupation",
            name: "Desarrollador Full Stack Senior",
            occupationalCategory: "15-1254.00",
            skills: allSkills.slice(0, 20).join(", "),
          },
          {
            "@type": "Occupation",
            name: "Líder Técnico de Software & Arquitecto Web",
            occupationalCategory: "15-1252.00",
            skills:
              "Arquitectura de Software, Arquitecturas Desacopladas, Comercio Headless, Liderazgo Técnico, CI/CD, Next.js, Ibexa DXP, Commerce Layer, Multimodal RAG",
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cali",
          addressRegion: "Valle del Cauca",
          addressCountry: "CO",
        },
        workLocation: {
          "@type": "Place",
          name: "Cali, Colombia (Remote Worldwide)",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: education.institution,
          url: "https://www.univalle.edu.co",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: education.degree.es,
          recognizedBy: {
            "@type": "CollegeOrUniversity",
            name: education.institution,
            url: "https://www.univalle.edu.co",
          },
        },
        knowsLanguage: [
          {
            "@type": "Language",
            name: "Spanish",
            alternateName: "es",
          },
          {
            "@type": "Language",
            name: "English",
            alternateName: "en",
          },
        ],
        sameAs: [personal.linkedin, personal.github],
        knowsAbout: [
          "Desarrollo Web Full Stack",
          "Full Stack Development",
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Headless Commerce",
          "Comercio Headless",
          "Ibexa DXP",
          "Commerce Layer",
          "Contentful",
          "PHP",
          "Symfony",
          "Laravel",
          "Node.js",
          "Python",
          "FastAPI",
          "Retrieval-Augmented Generation (RAG)",
          "Qdrant",
          "Drizzle ORM",
          "Docker",
          "Amazon Web Services (AWS)",
          "Vercel",
          "PostgreSQL",
          "MySQL",
          "Arquitecturas Desacopladas",
          "Clean Architecture",
          "Microservicios",
          "GraphQL",
          "RESTful APIs",
          "Pasarelas de Pago",
          "Sistemas Transaccionales",
          "DevOps & CI/CD",
          "Desarrollo Agéntico",
          "System Design",
          "Liderazgo Técnico",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Juan Camilo López Espitia | Portafolio Desarrollador Full Stack & Tech Lead",
        alternateName: [
          "Portafolio Juan Camilo López Espitia",
          "Juan Camilo López Espitia Portfolio",
          "Juan Camilo López Desarrollador",
        ],
        description:
          "Portafolio oficial y trayectoria profesional de Juan Camilo López Espitia. Desarrollador Full Stack y Líder Técnico especializado en Next.js, arquitecturas desacopladas, comercio headless, IA y cloud.",
        inLanguage: ["es", "en"],
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: "Perfil Profesional de Juan Camilo López Espitia",
        inLanguage: "es",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#person`,
        },
        dateCreated: "2026-01-01",
        dateModified: new Date().toISOString().split("T")[0],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects`,
        name: "Proyectos Destacados de Juan Camilo López Espitia",
        itemListElement: personalProjects.map((proj, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: {
            "@type": "SoftwareApplication",
            name: proj.name,
            description: proj.tagline.es,
            applicationCategory:
              PROJECT_CATEGORIES[proj.id] ?? "WebApplication",
            operatingSystem: "Web",
            author: {
              "@id": `${SITE_URL}/#person`,
            },
            ...(proj.liveUrl ? { url: proj.liveUrl } : {}),
            ...(proj.githubUrl ? { codeRepository: proj.githubUrl } : {}),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
