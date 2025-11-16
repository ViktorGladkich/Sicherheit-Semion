import React from 'react';
import LazyLottie from './LazyLottie';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="w-58 h-58">
        <LazyLottie 
          animationPath="/assets/loading.json"
          loop={true} 
          className="w-full h-full" 
        />
      </div>
    </div>
  );
};

export default Preloader;