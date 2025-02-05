"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBox } from "react-icons/fa";
import { useCart } from "../Context/CartContext";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
  email: string;
  phone: string;
  pan: string;
}

const Checkout = () => {
  const { cartItems } = useCart();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    email: "",
    phone: "",
    pan: "",
  });

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.email ||
      !formData.phone ||
      !formData.pan
    ) {
      alert("Please fill out all the required fields.");
      return;
    }

    setIsPopupVisible(true);

    const orderData = {
      ...formData,
      cartItems: cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Order Stored in Sanity:", data);
        setTimeout(() => {
          setIsPopupVisible(false);
          window.location.href = "/";
        }, 3000);
      } else {
        alert(`Failed to place order: ${data.message}`);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 text-black">
      {isPopupVisible && (
        <div className="fixed top-0 left-0 right-0 bg-black text-white text-center py-3 z-50">
          Order placed successfully!
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Left Column - Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">How would you like to get your order?</h2>

          <div className="flex mb-4 border rounded-xl border-gray-300 h-[82px] w-full md:w-[440px] gap-6 items-center pl-6 mt-5">
            <FaBox className="text-xl" />
            <span>Deliver It</span>
          </div>

          {/* Shipping Form Fields */}
          <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleFormChange}
              className="input-class w-full border border-gray-400 rounded-md py-1 pl-[5px]"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleFormChange}
              className="input-class w-full border border-gray-400 rounded-md py-1 pl-[5px]"
            />
            <input
              type="text"
              name="address"
              placeholder="Address Line"
              value={formData.address}
              onChange={handleFormChange}
              className="input-class w-full border border-gray-400 rounded-md py-1 pl-[5px]"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleFormChange}
              className="input-class w-full border border-gray-400 rounded-md py-1 pl-[5px]"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleFormChange}
              className="input-class w-full border border-gray-400 rounded-md py-1 pl-[5px]"
            />
          </div>

          {/* Contact Information */}
          <h3 className="text-lg font-semibold mt-6 mb-4">What's your contact information?</h3>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
            className="input-class w-full mb-1 border border-gray-400 rounded-md py-1 pl-[5px]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleFormChange}
            className="input-class w-full border border-gray-400 rounded-md py-1 pl-[5px]"
          />

          {/* PAN */}
          <h3 className="text-lg font-semibold mt-6 mb-4">What's your PAN?</h3>
          <input
            type="text"
            name="pan"
            placeholder="PAN"
            value={formData.pan}
            onChange={handleFormChange}
            className="input-class w-full text-gray-600 border border-gray-400 rounded-md py-1 pl-[5px]"
          />
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
          <div className="text-xs text-gray-500">
            <p>
              (The total reflects the price of your order, including all duties
              and taxes)
            </p>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4">
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
          <button
            onClick={handlePlaceOrder}
            className="btn-primary w-full py-2 text-center rounded-md bg-black text-white hover:bg-gray-800"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
