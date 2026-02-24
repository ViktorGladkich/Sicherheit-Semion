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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/60 backdrop-blur-sm p-8 group h-full"
    >
      {!isMobile && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120,120,120,0.1), transparent 40%)`,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full items-center text-center">
        <div className="mb-6 w-24 h-24 rounded-full bg-linear-to-b from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center shadow-lg border border-neutral-200 dark:border-neutral-700 group-hover:scale-110 transition-transform duration-500">
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
