import AboutSection from "./sections/about-section";
import FooterSection from "./sections/footer-section";
import HeroSection from "./sections/hero-section";
import NavigationSection from "./sections/navigation-section";
import ProjectSection from "./sections/projects-section";
import SKillsSection from "./sections/skills-section";
import ContactSection from "./sections/contact-section";

export default function Home(){
  return(
    <div className="min-h-screen bg-background-primary">
      <NavigationSection/>
      <HeroSection/>
      <AboutSection/>
      <SKillsSection/>
      <ProjectSection />
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}
