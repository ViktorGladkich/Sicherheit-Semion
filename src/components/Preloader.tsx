
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
    const [counter, setCounter] = useState(0);
    const [status, setStatus] = useState("INITIALIZING...");

    useEffect(() => {
        // --- High-Performance Counter Logic ---
        const interval = setInterval(() => {
            setCounter((prev) => {
                const next = prev + Math.floor(Math.random() * 5) + 1;
                if (next >= 100) {
                    clearInterval(interval);
                    setStatus("ACCESS GRANTED");
                    return 100;
                }
                
                // Dynamic Status Updates
                if (next > 30 && next < 50) setStatus("LOADING ASSETS...");
                if (next > 60 && next < 80) setStatus("ESTABLISHING SECURE CONNECTION...");
                if (next > 85) setStatus("DECRYPTING INTERFACE...");

                return next;
            });
        }, 50); // Updates every 50ms (20fps logic, 60fps render)

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div 
            className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden font-mono"
            exit={{ 
                opacity: 0, 
                // We use a clip-path reveal effect for better performance than height animation
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                transition: { duration: 0.8, ease: "easeInOut" } 
            }}
        >
            {/* Background Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-md px-8 text-center">
                
                {/* Logo / Shield SVG Animation */}
                <div className="mb-10 relative flex justify-center">
                    <svg className="w-24 h-24 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="opacity-20" fill="currentColor" />
                        <motion.path 
                            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            strokeWidth="1.5"
                        />
                        <motion.path 
                            d="M9 12l2 2 4-4" 
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            strokeWidth="2"
                        />
                    </svg>
                    
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 border-2 border-foreground/10 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Big Number */}
                <div className="text-7xl md:text-8xl font-black text-foreground mb-4 tracking-tighter">
                    {counter}<span className="text-2xl opacity-50">%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden mb-4 relative">
                    <motion.div 
                        className="h-full bg-foreground relative"
                        initial={{ width: "0%" }}
                        animate={{ width: `${counter}%` }}
                        transition={{ ease: "linear", duration: 0.1 }} // Smooths out the steps
                    >
                        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent opacity-50"></div>
                    </motion.div>
                </div>

                {/* Status Text */}
                <div className="flex justify-between items-center text-xs md:text-sm text-muted-foreground uppercase tracking-widest h-6">
                    <span>{status}</span>
                    <span className="animate-pulse">_</span>
                </div>
            </div>

            {/* Bottom Version Code */}
            <div className="absolute bottom-8 text-[10px] text-neutral-600 tracking-[0.2em] font-bold">
                A.S.S SECURITY // SYSTEM V2.0
            </div>
        </motion.div>
    );
};

export default Preloader;
