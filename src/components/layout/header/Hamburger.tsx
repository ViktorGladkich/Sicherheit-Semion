
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HamburgerProps {
    isOpen: boolean;
    toggle: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const lines = button.querySelectorAll('.hamburger-line');
        
        if (isOpen) {
            // Transform to X
            gsap.to(lines[0], { rotate: 45, y: 6, width: '24px', duration: 0.4, ease: "back.out(1.7)" });
            gsap.to(lines[1], { opacity: 0, x: -10, duration: 0.2 });
            gsap.to(lines[2], { rotate: -45, y: -6, width: '24px', duration: 0.4, ease: "back.out(1.7)" });
        } else {
            // Back to Hamburger
            gsap.to(lines[0], { rotate: 0, y: 0, width: '24px', duration: 0.4, ease: "power2.out" });
            gsap.to(lines[1], { opacity: 1, x: 0, duration: 0.4, delay: 0.1 });
            gsap.to(lines[2], { rotate: 0, y: 0, width: '16px', duration: 0.4, ease: "power2.out" });
        }
    }, [isOpen]);

    return (
        <button
            ref={buttonRef}
            className="w-[50px] h-[50px] rounded-full bg-foreground border-none hidden max-lg:flex flex-col items-center justify-center gap-[5px] cursor-pointer p-0 relative shadow-lg hover:bg-neutral-800 transition-colors duration-300 pointer-events-auto"
            onClick={toggle}
            aria-label="Toggle menu"
        >
            <span className="hamburger-line w-6 h-[2px] bg-background rounded-full origin-center"></span>
            <span className="hamburger-line w-6 h-[2px] bg-background rounded-full origin-center"></span>
            <span className="hamburger-line w-4 h-[2px] bg-background rounded-full origin-center self-end mr-[13px]"></span>
        </button>
    );
};
