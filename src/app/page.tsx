<<<<<<< HEAD
import { HeroSection, AppointorSection, AboutSection, ServicesSection, ProjectsSection, ContactSection, SkillsSection } from "@/components/sections";
=======
import { HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection } from "@/components/sections";
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
<<<<<<< HEAD
      <AppointorSection />
      <ServicesSection />
=======
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
      <ProjectsSection />
      <ContactSection />
      <footer className="py-10 text-center text-sm text-foreground/70">
        © {new Date().getFullYear()} Jatin Kumar. All rights reserved.
      </footer>
    </div>
  );
}
