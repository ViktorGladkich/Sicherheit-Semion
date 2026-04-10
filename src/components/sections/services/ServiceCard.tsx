import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ willChange: "transform, opacity" }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-4xl border border-black/8 dark:border-white/15 bg-white/80 dark:bg-white/5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04),inset_0_1px_3px_rgba(255,255,255,0.8)] dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.1)] backdrop-blur-2xl p-8 group h-full transition-all duration-500 hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1),0_15px_30px_-5px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.8)] dark:hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.15)]"
    >
      <div className="absolute inset-0 bg-linear-to-tr from-white/40 via-transparent to-white/10 dark:from-white/10 dark:via-transparent dark:to-transparent opacity-50 pointer-events-none rounded-[inherit]"></div>

      {!isMobile && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.2), transparent 40%)`,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full items-center text-center">
        <div className="mb-6 w-24 h-24 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_3px_rgba(255,255,255,0.1)] border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
          <div className="w-12 h-12 text-foreground/70 group-hover:text-foreground transition-colors duration-300">
            {service.icon}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
          {service.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed grow">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};
