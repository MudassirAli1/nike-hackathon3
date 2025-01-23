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

export default function MenCategory() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedSortOption, setSelectedSortOption] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch only men's products
        const query = `*[_type == "product" && category == "Men"] {
          _id,
          productName,
          category,
          price,
          "image": image.asset->url,
          status,
          colors
        }`;

        const data = await client.fetch(query);
        console.log("Fetched men's products:", data); // For debugging purposes

        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
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
          <button className="flex items-center gap-2 text-black font-sans">
            <span>Hide Filters</span>
            <Image src="/assets/icons/setting.png" alt="Settings Icon" width={16} height={16} />
          </button>
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
            <option value="Best Match">Best Match</option>
          </select>
        </div>
      </div>

      {/* Main Section */}
      <div className="px-4 md:px-6 lg:px-8">
        {/* Products Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Link key={product._id} href={`/product/${product.productName}`}>
              <div className="border p-2 border-gray-300 rounded-lg transition-transform duration-200 transform hover:scale-105">
                <div className="flex justify-center">
                  <Image src={urlFor(product.image).url()} alt={product.productName} width={200} height={200} />
                </div>
                <p className="h-[28px] font-sans font-medium text-[15px] leading-[28px] text-[#9E3500] m-1">
                  {product.status}
                </p>
                <h3 className="h-[24px] font-sans font-medium text-[15px] leading-[24px] text-[#111111]">
                  {product.productName}
                </h3>
                <p className="h-[24px] font-sans font-normal text-[12px] leading-[24px] text-[#757575]">
                  {product.category}
                </p>
                <p className="h-[24px] font-sans font-normal text-[15px] leading-[24px] text-[#757575]">
                  {product.colors}
                </p>
                <p className="h-[24px] font-sans font-medium text-[15px] leading-[28px] text-[#111111]">
                  MRP: ₹{product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
