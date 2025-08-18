import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Set target date to 15 days from now
    const getTargetDate = () => {
      const stored = localStorage.getItem('noorvia-launch-date');
      if (stored) {
        return new Date(stored);
      }
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + 15);
      localStorage.setItem('noorvia-launch-date', newDate.toISOString());
      return newDate;
    };

    const targetDate = getTargetDate();

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return <div className="h-40"></div>; // Placeholder to prevent hydration mismatch
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="mb-12 animate-slide-up" style={{animationDelay: '0.9s'}}>
      <h3 className="text-2xl font-semibold text-center text-blue-100 mb-8">
        Launch Countdown
      </h3>
      
      <div className="flex justify-center space-x-4 md:space-x-8">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="text-center group">
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-2xl border border-white border-opacity-20 transform transition-all duration-300 group-hover:scale-105 group-hover:bg-opacity-20">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2 countdown-flip">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-blue-200 text-sm md:text-base font-medium uppercase tracking-wide">
                  {unit.label}
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-gold-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;