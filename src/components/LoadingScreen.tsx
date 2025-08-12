import React, { useState, useEffect } from 'react';
import { Building2 } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-2xl animate-pulse-glow">
            <Building2 className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-gold-400 rounded-xl blur opacity-25 animate-pulse"></div>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            NoorVia
          </span>
          <span className="text-gold-400 ml-2">BD</span>
        </h1>
        
        <div className="w-64 bg-white bg-opacity-20 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-gold-400 to-gold-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-blue-200 text-sm">Loading amazing experience... {progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;