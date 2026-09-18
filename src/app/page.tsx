import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import ArchitectureShowcase from "@/components/ArchitectureShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsSection from "@/components/SkillsSection";
import PortfolioTechStack from "@/components/PortfolioTechStack";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      {/* Background grid pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 -z-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      <Navbar />

      <main className="flex-1">
        <Hero />
        <Metrics />
        <ArchitectureShowcase />
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
