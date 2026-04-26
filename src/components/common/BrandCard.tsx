import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface BrandIngredient {
  src: string;
  // Tailwind position + rotation classes for the decorative bleed
  // e.g. "-top-6 -right-8 rotate-12 w-32"
  positionClasses: string;
  // Opacity override (defaults to 0.4). Pass as a tailwind class like "opacity-50".
  opacityClass?: string;
}

export interface BrandCardProps {
  name: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  // Retained on the interface for callers that still pass it — not used visually.
  accentColor?: string;
  index?: number;
  ingredient?: BrandIngredient;
}

export const BrandCard = ({
  name,
  description,
  imageSrc,
  imageAlt,
  index,
  ingredient,
}: BrandCardProps) => {
  return (
    <article className="group relative flex flex-col bg-white rounded-2xl border border-black/5 overflow-hidden h-full min-h-[460px] shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-500 ease-out">
      {/* Decorative ingredient — bleeds in from a card corner, sits behind all content */}
      {ingredient && (
        <div
          aria-hidden
          className={`absolute pointer-events-none z-0 ${ingredient.opacityClass ?? "opacity-40"} ${ingredient.positionClasses} transition-transform duration-700 ease-out group-hover:scale-110`}
        >
          <Image
            src={ingredient.src}
            alt=""
            width={260}
            height={260}
            className="w-full h-auto object-contain"
          />
        </div>
      )}

      {/* Ghost wordmark behind the product — adds editorial depth without competing */}
      <div
        aria-hidden
        className="absolute -top-2 left-0 right-0 text-center select-none pointer-events-none overflow-hidden z-0"
      >
        <span className="font-hero font-extrabold text-[5.5rem] leading-none uppercase tracking-tighter text-black/[0.035] whitespace-nowrap">
          {name}
        </span>
      </div>

      {/* Top meta row — index + small neutral dot */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-6">
        <span className="inline-flex items-center gap-1.5 font-ui text-[9px] tracking-[0.3em] uppercase text-black/55">
          <span className="w-1.5 h-1.5 rounded-full bg-black/70" />
          Premium
        </span>
        {index !== undefined && (
          <span className="font-ui text-[9px] tracking-[0.3em] text-black/40">
            №&nbsp;{String(index).padStart(2, "0")}
          </span>
        )}
      </div>

      {/* Product image — front and center, with lift-and-scale on hover */}
      <div className="relative flex-1 flex items-center justify-center px-6 pt-4 pb-2 z-10">
        <div className="relative w-full h-[240px] transition-transform duration-700 ease-out group-hover:scale-[1.08] group-hover:-translate-y-1">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain drop-shadow-[0_28px_36px_rgba(0,0,0,0.2)]"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 22vw"
          />
        </div>
      </div>

      {/* Content block */}
      <div className="relative z-10 flex flex-col px-6 pb-6">
        {/* Neutral accent underline that extends on hover */}
        <div className="w-10 h-[3px] rounded-full mb-3 bg-black/75 transition-all duration-500 group-hover:w-24" />

        <h3 className="font-heading font-bold text-[22px] text-black leading-tight mb-1.5">
          {name}
        </h3>
        <p className="font-sans font-medium text-sm text-black/60 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Footer — distributor attribution + arrow affordance */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-black/6">
          <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-black/45">
            Authorized Partner
          </span>
          <span className="relative w-9 h-9 rounded-full flex items-center justify-center border border-black/10 text-black/70 group-hover:text-white group-hover:border-transparent transition-all duration-300 overflow-hidden">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 bg-black"
            />
            <ArrowUpRight className="w-4 h-4 relative transition-transform duration-300 group-hover:-rotate-45" />
          </span>
        </div>
      </div>
    </article>
  );
};
