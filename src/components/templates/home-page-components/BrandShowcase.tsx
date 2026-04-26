"use client";

import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { BrandCard } from "@/src/components/common/BrandCard";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Eyebrow } from "@/src/components/common/Eyebrow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";

// Ingredient asset paths — each brand pairs with one for its card bleed
const WHEAT =
  "/ingredients-images/Whisk_7598a7d8644411abfe1481fc19447d80dr_birefnet.png";
const HOP_CONE =
  "/ingredients-images/Whisk_c56def89dd6632281a14fc46226285c0dr_birefnet.png";
const HOP_CLUSTER =
  "/ingredients-images/Whisk_ad0275500e1a0cc944f4cc02e6bb32b3dr_birefnet.png";
const JUNIPER =
  "/ingredients-images/Whisk_d61644f1c4e1ac298fe4b31a6b49fd88dr_birefnet.png";

const BRANDS = [
  {
    name: "Gorkha & Guns",
    description: "Premium craft experience honoring the brave.",
    imageSrc: "/brandshowcase-products/GNG_birefnet.png",
    imageAlt: "Gorkha & Guns Bottle",
    accentColor: "#f59e0b",
    ingredient: {
      src: WHEAT,
      positionClasses: "top-4 -right-2 w-28 rotate-[16deg]",
      opacityClass: "opacity-60",
    },
  },
  {
    name: "Nepal Ice",
    description: "The chilling thrill of the Himalayas.",
    imageSrc: "/brandshowcase-products/Nepal Ice_birefnet.png",
    imageAlt: "Nepal Ice Bottle",
    accentColor: "#3b82f6",
    ingredient: {
      src: JUNIPER,
      positionClasses: "bottom-6 -left-3 w-28 -rotate-12",
      opacityClass: "opacity-65",
    },
  },
  {
    name: "Carlsberg",
    description: "Probably the best beer in the world.",
    imageSrc: "/brandshowcase-products/carlsberg_birefnet.png",
    imageAlt: "Carlsberg Bottle",
    accentColor: "#22c55e",
    ingredient: {
      src: HOP_CONE,
      positionClasses: "top-6 -right-3 w-24 rotate-[20deg]",
      opacityClass: "opacity-70",
    },
  },
  {
    name: "Red Bull",
    description: "Vitalizes body and mind.",
    imageSrc: "/brandshowcase-products/red bull_birefnet.png",
    imageAlt: "Red Bull Can",
    accentColor: "#ef4444",
    ingredient: {
      src: HOP_CLUSTER,
      positionClasses: "bottom-5 -right-3 w-28 rotate-[-14deg]",
      opacityClass: "opacity-65",
    },
  },
  {
    name: "Somersby",
    description: "Refreshing apple cider for sunny days.",
    imageSrc: "/brandshowcase-products/summerby_birefnet.png",
    imageAlt: "Somersby Bottle",
    accentColor: "#eab308",
    ingredient: {
      src: WHEAT,
      positionClasses: "top-5 -left-2 w-24 -rotate-[22deg]",
      opacityClass: "opacity-55",
    },
  },
];

export const BrandShowcase = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="relative w-full pt-20 pb-28 overflow-hidden bg-[#fafafa]">
      {/* Background patterns */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(#e5e7eb 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[var(--max-content-width)] mx-auto px-[var(--spacing-page-x)] relative z-10">
        {/* Heading */}
        <div className="mb-12 text-center md:text-left flex flex-col items-center md:items-start">
          <Eyebrow className="mb-3">Our Premium Portfolio</Eyebrow>
          <SectionHeading>Brand Showcase</SectionHeading>
        </div>

        {/* Shadcn Carousel Slider */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
          }}
          plugins={[plugin.current]}
          className="w-full relative"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4 sm:-ml-6 py-6">
            {BRANDS.map((brand, index) => (
              <CarouselItem
                key={index}
                className="pl-4 sm:pl-6 basis-[85%] sm:basis-[45%] md:basis-[30%] lg:basis-[22%]"
              >
                <BrandCard
                  index={index + 1}
                  name={brand.name}
                  description={brand.description}
                  imageSrc={brand.imageSrc}
                  imageAlt={brand.imageAlt}
                  accentColor={brand.accentColor}
                  ingredient={brand.ingredient}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
