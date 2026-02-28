"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface CinematicTextProps {
  words: string[];
  className?: string;
  alignment?: "left" | "center" | "right";
  as?: "h1" | "h2" | "h3" | "div";
}

export const CinematicText: React.FC<CinematicTextProps> = ({
  words,
  className,
  alignment = "center",
  as: Component = "h2",
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Only cycle if there is more than one word
    if (words.length > 1) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [words.length]);

  const justifyClass =
    alignment === "left"
      ? "justify-start"
      : alignment === "right"
        ? "justify-end"
        : "justify-center";

  const textAlignClass =
    alignment === "left"
      ? "text-left"
      : alignment === "right"
        ? "text-right"
        : "text-center";

  return (
    <div
      className={cn(
        "relative flex items-center min-h-[1.2em]",
        justifyClass,
        className,
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.9,
            filter: isMobile ? "none" : "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: isMobile ? "none" : "blur(10px)",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={cn("relative w-full", textAlignClass)}
        >
          <div className="relative inline-block">
            {/* Main Text - Read by Screen Readers */}
            <Component
              className="font-sans font-black tracking-tight text-transparent bg-clip-text text-gradient-cinematic select-none margin-0"
              style={{
                WebkitBackgroundClip: "text",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
              }}
            >
              {words[index]}
            </Component>

            {/* Shine Overlay - Hidden from Screen Readers - Disabled on Mobile */}
            {!isMobile && (
              <Component
                className="absolute inset-0 font-sans font-black tracking-tight text-transparent bg-clip-text select-none pointer-events-none text-shine-cinematic"
                aria-hidden="true"
                style={{
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  animation: "cinematic-shine 3s infinite linear",
                }}
              >
                {words[index]}
              </Component>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
