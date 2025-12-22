import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import Divider from './Divider';

const FamiliesSection = ({ families }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#faf8f5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-serif italic text-[#B8956A] mb-6">
            Know Our Families
          </h2>
          <Divider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/family/groom" className="no-underline">
            <Card className="border-2 border-[#B8956A]/20 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#B8956A]">
                  Know Our Family — Groom
                </h3>
                <p className="text-gray-700">Meet the groom's family members and see their photos.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/family/bride" className="no-underline">
            <Card className="border-2 border-[#B8956A]/20 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#B8956A]">
                  Know Our Family — Bride
                </h3>
                <p className="text-gray-700">Meet the bride's family members and see their photos.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FamiliesSection;
