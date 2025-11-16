import React, { useState, useEffect, useRef } from 'react';
import Lottie, { LottieComponentProps } from 'lottie-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyLottieProps extends Omit<LottieComponentProps, 'animationData'> {
  animationPath: string; // путь из public, например: "/assets/sun.json"
}

const LazyLottie: React.FC<LazyLottieProps> = ({ animationPath, className, ...props }) => {
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useIntersectionObserver(ref, {
    threshold: 0,
    rootMargin: '200px 0px 200px 0px',
    triggerOnce: true,
  });

  useEffect(() => {
    if (isVisible && !animationData) {
      let active = true;

      fetch(animationPath)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch ${animationPath}`);
          return res.json();
        })
        .then((data) => {
          if (active) setAnimationData(data);
        })
        .catch((err) => console.error(`Failed to load animation: ${animationPath}`, err));

      return () => {
        active = false;
      };
    }
  }, [isVisible, animationPath, animationData]);

  return (
    <div ref={ref} className={className}>
      {animationData && <Lottie animationData={animationData} {...props} className="w-full h-full" />}
    </div>
  );
};

export default LazyLottie;