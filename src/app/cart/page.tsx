import React from 'react';
import Image from 'next/image';
import Cart1 from '/public/assets/products/cart1.png';
import Cart2 from '/public/assets/products/product1.png';
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="relative mx-auto max-w-6xl p-4">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex-1 md:mr-4 ">
          <div className="bg-gray-200 p-4 mb-4">
            <h4 className="font-semibold text-sm text-black">Free Delivery</h4>
            <p className="text-xs text-black">Applies to orders of ₹ 14,000.00 or more.
            <a href="/" className="text-xs underline text-black">View Details</a></p>
            <h1 className="text-xl mt-2 text-black">Bag</h1>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col gap-4">
            {/* Cart Item 1 */}
            <div className="flex flex-col md:flex-row items-start bg-white p-4 rounded shadow  transition-transform duration-200 transform hover:scale-105">
              <Image src={Cart1} alt='Img' className="w-24 h-24 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h1 className="font-medium text-lg text-black">Nike Dri-FIT ADV TechKnit Ultra</h1>
                <p className="text-gray-600">Men's Short-Sleeve Running Top</p>
                <p className="text-gray-600">Ashen Slate/Cobalt Bliss</p>
                <div className="flex justify-between">
                  <p className="text-gray-600">Size: L</p>
                  <p className="text-gray-600">Quality: 1</p>
                </div>
                <p className="text-right text-black">MRP: ₹ 3,895.00</p>
                <div className="flex mt-2">
                  <button className='text-black hover:text-[#9E3500]'><FaRegHeart size={20} /></button>
                  <button className='text-black hover:text-[#9E3500] ml-2'><RiDeleteBinLine size={20} /></button>
                </div>
              </div>
            </div>

            {/* Cart Item 2 */}
            <div className="flex flex-col md:flex-row items-start bg-white p-4 rounded shadow  transition-transform duration-200 transform hover:scale-105">
              <Image src={Cart2} alt='Img' className="w-24 h-24 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h1 className="font-medium text-lg text-black">Nike Air Max 97 SE</h1>
                <p className="text-gray-600">Men's Shoes</p>
                <p className="text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                <div className="flex justify-between">
                  <p className="text-gray-600">Size: 8</p>
                  <p className="text-gray-600">Quality: 1</p>
                </div>
                <p className="text-right text-black">MRP: ₹ 3,895.00</p>
                <div className="flex mt-2">
                  <button className='text-black hover:text-[#9E3500]'><FaRegHeart size={20} /></button>
                  <button className='text-black hover:text-[#9E3500] ml-2'><RiDeleteBinLine size={20} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-none w-full md:w-1/3 mt-4 md:mt-0">
          <h1 className="text-xl font-medium mb-4 text-black">Summary</h1>
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between mb-2">
              <p className='text-black'>Subtotal</p>
              <p className='text-black'>₹ 20,890.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className='text-black'>Estimated Delivery & Handling</p>
              <p className='text-black'> Free</p>
            </div>
            <div className="flex justify-between border-t border-b py-2">
              <p className='text-black'>Total</p>
              <p className="font-medium text-black">₹ 20,890.00</p>
            </div>
            <a href="/Checkout">  <button className="w-full mt-4 bg-[#111111] text-white py-2 rounded-[30px]  transition-transform duration-200 transform hover:scale-105">Member Checkout </button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;