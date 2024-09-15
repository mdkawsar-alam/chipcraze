"use client";

import Container from "@/components/sheard/Container/container";
import { categories } from "@/lib/valiable";
import Image from "next/image";
import React, { useState } from "react";

const CategoryList: React.FC = () => {
  // Manage the active category state and filtered data
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(
    null
  );
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const handleCategoryClick = (index: number) => {
    if (index === activeCategoryIndex) {
      // Collapse the active category and clear filtered data
      setActiveCategoryIndex(null);
      setFilteredData([]);
    } else {
      // Set the clicked category as active and filter the data
      setActiveCategoryIndex(index);
      const selectedCategory = categories[index];
      setFilteredData(selectedCategory.subCategories);
    }
  };

  return (
    <div>
      <Container>
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <div className="flex whitespace-nowrap gap-5 overflow-hidden">
          {categories.map((category, index) => (
            <div key={index} className="mb-6">
              <div
                className={`cursor-pointer ${
                  activeCategoryIndex === index ? "text-blue-500" : ""
                }`}
                onClick={() => handleCategoryClick(index)}
              >
                <Image
                  src={`/images/categories/${category.img}`} // Assuming images are stored in public/images/categories
                  alt={category.name}
                  width={100} // Adjust the width and height as needed
                  height={100}
                />
                {category.name}
              </div>
            </div>
          ))}
        </div>

        {/* Display filtered data */}
        {activeCategoryIndex !== null && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Subcategories</h3>
            <ul className="flex gap-4 p-0">
              {filteredData.map((subCategory, subIndex) => (
                <div key={subIndex} className="text-gray-700">
                  <Image
                    src={`/images/subcategories/${subCategory.img}`} // Assuming images are stored in public/images/subcategories
                    alt={subCategory.name}
                    width={80} // Adjust the width and height as needed
                    height={80}
                  />
                  {subCategory.name}
                </div>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CategoryList;
