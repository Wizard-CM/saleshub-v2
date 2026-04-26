"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run loader on the very first visit in a session
    const hasLoaded = sessionStorage.getItem("app-loaded");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    // Total animation takes ~3s.
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("app-loaded", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[var(--bg-primary)] overflow-hidden"
          // Frame 4 Wipe Reveal
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Main Preloader Content Container - fades out before wipe */}
          <motion.div
            className="flex flex-col items-center justify-center relative z-10"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            {/* Frame 1: Logo Materialization */}
            <h1 className="flex text-4xl md:text-5xl lg:text-6xl mb-12 font-sora tracking-wide">
              {"Sales".split("").map((char, index) => (
                <motion.span
                  key={`sales-${index}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="text-[var(--text-primary)] font-normal"
                >
                  {char}
                </motion.span>
              ))}
              {"Hub".split("").map((char, index) => (
                <motion.span
                  key={`hub-${index}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)", color: "var(--text-primary)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", color: "var(--accent-primary)" }}
                  transition={{ duration: 0.5, delay: 5 * 0.04 + index * 0.04 }}
                  className="font-extrabold"
                  style={{ textShadow: "0 0 10px var(--accent-glow)" }}
                >
                  {char}
                </motion.span>
              ))}
              {"Nepal".split("").map((char, index) => (
                <motion.span
                  key={`nepal-${index}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 8 * 0.04 + index * 0.04 }}
                  className="text-[var(--text-primary)] font-normal ml-1"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Frame 2: Liquid Pour Effect */}
            <div className="relative w-24 h-32 flex flex-col items-center justify-end">
              {/* Glass Outline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute inset-0 border-2 border-[var(--glass-border)] rounded-b-xl border-t-0"
              />
              
              {/* Liquid Fill */}
              <motion.div
                className="w-full relative rounded-b-xl overflow-hidden"
                style={{
                  background: "linear-gradient(to top, var(--accent-primary), var(--accent-bright))"
                }}
                initial={{ height: "0%" }}
                animate={{ height: "80%" }}
                transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
              >
                {/* Frame 3: Ripple & Hold (Surface of liquid) */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-[4px] bg-white opacity-40 rounded-full"
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: [1, 1.05, 0.97, 1] }}
                  transition={{ delay: 1.8, duration: 0.4 }}
                />
              </motion.div>
            </div>

            {/* Frame 3: Ripple & Hold Line Reveal */}
            <motion.div
              className="mt-6 h-[2px] bg-[var(--accent-primary)]"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 1.8, duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>

          {/* Frame 4 Wipe Element built into the parent's exit transition */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0 bg-[var(--accent-primary)] z-0"
            animate={{ height: ["0%", "100%", "0%"], top: ["auto", "auto", "0"] }}
            transition={{ delay: 2.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
