import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import Divider from './Divider';

const FamilyPage = ({ families }) => {
  const { side } = useParams(); // 'groom' or 'bride'
  const members = (families && families[side]) || [];
  const title = side === 'groom' ? 'Groom\'s Family' : 'Bride\'s Family';

  return (
    <section className="py-20 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#B8956A]">{title}</h2>
            <Divider />
          </div>
          <div>
            <Link to="/" className="text-[#B8956A] hover:underline">Back to home</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.length === 0 && (
            <p className="text-gray-600">No members available for this family.</p>
          )}

          {members.map((m, idx) => (
            <Card key={idx} className="overflow-hidden">
              <img src={m.photo} alt={`${m.name} - ${m.relation || ''}`} className="w-full h-48 object-cover" />
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-medium">{m.name}</h3>
                {m.relation && <p className="text-sm text-gray-500 mt-1">{m.relation}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyPage;
