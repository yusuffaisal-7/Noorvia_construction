import React from 'react';

const Description: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up" style={{animationDelay: '1.2s'}}>
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
          We're building a comprehensive platform connecting{' '}
          <span className="text-gold-400 font-semibold">investors</span> with{' '}
          <span className="text-gold-400 font-semibold">entrepreneurs</span>, offering professional business consulting, 
          legal support, and strategic partnerships to drive your business forward.
        </p>
      </div>
    </div>
  );
};

export default Description;