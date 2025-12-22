import React from 'react';
import Divider from './Divider';

const RSVPSection = ({ families }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif italic text-[#B8956A] mb-6">
            RSVP
          </h2>
          <Divider />
        </div>
        
        {/* Family Details */}
        <div className="text-center space-y-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            {families.groom}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
