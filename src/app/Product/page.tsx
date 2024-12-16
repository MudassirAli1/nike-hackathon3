"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowUp } from "react-icons/io";
import Icon from '/public/assets/icons/setting.png';

import Product1 from '/public/assets/products/product1.png';
import Product2 from '/public/assets/products/product2.png';
import Product3 from '/public/assets/products/product3.png';
import Product4 from '/public/assets/products/product4.png';
import Product5 from '/public/assets/products/product5.png';
import Product6 from '/public/assets/products/product6.png';
import Product7 from '/public/assets/products/product7.png';
import Product8 from '/public/assets/products/product8.png';
import Product9 from '/public/assets/products/product9.png';
import Product10 from '/public/assets/products/product10.png';
import Product11 from '/public/assets/products/product11.png';
import Product12 from '/public/assets/products/product12.png';

const products = [
    { name: "Nike Air Force 1 Mid '07", category: "Men's Shoes", color: "1 Colour", price: "₹ 10,795.00", tag: "Just In", image: Product1 },
    { name: "Nike Court Vision Low Next Nature", category: "Men's Shoes", color: "1 Colour", price: "₹ 4,995.00", tag: "Just In", image: Product2 },
    { name: "Nike Air Force 1 PLT.AF.ORM", category: "Women's Shoes", color: "1 Colour", price: "₹ 8,695.00", tag: "Just In", image: Product3 },
    { name: "Nike Air Force 1 React", category: "Men's Shoes", color: "1 Colour", price: "₹ 13,295.00", tag: "Just In", image: Product4 },
    { name: "Air Jordan 1 Elevate Low", category: "Women's Shoes", color: "1 Colour", price: "₹ 11,895.00", tag: "Promo Exclusion", image: Product5 },
    { name: "Nike Standard Issue", category: "Women's Basketball Jersey", color: "1 Colour", price: "₹ 2,895.00", tag: "Just In", image: Product6 },
    { name: "Nike Dunk Low Retro SE", category: "Men's Shoes", color: "1 Colour", price: "₹ 9,695.00", tag: "Promo Exclusion", image: Product7 },
    { name: "Nike Dri-FIT UV Hyverse", category: "Men's Short-Sleeve Graphic Fitness Top", color: "1 Colour", price: "₹ 2,495.00", tag: "Sustainable Materials", image: Product8 },
    { name: "Nike Court Vision Low", category: "Men's Shoes", color: "1 Colour", price: "₹ 5,695.00", tag: "Just In", image: Product9 },
    { name: "Nike DRY-FIT Ready", category: "Men's Shorts-Sleeve Fitness Top", color: "3 Colour", price: "₹ 2,495.00", tag: "Just In", image: Product10 },
    { name: "Nike One Leak Protection - Period", category: "Women's Mid-Rise 18cm Biker Shorts", color: "3 Colour", price: "₹ 2,495.00", tag: "Just In", image: Product11 },
    { name: "Nike Air Force 1 LV8 3", category: "Older Kids' Shoe", color: "1 Colour", price: "₹ 7,495.00", tag: "Just In", image: Product12 },
];

const Product = () => {
    return (
        <div className='relative w-full max-w-[1440px] mx-auto bg-white py-10'>
            {/* Top Bar */}
            <div className='w-full h-[51px] bg-white flex items-center justify-between px-4'>
                <h1 className="text-[24px] font-sans font-medium text-black truncate">
                    New (500)
                </h1>
                <div className='flex items-center gap-4'>
                    <button className="flex items-center gap-2 text-black font-sans">
                        <span>Hide Filters</span>
                        <Image src={Icon} alt="Settings Icon" width={16} height={16} />
                    </button>
                    <select
                        className='text-black font-sans p-1 border rounded-md'      
                    >
                        <option value="" disabled selected>Sort By</option>
                        <option value="Low to High">Low to High</option>
                        <option value="High to Low">High to Low</option>
                        <option value="Best Match">Best Match</option>
                    </select>
                </div>
            </div>

            {/* Content Wrapper */}
            <div className='flex flex-col md:flex-row px-4 md:px-6 lg:px-8 gap-6'>
                {/* Left Sidebar */}
                <div className='w-full md:w-[260px] flex-shrink-0'>
                    <div className='flex flex-col gap-4'>
                        {/* Categories */}
                        <div>
                            {['Shoes', 'Sports Bras', 'Tops & T-Shirts', 'Hoodies & Sweatshirts', 'Jackets'].map((item, index) => (
                                <a key={index} href="/" className='block py-2 px-4 text-black hover:text-[#9E3500] transition-transform duration-200 hover:scale-105'>
                                    {item}
                                </a>
                            ))}
                        </div>
                        {/* Filters */}
                        {[{ title: 'Gender', options: ['Men', 'Women', 'Unisex'] }].map((filter, index) => (
                            <div key={index} className='border-t border-b border-solid border-[#E5E5E5] py-2'>
                                <h3 className="flex items-center justify-between font-sans cursor-pointer font-semibold text-black mb-2">
                                    {filter.title} <IoIosArrowUp />
                                </h3>
                                {filter.options.map((option, idx) => (
                                    <label key={idx} className="flex items-center gap-2 mb-1">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span className='text-black'>{option}</span>
                                    </label>
                                ))}
                            </div>
                        ))}
                        <div className='flex flex-col w-full border-b border-solid border-[#E5E5E5]'>
                            <h3 className="flex items-center justify-between text-black font-sans cursor-pointer font-semibold mb-2">
                                Kids <IoIosArrowUp />
                            </h3>
                            {['Boys', 'Girls'].map((kid, index) => (
                                <label key={index} className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className='text-black font-sans'>{kid}</span>
                                </label>
                            ))}
                        </div>

                        <div className='flex flex-col w-full border-b border-solid border-[#E5E5E5]'>
                            <h3 className="flex items-center justify-between text-black font-sans cursor-pointer font-semibold mb-2">
                                Shop By Price <IoIosArrowUp />
                            </h3>
                            {['Under ₹ 2,500.00', '₹ 2,501.00 - ₹ 7,500.00'].map((price, index) => (
                                <label key={index} className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className='text-black font-sans'>{price}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className='flex-1'>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {products.map((product, index) => (
                            <div key={index} className="border p-2 border-gray-300 rounded-lg transition-transform duration-200 transform hover:scale-105">
                                <div className="flex justify-center">
                                    <Image src={product.image} alt={product.name} width={200} height={200} />
                                </div>
                                <p className="h-[28px] font-sans font-medium text-[15px] leading-[28px] text-[#9E3500] m-1">{product.tag}</p>
                                <h3 className="h-[24px] font-sans font-medium text-[15px] leading-[24px] text-[#111111]">{product.name}</h3>
                                <p className="h-[24px] font-sans font-normal text-[15px] leading-[24px] text-[#757575]">{product.category}</p>
                                <p className="h-[24px] font-sans font-normal text-[15px] leading-[24px] text-[#757575]">{product.color}</p>
                                <p className="h-[24px] font-sans font-medium text-[15px] leading-[28px] text-[#111111]">MRP: {product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;