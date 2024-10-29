"use client";

import { categories } from "@/lib/variable";
import { images } from "@/lib";
import Image from "next/image";
import { useState, useRef } from "react";
import ProductSection from "../HeroSection/ProductSection";
import Container from "@/components/sheard/Container/container";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  index?: number;
  isActive?: boolean;
}

interface ScrollButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const CategoryList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [subCategory, setSubCategory] = useState<string | null>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const subCategoryRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number, ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) ref.current.scrollLeft += offset;
  };

  const resetSelections = () => {
    setActiveIndex(null);
    setCategory(null);
    setSubCategory(null);
  };

  const CategoryCard: React.FC<CategoryCardProps> = ({ name, index = -1, isActive = false }) => (
    <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
      <div
        className={`cursor-pointer rounded-lg p-4 shadow-lg flex flex-col items-center justify-center h-40 w-40 ${
          isActive ? "bg-blue-500 text-white" : "bg-white hover:bg-blue-50"
        }`}
        onClick={() => {
          if (index === -1) resetSelections();
          else if (index === activeIndex) resetSelections();
          else {
            setActiveIndex(index);
            setCategory(categories[index].name);
            setSubCategory(null);
          }
        }}
      >
        <Image
          src={images.product10}
          alt={name}
          width={80}
          height={80}
          className="mb-2"
        />
        <span className="font-medium text-sm text-center">{name}</span>
      </div>
    </div>
  );

  const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute ${direction === 'left' ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10`}
    >
      {direction === 'left' ? 
        <ChevronLeft className="w-6 h-6 text-gray-600" /> : 
        <ChevronRight className="w-6 h-6 text-gray-600" />
      }
    </button>
  );

  return (
    <div className="py-11 bg-gradient-to-r from-blue-50 to-indigo-50">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
            Explore Our Delicious Menu
          </h1>
          
          <div className="w-full relative">
            <ScrollButton direction="left" onClick={() => scroll(-200, categoryRef)} />
            <div ref={categoryRef} className="flex gap-4 overflow-x-auto pb-4 scroll-smooth px-8 hide-scrollbar">
              <CategoryCard name="All Categories" isActive={category === null} />
              {categories.map((cat, idx) => (
                <CategoryCard 
                  key={idx} 
                  name={cat.name} 
                  index={idx} 
                  isActive={activeIndex === idx} 
                />
              ))}
            </div>
            <ScrollButton direction="right" onClick={() => scroll(200, categoryRef)} />
          </div>
        </div>

        {activeIndex !== null && (
          <div className="mt-12 relative">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              Explore {categories[activeIndex].name} Subcategories
            </h3>
            <ScrollButton direction="left" onClick={() => scroll(-200, subCategoryRef)} />
            <div ref={subCategoryRef} className="flex gap-4 overflow-x-auto pb-4 scroll-smooth px-8 hide-scrollbar">
              {categories[activeIndex].subCategories.map((sub, idx) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 transition-all duration-300 ${
                    subCategory === sub.name ? "scale-105" : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`cursor-pointer rounded-lg p-4 shadow-lg flex flex-col items-center justify-center h-32 w-32 ${
                      subCategory === sub.name ? "bg-blue-500 text-white" : "bg-white hover:bg-blue-50"
                    }`}
                    onClick={() => setSubCategory(sub.name)}
                  >
                    <Image
                      src={images.product14}
                      alt={sub.name}
                      width={60}
                      height={60}
                      className="mb-2"
                    />
                    <span className="text-xs font-medium text-center">{sub.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <ScrollButton direction="right" onClick={() => scroll(200, subCategoryRef)} />
          </div>
        )}
      </Container>

      <ProductSection 
        selectedCategory={category} 
        selectedSubCategory={subCategory} 
      />
    </div>
  );
};

export default CategoryList;
