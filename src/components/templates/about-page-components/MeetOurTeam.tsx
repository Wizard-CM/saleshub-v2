import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Eyebrow } from "@/src/components/common/Eyebrow";
import { Description } from "@/src/components/common/Description";

export const MeetOurTeam = () => {
  return (
    <section className="relative w-full bg-white pt-6 pb-10 md:pt-10 md:pb-14">
      <div className="relative w-full overflow-hidden aspect-[16/9] md:aspect-[2.4/1] lg:aspect-[2.8/1] shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
        {/* Team photo */}
        <Image
          src="/home-page/business_meeting_1776357976844.png"
          alt="SalesHubNepal team in front of the distribution facility"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Bottom-anchored gradient for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
        />

        {/* Text overlay — constrained to the page's content width */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-[var(--max-content-width)] mx-auto px-[var(--spacing-page-x)] py-6 md:py-10 lg:py-14">
            <Eyebrow className="text-white/80 mb-2 md:mb-3">
              The People Behind the Brand
            </Eyebrow>
            <SectionHeading className="text-white text-3xl md:text-5xl lg:text-[3.75rem] leading-[1.05] mb-2 md:mb-3">
              Meet Our Team
            </SectionHeading>
            <Description className="text-white/85 max-w-2xl">
              Dedicated professionals driving Nepal&rsquo;s beverage
              distribution forward.
            </Description>
          </div>
        </div>
      </div>
    </section>
  );
};
