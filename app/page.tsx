"use client"
import Hero from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ProfessionalJourney from "./components/ProfessionalJourney";
import SkillsSection from "./components/SkillItem";






export default function Home() {

  

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-transparent text-9xl font-sans text-black">
    
      <Hero/>
      <ProjectsSection />
      <SkillsSection />
      <ProfessionalJourney/>
    </div>
  );
}
