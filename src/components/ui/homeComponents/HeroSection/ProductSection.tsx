import React from "react";
import Image from "next/image";
import { products } from "@/lib/valiable";
import { images } from "@/lib";


interface ProductSectionProps {
  selectedCategory: string | null; // Add this prop to filter products
}

const ProductSection: React.FC<ProductSectionProps> = ({
  selectedCategory,
}) => {
  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.subCategory === selectedCategory)
    : products;

  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <Image
              src={images.product19} // Assuming each product has an image property
              alt={product.name}
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
