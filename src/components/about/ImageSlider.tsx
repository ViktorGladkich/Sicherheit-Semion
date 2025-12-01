
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';

const slides = [
    { image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop', caption: 'Strategische Planung' },
    { image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1770&auto=format&fit=crop', caption: 'Echtzeit Überwachung' },
    { image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1769&auto=format&fit=crop', caption: 'Leitstelle' },
];

export const ImageSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalId);
    }, [nextSlide]);

    return (
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 group"
        >
            {slides.map((slide, index) => (
                <div 
                    key={index} 
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img 
                        src={slide.image} 
                        alt={slide.caption} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
            ))}
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-mono text-sm tracking-widest uppercase">{slides[currentIndex].caption}</p>
            </div>
            
            <div className="absolute bottom-6 right-6 flex gap-2">
                    <button onClick={prevSlide} className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors">
                    <ChevronLeftIcon className="w-4 h-4" />
                    </button>
                    <button onClick={nextSlide} className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors">
                    <ChevronRightIcon className="w-4 h-4" />
                    </button>
            </div>
        </motion.div>
    );
};
