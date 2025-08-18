import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-blue-300 animate-slide-up" style={{animationDelay: '2.1s'}}>
      <div className="border-t border-white border-opacity-10 pt-8">
        <p className="text-sm mb-2">
          © 2025 NoorVia BD. All rights reserved.
        </p>
        <p className="text-xs text-blue-400">
          Contact us: <a href="mailto:info@noorviabd.com" className="hover:text-gold-400 transition-colors duration-300">info@noorviabd.com</a>
        </p>
        <p className="text-xs text-blue-400 mt-2">
          Construction Under <a href="https://foxmenstudio.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors duration-300 font-medium">Foxmenstudio</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;