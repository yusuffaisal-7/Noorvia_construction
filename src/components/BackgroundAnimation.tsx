import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white border-opacity-10 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold-400 border-opacity-20 rotate-45 animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-5 transform rotate-45 animate-bounce-slow"></div>
      
      {/* Professional Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full w-full p-8">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="border border-white border-opacity-10"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;