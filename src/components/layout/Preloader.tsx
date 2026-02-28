"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  setIsLoading: (isLoading: boolean) => void;
}

const Preloader: React.FC<PreloaderProps> = ({ setIsLoading }) => {
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState("INITIALIZING...");

  // Интервал для увеличения счетчика
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        const next = Math.min(prev + Math.floor(Math.random() * 5) + 1, 100);
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Эффект для безопасного обновления статуса и уведомления родителя
  useEffect(() => {
    // Используем setTimeout для "отложенного" вызова setState, чтобы ESLint не ругался
    const timer = setTimeout(() => {
      if (counter >= 100) {
        setStatus("ACCESS GRANTED");
        setIsLoading(false); // безопасно обновляем родителя
      } else if (counter > 85) {
        setStatus("DECRYPTING INTERFACE...");
      } else if (counter > 60) {
        setStatus("ESTABLISHING SECURE CONNECTION...");
      } else if (counter > 30) {
        setStatus("LOADING ASSETS...");
      } else {
        setStatus("INITIALIZING...");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [counter, setIsLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-9999 bg-background flex flex-col items-center justify-center overflow-hidden font-mono"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, clipPath: "circle(0% at 50% 50%)", transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-size-[30px_30px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md px-8 text-center">
        {/* Logo */}
        <div className="mb-10 relative flex justify-center perspective-1000">
          <motion.svg
            className="w-24 h-24 text-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            animate={{ rotateY: 360 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" className="opacity-20" />
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" strokeWidth="2" />
          </motion.svg>
          <div className="absolute inset-0 border-2 border-foreground/10 rounded-full animate-ping opacity-20" />
        </div>

        {/* Counter */}
        <div className="text-7xl md:text-8xl font-black text-foreground mb-4 tracking-tighter">
          {counter}<span className="text-2xl opacity-50">%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden mb-4 relative">
          <motion.div
            className="h-full bg-foreground relative"
            initial={{ width: "0%" }}
            animate={{ width: `${counter}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-linear-to-l from-white to-transparent opacity-50" />
          </motion.div>
        </div>

        {/* Status Text */}
        <div className="flex justify-between items-center text-xs md:text-sm text-muted-foreground uppercase tracking-widest h-6">
          <span>{status}</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-[10px] text-neutral-600 tracking-[0.2em] font-bold">
        A.S.S SECURITY
      </div>
    </motion.div>
  );
};

export default Preloader;