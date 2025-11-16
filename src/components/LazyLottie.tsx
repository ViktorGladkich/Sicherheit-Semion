import React, { useState, useEffect, useRef } from 'react';
import Lottie, { LottieComponentProps } from 'lottie-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyLottieProps extends Omit<LottieComponentProps, 'animationData'> {
  animationPath: string;
}

const LazyLottie: React.FC<LazyLottieProps> = ({ animationPath, className, ...props }) => {
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);
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
      // The /* @vite-ignore */ comment helps bundlers like Vite handle dynamic imports with variables
      import(/* @vite-ignore */ animationPath)
        .then(module => {
          if (active) {
            setAnimationData(module.default);
          }
        })
        .catch(err => console.error(`Failed to load animation: ${animationPath}`, err));
      
      return () => {
        active = false;
      };
    }
  }, [isVisible, animationPath]);


  return (
    <div ref={ref} className={className}>
      {animationData && <Lottie animationData={animationData} {...props} className="w-full h-full" />}
    </div>
  );
};

export default LazyLottie;
