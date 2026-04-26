"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Category = { id: string; name: string };

type Product = {
  id: string;
  categoryId: string;
  name: string;
  origin: string;
  tagline: string;
  description: string;
  image: string;
};

const CATEGORIES: Category[] = [
  { id: "whiskey", name: "Whiskey" },
  { id: "vodka", name: "Vodka" },
  { id: "gin", name: "Gin" },
  { id: "rum", name: "Rum" },
  { id: "rtd", name: "Ready To Drink" },
];

// Images are reused intentionally — the brandshowcase-products folder only holds
// 5 assets. Swap images 1-to-1 once real product shots are available.
const GNG = "/brandshowcase-products/GNG_birefnet.png";
const ICE = "/brandshowcase-products/Nepal Ice_birefnet.png";
const CARL = "/brandshowcase-products/carlsberg_birefnet.png";
const RB = "/brandshowcase-products/red bull_birefnet.png";
const SOM = "/brandshowcase-products/summerby_birefnet.png";

const PRODUCTS: Product[] = [
  // Whiskey (5 — per spec)
  {
    id: "bandipur",
    categoryId: "whiskey",
    name: "Bandipur",
    origin: "Bandipur Highlands, Nepal",
    tagline: "Matured where the clouds roll in.",
    description:
      "A slow-matured highland whiskey distilled in the mist-wrapped foothills that give it its name. The grain bill leans heavily on locally grown malted barley, mellowed for years in American oak casks resting in cool mountain cellars. The pour is a warm, unhurried copper, carrying honey and toasted almond on the nose with a gentle whisper of peat from the kiln. On the palate it opens into vanilla, apricot, and dark clover honey, finishing long and dry with a final breath of highland smoke. Best served neat over a single large cube — it rewards the drinker who takes their time.",
    image: GNG,
  },
  {
    id: "gurkhas-guns",
    categoryId: "whiskey",
    name: "Gurkhas & Guns",
    origin: "Kathmandu Valley",
    tagline: "Honor, bottled.",
    description:
      "Crafted in tribute to the legendary Gurkha regiments, this is a whiskey built for quiet commemoration. Triple-distilled from a high-malt mash bill and aged in first-fill bourbon casks, it pours a deep amber with copper highlights that catch the light. The aroma carries dried fig, dark cherry and a trace of leather; the palate is rich and rounded — vanilla custard, toffee, baked apple — before settling into a long, warming finish laced with old oak and a faint clove spice. A pour for important evenings: a toast raised, a story told, a name remembered.",
    image: GNG,
  },
  {
    id: "red-and-black",
    categoryId: "whiskey",
    name: "Red & Black",
    origin: "Terai Grain Belt",
    tagline: "Two cask finish.",
    description:
      "A contrast study poured from a single bottle. The spirit spends its first five years in charred American oak, picking up caramel, coconut and structure, before being finished for a final eighteen months in red wine barrels sourced from South Australia. The result is a striking two-layered dram — plum, cocoa and soft tannin on the nose, a palate of black cherry and dark chocolate, and a long, peppery finish that keeps turning warm. Elegant on its own; exceptional in a stirred cocktail where its depth gets the final word.",
    image: GNG,
  },
  {
    id: "challenger",
    categoryId: "whiskey",
    name: "Challenger",
    origin: "Single Malt · Pokhara",
    tagline: "Single malt, no compromise.",
    description:
      "A six-year single malt built around a lightly peated barley core, distilled in small copper stills on the shores of Phewa Lake. The nose is immediate and bright — sea-salt caramel, citrus zest, a breath of bonfire smoke. The palate is rewardingly full: honeyed barley, green apple, a thread of vanilla, finishing long and clean with a dry minerality that keeps inviting the next sip. A whiskey for drinkers who have moved past approachability and want a spirit with a point of view. Serves best neat, at just below room temperature, in a narrow tulip glass.",
    image: GNG,
  },
  {
    id: "virgin",
    categoryId: "whiskey",
    name: "Virgin",
    origin: "First-Fill Oak Reserve",
    tagline: "Untouched. Unhurried.",
    description:
      "Drawn exclusively from first-fill virgin American oak barrels, this is a clean, linear whiskey with nothing to hide behind. The light gold pour is bright in the glass, carrying cut-grass, green pear and a soft vanilla note from the fresh oak. The palate delivers orchard fruit — white peach, ripe apple — wrapped in a subtle spice lift of baking cinnamon and clove before a gentle, measured finish. It is the quiet introduction to single malt for a new palate, and an excellent daily pour for the seasoned drinker seeking something less assertive. Pair with a warm afternoon and very little else.",
    image: GNG,
  },

  // Vodka
  {
    id: "nepal-ice-vodka",
    categoryId: "vodka",
    name: "Nepal Ice",
    origin: "Himalayan Spring Water",
    tagline: "Crystalline. Vertical. Cold.",
    description:
      "Distilled five times from a triple-grain base and cut to proof with glacial spring water drawn from the northern ranges, Nepal Ice is engineered for clarity. The pour is completely transparent, almost weightless in the glass. On the palate it is whisper-clean with a subtle rye-sweet center, a rounded mouthfeel and a mineral finish that carries no burn. It is the ideal base for a true dry martini — stirred with a mist of vermouth and served in a deeply chilled coupe. Equally at home straight from the freezer, served neat in a shot glass, consumed with purpose.",
    image: ICE,
  },
  {
    id: "arctic-peak",
    categoryId: "vodka",
    name: "Arctic Peak",
    origin: "Ice-Filtered · Scandinavia",
    tagline: "Ice does the work.",
    description:
      "A triple ice-filtered wheat vodka produced in the Scandinavian tradition, where the spirit is chilled to below freezing and slowly passed through beds of clean mountain ice. What remains is remarkably smooth — silky on the tongue, almost entirely free of the sharpness usually associated with vodka, with a soft wheat-bread sweetness and a clean, mineral-led finish. Serves best straight from the freezer in a chilled stemmed glass, or paired with a splash of fresh elderflower tonic and a twist of grapefruit. Premium by restraint, not by flourish.",
    image: ICE,
  },

  // Gin
  {
    id: "juniper-valley",
    categoryId: "gin",
    name: "Juniper Valley",
    origin: "London Dry · Classic",
    tagline: "Juniper-forward. Unapologetic.",
    description:
      "A classic London Dry in the purest sense — built on a backbone of wild Macedonian juniper, layered with coriander seed, angelica root, orris, and a twist of pink grapefruit peel for lift. The nose is bracing and pine-fresh; the palate is dry, clean, and clearly structured, with the juniper holding center stage and the citrus oils floating at the edges. The finish is crisp and slightly bitter, making it a textbook partner for premium Indian tonic and a single wedge of ruby grapefruit. A gin that knows exactly what it is and refuses to apologize for it.",
    image: SOM,
  },
  {
    id: "alpine-botanical",
    categoryId: "gin",
    name: "Alpine Botanical",
    origin: "Highland Herbs · Small Batch",
    tagline: "A walk through the foothills.",
    description:
      "A small-batch gin infused with a botanical bill sourced entirely from the Nepalese highlands — rhododendron petal, wild thyme, Himalayan rock salt, and a careful touch of timur pepper for warmth. The nose is immediately green and floral, unlike any gin you have tried before; the palate is soft, aromatic and surprising, with a gentle warmth creeping in around the finish. It pairs beautifully with clear mediterranean tonic, a slice of cucumber and a single sprig of rosemary. A genuine regional product, built for slow drinkers and longer conversations.",
    image: SOM,
  },

  // Rum
  {
    id: "island-gold",
    categoryId: "rum",
    name: "Island Gold",
    origin: "Aged 8 Years · Caribbean Cask",
    tagline: "Caramel in slow motion.",
    description:
      "Eight years resting in former bourbon barrels on the Caribbean coast produces a rum of remarkable depth. The pour is deep gold, viscous at the rim, with aromas of brown butter, banana bread and soft tobacco leaf. The palate layers dark toffee and baked spice into a velvet mouthfeel, finishing long with notes of pipe wood and molasses. It is, quite simply, an old fashioned in a single pour — but it rewards the stirred cocktail builder equally, lending backbone to any drink asking for warmth without heat. Serve in a short glass over one large cube.",
    image: CARL,
  },
  {
    id: "sherpa-spice",
    categoryId: "rum",
    name: "Sherpa Spice",
    origin: "Spiced · House Blend",
    tagline: "Warmth at altitude.",
    description:
      "A spiced dark rum blended in-house around a molasses-heavy base, then infused with cinnamon bark, whole clove, wild honey, and a careful hit of fresh ginger. The aroma is immediately evocative — warm spice, brown sugar, dark cocoa — and the palate delivers on every promise, pouring dense, aromatic and round. It is equally at home served over ice with a wedge of orange, folded into a cold-weather hot toddy, or stretched long with ginger beer and a squeeze of lime. A product built for altitude, cold evenings and slow hours.",
    image: CARL,
  },

  // Ready To Drink
  {
    id: "carlsberg",
    categoryId: "rtd",
    name: "Carlsberg",
    origin: "Copenhagen, Denmark",
    tagline: "Probably the best beer in the world.",
    description:
      "The iconic Danish pilsner, brewed in the Carlsberg tradition since 1847 — bright, balanced, and built to be the easy choice at any table. The pour is a clean, pale gold with a crisp white head that holds well. On the nose, noble hops and a soft biscuit malt; on the palate, a clean bread-crust sweetness gives way to a dry, gently bitter finish that invites the next sip. Serves cold, in a tall glass, with just about anything — from grilled fish to burgers to a Friday evening on the balcony. The beer that taught the world what a pilsner should taste like.",
    image: CARL,
  },
  {
    id: "red-bull",
    categoryId: "rtd",
    name: "Red Bull",
    origin: "Fuschl am See, Austria",
    tagline: "Vitalizes body and mind.",
    description:
      "The original functional energy drink, produced in the Austrian Alps and shipped to over 170 countries. The can delivers a precise formula of caffeine, taurine, B-group vitamins and lightly carbonated water with a distinctive, citrus-leaning flavor profile — crisp, clean and consistent from the first sip to the last. It has become the quiet companion to long drives, longer nights, studio sessions, deadline sprints and mountain descents the world over. Serves cold, directly from the can. Available in the classic formula as well as the sugarfree and tropical editions.",
    image: RB,
  },
  {
    id: "somersby",
    categoryId: "rtd",
    name: "Somersby",
    origin: "Apple Cider · Denmark",
    tagline: "Sunshine in a bottle.",
    description:
      "A crisp, lightly sparkling apple cider brewed by Carlsberg Group — fresh orchard fruit up front, a gentle carbonation through the middle, and a clean, dry finish with just the right trace of green apple tartness. Unlike heavier ciders, it is intentionally built for approachability: lower in alcohol, uncomplicated on the palate, and designed to pair with a warm afternoon rather than a long debate. Serves best well chilled over ice in a tall glass, with a slice of fresh apple or a twist of lime. Equally at home at a garden lunch or a summer evening on the rooftop.",
    image: SOM,
  },
];

export const ProductsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const active = PRODUCTS[activeIndex];
  const activeCategoryId = active.categoryId;

  // Group products per category once — cheap, stable reference for the nav.
  const productsByCategory = useMemo(() => {
    const map = new Map<string, Product[]>();
    for (const cat of CATEGORIES) map.set(cat.id, []);
    for (const p of PRODUCTS) map.get(p.categoryId)?.push(p);
    return map;
  }, []);

  // Active-item detection: pick the product whose box contains the viewport
  // center-line. Unambiguous even where two adjacent sections touch.
  useEffect(() => {
    const onScroll = () => {
      const centerY = window.innerHeight / 2;
      let idx = 0;
      for (let i = 0; i < itemRefs.current.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= centerY && rect.bottom >= centerY) {
          idx = i;
          break;
        }
        // Before any description reaches center (above viewport) → last-seen wins
        if (rect.top < centerY) idx = i;
      }
      setActiveIndex(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProduct = (id: string) => {
    document
      .getElementById(`product-${id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="relative w-full bg-white">
      {/* Subtle dotted texture — matches home/hero rhythm */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.9) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-(--max-content-width) mx-auto px-(--spacing-page-x) py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[15%_85%] gap-8 lg:gap-12">
          {/* LEFT — sticky category nav */}
          <aside className="lg:sticky lg:top-24 lg:self-start lg:h-[calc(100vh-6rem)] py-4 lg:py-8 lg:overflow-y-auto">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-black/55">
                Index
              </span>
            </div>
            <h2 className="font-heading font-bold uppercase tracking-tight text-black text-xl lg:text-2xl mb-6 lg:mb-8">
              Our Products
            </h2>

            <nav aria-label="Product categories">
              {CATEGORIES.map((cat) => {
                const list = productsByCategory.get(cat.id) ?? [];
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      const first = list[0];
                      if (first) scrollToProduct(first.id);
                    }}
                    className={`w-full flex items-center justify-between py-4 border-b border-black/10 text-left transition-colors ${
                      isActive
                        ? "text-black"
                        : "text-black/50 hover:text-black/80"
                    }`}
                  >
                    <span
                      className={`font-ui text-[11px] tracking-[0.25em] uppercase ${
                        isActive ? "font-bold" : ""
                      }`}
                    >
                      {cat.name}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="w-1.5 h-1.5 rounded-full bg-(--accent-green)"
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* progress readout */}
            <div className="mt-8 pt-6 border-t border-black/10 font-ui text-[10px] tracking-[0.3em] uppercase text-black/50">
              <span className="text-black">
                № {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="mx-2">/</span>
              <span>{String(PRODUCTS.length).padStart(2, "0")}</span>
            </div>
          </aside>

          {/* RIGHT — sticky image stage + scrolling descriptions. Image side takes the extra 5% freed from the narrower menu. */}
          <div className="grid grid-cols-1 lg:grid-cols-[53%_47%] gap-8 lg:gap-12">
            {/* Sticky product image — desktop only */}
            <div className="hidden lg:flex lg:sticky lg:top-24 lg:self-start lg:h-[calc(100vh-6rem)] items-center justify-center">
              <div className="relative w-full h-4/5 max-h-[680px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 0.92, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -24 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Ghost wordmark behind the product — sized to fit the image container so it never bleeds into adjacent sections */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-hero font-extrabold uppercase tracking-tighter text-black/5 text-[4rem] lg:text-[5rem] leading-none select-none pointer-events-none truncate"
                    >
                      {active.name}
                    </span>
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      className="object-contain drop-shadow-[0_36px_48px_rgba(0,0,0,0.22)]"
                      sizes="(max-width: 1024px) 80vw, 45vw"
                      priority={activeIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Scrolling descriptions */}
            <div>
              {PRODUCTS.map((p, i) => {
                const categoryName =
                  CATEGORIES.find((c) => c.id === p.categoryId)?.name ?? "";
                return (
                  <article
                    key={p.id}
                    id={`product-${p.id}`}
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    className="min-h-[78vh] lg:min-h-[82vh] flex flex-col justify-center py-8 lg:py-12"
                  >
                    {/* Mobile inline image */}
                    <div className="relative w-full aspect-4/5 max-w-md mx-auto mb-6 lg:hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain drop-shadow-[0_24px_32px_rgba(0,0,0,0.18)]"
                        sizes="90vw"
                      />
                    </div>

                    <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-black/50 mb-3">
                      {categoryName}
                    </span>

                    <h3 className="font-heading font-bold uppercase tracking-tight text-black text-3xl md:text-4xl lg:text-5xl leading-[1.02] mb-4">
                      {p.name}
                    </h3>

                    <p className="font-hero font-extrabold uppercase tracking-tight text-(--accent-green) text-lg md:text-xl mb-5">
                      {p.tagline}
                    </p>

                    <p className="font-sans text-base md:text-lg text-black/70 leading-relaxed max-w-md mb-6">
                      {p.description}
                    </p>

                    <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-black/50">
                      <span className="text-black/30">Origin —</span>{" "}
                      {p.origin}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
