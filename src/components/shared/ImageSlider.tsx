'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Define the type for the `images` prop
interface ImageSliderProps {
  images: string[]; // Array of image URLs (strings)
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to navigate to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Slider Images */}
      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <Image
              src={image}
              alt={`Product Image ${index + 1}`}
              width={300}
              height={300}
              className="rounded-lg mx-auto"
              priority={index === 0} // Prioritize loading the first image
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-green-700' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`} // Improve accessibility
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;