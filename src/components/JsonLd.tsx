import React from "react";
import { SITE_URL } from "@/config/site";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function JsonLd() {
  const { personal, skillCategories, personalProjects } = PORTFOLIO_DATA;

  // Aggregate all technical skills
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        "name": personal.name,
        "givenName": "Juan Camilo",
        "familyName": "López Espitia",
        "alternateName": [
          "jc9218",
          "Camilo López",
          "Juan Camilo Lopez",
          "Juan Camilo Lopez Espitia"
        ],
        "url": SITE_URL,
        "image": `${SITE_URL}/og-image.svg`,
        "description": personal.summary.es,
        "jobTitle": [
          "Desarrollador Full Stack",
          "Fullstack Developer",
          "Líder Técnico",
          "Technical Lead",
          "Ingeniero de Sistemas",
          "Software Engineer",
          "Desarrollador Web",
          "Web Developer",
          "Arquitecto de Software"
        ],
        "hasOccupation": [
          {
            "@type": "Occupation",
            "name": "Desarrollador Full Stack Senior",
            "occupationalCategory": "15-1254.00",
            "skills": allSkills.slice(0, 20).join(", ")
          },
          {
            "@type": "Occupation",
            "name": "Líder Técnico de Software & Arquitecto Web",
            "occupationalCategory": "15-1252.00",
            "skills": "Arquitectura de Software, Arquitecturas Desacopladas, Comercio Headless, Liderazgo Técnico, CI/CD, Next.js, Ibexa DXP, Commerce Layer"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cali",
          "addressRegion": "Valle del Cauca",
          "addressCountry": "CO"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Universidad del Valle",
          "url": "https://www.univalle.edu.co"
        },
        "knowsLanguage": [
          {
            "@type": "Language",
            "name": "Spanish",
            "alternateName": "es"
          },
          {
            "@type": "Language",
            "name": "English",
            "alternateName": "en"
          }
        ],
        "sameAs": [
          personal.linkedin,
          personal.github,
          personal.whatsapp
        ],
        "knowsAbout": [
          "Desarrollador",
          "Developer",
          "Desarrollo Web",
          "Web Development",
          "Full Stack Development",
          "Desarrollo Full Stack",
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
          "Docker",
          "Amazon Web Services (AWS)",
          "Vercel",
          "PostgreSQL",
          "MySQL",
          "Bases de Datos Relacionales",
          "Arquitecturas Desacopladas",
          "Decoupled Architectures",
          "Microservicios",
          "GraphQL",
          "RESTful APIs",
          "Pasarelas de Pago",
          "Sistemas Transaccionales",
          "DevOps & CI/CD",
          "Antigravity AI",
          "Desarrollo Agéntico",
          "System Design",
          "Liderazgo Técnico",
          "Technical Leadership"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Juan Camilo López Espitia | Portafolio Desarrollador Full Stack & Líder Técnico",
        "alternateName": [
          "Portafolio Juan Camilo López Espitia",
          "Juan Camilo López Espitia Portfolio",
          "Juan Camilo López Desarrollador"
        ],
        "description": "Portafolio oficial y trayectoria profesional de Juan Camilo López Espitia. Desarrollador Full Stack y Líder Técnico especializado en Next.js, arquitecturas desacopladas, comercio headless y cloud en Cali, Colombia.",
        "inLanguage": ["es", "en"],
        "publisher": {
          "@id": `${SITE_URL}/#person`
        }
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        "url": SITE_URL,
        "name": "Perfil Profesional de Juan Camilo López Espitia",
        "isPartOf": {
          "@id": `${SITE_URL}/#website`
        },
        "mainEntity": {
          "@id": `${SITE_URL}/#person`
        },
        "dateCreated": "2026-01-01",
        "dateModified": new Date().toISOString().split("T")[0]
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects`,
        "name": "Proyectos Destacados de Juan Camilo López Espitia",
        "itemListElement": personalProjects.map((proj, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": proj.name,
            "description": proj.tagline.es,
            "applicationCategory": "SportsApplication, HealthApplication",
            "operatingSystem": "Web",
            ...(proj.liveUrl ? { "url": proj.liveUrl } : {})
          }
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
