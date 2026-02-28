import React from "react";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col justify-between p-6 md:p-8 h-full bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-foreground/50 transition-colors duration-300 overflow-hidden ${className}`}
    >
      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      {/* Technical Corners */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-300 dark:border-neutral-700 group-hover:border-foreground transition-colors duration-300"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-300 dark:border-neutral-700 group-hover:border-foreground transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-300 dark:border-neutral-700 group-hover:border-foreground transition-colors duration-300"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-300 dark:border-neutral-700 group-hover:border-foreground transition-colors duration-300"></div>

      {/* Header */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="p-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-foreground group-hover:scale-110 transition-transform duration-300 shadow-sm">
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
