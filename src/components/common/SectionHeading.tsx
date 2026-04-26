import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

// Shared H2 used across every section. Size/color can be tweaked via className.
export const SectionHeading = ({ children, className }: SectionHeadingProps) => (
  <h2
    className={cn(
      "font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase leading-[1.1] text-black",
      className
    )}
  >
    {children}
  </h2>
);
