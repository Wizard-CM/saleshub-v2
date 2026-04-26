import React from "react";
import { Eyebrow } from "@/src/components/common/Eyebrow";

export const ProductsHero = () => {
  return (
    <section className="relative w-full bg-[#111111] text-white min-h-[55vh] overflow-hidden">
      {/* Dotted texture — matches PartnerCTA / AboutHero rhythm */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Text block — anchored near the top of the hero */}
      <div className="relative z-10 max-w-(--max-content-width) mx-auto px-(--spacing-page-x) pt-14 md:pt-20 w-full flex flex-col items-center text-center">
        <Eyebrow className="text-white/55 mb-4">The Portfolio</Eyebrow>
        <h1 className="font-heading font-bold uppercase tracking-tight leading-[1.05] text-white text-4xl md:text-5xl lg:text-[3.75rem] max-w-4xl">
          Our Premium Products
        </h1>
      </div>
    </section>
  );
};
