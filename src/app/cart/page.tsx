"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/variable'; // Assuming this is your product list
import { useCart } from '@/context/CartContext'; 

interface FoodItem {
  _id: string;
  name: string;
  image: string;
  price: number;
}

const Cart: React.FC = () => {
  const router = useRouter();
  const { cartItems, removeFromCart } = useCart(); 
  const [promoCode, setPromoCode] = useState("");

  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      const product = products.find(p => p.id ===item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2;
  const totalAmount = getTotalCartAmount() + deliveryFee;

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle promo code validation here
  };

  return (
    <div className="cart p-4 md:p-8">
      <div className="cart-item">
        <div className="cart-items-title grid grid-cols-6 gap-4 font-semibold text-lg mb-4">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="mb-4" />
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((cartItem) => {
            const product = products.find((item) => item.id === cartItem.id);
            if (product && cartItem.quantity > 0) {
              return (
                <div key={product.id} className="mb-4">
                  <div className="cart-items-item grid grid-cols-6 items-center gap-4">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                    <p>{product.name}</p>
                    <p>${product.price.toFixed(2)}</p>
                    <p>{cartItem.quantity}</p>
                    <p>${(product.price * cartItem.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(cartItem.id)}
                      className="cursor-pointer text-red-600"
                      aria-label={`Remove ${product.name} from cart`}
                    >
                      x
                    </button>
                  </div>
                  <hr className="my-2" />
                </div>
              );
            }
            return null;
          })
        )}
      </div>

      <div className="cart-bottom mt-8">
        <div className="cart-total bg-gray-800 p-6 rounded-lg text-white">
          <h2 className="text-2xl mb-4">Cart Totals</h2>
          <hr className="mb-4" />
          <div className="cart-total-details flex justify-between mb-4">
            <p>Subtotal</p>
            <p>${getTotalCartAmount().toFixed(2)}</p>
          </div>
          <hr className="mb-4" />
          <div className="cart-total-details flex justify-between mb-4">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <hr className="mb-4" />
          <div className="cart-total-details flex justify-between mb-4">
            <p>Total</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>
          <hr className="mb-4" />
          <button
            onClick={() => router.push("/order")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full"
          >
            Proceed to Checkout
          </button>
        </div>

        <div className="cart-promocode mt-8">
          <p className="mb-2">If you have a promo code, enter it here:</p>
          <form onSubmit={handlePromoSubmit} className="cart-promocode-inputs flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
