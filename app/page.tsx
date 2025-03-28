import AboutSection from "./sections/about-section";
import HeroSection from "./sections/hero-section";
import NavigationSection from "./sections/navigation-section";
import SKillsSection from "./sections/skills-section";

export default function Home(){
  return(
    <div className="min-h-screen bg-background-primary">
      <NavigationSection/>
      <HeroSection/>
      <AboutSection/>
      <SKillsSection/>
    </div>
  )
}