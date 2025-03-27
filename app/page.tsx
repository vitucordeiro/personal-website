import HeroSection from "./components/hero-section";
import NavigationSection from "./components/navigation-section";

export default function Home(){
  return(
    <div className="min-h-screen bg-background-primary">
      <NavigationSection/>
      <HeroSection/>
    </div>
  )
}