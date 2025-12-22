import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from './ui/button';
import Divider from './Divider';

const VenueSection = ({ venue }) => {
  return (
    <section className="py-20 px-4 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif italic text-[#B8956A] mb-6">
            Our Wedding Venue
          </h2>
          <Divider />
        </div>
        
        {/* Venue Details */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-serif uppercase text-gray-800 mb-4">
            {venue.fullAddress}
          </h3>
        </div>
        
        {/* Map */}
        <div className="relative rounded-lg overflow-hidden shadow-2xl mb-8 h-[400px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2154719253494!2d72.83209731490076!3d18.921983987222193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c0c4d5ac1b%3A0x3ff8b2e2f7a4e1e5!2sTaj%20Mahal%20Palace%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          />
        </div>
        
        {/* Get Directions Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#B8956A] hover:bg-[#A07D57] text-white px-8 py-6 text-lg transition-all duration-300"
          >
            <a href={venue.mapUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
