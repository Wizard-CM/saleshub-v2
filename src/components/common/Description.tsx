import React from "react";
import { cn } from "@/lib/utils";

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

// Shared body/description paragraph — 18px Stack Sans Text 500 on light-black.
// Pass className to override color (e.g. text-white/80 on dark backgrounds).
export const Description = ({ children, className }: DescriptionProps) => (
  <p
    className={cn(
      "font-sans font-medium text-lg leading-relaxed text-body",
      className
    )}
  >
    {children}
  </p>
);
