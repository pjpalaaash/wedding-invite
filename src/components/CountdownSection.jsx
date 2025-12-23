import React, { useState, useEffect } from 'react';
import Divider from './Divider';

const CountdownSection = ({ weddingDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(weddingDate.targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate.targetDate]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#faf8f5]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-serif italic text-[#B8956A] mb-6">
          The Wedding Day
        </h2>
        
        <Divider />
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          The day when we will tie the knot and begin our new life as a happily married couple
        </p>
        
        {/* Date */}
        <h3 className="text-4xl md:text-5xl font-serif italic text-gray-800 mb-12">
          {weddingDate.day}, {weddingDate.date}<sup>th</sup> {weddingDate.month}, {weddingDate.year}
        </h3>
        
        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="space-y-2">
            <div className="text-6xl md:text-7xl font-light text-[#B8956A]">
              {timeLeft.days}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
              Days
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-6xl md:text-7xl font-light text-[#B8956A]">
              {timeLeft.hours}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
              Hours
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-6xl md:text-7xl font-light text-[#B8956A]">
              {timeLeft.minutes}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
              Minutes
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-6xl md:text-7xl font-light text-[#B8956A]">
              {timeLeft.seconds}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
              Seconds
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
