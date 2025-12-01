
import React, { useRef } from 'react';
import gsap from 'gsap';

export const Logo: React.FC = () => {
    const logoImgRef = useRef<HTMLImageElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const logoSrc = "/logotip.svg";

    const handleLogoEnter = () => {
        const img = logoImgRef.current;
        if (!img) return;
        
        gsap.to(img, {
            rotate: 360,
            duration: 0.6,
            ease: 'power3.easeOut',
            overwrite: 'auto',
            onComplete: () => gsap.set(img, { rotate: 0 })
        });
    };

    // Initial entrance
    React.useEffect(() => {
        if (logoRef.current) {
            gsap.fromTo(logoRef.current, { scale: 0 }, { scale: 1, duration: 0.6, ease: 'back.out(1.7)' });
        }
    }, []);

    return (
        <div className="pointer-events-auto z-[100]">
            <a
                ref={logoRef}
                className="w-[55px] h-[55px] rounded-full bg-foreground p-2 inline-flex items-center justify-center overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
                href="#home"
                aria-label="Home"
                onMouseEnter={handleLogoEnter}
            >
                <img 
                    ref={logoImgRef}
                    src={logoSrc} 
                    alt="A.S.S Security" 
                    className="w-full h-full object-contain block grayscale contrast-125" 
                />
            </a>
        </div>
    );
};
