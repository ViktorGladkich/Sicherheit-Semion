
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
                    className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300"
                >
                    <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-foreground">
                        {val.icon}
                    </div>
                    <h5 className="text-xl font-bold mb-3">{val.title}</h5>
                    <p className="text-muted-foreground leading-relaxed">{val.text}</p>
                </motion.div>
            ))}
            </div>
        </div>
    );
};
