import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function Home() {
  return (
    <CustomCursor>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </CustomCursor>
  )
}
