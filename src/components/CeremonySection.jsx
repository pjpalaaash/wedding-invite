import React from 'react';
import Divider from './Divider';

const CeremonySection = ({ couple, weddingDate, venue }) => {
  return (
    <section className="py-20 px-4 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-serif italic text-[#B8956A] mb-6">
          Wedding Ceremony
        </h2>
        
        <Divider />
        
        {/* Family Request */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Mrs. Anjula Jaiswal & Family
          <br />
          Request the honour of your presence and blessings on the auspicious occasion
          <br />
          of the wedding ceremony of her son
        </p>
        
        {/* Groom Name */}
        <h3 className="text-5xl md:text-6xl font-serif italic text-gray-800 mb-6">
          {couple.groom}
        </h3>
        
        {/* With */}
        <p className="text-2xl md:text-3xl text-gray-600 mb-6 font-light italic">
          With
        </p>
        
        {/* Bride Name */}
        <h3 className="text-5xl md:text-6xl font-serif italic text-gray-800 mb-12">
          {couple.bride}
        </h3>
        
        {/* Details */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          The day when {couple.groom} & {couple.bride} will tie the knot and begin their new life
          <br />
          as a happily married couple
        </p>
        
        {/* Date and Venue */}
        <p className="text-xl md:text-2xl text-gray-800 font-medium">
          on {weddingDate.day}, {weddingDate.date}<sup>th</sup> {weddingDate.month}, {weddingDate.year}
          <br />
          <span className="text-lg md:text-xl text-gray-600 mt-2 inline-block">
            at {venue.name}, {venue.location}
          </span>
        </p>
      </div>
    </section>
  );
};

export default CeremonySection;
