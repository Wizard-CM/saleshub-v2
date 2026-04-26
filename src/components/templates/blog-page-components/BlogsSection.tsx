import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type BlogPost = {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

const POSTS: BlogPost[] = [
  {
    id: "kathmandu-warehouse",
    category: "Operations",
    date: "April 12, 2026",
    readTime: "6 min read",
    title: "Inside The Kathmandu Warehouse: A Day In Distribution",
    excerpt:
      "Twelve thousand square feet of climate-controlled calm. We take you inside our central distribution hub to show how every case gets from the port to the shelf — and why the details matter.",
    image: "/home-page/business_meeting_1776357976844.png",
    imageAlt: "The Sales Hub Nepal team at work in the Kathmandu warehouse",
  },
  {
    id: "pilsner-field-guide",
    category: "Brewing",
    date: "April 2, 2026",
    readTime: "5 min read",
    title: "What Makes A True Pilsner: A Beer Lover's Field Guide",
    excerpt:
      "Light gold, bitter hops, biscuit malt — the pilsner reads simple in the glass but is built on a century of precision. A short primer on what to look for and why it still matters.",
    image: "/home-page/carlsberg_glass_1776357962605.png",
    imageAlt: "A perfectly poured pilsner in a chilled glass",
  },
  {
    id: "gurkha-legacy",
    category: "Brand Story",
    date: "March 24, 2026",
    readTime: "7 min read",
    title: "The Gurkha Legacy: Stories Behind The Bottle",
    excerpt:
      "Gurkhas & Guns was conceived as a commemorative pour for the regiments that shaped modern Nepal. The bottle carries more than a spirit — it carries a story worth telling slowly.",
    image: "/brandshowcase-products/GNG_birefnet.png",
    imageAlt: "Gurkhas & Guns whiskey bottle",
  },
  {
    id: "himalayan-botanicals",
    category: "Ingredients",
    date: "March 14, 2026",
    readTime: "4 min read",
    title: "A Primer On Himalayan Botanicals",
    excerpt:
      "From rhododendron petals to timur pepper, the highland botanicals entering the spirit world are turning heads. A short walk through the ingredients redefining Nepalese gin and whiskey.",
    image: "/ingredients-images/Whisk_c56def89dd6632281a14fc46226285c0dr_birefnet.png",
    imageAlt: "A hop cone on a light background",
  },
  {
    id: "pairing-guide",
    category: "Pairings",
    date: "March 3, 2026",
    readTime: "5 min read",
    title: "Carlsberg Meets Momos: Pairing Pilsner With Nepali Food",
    excerpt:
      "A dry pilsner cuts through fat, carbonation resets the palate, and the light bitterness balances chili heat. A practical pairing guide for the table you actually eat at.",
    image: "/home-page/tuborg_cases_1776357947793.png",
    imageAlt: "Cases of imported beer stacked at the distributor",
  },
  {
    id: "distribution-challenges",
    category: "Industry",
    date: "February 20, 2026",
    readTime: "8 min read",
    title: "Distribution In Nepal: The Challenges & The Wins",
    excerpt:
      "Mountain roads, seasonal closures, customs cycles, and licensing timelines. A candid look at what it actually takes to keep premium brands on Nepal's shelves — year-round.",
    image: "/home-page/media__1776357654154.png",
    imageAlt: "A press moment from a Sales Hub Nepal partnership event",
  },
  {
    id: "slow-aged-whiskey",
    category: "Craft",
    date: "February 9, 2026",
    readTime: "6 min read",
    title: "The Craft Of Slow-Aged Whiskey",
    excerpt:
      "Time is the single ingredient a distiller cannot shortcut. What happens inside the cask over six, eight, twelve years — and why the patient bottle pours deeper than the fast one.",
    image: "/ingredients-images/Whisk_7598a7d8644411abfe1481fc19447d80dr_birefnet.png",
    imageAlt: "Stalks of malted barley on a light background",
  },
];

export const BlogsSection = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      {/* Subtle dotted texture — consistent with home/products pages */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.9) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-(--max-content-width) mx-auto px-(--spacing-page-x)">
        {/* Staggered grid — middle column is vertically offset lower than its neighbors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-x-10 md:gap-y-16 lg:gap-x-12 lg:gap-y-20 items-start">
          {POSTS.map((post, i) => (
            <div key={post.id} className={i % 3 === 1 ? "lg:mt-24" : ""}>
              <BlogCard post={post} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <Link
    href={`/blog/${post.id}`}
    className="group relative flex flex-col transition-transform duration-500 ease-out hover:-translate-y-1.5"
  >
    {/* Ghost index number — editorial depth behind the card */}
    <span
      aria-hidden
      className="absolute -top-4 -left-2 font-hero font-extrabold uppercase tracking-tighter text-black/4 text-[5.5rem] leading-none select-none pointer-events-none"
    >
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="relative z-10 flex flex-col">
      <div className="relative aspect-4/3 overflow-hidden rounded-lg ring-1 ring-black/8 mb-5 shadow-[0_10px_28px_rgba(0,0,0,0.08)] group-hover:shadow-[0_24px_50px_rgba(0,0,0,0.14)] transition-shadow duration-500 bg-[#f6f6f6]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover transition-transform duration-900 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
        />

        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full font-ui text-[10px] tracking-[0.25em] uppercase text-black shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <span className="w-1.5 h-1.5 rounded-full bg-(--accent-green)" />
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3 font-ui text-[10px] tracking-[0.3em] uppercase text-black/50">
        <span>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-black/30" />
        <span>{post.readTime}</span>
      </div>

      <h3 className="font-heading font-bold uppercase tracking-tight leading-[1.1] text-black text-xl md:text-[22px] mb-3 transition-colors group-hover:text-black/75">
        {post.title}
      </h3>

      <div className="w-10 h-[2px] rounded-full bg-black/80 mb-4 transition-all duration-500 group-hover:w-20 group-hover:bg-(--accent-green)" />

      <p className="font-sans text-sm md:text-base text-black/65 leading-relaxed line-clamp-3 mb-5">
        {post.excerpt}
      </p>

      <div className="inline-flex items-center gap-2 font-ui text-[10px] tracking-[0.3em] uppercase text-black font-semibold mt-auto">
        Read Article
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);
