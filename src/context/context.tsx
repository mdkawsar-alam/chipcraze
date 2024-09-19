 "use client"
import React, { createContext, useContext, useState } from "react";


interface CartContextType {
  quantities: { [key: number]: number };
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
}

// Create context
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Provide context 
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  //  increase the quantity of a product
  const increaseQuantity = (productId: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  // decrease the quantity of a product
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


