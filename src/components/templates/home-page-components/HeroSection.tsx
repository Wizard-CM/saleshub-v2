import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Eyebrow } from "@/src/components/common/Eyebrow";
import { Description } from "@/src/components/common/Description";
import { BestSellersSlider } from "./BestSellersSlider";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-x-clip flex items-center">
      {/* Subtle dotted texture in the background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.9) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-[var(--max-content-width)] mx-auto w-full px-[var(--spacing-page-x)] py-12 md:py-16">
        <div className="grid grid-cols-1 grid-cols-[1.2fr_1fr]   ">
          {/* LEFT — headline block */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-7 md:mb-9">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <Eyebrow className="text-black/60">
                Licensed Distributor · Pan-Nepal
              </Eyebrow>
            </div>

            <h1 className="font-hero font-extrabold uppercase tracking-tight leading-[0.95] text-black text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem]">
              Nepal&rsquo;s bridge
              <br />
              to the world&rsquo;s
              <br />
              most <span className="text-(--accent-green)">celebrated</span>
              <br />
              brews.
            </h1>

            <Description className="max-w-xl mt-7 md:mt-9 text-black/70">
              Authorized regional distributor for premium beverage brands —
              licensed, compliant, and proudly serving Nepal&rsquo;s retailers,
              hospitality, and consumers.
            </Description>

            <div className="flex flex-wrap items-center gap-3 mt-9 md:mt-10">
              <Button className="bg-black text-white hover:text-white hover:bg-black/90 rounded-md px-7 h-12 font-sans font-medium text-sm uppercase tracking-wider flex items-center group shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                Become a Partner
                <ArrowRight className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link
                href="#brands"
                className="inline-flex items-center gap-2 h-12 px-6 text-black font-sans font-medium text-sm uppercase tracking-wider border border-black/20 rounded-md hover:bg-black/5 transition-colors"
              >
                Explore Brands
              </Link>
            </div>
          </div>

          {/* RIGHT — best-sellers auto-sliding carousel (owns its own card + bg) */}
          <div className="relative w-full lg:ml-auto">
            <BestSellersSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
