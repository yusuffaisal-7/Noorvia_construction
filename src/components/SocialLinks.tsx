import React from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-300' },
  ];

  return (
    <div className="flex justify-center space-x-6 mb-8 animate-slide-up" style={{animationDelay: '1.8s'}}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className={`group relative p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-full border border-white border-opacity-20 text-blue-200 ${social.color} transform transition-all duration-300 hover:scale-110 hover:bg-opacity-20`}
        >
          <social.icon className="h-6 w-6" />
          
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {social.label}
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-gold-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;