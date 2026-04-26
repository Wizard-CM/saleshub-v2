import { AboutHero } from "@/src/components/templates/about-page-components/AboutHero";
import { OurStorySection } from "@/src/components/templates/about-page-components/OurStorySection";
import { MeetOurTeam } from "@/src/components/templates/about-page-components/MeetOurTeam";
import { WhyChooseUs } from "@/src/components/templates/about-page-components/WhyChooseUs";
import { ReadyToPartnerCTA } from "@/src/components/templates/about-page-components/ReadyToPartnerCTA";

export default function AboutPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <AboutHero />
      <OurStorySection />
      <MeetOurTeam />
      <WhyChooseUs />
      <ReadyToPartnerCTA />
    </div>
  );
}
