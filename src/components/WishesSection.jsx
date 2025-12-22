import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import Divider from './Divider';

const API_URL = 'http://localhost:4000/wishes';
const STORAGE_KEY = 'wedding_wishes_v1';

const WishesSection = () => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Try to fetch from server, fallback to localStorage
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('No server');
        return res.json();
      })
      .then((data) => setWishes(Array.isArray(data) ? data.reverse() : []))
      .catch(() => {
        const local = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        setWishes(local.reverse());
      });
  }, []);

  const addWishLocally = (entry) => {
    const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    current.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    setWishes([entry, ...wishes]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !wish.trim()) {
      setError('Please enter your name and wish.');
      return;
    }

    const entry = { name: name.trim(), wish: wish.trim(), ts: new Date().toISOString() };
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry),
      });

      if (!res.ok) {
        throw new Error('Server not available');
      }

      const saved = await res.json();
      setWishes([saved, ...wishes]);
      setName('');
      setWish('');
    } catch (err) {
      // Fallback: save locally
      addWishLocally(entry);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#faf8f5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#B8956A] mb-2">Wedding Wishes</h2>
          <Divider />
          <p className="text-gray-600 mt-4">Send your wishes for the bride and groom — we will save and show them here.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mb-8">
          <input
            aria-label="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="p-3 rounded border"
            required
          />

          <textarea
            aria-label="Your wish"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            placeholder="Write your wish for the couple"
            className="p-3 rounded border h-28 resize-none"
            required
          />

          {error && <p className="text-red-500">{error}</p>}

          <div>
            <button type="submit" className="px-6 py-2 bg-[#B8956A] text-white rounded" disabled={loading}>
              {loading ? 'Sending…' : 'Send Wish'}
            </button>
          </div>
        </form>

        {/* <div className="grid gap-4">
          {wishes.length === 0 && <p className="text-gray-600">No wishes yet — be the first to send one!</p>}

          {wishes.map((w, i) => (
            <Card key={i} className="p-0">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-lg font-medium">{w.name}</div>
                    <div className="text-sm text-gray-500">{new Date(w.ts).toLocaleString()}</div>
                    <div className="mt-2 text-gray-700">{w.wish}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default WishesSection;
