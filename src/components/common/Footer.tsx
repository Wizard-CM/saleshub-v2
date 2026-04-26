"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.6 1.6-1.6h1.7V3.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.7V13h2.6v8h3.2Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.25 8.5h3.5V21h-3.5V8.5Zm6 0h3.35v1.7h.05c.47-.85 1.62-1.75 3.35-1.75 3.58 0 4.25 2.25 4.25 5.18V21h-3.5v-6.3c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.63-2.42 3.32V21h-3.5V8.5Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M18.244 2H21l-6.55 7.488L22 22h-6.09l-4.77-6.24L5.6 22H2.844l7.007-8.01L2 2h6.24l4.31 5.69L18.244 2Zm-2.14 18h1.695L7.98 3.9H6.16l9.944 16.1Z" />
      </svg>
    ),
  },
];

const BrandMark = () => (
  <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" aria-hidden>
    <circle cx="14" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 32 L12 18 L18 26 L24 14 L32 28 L37 32 Z" fill="currentColor" />
    <path
      d="M22 22 Q24 28 28 28 Q32 28 34 22 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <line x1="28" y1="28" x2="28" y2="34" stroke="currentColor" strokeWidth="1.5" />
    <line x1="25" y1="34" x2="31" y2="34" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="relative w-full bg-white text-black overflow-hidden">

      <div className="relative max-w-[var(--max-content-width)] mx-auto px-[var(--spacing-page-x)] pt-16 md:pt-20 pb-8">
        {/* Top band: Wordmark + Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16 pb-12 md:pb-14 border-b border-black/10">
          {/* Brand wordmark */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 text-black mb-5">
              <BrandMark />
              <span className="font-ui font-normal text-[11px] tracking-[0.35em] text-black/55 uppercase">
                Est. Nepal
              </span>
            </div>
            <h2 className="font-heading font-bold uppercase tracking-tight leading-[0.95] text-black text-5xl md:text-6xl lg:text-[5.5rem]">
              SalesHub
              <br />
              Nepal
            </h2>
            <p className="font-sans font-medium text-lg text-black/70 leading-relaxed max-w-md mt-6">
              Nepal&rsquo;s premier beverage distribution network — connecting
              world-class brands with local markets since our inception.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-[380px] lg:shrink-0">
            <p className="font-ui font-normal text-[11px] md:text-xs tracking-[0.3em] text-black/50 uppercase mb-3">
              Stay in the Loop
            </p>
            <h3 className="font-heading font-bold text-xl md:text-2xl text-black leading-snug mb-5">
              Partnership updates, delivered.
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 border border-black/15 rounded-md bg-white/60 p-1.5 focus-within:border-black/40 transition-colors"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 bg-transparent px-3 py-2 font-sans text-sm text-black placeholder:text-black/40 outline-none"
              />
              <button
                type="submit"
                className="shrink-0 flex items-center gap-1.5 bg-black text-white hover:bg-black/90 rounded px-4 h-9 font-sans font-medium text-xs uppercase tracking-[0.15em] transition-colors group"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
            <p className="font-sans text-xs text-black/45 mt-3">
              We&rsquo;ll only send what&rsquo;s worth your inbox.
            </p>
          </div>
        </div>

        {/* Middle grid: Navigate / Contact / Follow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 py-12 md:py-14 border-b border-black/10">
          {/* Navigate */}
          <div>
            <h3 className="font-ui font-normal text-[11px] tracking-[0.3em] text-black/50 uppercase mb-5">
              Navigate
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group font-sans font-medium text-[15px] text-black/75 hover:text-black transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-ui font-normal text-[11px] tracking-[0.3em] text-black/50 uppercase mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-md bg-black/5 border border-black/10 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
                <a
                  href="tel:+919837577800"
                  className="font-sans font-medium text-[15px] text-black/75 hover:text-black transition-colors pt-1.5"
                >
                  +91-983-757-7800
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-md bg-black/5 border border-black/10 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
                <a
                  href="mailto:info@saleshubnepal.com"
                  className="font-sans font-medium text-[15px] text-black/75 hover:text-black transition-colors pt-1.5"
                >
                  info@saleshubnepal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-md bg-black/5 border border-black/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
                <span className="font-sans font-medium text-[15px] text-black/75 leading-relaxed pt-1">
                  2026 Saniiann Road,
                  <br />
                  Kathmandu, Nepal
                </span>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-ui font-normal text-[11px] tracking-[0.3em] text-black/50 uppercase mb-5">
              Follow
            </h3>
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-md border border-black/15 bg-black/5 flex items-center justify-center text-black/75 hover:bg-black hover:text-white hover:border-black transition-all duration-200 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="font-sans text-sm text-black/55 leading-relaxed mt-5 max-w-[16rem]">
              Follow our journey as we build Nepal&rsquo;s most trusted
              distribution network.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-sm text-black/55">
            © {new Date().getFullYear()} SalesHub Nepal. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-black/55 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Age disclaimer strip */}
        <div className="mt-6 pt-5 border-t border-black/10 flex items-center justify-center gap-3 text-center">
          <span className="w-6 h-6 rounded-full border border-black/30 text-black/70 text-[10px] font-bold flex items-center justify-center shrink-0">
            18+
          </span>
          <p className="font-sans text-xs md:text-sm text-black/55">
            You must be 18 years or older to access this website. Please drink
            responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};
