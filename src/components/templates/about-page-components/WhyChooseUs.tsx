import React from "react";
import { Clipboard, MapPin, Award, Package } from "lucide-react";
import { Description } from "@/src/components/common/Description";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  body: string;
  bandColor: string;
  bandPattern: React.CSSProperties;
  iconColor: string;
}

// Same texture map used on the home-page BrandCards — gives each card a distinct fingerprint.
const PATTERNS: Record<string, React.CSSProperties> = {
  stripes: {
    backgroundImage:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.35) 0 1.5px, transparent 1.5px 12px)",
  },
  plus: {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M10 6v8M6 10h8' stroke='white' stroke-opacity='0.55' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundSize: "20px 20px",
  },
  rings: {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Ccircle cx='11' cy='11' r='2.5' stroke='white' stroke-opacity='0.6' stroke-width='1.2' fill='none'/%3E%3C/svg%3E")`,
    backgroundSize: "22px 22px",
  },
  diamond: {
    backgroundImage:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.32) 0 1px, transparent 1px 14px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.32) 0 1px, transparent 1px 14px)",
  },
};

const FEATURES: FeatureItem[] = [
  {
    icon: <Clipboard className="w-5 h-5" strokeWidth={2.25} />,
    title: "Licensed Distributor",
    body: "Licensed Distributor - and licensed Distributor.",
    bandColor: "#b3d2f3",
    bandPattern: PATTERNS.stripes,
    iconColor: "text-[#1f5fbf]",
  },
  {
    icon: <MapPin className="w-5 h-5" strokeWidth={2.25} />,
    title: "Pan-Nepal Network",
    body: "Pan-Nepal Network - and pan-Nepal network.",
    bandColor: "#bfdeae",
    bandPattern: PATTERNS.plus,
    iconColor: "text-[#2f7a3a]",
  },
  {
    icon: <Award className="w-5 h-5" strokeWidth={2.25} />,
    title: "Premium Brands Only",
    body: "Excrusive access for premium Brands Only.",
    bandColor: "#f8bd82",
    bandPattern: PATTERNS.rings,
    iconColor: "text-[#c97a2a]",
  },
  {
    icon: <Package className="w-5 h-5" strokeWidth={2.25} />,
    title: "Reliable Supply Chain",
    body: "Reliable supply chain and supply Chain.",
    bandColor: "#d2beec",
    bandPattern: PATTERNS.diamond,
    iconColor: "text-[#6b39a8]",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-white pb-16 md:pb-24 pt-4 md:pt-6">
      <div className="max-w-[var(--max-content-width)] mx-auto px-[var(--spacing-page-x)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 overflow-hidden flex flex-col transition-all duration-300"
            >
              {/* Colored patterned band with a white-haloed icon */}
              <div
                className="relative h-24 md:h-28 w-full flex items-center justify-center"
                style={{
                  backgroundColor: feature.bandColor,
                  ...feature.bandPattern,
                }}
              >
                <div
                  className={`relative z-10 w-14 h-14 rounded-full bg-white/85 backdrop-blur-sm shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex items-center justify-center ${feature.iconColor}`}
                >
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-1.5 px-5 md:px-6 pt-5 pb-6">
                <h3 className="font-heading font-bold text-[17px] md:text-lg text-black leading-tight">
                  {feature.title}
                </h3>
                <Description className="text-[14px] leading-relaxed text-black/60">
                  {feature.body}
                </Description>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
