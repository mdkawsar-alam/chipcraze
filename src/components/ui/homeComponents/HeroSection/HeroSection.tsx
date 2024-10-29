'use client';

import { images } from '@/lib';
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: StaticImageData;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Immerse yourself in crystal-clear audio with our latest noise-cancelling technology.",
    imageUrl: images.product15,
  },
  {
    id: 2,
    name: "Smart Fitness Tracker",
    description: "Track your health and fitness goals with precision and style.",
    imageUrl: images.product1,
  },
  {
    id: 3,
    name: "4K Ultra HD Smart TV",
    description: "Experience stunning visuals and smart features in one sleek package.",
    imageUrl: images.product9,
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div 
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-gray-100"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div 
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-full relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50" />
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{product.name}</h2>
              <p className="text-md sm:text-lg md:text-xl mb-4">{product.description}</p>
              <button className="bg-white text-black px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
