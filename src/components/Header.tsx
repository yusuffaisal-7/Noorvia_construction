import React from 'react';
import { Building2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 animate-fade-in">
      {/* Logo */}
      <div className="flex justify-center items-center mb-6">
        <div className="relative">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-2xl mb-4 animate-pulse-glow">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-gold-400 rounded-xl blur opacity-25 animate-pulse"></div>
        </div>
      </div>
      
      {/* Company Name */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight animate-scale-in">
        <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          NoorVia
        </span>
        <span className="text-gold-400 ml-2">BD</span>
      </h1>
      
      {/* Main Headline */}
      <h2 className="text-2xl md:text-4xl font-light text-blue-100 mb-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
        Something Amazing is Coming Soon
      </h2>
      
      {/* Slogan */}
      <p className="text-lg md:text-xl text-blue-200 font-medium animate-slide-up" style={{animationDelay: '0.6s'}}>
        A professional business platform for professionals
      </p>
    </header>
  );
};

export default Header;