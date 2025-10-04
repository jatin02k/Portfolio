import { HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection } from "@/components/sections";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-10 text-center text-sm text-foreground/70">
        © {new Date().getFullYear()} Jatin Kumar. All rights reserved.
      </footer>
    </div>
  );
}
