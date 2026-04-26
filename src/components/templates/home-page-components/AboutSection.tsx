"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Eyebrow } from "@/src/components/common/Eyebrow";
import { Description } from "@/src/components/common/Description";

export const AboutSection = () => {
  return (
    <section className="relative w-full bg-white pt-10 pb-10 overflow-hidden">
      <div className="max-w-(--max-content-width) mx-auto px-(--spacing-page-x) relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
          {/* Left: text block */}
          <div className="w-full lg:w-[52%] flex flex-col items-start">
            {/* Eyebrow with dot marker — mirrors the hero's treatment */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <Eyebrow className="text-black/65">About Sales Hub Nepal</Eyebrow>
            </div>

            <SectionHeading className="lg:text-[3rem] mb-6 max-w-2xl">
              A Legacy of Trust <br />
              &amp; Excellence <br />
              in Distribution.
            </SectionHeading>

            {/* Thin accent rule — small editorial pause between heading and body */}
            <div className="w-14 h-[2px] bg-black mb-7" />

            <Description className="max-w-xl text-black/70 mb-8">
              SalesHubNepal is a licensed distributor dedicated to supplying
              premium beverage brands across Nepal. We bridge the gap between
              world-class breweries and local businesses with unparalleled
              efficiency and trust. With over a decade of combined experience,
              our mission is to ensure quality and availability.
            </Description>

            <Button className="bg-black text-white hover:bg-black/90 rounded-md h-12 px-8 font-sans font-medium text-[13px] tracking-[0.2em] uppercase group shadow-[0_12px_32px_rgba(0,0,0,0.15)]">
              Learn More
              <ArrowRight className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right: polaroid image */}
          <div className="w-full lg:w-[48%] relative flex items-center justify-center min-h-[380px] lg:min-h-[480px]">
            <div className="relative z-10 w-[88%] md:w-[84%] lg:w-[96%] bg-white p-4 pb-12 shadow-[0_24px_50px_rgba(0,0,0,0.18)] rotate-3">
              <div className="relative w-full aspect-4/3 bg-gray-100 overflow-hidden">
                <Image
                  src="/home-page/business_meeting_1776357976844.png"
                  alt="Sales Hub Nepal products on shelves"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="w-full flex justify-center mt-12 md:mt-16">
          <ChevronDown
            className="w-6 h-6 text-gray-400 animate-bounce"
            strokeWidth={2}
          />
        </div>
      </div>
    </section>
  );
};
