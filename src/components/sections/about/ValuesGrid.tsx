"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Fingerprint } from 'lucide-react';

const values = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Integrität",
        text: "Unser Wort gilt. Wir handeln stets transparent, ehrlich und im besten Interesse unserer Klienten. Vertrauen ist die Währung unserer Branche."
    },
    {
        icon: <Eye className="w-6 h-6" />,
        title: "Vigilanz",
        text: "Wachsamkeit ist unser Standardzustand. Wir erkennen Muster und Anomalien, bevor sie zu Problemen werden."
    },
    {
        icon: <Fingerprint className="w-6 h-6" />,
        title: "Diskretion",
        text: "Wir arbeiten im Hintergrund. Ihr Schutz ist sichtbar, unsere Präsenz nur wenn nötig. Verschwiegenheit ist absolute Pflicht."
    }
];

export const ValuesGrid: React.FC = () => {
    return (
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-16">
            <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-10 text-center">Unsere Grundwerte</h4>
            <div className="grid md:grid-cols-3 gap-10">
            {values.map((val, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="relative overflow-hidden group bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-black/8 dark:border-white/15 p-8 rounded-4xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04),inset_0_1px_3px_rgba(255,255,255,0.8)] dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1),0_15px_30px_-5px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.8)] dark:hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.15)] transition-all duration-500 hover:-translate-y-1"
                >
                    {/* Liquid Glass Highlight Sweep */}
                    <div className="absolute inset-0 bg-linear-to-tr from-white/40 via-transparent to-white/10 dark:from-white/10 dark:via-transparent dark:to-transparent opacity-50 pointer-events-none rounded-[inherit]"></div>
                    
                    <div className="relative z-10 w-12 h-12 bg-white/50 dark:bg-black/40 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-2xl flex items-center justify-center mb-6 text-foreground shadow-sm">
                        {val.icon}
                    </div>
                    <h5 className="relative z-10 text-xl font-bold mb-3">{val.title}</h5>
                    <p className="relative z-10 text-muted-foreground leading-relaxed">{val.text}</p>
                </motion.div>
            ))}
            </div>
        </div>
    );
};
