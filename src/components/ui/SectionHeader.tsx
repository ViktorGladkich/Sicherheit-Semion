"use client";
import React from "react";
import { motion } from "framer-motion";
import { CinematicText } from "./cinematic-text";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  alignment = "center",
  className = "",
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isLeft = alignment === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
      transition={{ duration: 0.8 }}
      className={`mb-16 ${isLeft ? "text-left" : "text-center"} ${className}`}
    >
      {subtitle && (
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mb-4 italic">
          {subtitle}
        </h4>
      )}
      <div
        className={`flex ${isLeft ? "justify-start" : "justify-center"} mb-4`}
      >
        <CinematicText
          words={[title]}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          alignment={alignment}
        />
      </div>
      {description && (
        <p
          className={`text-lg text-muted-foreground max-w-2xl ${isLeft ? "" : "mx-auto"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
