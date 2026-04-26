import React from "react";
import { Description } from "@/src/components/common/Description";

export const AboutHero = () => {
  return (
    <section className="relative w-full bg-[#111111] text-white overflow-hidden">
      {/* Subtle dotted texture overlay — same rhythm as PartnerCTA */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="max-w-[var(--max-content-width)] mx-auto px-[var(--spacing-page-x)] py-16 md:py-24 lg:py-28 relative z-10">
        <div className="flex flex-col items-center text-center gap-5 md:gap-6">
          <h1 className="font-heading font-bold uppercase tracking-tight leading-[1.05] text-white text-3xl md:text-5xl lg:text-[3.5rem] max-w-4xl">
            A Legacy of Trust &amp; Excellence in Distribution
          </h1>

          <Description className="text-gray-300 max-w-xl">
            Serving Nepal with premium beverage brands since our inception.
          </Description>
        </div>
      </div>
    </section>
  );
};
