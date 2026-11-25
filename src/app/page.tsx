import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsSection from "@/components/SkillsSection";
import PortfolioTechStack from "@/components/PortfolioTechStack";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-zinc-100 focus:text-zinc-950 focus:font-medium focus:text-sm"
      >
        Ir al contenido principal
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <Metrics />
        <ExperienceTimeline />
        <FeaturedProjects />
        <SkillsSection />
        <PortfolioTechStack />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
