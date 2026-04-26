import { HeroSection } from "@/src/components/templates/home-page-components/HeroSection";
import { BrandShowcase } from "@/src/components/templates/home-page-components/BrandShowcase";
import { AboutSection } from "@/src/components/templates/home-page-components/AboutSection";
import { PartnerCTA } from "@/src/components/templates/home-page-components/PartnerCTA";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <HeroSection />
      <BrandShowcase />
      <AboutSection />
      <PartnerCTA />
    </div>
  );
}
