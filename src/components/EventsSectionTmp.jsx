import React from 'react';
import { Card, CardContent } from './ui/card';
import Divider from './Divider';

const EventsSection = ({ events }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#faf8f5] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif italic text-[#B8956A] mb-6">
            Wedding Events
          </h2>
          <Divider />
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className="border-2 border-[#B8956A]/20 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              
              <CardContent className="relative p-8 text-center space-y-4 overflow-hidden">
                {/* Watermark */}
                <img
                src={event.watermark}
                alt=""
                className="relative inset-0 m-auto w-40 opacity-100 pointer-events-none select-none"
              />
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#B8956A]">
                  {event.name}
                </h3>
                <div className="border-t border-[#B8956A]/30 pt-4 space-y-2">
                  <p className="text-base text-gray-700">
                    {event.date}
                  </p>
                  <p className="text-lg font-medium text-gray-800">
                    {event.time}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
