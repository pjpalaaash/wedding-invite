import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-[#B8956A] text-white">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Main Message */}
        <div className="flex items-center justify-center gap-2">
          <Heart className="h-6 w-6 fill-white" />
          <h3 className="text-2xl md:text-3xl font-serif italic">
            WE LOOK FORWARD TO CELEBRATING WITH YOU ON OUR BIG DAY!
          </h3>
          <Heart className="h-6 w-6 fill-white" />
        </div>
        
        {/* Divider */}
        <div className="h-px bg-white/30 max-w-md mx-auto" />
        
        {/* Copyright */}
        {/* <p className="text-sm opacity-90">
          © 2025 Wedding Invitation. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
