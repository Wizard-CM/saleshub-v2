import React from "react";
import { Eyebrow } from "@/src/components/common/Eyebrow";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Description } from "@/src/components/common/Description";

interface Stat {
  value: React.ReactNode;
  label: string;
}

const STATS: Stat[] = [
  {
    value: (
      <>
        10<span className="text-black/35">+</span>
      </>
    ),
    label: "Years of experience",
  },
  {
    value: "05",
    label: "Premium brands",
  },
  {
    value: "07",
    label: "Provinces reached",
  },
  {
    value: "100%",
    label: "Licensed & compliant",
  },
];

export const OurStorySection = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Oversized watermark numeral in the background — decorative */}
      <div
        aria-hidden
        className="absolute right-[-2%] top-10 md:top-16 select-none pointer-events-none font-heading font-bold text-[12rem] md:text-[18rem] lg:text-[22rem] leading-none text-black/3 tracking-tighter"
      >
        01
      </div>

      <div className="relative max-w-[var(--max-content-width)] mx-auto px-[var(--spacing-page-x)]">
        {/* Centered hero block */}
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
          <Eyebrow className="mb-5 text-center">Our Story</Eyebrow>

          <SectionHeading className="mb-6 md:text-5xl lg:text-[3.5rem] leading-[1.05]">
            From Humble Beginnings
            <br className="hidden md:block" />{" "}
            to Nepal&rsquo;s Trusted Name.
          </SectionHeading>

          <Description className="text-black/65 max-w-2xl mx-auto">
            A decade of partnerships, a portfolio of premium brands, and a
            single-minded commitment to quality and compliance.
          </Description>
        </div>

        {/* Two-column magazine narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 max-w-5xl mx-auto mb-16 md:mb-20">
          <div className="relative md:pr-4 md:border-r md:border-black/10">
            <span
              aria-hidden
              className="absolute left-0 top-0 font-heading font-bold text-5xl text-black/10 leading-none -translate-y-2"
            >
              &ldquo;
            </span>
            <Description className="text-black/75 pt-2">
              SalesHubNepal is a licensed distributor dedicated to supplying
              premium beverage brands across Nepal. We bridge the gap between
              world-class breweries and local businesses with unparalleled
              efficiency and trust.
            </Description>
          </div>

          <div>
            <Description className="text-black/75">
              With over a decade of combined experience, our mission is to
              ensure quality and availability — serving retailers, hospitality
              partners, and consumers across the region with care and
              professionalism.
            </Description>
          </div>
        </div>

        {/* Stats strip */}
        <div className="max-w-5xl mx-auto border-y border-black/10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black/10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 px-5 py-7 md:px-7 md:py-8"
              >
                <span className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.5rem] text-black leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="font-ui font-normal text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-black/55">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
