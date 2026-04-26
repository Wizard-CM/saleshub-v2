import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

// Mini subheading that sits above a SectionHeading (Fragment Mono 400, tracked wide).
export const Eyebrow = ({ children, className }: EyebrowProps) => (
  <p
    className={cn(
      "font-ui font-normal text-[11px] md:text-xs tracking-[0.3em] uppercase text-gray-600",
      className
    )}
  >
    {children}
  </p>
);
