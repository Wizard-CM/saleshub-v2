import type { Metadata } from "next";
import { Geist, Fragment_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/common/Navbar";
import { Footer } from "@/src/components/common/Footer";
import { Preloader } from "@/src/components/common/Preloader";

// Body fallback for the (unlicensed) "Stack Sans Text" family
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  weight: "400",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SalesHubNepal - Premium Beverage Distributor",
  description: "Nepal's Trusted Regional Distributor For Premium Beverage Brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fragmentMono.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* First-visit preloader — plays once per session on hard refresh */}
        <Preloader />
        {/* Render Navbar on all pages */}
        <Navbar />
        {/* Main Content */}
        <main className="flex-1 w-full relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
