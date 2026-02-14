import AboutHero from "./AboutHero";
import AboutIllustrationSection from "./AboutIllustrationSection";
import AboutResumeSection from "./AboutResumeSection";


export default function AboutPage() {
  return (
    <main className="w-full">
      <AboutHero/>
      <AboutResumeSection/>
      <AboutIllustrationSection/>
    </main>
  );
}
