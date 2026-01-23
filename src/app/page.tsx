import { HeroSection, AppointorSection, AboutSection, ServicesSection, ProjectsSection, ContactSection, SkillsSection } from "@/components/sections";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <AppointorSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-10 text-center text-sm text-foreground/70">
        © {new Date().getFullYear()} Jatin Kumar. All rights reserved.
      </footer>
    </div>
  );
}
