import PropTypes from 'prop-types';
import Image from 'next/image'; // Import Image from next/image
import { useCart } from "@/context/context";
import { products } from "@/lib/variable";
import { BiShowAlt } from "react-icons/bi";
import { images } from '@/lib';

const ProductSection = ({
  selectedCategory,
  selectedSubCategory}) => {
  const { quantities, increaseQuantity, decreaseQuantity } = useCart();

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

  // Handle product details click
  const handleProductDetails = (productId) => {
    alert(`Show details for product ${productId}`); 
  };

  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md relative">
            <Image
              src={images.product19}
              alt={product.name}
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg text-gray-700">${product.price.toFixed(2)}</p>

            <div className="absolute inset-0 flex items-center justify-between px-3">
              {/* Product details button */}
              <button
                onClick={() => handleProductDetails(product.id)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-500"
              >
                <BiShowAlt className="text-2xl" />
              </button>

              {/* Quantity buttons and display */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-2">
                {quantities[product.id] > 0 ? (
                  <>
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100 text-red-500"
                    >
                      <span className="text-xl font-bold">-</span>
                    </button>
                    <span className="text-xl font-bold text-black">
                      {quantities[product.id] || 0}
                    </span>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 text-green-500"
                    >
                      <span className="text-xl font-bold">+</span>
                    </button>
                  </>
                ) : (
                  // Show only the "+" button initially
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 text-green-500"
                  >
                    <span className="text-xl font-bold">+</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Prop validation
ProductSection.propTypes = {
  selectedCategory: PropTypes.string,
  selectedSubCategory: PropTypes.string,
};

export default ProductSection;
