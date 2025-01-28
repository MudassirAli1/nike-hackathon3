"use client";
import Image from "next/image";
import Link from "next/link";
import Nike from "/public/assets/logo/nikelogo.png";
import React, { useState, useEffect } from "react";
import Logo from "/public/assets/logo/toplogo.png";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";
import client from "@/sanity/lib/client"; // Sanity client import
import { urlFor } from "@/sanity/lib/image"; // If you use an image URL function

export default function Nav() {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term state
  const [searchResults, setSearchResults] = useState<any[]>([]); // Search results state
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state for search

  // Fetch suggestions when the search term changes
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim() === "") {
        setSearchResults([]);
        return;
      }

      setIsLoading(true);

      const query = `*[_type == "product" && productName match "${searchTerm}*"] {
        _id,
        productName,
        price,
        "image": image.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  return (
    <header className="bg-white">
      {/* Top bar */}
      <div className="bg-[#fafafa] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
        <Image src={Logo} alt={'Logo'} width={24} height={24} />
        <div />
        <div className="flex md:gap-4 sm:gap-3 gap-2">
          <Link href="/" className="hover:text-gray-800">Find Link Store </Link>
          <Link href="/help" className="hover:text-gray-800">Help </Link>
          <Link href="/join" className="hover:text-gray-800">Join us </Link>
          <Link href="/login" className="hover:text-gray-800">Sign In</Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <Image
            src={Nike}
            alt="Nike Logo"
            width={35} height={35}
          />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px] ">
          <Link href="/" className="hover:text-black whitespace-nowrap">New & Featured</Link>
          <Link href="/mens" className="hover:text-black whitespace-nowrap">Men</Link>
          <Link href="/" className="hover:text-black whitespace-nowrap">Women</Link>
          <Link href="/kids" className="hover:text-black whitespace-nowrap">Kids</Link>
          <Link href="/sale" className="hover:text-black whitespace-nowrap">Sale</Link>
          <Link href="/detail" className="hover:text-black whitespace-nowrap">SNKRS</Link>
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="relative hidden md:block text-black">
            <input
              type="search"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
            {searchTerm && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 bg-white shadow-md z-10 mt-2">
                <ul className="max-h-60 overflow-y-auto">
                  {isLoading ? (
                    <li className="p-2 text-gray-500">Loading...</li>
                  ) : (
                    searchResults.map((product) => (
                      <li key={product._id} className="p-2 border-b border-gray-300">
                        <Link href={`/product/${encodeURIComponent(product.productName)}`} className="flex items-center gap-2">
                          <Image src={urlFor(product.image).url()} alt={product.productName} width={40} height={40} />
                          <span>{product.productName}</span>
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </div>
          <Link href={"/wishlist"}>
          <CiHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          </Link>
          
          <Link href="/cart">
            <IoCartOutline className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          </Link>
        </div>
      </div>
    </header>
  );
}
