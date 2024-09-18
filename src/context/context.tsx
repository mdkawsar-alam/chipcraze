"use client"
import React, { createContext, useContext, useState } from "react";

// Define the shape of the context
interface CartContextType {
  quantities: { [key: number]: number };
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a ContextProvider");
  }
  return context;
};


export const ContextProvider = ({
  children
}) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const increaseQuantity = (productId: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (productId: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  return (
    <CartContext.Provider value={{ quantities, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
