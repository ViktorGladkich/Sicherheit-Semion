"use client";
import React from "react";
import { motion } from "framer-motion";

interface StepData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ApproachStepProps {
  step: StepData;
  index: number;
}

export const ApproachStep: React.FC<ApproachStepProps> = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`
                relative flex flex-col md:flex-row items-center
                ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                group
            `}
    >
      {/* CONTENT SIDE (Width 50%) */}
      <div
        className={`w-full md:w-1/2 pl-24 md:pl-0 flex flex-col justify-center ${isEven ? "md:pr-16" : "md:pl-16"}`}
      >
        <div
          className={`
                    relative p-6 md:p-8 
                    bg-white/70 dark:bg-neutral-900/40 backdrop-blur-md 
                    rounded-xl border border-neutral-200 dark:border-neutral-800 
                    shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)] 
                    hover:border-foreground/40 hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.2)]
                    transition-all duration-300 group-hover:scale-[1.02]
                    text-left
                `}
        >
          {/* Tech Corners */}
          <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-foreground/20 rounded-tl-lg group-hover:border-foreground transition-colors"></div>
          <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-foreground/20 rounded-tr-lg group-hover:border-foreground transition-colors"></div>
          <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-foreground/20 rounded-bl-lg group-hover:border-foreground transition-colors"></div>
          <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-foreground/20 rounded-br-lg group-hover:border-foreground transition-colors"></div>

          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-mono text-3xl font-bold text-foreground/10 group-hover:text-foreground/30 transition-colors">
              0{index + 1}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {step.title}
            </h3>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      {/* CENTER NODE */}
      <div
        className={`
                absolute left-6 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2
                flex items-center justify-center
            `}
      >
        {/* Outer Rotating Ring */}
        <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-dashed border-neutral-400 dark:border-neutral-600 animate-spin-slow opacity-50 group-hover:opacity-100 transition-opacity"></div>

        {/* Inner Counter-Rotating Ring */}
        <div className="absolute w-10 h-10 md:w-16 md:h-16 rounded-full border border-dotted border-neutral-400 dark:border-neutral-600 animate-reverse-spin-slow opacity-50 group-hover:opacity-100 transition-opacity"></div>

        {/* Core */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full bg-background border border-foreground/20 shadow-[0_0_20px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 group-hover:border-foreground group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300"
        >
          <div className="w-4 h-4 md:w-6 md:h-6 text-foreground/70 group-hover:text-foreground transition-colors duration-300">
            {step.icon}
          </div>
        </motion.div>

        {/* Horizontal Connection Beam (Desktop) */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          style={{ originX: isEven ? 1 : 0 }}
          className={`
                        hidden md:block absolute top-1/2 h-px bg-linear-to-r from-foreground/80 to-transparent w-12
                        ${isEven ? "right-full rotate-180" : "left-full"}
                        group-hover:opacity-100 group-hover:w-16 transition-all duration-500
                    `}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-foreground rounded-full shadow-[0_0_5px_currentColor]"></div>
        </motion.div>
      </div>

      {/* EMPTY SPACE SIDE (Width 50%) */}
      <div className="w-full md:w-1/2 hidden md:block"></div>
    </motion.div>
  );
};
