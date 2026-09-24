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

      <Navbar />

      <main className="flex-1">
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
