"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBox } from "react-icons/fa";
import { useCart } from "../Context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handlePlaceOrder = () => {
    setIsPopupVisible(true);

    // Hide popup after 3 seconds and redirect to home page
    setTimeout(() => {
      setIsPopupVisible(false);
      window.location.href = '/'; // Redirect to the homepage
    }, 3000);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 text-black">
      {/* Popup Notification */}
      {isPopupVisible && (
        <div className="fixed top-0 left-0 right-0 bg-black text-white text-center py-3">
          Order placed successfully!
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Left Column - Form */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6 text-black">How would you like to get your order?</h2>
          <p className='text-[#8D8D8D]'>
            Customs regulation for India require a copy of the recipient's KYC...
          </p>
          <div className=" flex mb-4 border-solid border-black rounded-xl border-2 h-[82px] w-[440px] gap-[24px] items-center pl-10 mt-5">
            <FaBox />
            Deliver It
          </div>

          {/* Shipping Form Fields */}
          <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="input-class" />
            <input type="text" placeholder="Last Name" className="input-class" />
            <input type="text" placeholder="Address Line 1" className="input-class" />
            <input type="text" placeholder="Address Line 2" className="input-class" />
            <input type="text" placeholder="Address Line 3" className="input-class" />
            <input type="text" placeholder="Postal Code" className="input-class" />
            <input type="text" placeholder="Locality" className="input-class" />
          </div>

          {/* Contact Information */}
          <h3 className="text-lg font-semibold mt-6 mb-4">What's your contact information?</h3>
          <input type="email" placeholder="Email" className="input-class" />
          <input type="tel" placeholder="Phone Number" className="input-class" />

          {/* PAN */}
          <h3 className="text-lg font-semibold mt-6 mb-4">What's your PAN?</h3>
          <input type="text" placeholder="PAN" className="input-class text-gray-600" />

          <div className="mt-6 flex justify-center">
            <button 
              onClick={handlePlaceOrder} 
              className="w-[500px] h-[50px] bg-black text-white py-2 rounded-3xl transition-transform duration-200 transform hover:scale-105"
            >
              Place Order
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="border-b pb-4 mb-4">
            <p>Order Subtotal</p>
            <p className="text-right font-semibold">₹ {calculateSubtotal().toFixed(2)}</p>
          </div>
          <div className="text-lg font-semibold mb-4">
            <p>Total</p>
            <p className="text-right">₹ {calculateSubtotal().toFixed(2)}</p>
          </div>
          <div className="text-xs text-[#8D8D8D]">
            <p>(The total reflects the price of your order, including all duties and taxes)</p>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
                width={64}
                height={64}
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
