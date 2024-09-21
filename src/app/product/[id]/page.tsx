// pages/product.tsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

interface Product {
  title: string;
  description: string;
  price: string;
  rating: number;
  images: string[];
}

const ProductDetails: React.FC = () => {
  const product: Product = {
    title: "Product Title",
    description: "This is a great product that does amazing things.",
    price: "$99.99",
    rating: 4.5,
    images: [
      '/images/product1.jpg',
      '/images/product2.jpg',
      '/images/product3.jpg',
    ],
  };

  const [mainImage, setMainImage] = useState<string>(product.images[0]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex p-8">
      {/* Left Side - Product Image */}
      <div className="w-1/2 pr-4">
        <Image 
          src={mainImage} 
          alt={product.title} 
          width={500} 
          height={500} 
          className="w-full h-auto"
        />
        {/* Carousel for additional images */}
        <div className="mt-4">
          <Slider {...settings}>
            {product.images.map((image, index) => (
              <div key={index} className="relative group">
                <Image 
                  src={image} 
                  alt={`Product image ${index + 1}`} 
                  width={200} 
                  height={200} 
                  className="w-full h-auto cursor-pointer" 
                  onMouseEnter={() => setMainImage(image)}
                  onMouseLeave={() => setMainImage(product.images[0])} // Reset to first image on mouse leave
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="w-1/2 pl-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <h2 className="mt-4 text-xl font-semibold">{product.price}</h2>
        <p className="mt-2 text-yellow-500">Rating: {product.rating} ★</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
