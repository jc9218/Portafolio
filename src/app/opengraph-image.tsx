import { ImageResponse } from "next/og";
import { SITE_URL } from "@/config/site";

export const alt =
  "Juan Camilo López Espitia — Desarrollador Full Stack & Líder Técnico";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const siteHost = new URL(SITE_URL).host;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#090a0f",
          color: "#f4f4f5",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.16), transparent 45%), radial-gradient(circle at 15% 85%, rgba(16, 185, 129, 0.08), transparent 40%)",
        }}
      >
        {/* Top Row: Location & Availability Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 18px",
              borderRadius: "999px",
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              fontSize: "20px",
              color: "#a1a1aa",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                backgroundColor: "#10b981",
              }}
            />
            <span>Cali, Colombia · Remoto</span>
          </div>

          <div
            style={{
              fontSize: "20px",
              color: "#10b981",
              fontWeight: 600,
              letterSpacing: "0.06em",
            }}
          >
            +10 AÑOS DE EXPERIENCIA
          </div>
        </div>

        {/* Center Content: Name, Title & Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Juan Camilo López Espitia
          </div>

          <div
            style={{
              fontSize: "34px",
              fontWeight: 500,
              color: "#d4d4d8",
              letterSpacing: "-0.01em",
            }}
          >
            Desarrollador Full Stack &amp; Líder Técnico
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "#a1a1aa",
              lineHeight: 1.45,
              maxWidth: "960px",
            }}
          >
            Arquitecturas web desacopladas, comercio headless, inteligencia
            artificial aplicada y sistemas cloud de alta disponibilidad.
          </div>
        </div>

        {/* Bottom Row: Core Tech Pills & Canonical Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272a",
            paddingTop: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {["Next.js", "React", "TypeScript", "Headless Commerce", "AWS", "AI / RAG"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    backgroundColor: "#18181b",
                    border: "1px solid #27272a",
                    fontSize: "18px",
                    color: "#e4e4e7",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          <div
            style={{
              fontSize: "20px",
              color: "#71717a",
            }}
          >
            {siteHost}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
