import React from 'react';
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="w-58 h-58">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Preloader;