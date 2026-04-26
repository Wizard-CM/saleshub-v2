"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/src/components/common/SectionHeading";

export const ReadyToPartnerCTA = () => {
  return (
    <section className="relative w-full bg-[#111111] text-white overflow-hidden">
      {/* Subtle dotted texture overlay — matches PartnerCTA rhythm */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="max-w-[var(--max-content-width)] mx-auto px-[var(--spacing-page-x)] py-14 md:py-20 lg:py-24 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          <SectionHeading className="text-white text-2xl md:text-4xl lg:text-[2.75rem] max-w-3xl">
            Ready to Partner with Us?
            <br className="hidden md:block" />{" "}
            Let&rsquo;s Build Something Great Together.
          </SectionHeading>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-white text-black hover:bg-white/90 rounded-md h-11 px-6 md:px-7 font-sans font-medium text-[12px] tracking-[0.18em] uppercase transition-colors group"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
