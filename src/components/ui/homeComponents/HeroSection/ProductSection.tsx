"use client";

import Image from "next/image";
import { BiShowAlt } from "react-icons/bi";
import { products } from "@/lib/variable";

import { useCart } from "@/context/CartContext";
import { images } from "@/lib";

interface ProductSectionProps {
  selectedCategory?: string;
  selectedSubCategory?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  selectedCategory,
  selectedSubCategory,
}) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  // Filter products by selected category and subcategory
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSubCategory = selectedSubCategory ? product.subCategory === selectedSubCategory : true;
    return matchesCategory && matchesSubCategory;
  });

  // Handle product details display
  const handleProductDetails = (productId: string): void => {
    console.log(`Show details for product ${productId}`);
    // Handle modal or redirect here instead of alert
  };

  // Render controls for adding/removing products from the cart
  const renderCartControls = (product: typeof products[0]): JSX.Element => {
    const cartItem = cartItems.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
      <div className="absolute inset-0 flex items-center justify-between px-3">
        <button
          onClick={() => handleProductDetails(product.id)}
          aria-label={`View details for ${product.name}`}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-500"
        >
          <BiShowAlt className="text-2xl" />
        </button>

        <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-2">
          {quantity > 0 ? (
            <>
              <button
                onClick={() => removeFromCart(product.id)}
                aria-label={`Remove one ${product.name}`}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100 text-red-500"
              >
                <span className="text-xl font-bold">-</span>
              </button>
              <span className="text-xl font-bold text-black">{quantity}</span>
              <button
                onClick={() => addToCart(product.id)}
                aria-label={`Add one more ${product.name}`}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 text-green-500"
              >
                <span className="text-xl font-bold">+</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => addToCart(product.id)}
              aria-label={`Add ${product.name} to cart`}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 text-green-500"
            >
              <span className="text-xl font-bold">+</span>
            </button>
          )}
        </div>
      </div>
    );
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
            {renderCartControls(product)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
