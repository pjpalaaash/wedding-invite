import React, { useState } from 'react';
import { Play, Pause, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import bgImage from "../data/images/6.png"
const HeroSection = ({ couple }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // const toggleMusic = () => {
  //   setIsPlaying(!isPlaying);
  //   // Music functionality would be implemented here
  // };

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${bgImage}')`,
        }}
      />

      {/* Music Button
      <div className="absolute top-8 left-8 z-10">
        <Button
          onClick={toggleMusic}
          className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 transition-all duration-300"
          size="lg"
        >
          {isPlaying ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
          <span className="text-sm">Click to {isPlaying ? 'pause' : 'play'} music</span>
        </Button>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Top Text */}
          <p className="text-lg md:text-xl tracking-widest font-light opacity-90">
            || Shri Ganeshay Namah ||
          </p>

          {/* Couple Names */}
          <h1 className="text-6xl md:text-8xl font-serif italic tracking-wide">
            {couple.groom} & {couple.bride}
          </h1>

          {/* Invitation Text */}
          <p className="text-base md:text-lg tracking-wider uppercase font-light opacity-90 max-w-2xl mx-auto">
            Our Families request the honour of your presence at
          </p>

          {/* Our Wedding */}
          <h2 className="text-5xl md:text-7xl font-serif italic">
            Our Wedding
          </h2>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-12 w-12 text-white" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
