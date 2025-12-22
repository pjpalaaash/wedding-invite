import React from 'react';
import { Card, CardContent } from './ui/card';
import Divider from './Divider';
import groomPic from '../data/images/Groom.jpeg';
import bridePic from '../data/images/Bride.jpeg';

const KnowUsSection = ({ couple }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif italic text-[#B8956A] mb-6">
            Know Us
          </h2>
          <Divider />
        </div>
        
        {/* Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Groom */}
          <div className="text-center space-y-6">
            <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-[#B8956A]/30 shadow-xl">
              <img
                src={groomPic}
                alt={couple.groom}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-4xl font-serif italic text-[#B8956A]">
              {couple.groom}
            </h3>
            <div className="text-gray-700 space-y-1">
              <p className="text-sm">G/S - {couple.groomGrandfather}</p>
              <p className="text-sm">S/O - {couple.groomFather}</p>
              <p className="text-sm font-medium">{couple.groomCity}</p>
            </div>
          </div>
          
          {/* Bride */}
          <div className="text-center space-y-6">
            <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-[#B8956A]/30 shadow-xl">
              <img
                src={bridePic}
                alt={couple.bride}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-4xl font-serif italic text-[#B8956A]">
              {couple.bride}
            </h3>
            <div className="text-gray-700 space-y-1">
              <p className="text-sm">G/D - {couple.brideGrandfather}</p>
              <p className="text-sm">D/O - {couple.brideFather}</p>
              <p className="text-sm font-medium">{couple.brideCity}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowUsSection;
