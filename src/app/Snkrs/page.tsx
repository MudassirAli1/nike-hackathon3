"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import client from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  image: string;
  status: string;
  colors: string;
}

export default function MenPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedSortOption, setSelectedSortOption] = useState<string>("");

  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const query = `*[_type == "product" && (category == "Men's Shoes" || category == "Women's Shoes")] 
 {
          _id,
          productName,
          category,
          price,
          "image": image.asset->url,
          status,
          colors
        }`;

        const data = await client.fetch(query);
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching men's products:", error);
      }
    };

    fetchMenProducts();
  }, []);

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRange(range);
  };

  const handleSortChange = (sortOption: string) => {
    setSelectedSortOption(sortOption);
  };

  useEffect(() => {
    let filtered = [...products];

    // Filter by price range
    if (selectedPriceRange) {
      filtered = filtered.filter((product) => {
        switch (selectedPriceRange) {
          case "Under ₹1,000":
            return product.price < 1000;
          case "₹1,000 - ₹2,500":
            return product.price >= 1000 && product.price < 2500;
          case "₹2,500 - ₹5,000":
            return product.price >= 2500 && product.price < 5000;
          case "₹5,000 - ₹10,000":
            return product.price >= 5000 && product.price < 10000;
          case "₹10,000 - ₹20,000":
            return product.price >= 10000 && product.price < 20000;
          case "₹20,000 - ₹50,000":
            return product.price >= 20000 && product.price < 50000;
          case "Above ₹50,000":
            return product.price >= 50000;
          default:
            return true;
        }
      });
    }

    // Sort products based on selected option
    if (selectedSortOption === "Low to High") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === "High to Low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [selectedPriceRange, selectedSortOption, products]);

  return (
    <div className="relative w-full max-w-[1440px] mx-auto bg-white py-10">
      {/* Header Section */}
      <div className="w-full h-[51px] bg-white flex items-center justify-between px-4">
        <h1 className="text-[24px] font-sans font-medium text-black truncate">Men's Products</h1>
        <div className="flex items-center gap-4">
          <select
            value={selectedSortOption}
            onChange={(e) => handleSortChange(e.target.value)}
            className="text-black font-sans p-1 border rounded-md"
          >
            <option value="" disabled selected>
              Sort By
            </option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row px-4 md:px-6 lg:px-8 gap-6">
        {/* Sidebar Section */}
        <div className="w-full md:w-[260px] flex-shrink-0">
          <div className="flex flex-col gap-4">
            {/* Shop By Price Dropdown */}
            <div className="flex flex-col w-full border-b border-solid border-[#E5E5E5] py-2">
              <h3 className="flex items-center text-black font-sans cursor-pointer font-semibold mb-2">Shop By Price</h3>
              <select
                value={selectedPriceRange}
                onChange={(e) => handlePriceRangeChange(e.target.value)}
                className="p-2 border rounded-md text-black font-sans"
              >
                <option value="">Select Price Range</option>
                <option value="Under ₹1,000">Under ₹1,000</option>
                <option value="₹1,000 - ₹2,500">₹1,000 - ₹2,500</option>
                <option value="₹2,500 - ₹5,000">₹2,500 - ₹5,000</option>
                <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                <option value="Above ₹50,000">Above ₹50,000</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Link key={product._id} href={`/product/${product.productName}`}>
                <div className="border p-4 border-gray-300 rounded-lg transition-transform duration-200 transform hover:scale-105 flex flex-col h-full">
                  <div className="flex justify-center mb-4">
                    <Image src={urlFor(product.image).url()} alt={product.productName} width={200} height={200} />
                  </div>
                  <p className="font-sans font-medium text-[15px] leading-[28px] text-[#9E3500] m-1">
                    {product.status}
                  </p>
                  <h3 className="font-sans font-medium text-[15px] leading-[24px] text-[#111111] truncate">
                    {product.productName}
                  </h3>
                  <p className="font-sans font-normal text-[12px] leading-[24px] text-[#757575] truncate">
                    {product.category}
                  </p>
                  <p className="font-sans font-normal text-[15px] leading-[24px] text-[#757575] truncate">
                    {product.colors}
                  </p>
                  <p className="font-sans font-medium text-[15px] leading-[28px] text-[#111111]">
                    MRP: ₹{product.price}
                  </p>
                  <div className="flex-grow"></div> {/* Ensures equal height */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
