"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [notification, setNotification] = useState<string | null>(null);

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
  };

  const handleRemoveFromCart = (itemId: string) => {
    removeFromCart(itemId);
    showNotification("Item removed from cart");
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    updateQuantity(itemId, quantity);
    showNotification("Quantity updated");
  };

  const handleIncrement = (itemId: string, quantity: number) => {
    handleUpdateQuantity(itemId, quantity + 1);
  };

  const handleDecrement = (itemId: string, quantity: number) => {
    if (quantity > 1) {
      handleUpdateQuantity(itemId, quantity - 1);
    }
  };

  return (
    <div className="relative mx-auto max-w-6xl p-4">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-6 rounded-lg shadow-lg transition-opacity duration-300">
          {notification}
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex-1 md:mr-4">
          <div className="bg-gray-200 p-4 mb-4">
            <h4 className="font-semibold text-sm text-black">Free Delivery</h4>
            <p className="text-xs text-black">
              Applies to orders of ₹ 14,000.00 or more.
              <a href="/" className="text-xs underline text-black"> View Details</a>
            </p>
            <h1 className="text-xl mt-2 text-black">Bag</h1>
          </div>

          {/* Cart Items */}
          {cartItems.length > 0 ? (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-start bg-white p-4 rounded shadow transition-transform duration-200 transform hover:scale-105"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                    width={96}
                    height={96}
                  />
                  <div className="flex-1 ml-4">
                    <h1 className="font-medium text-lg text-black">
                      {item.name}
                    </h1>
                    <p className="text-gray-600">Price: ₹ {item.price}</p>
                    <div className="flex items-center mt-2">
                      <label className="mr-2 text-black">Quantity:</label>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDecrement(item.id, item.quantity)}
                          className="p-2 text-white bg-black hover:bg-gray-700 rounded-[5px] transition duration-300"
                        >
                          -
                        </button>
                        <span className="px-4 text-black">{item.quantity}</span>
                        <button
                          onClick={() => handleIncrement(item.id, item.quantity)}
                          className="p-2 text-white bg-black hover:bg-gray-700 rounded-[5px] transition duration-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      <button
                        className="text-black hover:text-[#9E3500]"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <RiDeleteBinLine size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-4 rounded shadow text-center">
              <p className="text-gray-600">Your cart is empty.</p>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex-none w-full md:w-1/3 mt-4 md:mt-0">
          <h1 className="text-xl font-medium mb-4 text-black">Summary</h1>
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between mb-2">
              <p className="text-black">Subtotal</p>
              <p className="text-black">₹ {calculateSubtotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-black">Estimated Delivery & Handling</p>
              <p className="text-black">₹ 50.00</p>
            </div>
            <div className="flex justify-between border-t border-b py-2">
              <p className="text-black">Total</p>
              <p className="font-medium text-black">
                ₹ {calculateSubtotal().toFixed(2)}
              </p>
            </div>
            <Link href="/Checkout" className="mt-4 block text-center bg-black text-white py-2 rounded">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
