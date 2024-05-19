import React, { createContext, useContext, useState, useEffect } from "react";

// Create the Cart Context
const CartContext = createContext();

// Custom hook to use the Cart Context
export function useCart() {
  return useContext(CartContext);
}

// Cart Provider component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    try {
      const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const storedCount = storedItems.length;
      setCartItems(storedItems);
      setCartCount(storedCount);
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  }, []);

  const addToCart = (item) => {
    try {
      const updatedCartItems = [...cartItems, item];
      setCartItems(updatedCartItems);
      setCartCount(updatedCartItems.length);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const removeFromCart = (index) => {
    try {
      const updatedCartItems = cartItems.filter((_, i) => i !== index);
      setCartItems(updatedCartItems);
      setCartCount(updatedCartItems.length);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
