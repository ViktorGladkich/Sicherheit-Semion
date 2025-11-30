import React, { useState, useEffect, useRef } from 'react';
import Lottie, { LottieComponentProps } from 'lottie-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyLottieProps extends Omit<LottieComponentProps, 'animationData'> {
  animationPath: string;
}

const LazyLottie: React.FC<LazyLottieProps> = ({ animationPath, className, ...props }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const ref = useRef<HTMLDivElement>(null);
  
  // Preload animation slightly before it enters the viewport for a smoother experience
  const isVisible = useIntersectionObserver(ref, {
    threshold: 0,
    rootMargin: '200px 0px 200px 0px',
    triggerOnce: true,
  });

  useEffect(() => {
    if (isVisible) {
      let active = true;
      
      const load = async () => {
        try {
          // Use fetch for static JSON assets. This is more robust than dynamic imports 
          // for static files in this environment and avoids module resolution errors.
          const response = await fetch(animationPath);
          if (!response.ok) {
             throw new Error(`Failed to fetch ${animationPath}: ${response.statusText}`);
          }
          const data = await response.json();
          if (active) {
            setAnimationData(data);
          }
        } catch (err) {
          console.error(`Failed to load animation: ${animationPath}`, err);
        }
      };
      
      load();
      
      return () => {
        active = false;
      };
    }
  }, [isVisible, animationPath]);

  // Pass className to the wrapper div to reserve space and apply styling.
  // The inner Lottie component fills this wrapper.
  return (
    <div ref={ref} className={className}>
      {animationData && <Lottie animationData={animationData} {...props} className="w-full h-full" />}
    </div>
  );
};

export default LazyLottie;