"use client";

import { categories } from "@/lib/variable";
import Image from "next/image";
import React, { useState, useRef } from "react";
import ProductSection from "../HeroSection/ProductSection";
import { images } from "@/lib";
import Container from "@/components/sheard/Container/container";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategoryList: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );
  const categoryRef = useRef<HTMLDivElement>(null);
  const subCategoryRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number, ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  const handleCategoryClick = (index: number) => {
    if (index === activeCategoryIndex) {
      setActiveCategoryIndex(null);
      setSelectedCategory(null);
      setSelectedSubCategory(null);
    } else {
      setActiveCategoryIndex(index);
      const selectedCategory = categories[index];
      setSelectedCategory(selectedCategory.name);
      setSelectedSubCategory(null);
    }
  };

  const handleSubCategoryClick = (subCategoryName: string) => {
    setSelectedSubCategory(subCategoryName);
  };

  const handleAllCategoriesClick = () => {
    setActiveCategoryIndex(null);
    setSelectedCategory(null);
    setSelectedSubCategory(null);
  };

  return (
    <div className="py-11 bg-gradient-to-r from-blue-50 to-indigo-50">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
            Explore Our Delicious Menu
          </h1>
          <div className="w-full relative">
            <button
              onClick={() => scroll(-200, categoryRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div
              ref={categoryRef}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth px-8 hide-scrollbar"
            >
              {/* All Categories Option */}
              <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                <div
                  className={`cursor-pointer rounded-lg p-4 shadow-lg flex flex-col items-center justify-center h-40 w-40 ${
                    selectedCategory === null
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-blue-50"
                  }`}
                  onClick={handleAllCategoriesClick}
                >
                  <Image
                    src={images.product10}
                    alt="All Categories"
                    width={80}
                    height={80}
                    className="mb-2"
                  />
                  <span className="font-medium text-sm text-center">
                    All Categories
                  </span>
                </div>
              </div>
              {categories.map((category, index) => (
                <div key={index} className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                  <div
                    className={`cursor-pointer rounded-lg p-4 shadow-lg flex flex-col items-center justify-center h-40 w-40 ${
                      activeCategoryIndex === index
                        ? "bg-blue-500 text-white"
                        : "bg-white hover:bg-blue-50"
                    }`}
                    onClick={() => handleCategoryClick(index)}
                  >
                    <Image
                      src={images.product10}
                      alt={category.name}
                      width={80}
                      height={80}
                      className="mb-2"
                    />
                    <span className="font-medium text-sm text-center">
                      {category.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll(200, categoryRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 focus:outline-none"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {activeCategoryIndex !== null && (
          <div className="mt-12 relative">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              Explore {categories[activeCategoryIndex].name} Subcategories
            </h3>
            <button
              onClick={() => scroll(-200, subCategoryRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div
              ref={subCategoryRef}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth px-8 hide-scrollbar"
            >
              {categories[activeCategoryIndex]?.subCategories.map(
                (subCategory, subIndex) => (
                  <div
                    key={subIndex}
                    className={`flex-shrink-0 transition-all duration-300 ${
                      selectedSubCategory === subCategory.name
                        ? "scale-105"
                        : "hover:scale-105"
                    }`}
                  >
                    <div
                      className={`cursor-pointer rounded-lg p-4 shadow-lg flex flex-col items-center justify-center h-32 w-32 ${
                        selectedSubCategory === subCategory.name
                          ? "bg-blue-500 text-white"
                          : "bg-white hover:bg-blue-50"
                      }`}
                      onClick={() => handleSubCategoryClick(subCategory.name)}
                    >
                      <Image
                        src={images.product14}
                        alt={subCategory.name}
                        width={60}
                        height={60}
                        className="mb-2"
                      />
                      <span className="text-xs font-medium text-center">
                        {subCategory.name}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              onClick={() => scroll(200, subCategoryRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 focus:outline-none"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        )}
      </Container>

      <ProductSection
        selectedCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
      />
    </div>
  );
};

export default CategoryList;