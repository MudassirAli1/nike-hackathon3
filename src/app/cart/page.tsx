"use client"; 
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="relative mx-auto max-w-6xl p-4">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex-1 md:mr-4">
          <div className="bg-gray-200 p-4 mb-4">
            <h4 className="font-semibold text-sm text-black">Free Delivery</h4>
            <p className="text-xs text-black">
              Applies to orders of ₹ 14,000.00 or more.
              <a href="/" className="text-xs underline text-black">
                {" "}
                View Details
              </a>
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
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value, 10))
                        }
                        className="w-16 p-1 border rounded text-center text-black border-black"
                      />
                    </div>
                    <div className="flex mt-2">
                      <button
                        className="text-black hover:text-[#9E3500]"
                        onClick={() => removeFromCart(item.id)}
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
            <Link href="/Checkout">
              <button className="w-full mt-4 bg-[#111111] text-white py-2 rounded-[30px] transition-transform duration-200 transform hover:scale-105">
                Member Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
