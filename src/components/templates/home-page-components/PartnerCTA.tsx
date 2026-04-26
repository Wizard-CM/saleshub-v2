"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { SectionHeading } from "@/src/components/common/SectionHeading";

export const PartnerCTA = () => {
  return (
    <section className="relative w-full bg-[#111111] text-white overflow-hidden">
      {/* Subtle dotted texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="max-w-[var(--max-content-width)] mx-auto px-[var(--spacing-page-x)] py-8 md:py-12 lg:py-14 relative z-10">
        <div className="flex flex-col items-center text-center gap-5 md:gap-6">
          <SectionHeading className="text-white text-2xl md:text-3xl lg:text-[2.5rem] max-w-3xl">
            Connect with Nepal&rsquo;s Trusted Beverage Distribution Partner.
            Let&rsquo;s Start the Conversation Today.
          </SectionHeading>

          <Button className="bg-white text-black hover:bg-white/90 rounded-md h-12 px-7 md:px-8 font-sans font-medium text-[12px] tracking-[0.18em] uppercase flex items-center gap-2.5 group mt-1">
            Contact Us
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
