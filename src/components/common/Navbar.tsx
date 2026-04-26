"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

// Hysteresis: enter the compact state at SHRINK_AT, only return to the full state
// once scroll drops below GROW_AT. Without the gap, the height change would shift
// scrollY by ~1px and flap the state back and forth at the boundary.
const SHRINK_AT = 24;
const GROW_AT = 8;

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => {
        const y = window.scrollY;
        if (!prev && y > SHRINK_AT) return true;
        if (prev && y < GROW_AT) return false;
        return prev;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Treat sub-routes as active (e.g. /about/team still highlights About).
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    if (!navRef.current) return;

    const updateIndicator = () => {
      if (!navRef.current) return;
      const activeIndex = NAV_LINKS.findIndex((link) => isActive(link.href));
      if (activeIndex !== -1) {
        const activeTab = navRef.current.children[activeIndex] as HTMLElement;
        setIndicatorStyle({
          left: activeTab.offsetLeft,
          width: activeTab.offsetWidth,
          opacity: 1,
        });
      } else {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    updateIndicator();
    
    // Add listeners to ensure recalculation on window resize or dynamic layout changes
    window.addEventListener("resize", updateIndicator);
    const observer = new ResizeObserver(updateIndicator);
    if (navRef.current) {
      observer.observe(navRef.current);
    }
    
    return () => {
      window.removeEventListener("resize", updateIndicator);
      observer.disconnect();
    };
  }, [pathname, scrolled]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-out px-[var(--spacing-page-x)]",
        scrolled ? "py-3" : "py-0"
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center font-sans transition-all duration-500 ease-out",
          scrolled
            ? "w-fit max-w-3xl h-14 gap-8 justify-center rounded-md border border-black/10 bg-white/70 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] pl-5 pr-2"
            : "w-full max-w-[var(--max-content-width)] h-24 justify-between rounded-none border border-transparent bg-transparent shadow-none"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "flex items-center tracking-tighter text-black font-heading transition-all duration-500",
            scrolled ? "text-xl" : "text-3xl"
          )}
        >
          <span className="font-bold">SalesHub</span>
          <span className="font-semibold">Nepal</span>
        </Link>

        {/* Navigation Links — Fragment Mono 400 */}
        <div
          ref={navRef}
          className={cn(
            "relative hidden md:flex items-center font-normal font-ui tracking-wider text-gray-800 uppercase transition-all duration-500",
            scrolled ? "gap-6 text-xs" : "gap-8 text-sm"
          )}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative transition-colors",
                  active ? "text-black" : "hover:text-black"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          
          <span
            className="absolute -bottom-1.5 h-[2px] bg-black transition-all duration-300 ease-in-out"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              opacity: indicatorStyle.opacity,
            }}
          />
        </div>

        {/* CTA Button — Stack Sans Text 500 */}
        <Button
          className={cn(
            "hidden md:flex bg-black text-white hover:text-white hover:bg-black/90 font-sans font-medium items-center uppercase tracking-wider transition-all hover:scale-105 active:scale-95",
            scrolled
              ? "rounded-md h-10 px-4 text-xs shadow-none"
              : "rounded-md px-6 py-5 text-sm shadow-md"
          )}
        >
          {scrolled ? "PARTNER" : "PARTNER WITH US"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-black p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
