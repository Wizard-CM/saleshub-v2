"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Plays on every hard refresh. Client-side route changes don't remount the root layout,
    // so this effect only fires on full page loads.
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll while loader is visible
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  const sales = "Sales".split("");
  const hub = "Hub".split("");
  const nepal = "Nepal".split("");

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-white overflow-hidden"
          exit={{
            y: "-100%",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle dotted texture — matches hero aesthetic */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0,0,0,0.9) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center justify-center"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            {/* Eyebrow — appears first */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="font-ui text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/60">
                Licensed Distributor · Pan-Nepal
              </span>
            </motion.div>

            {/* Logo — letter materialization */}
            <h1 className="flex font-heading tracking-tighter text-3xl md:text-5xl lg:text-6xl text-black">
              {sales.map((char, index) => (
                <motion.span
                  key={`sales-${index}`}
                  initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-bold"
                >
                  {char}
                </motion.span>
              ))}
              {hub.map((char, index) => (
                <motion.span
                  key={`hub-${index}`}
                  initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + (sales.length + index) * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-bold"
                >
                  {char}
                </motion.span>
              ))}
              {nepal.map((char, index) => (
                <motion.span
                  key={`nepal-${index}`}
                  initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + (sales.length + hub.length + index) * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-semibold"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Glass + liquid pour — black ink aesthetic */}
            <div className="relative mt-10 md:mt-12 w-14 h-20 md:w-16 md:h-24 flex flex-col items-center justify-end">
              {/* Glass outline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 border border-black/30 rounded-b-lg border-t-0"
              />

              {/* Liquid fill */}
              <motion.div
                className="w-full relative rounded-b-lg overflow-hidden"
                style={{
                  background:
                    "linear-gradient(to top, #000 0%, rgba(0,0,0,0.85) 100%)",
                }}
                initial={{ height: "0%" }}
                animate={{ height: "78%" }}
                transition={{
                  delay: 1.2,
                  duration: 0.9,
                  ease: [0.65, 0, 0.35, 1],
                }}
              >
                {/* Ripple highlight on liquid surface */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-[2px] bg-white/40 rounded-full"
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: [1, 1.06, 0.96, 1.02, 1] }}
                  transition={{ delay: 2.0, duration: 0.6, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            {/* Line reveal */}
            <motion.div
              className="mt-6 h-px bg-black"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.5, ease: "easeOut" }}
            />

            {/* Loading caption */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.4 }}
              className="mt-4 font-ui text-[10px] tracking-[0.3em] uppercase text-black/50"
            >
              Pouring Experience
            </motion.span>
          </motion.div>

          {/* Exit wipe panel — covers content before the parent lifts off */}
          <motion.div
            className="absolute left-0 bottom-0 w-full bg-black z-0"
            initial={{ height: 0 }}
            animate={{ height: 0 }}
            exit={{
              height: "100%",
              transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
