import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export interface BenefitItem {
  id: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  description: string;
  stat: string;
}

interface CardProps {
  item: BenefitItem;
  index: number;
  className?: string;
}

export const BenefitCard: React.FC<CardProps> = ({
  item,
  index,
  className = "",
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ 
        duration: 0.8, 
        delay: 0,
        ease: [0.16, 1, 0.3, 1] 
      }}
      style={{ 
        willChange: "transform, opacity", 
        opacity: 0,
        transform: "translateY(40px)"
      }}
      className={`group relative flex flex-col justify-between p-6 md:p-8 h-full bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-black/8 dark:border-white/15 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04),inset_0_1px_3px_rgba(255,255,255,0.8)] dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.1)] rounded-4xl hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1),0_15px_30px_-5px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.8)] dark:hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.15)] transition-all duration-500 overflow-hidden ${className}`}
    >
      {/* Liquid Glass Highlight Sweep */}
      <div className="absolute inset-0 bg-linear-to-tr from-white/40 via-transparent to-white/10 dark:from-white/10 dark:via-transparent dark:to-transparent opacity-50 pointer-events-none rounded-[inherit]"></div>

      {/* Header */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="p-3 bg-white/50 dark:bg-black/40 backdrop-blur-xl border border-white/80 dark:border-white/20 rounded-2xl shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6)] text-foreground group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          {item.icon}
        </div>
        <span className="font-mono text-4xl font-bold text-neutral-200 dark:text-neutral-800 group-hover:text-neutral-300 dark:group-hover:text-neutral-700 transition-colors select-none">
          {item.id}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {item.tagline}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-300">
          {item.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 border-l-2 border-neutral-200 dark:border-neutral-800 pl-3 group-hover:border-foreground/50 transition-colors">
          {item.description}
        </p>
      </div>

      {/* Footer / Stat */}
      <div className="relative z-10 mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
        <span className="text-[10px] uppercase tracking-wider text-neutral-400">
          System Status
        </span>
        <span className="font-mono text-sm font-bold text-foreground bg-neutral-200 dark:bg-neutral-800 px-2 py-0.5 rounded">
          {item.stat}
        </span>
      </div>
    </motion.div>
  );
};
