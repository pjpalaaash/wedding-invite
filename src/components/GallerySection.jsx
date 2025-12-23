import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import Divider from './Divider';
import img1 from '../data/images/gallery/1.png'
// import img2 from '../data/images/gallery/13.JPG'
import img3 from '../data/images/gallery/3.png'
// import img4 from '../data/images/gallery/4.png'
// import img5 from '../data/images/gallery/5.png'
import img6 from '../data/images/gallery/14.JPG'
import img7 from '../data/images/gallery/7.png'
import img8 from '../data/images/gallery/8.png'
import img9 from '../data/images/gallery/9.jpg'

const GallerySection = ({ images = [] }) => {
  // add your default images here (put them in public/images/)
  const defaultImages = [
    img1,
    img3,
    img6, 
    img7,
    img8,
    img9
  ];

  // use passed images if provided, otherwise fallback to defaultImages
  const imageList = images.length ? defaultImages : images;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#faf8f5]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif italic text-[#B8956A] mb-6">
            Our Beautiful Moments
          </h2>
          <Divider />
        </div>
        
        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <img
              src={imageList[currentIndex]}
              alt={`Wedding moment ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-12 h-12 p-0"
              size="icon"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-12 h-12 p-0"
              size="icon"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {imageList.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#B8956A] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8 max-w-5xl mx-auto">
          {imageList.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-4 ring-[#B8956A] scale-105' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
