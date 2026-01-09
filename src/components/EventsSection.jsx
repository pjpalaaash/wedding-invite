import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import Divider from './Divider';

const EventsSection = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openDressCodeModal = (event) => {
    setSelectedEvent(event);
  };

  const closeDressCodeModal = () => {
    setSelectedEvent(null);
  };

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
              className="border-2 border-[#B8956A]/20 bg-[#f8d88f] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openDressCodeModal(event)}
            >
              
              <CardContent className="relative p-8 text-center space-y-4 overflow-hidden">
                {/* Watermark */}
                <img
                src={event.watermark}
                alt=""
                className="relative inset-0 m-auto w-40 opacity-100 pointer-events-none select-none border-4 border-white rounded-full mb-4"
              />
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#4A3B2C]">
                  {event.name}
                </h3>
                <div className="border-t border-[#4A3B2C]/30 pt-4 space-y-2">
                  <p className="text-bold text-[#5D4037]/90">
                    {event.date}
                  </p>
                  <p className="text-sm font-small text-[#333333] tracking-wide">
                    {event.time}
                  </p>
                  <p className="text-xs font-light text-[#333333] tracking-wide">
                    Tap for Dress Code
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Dress Code Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="relative w-full max-w-md bg-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeDressCodeModal}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <CardContent className="p-8 text-center space-y-6">
              {/* Event Name */}
              <div>
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#4A3B2C] mb-2">
                  {selectedEvent.name}
                </h3>
              </div>

              {/* Dress Code Title */}
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-[#B8956A] mb-4">
                  {selectedEvent.dressCode.name}
                </h4>
              </div>

              {/* Color Palette */}
              <div>
                <p className="text-sm font-medium text-[#5D4037] mb-4">Suggested Colors</p>
                <div className="flex justify-center gap-3 flex-wrap">
                  {selectedEvent.dressCode.colors.map((color, index) => (
                    <div
                      key={index}
                      className="relative group"
                      title={color}
                    >
                      <div
                        className="w-16 h-16 rounded-lg shadow-md border-2 border-[#B8956A]/30 transition-all duration-300 hover:shadow-lg hover:scale-110"
                        style={{ backgroundColor: color }}
                      />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        {color}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Details */}
              <div className="border-t border-[#4A3B2C]/30 pt-4 space-y-2">
                <p className="text-sm font-medium text-[#5D4037]/90">
                  📅 {selectedEvent.date}
                </p>
                <p className="text-sm font-medium text-[#5D4037]/90">
                  🕐 {selectedEvent.time}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={closeDressCodeModal}
                className="w-full bg-[#B8956A] hover:bg-[#9d7d5c] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 mt-4"
              >
                Close
              </button>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default EventsSection;
