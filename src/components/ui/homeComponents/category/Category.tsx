"use client"

import { categories } from "@/lib/valiable";
import Image from "next/image";
import React, { useState } from "react";

import Container from "@/components/sheard/Container/container";
import ProductSection from "../HeroSection/ProductSection";

const CategoryList: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (index: number) => {
    if (index === activeCategoryIndex) {
      setActiveCategoryIndex(null);
      setSelectedCategory(null); // Clear category when collapsing
    } else {
      setActiveCategoryIndex(index);
      const selectedCategory = categories[index];
      setSelectedCategory(selectedCategory.name); // Set selected category
    }
  };

  return (
    <div>
      <Container>
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <div className="overflow-x-auto max-w-3xl">
          <div className="flex gap-5 overflow-x-auto">
            {categories.map((category, index) => (
              <div key={index} className="mb-6">
                <div
                  className={`cursor-pointer flex flex-col items-center ${
                    activeCategoryIndex === index ? "text-blue-500" : ""
                  }`}
                  onClick={() => handleCategoryClick(index)}
                >
                  <Image
                    src={`/images/categories/${category.img}`}
                    alt={category.name}
                    width={100}
                    height={100}
                  />
                  <span>{category.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {activeCategoryIndex !== null && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Subcategories</h3>
            <ul className="flex gap-4 p-0">
              {categories[activeCategoryIndex]?.subCategories.map(
                (subCategory, subIndex) => (
                  <li key={subIndex} className="flex flex-col items-center">
                    <Image
                      src={`/images/subcategories/${subCategory.img}`}
                      alt={subCategory.name}
                      width={80}
                      height={80}
                    />
                    <span>{subCategory.name}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </Container>

      {/* Pass selectedCategory to ProductSection */}
      <ProductSection selectedCategory={selectedCategory} />
    </div>
  );
};

export default CategoryList;
