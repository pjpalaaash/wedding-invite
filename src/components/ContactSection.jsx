import React from 'react';
import { Phone, MapPin, Building2 } from 'lucide-react';
import Divider from './Divider';

const ContactSection = ({ invitee, firm }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {/* Invitee */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#B8956A] mb-4">
                Invitee
              </h2>
              <Divider />
            </div>
            
            <div className="bg-[#fef8ec] rounded-lg shadow-lg p-8 space-y-6">
              <h3 className="text-2xl font-serif text-gray-800 text-center mb-6">
                {invitee.name}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#B8956A] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-center">{invitee.address}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#B8956A] flex-shrink-0" />
                  <a href={`tel:${invitee.phone}`} className="text-gray-700 hover:text-[#B8956A] transition-colors">
                    {invitee.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Firm */}
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
