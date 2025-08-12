import React from 'react';

const ConstructionAnimation: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '1.0s'}}>
      {/* Construction Scene Container */}
      <div className="relative h-64 md:h-80 bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* City Skyline Background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-700 to-blue-500">
          {/* Buildings */}
          <div className="absolute bottom-0 left-4 w-8 h-20 bg-blue-800 opacity-60"></div>
          <div className="absolute bottom-0 left-16 w-6 h-16 bg-blue-800 opacity-50"></div>
          <div className="absolute bottom-0 left-28 w-10 h-24 bg-blue-800 opacity-70"></div>
          <div className="absolute bottom-0 right-4 w-8 h-18 bg-blue-800 opacity-60"></div>
          <div className="absolute bottom-0 right-16 w-12 h-22 bg-blue-800 opacity-50"></div>
          <div className="absolute bottom-0 right-32 w-6 h-14 bg-blue-800 opacity-70"></div>
        </div>

        {/* Construction Platform */}
        <div className="absolute bottom-8 left-8 right-8 h-4 bg-gray-700 rounded-lg shadow-lg"></div>
        <div className="absolute bottom-12 left-12 right-12 h-2 bg-gray-600 rounded"></div>

        {/* Construction Crane */}
        <div className="absolute bottom-12 right-12 w-2 h-32 bg-yellow-600 origin-bottom animate-sway"></div>
        <div className="absolute bottom-40 right-4 w-16 h-2 bg-yellow-600 origin-left animate-crane-arm"></div>
        <div className="absolute bottom-36 right-2 w-2 h-8 bg-gray-800 animate-crane-hook"></div>

        {/* Under Construction Sign */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-sign-swing">
          <div className="bg-yellow-400 border-4 border-black px-6 py-3 rounded-lg shadow-lg transform rotate-1">
            <div className="bg-black h-1 w-full mb-1"></div>
            <div className="bg-yellow-300 h-1 w-full mb-1"></div>
            <div className="text-black font-bold text-sm text-center">UNDER CONSTRUCTION</div>
            <div className="bg-yellow-300 h-1 w-full mt-1"></div>
            <div className="bg-black h-1 w-full mt-1"></div>
          </div>
        </div>

        {/* Animated Construction Workers */}
        
        {/* Worker 1 - Hammering */}
        <div className="absolute bottom-12 left-20 animate-worker-hammer">
          <div className="relative">
            {/* Hard Hat */}
            <div className="w-6 h-4 bg-yellow-400 rounded-t-full border-2 border-yellow-500 mb-1"></div>
            {/* Head */}
            <div className="w-5 h-5 bg-orange-300 rounded-full mx-auto border-2 border-orange-400"></div>
            {/* Eyes */}
            <div className="absolute top-5 left-1.5 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-5 right-1.5 w-1 h-1 bg-black rounded-full"></div>
            {/* Body */}
            <div className="w-6 h-8 bg-blue-500 rounded-lg mx-auto mt-1 border-2 border-blue-600"></div>
            {/* Arms */}
            <div className="absolute top-8 -left-2 w-3 h-1 bg-orange-300 rounded animate-hammer-swing origin-right"></div>
            <div className="absolute top-8 -right-2 w-3 h-1 bg-orange-300 rounded"></div>
            {/* Hammer */}
            <div className="absolute top-7 -left-4 w-2 h-3 bg-gray-600 rounded animate-hammer-swing origin-bottom-right"></div>
            {/* Legs */}
            <div className="absolute top-14 left-1 w-1 h-4 bg-blue-600 rounded"></div>
            <div className="absolute top-14 right-1 w-1 h-4 bg-blue-600 rounded"></div>
          </div>
        </div>

        {/* Worker 2 - Carrying */}
        <div className="absolute bottom-12 left-40 animate-worker-walk">
          <div className="relative">
            {/* Hard Hat */}
            <div className="w-6 h-4 bg-orange-400 rounded-t-full border-2 border-orange-500 mb-1"></div>
            {/* Head */}
            <div className="w-5 h-5 bg-pink-300 rounded-full mx-auto border-2 border-pink-400"></div>
            {/* Eyes */}
            <div className="absolute top-5 left-1.5 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-5 right-1.5 w-1 h-1 bg-black rounded-full"></div>
            {/* Body */}
            <div className="w-6 h-8 bg-red-500 rounded-lg mx-auto mt-1 border-2 border-red-600"></div>
            {/* Arms carrying box */}
            <div className="absolute top-8 -left-1 w-8 h-1 bg-pink-300 rounded"></div>
            <div className="absolute top-6 left-1 w-4 h-4 bg-yellow-600 border-2 border-yellow-700 rounded"></div>
            {/* Legs */}
            <div className="absolute top-14 left-1 w-1 h-4 bg-red-600 rounded animate-walk-left"></div>
            <div className="absolute top-14 right-1 w-1 h-4 bg-red-600 rounded animate-walk-right"></div>
          </div>
        </div>

        {/* Worker 3 - Supervisor */}
        <div className="absolute bottom-12 right-32 animate-worker-point">
          <div className="relative">
            {/* Hard Hat */}
            <div className="w-6 h-4 bg-white rounded-t-full border-2 border-gray-300 mb-1"></div>
            {/* Head */}
            <div className="w-5 h-5 bg-yellow-300 rounded-full mx-auto border-2 border-yellow-400"></div>
            {/* Eyes */}
            <div className="absolute top-5 left-1.5 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-5 right-1.5 w-1 h-1 bg-black rounded-full"></div>
            {/* Body */}
            <div className="w-6 h-8 bg-green-500 rounded-lg mx-auto mt-1 border-2 border-green-600"></div>
            {/* Arms */}
            <div className="absolute top-8 -left-2 w-3 h-1 bg-yellow-300 rounded"></div>
            <div className="absolute top-8 -right-3 w-4 h-1 bg-yellow-300 rounded animate-point-arm"></div>
            {/* Clipboard */}
            <div className="absolute top-7 -left-3 w-2 h-3 bg-white border border-gray-400 rounded"></div>
            {/* Legs */}
            <div className="absolute top-14 left-1 w-1 h-4 bg-green-600 rounded"></div>
            <div className="absolute top-14 right-1 w-1 h-4 bg-green-600 rounded"></div>
          </div>
        </div>

        {/* Worker 4 - In Crane */}
        <div className="absolute bottom-44 right-8 animate-worker-wave">
          <div className="relative">
            {/* Hard Hat */}
            <div className="w-4 h-3 bg-red-400 rounded-t-full border border-red-500 mb-1"></div>
            {/* Head */}
            <div className="w-3 h-3 bg-orange-300 rounded-full mx-auto border border-orange-400"></div>
            {/* Eyes */}
            <div className="absolute top-3 left-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
            <div className="absolute top-3 right-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
            {/* Body */}
            <div className="w-4 h-5 bg-purple-500 rounded-lg mx-auto mt-1 border border-purple-600"></div>
            {/* Waving arm */}
            <div className="absolute top-5 -right-2 w-2 h-0.5 bg-orange-300 rounded animate-wave-arm"></div>
          </div>
        </div>

        {/* Floating Tools and Elements */}
        <div className="absolute bottom-16 left-32 animate-tool-float">
          <div className="w-3 h-1 bg-gray-600 rounded"></div>
          <div className="w-1 h-3 bg-brown-600 rounded mx-auto"></div>
        </div>

        <div className="absolute bottom-24 right-24 animate-tool-float-delayed">
          <div className="w-2 h-4 bg-gray-700 rounded"></div>
          <div className="w-4 h-1 bg-gray-600 rounded"></div>
        </div>

        {/* Dust Clouds */}
        <div className="absolute bottom-14 left-24 w-4 h-2 bg-white bg-opacity-30 rounded-full animate-dust-cloud"></div>
        <div className="absolute bottom-15 left-44 w-3 h-2 bg-white bg-opacity-20 rounded-full animate-dust-cloud-delayed"></div>

        {/* Progress Sparks */}
        <div className="absolute bottom-18 left-22 w-1 h-1 bg-yellow-300 rounded-full animate-spark"></div>
        <div className="absolute bottom-19 left-23 w-0.5 h-0.5 bg-orange-400 rounded-full animate-spark-delayed"></div>
      </div>
    </div>
  );
};

export default ConstructionAnimation;