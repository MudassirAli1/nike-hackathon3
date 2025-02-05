"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { client } from "../../sanity/lib/client";  // Ensure this is correctly set up to interact with Sanity

interface CartItem {
  _id: string;  // Use _id for the document reference from Sanity
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;  // Image added to the cart item
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Try to get cart items from localStorage first
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart)); // If available, set it to state
    } else {
      // Fetch cart data from Sanity when component mounts if no localStorage data
      const fetchCartData = async () => {
        const data = await client.fetch(`*[_type == "cartItem"]`);
        setCartItems(data);
        localStorage.setItem("cartItems", JSON.stringify(data)); // Sync data to localStorage
      };
      fetchCartData();
    }
  }, []);

  const addToCart = async (item: CartItem) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        updatedCart = [...prevCart, item];
      }

      // Save to Sanity after update
      client.create({
        _type: "cartItem",
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,  // Make sure image is included
      });

      // Sync with localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));

    // Remove from Sanity by matching document _id
    const itemToDelete = cartItems.find(item => item.id === id);
    if (itemToDelete) {
      client.delete(itemToDelete._id); // Use _id, not id

      // Sync with localStorage
      const updatedCart = cartItems.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );

    // Update Sanity cart item quantity using patch
    client.patch(id).set({ quantity: Math.max(quantity, 1) });

    // Sync with localStorage
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    // Optionally clear cart in Sanity
    client.delete({ query: '*[_type == "cartItem"]' });

    // Clear from localStorage
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
