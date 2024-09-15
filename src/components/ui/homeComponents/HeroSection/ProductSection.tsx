import React from "react";
import Image from "next/image";
import { products } from "@/lib/variable";
import { images } from "@/lib";

interface ProductSectionProps {
  selectedCategory: string | null;
  selectedSubCategory: string | null; // Added prop for subcategory
}

const ProductSection: React.FC<ProductSectionProps> = ({
  selectedCategory,
  selectedSubCategory,
}) => {
  // Filter products based on selected category and subcategory
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSubCategory = selectedSubCategory
      ? product.subCategory === selectedSubCategory
      : true;
    return matchesCategory && matchesSubCategory;
  });

  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <Image
              src={images.product19}
              alt={product.name}
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg text-gray-700">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
