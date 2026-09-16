import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsArchitecture } from "@/components/sections/SkillsArchitecture";
import { ExperienceLeadership } from "@/components/sections/ExperienceLeadership";
import { About } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090a0c] text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <SkillsArchitecture />
        <ExperienceLeadership />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
