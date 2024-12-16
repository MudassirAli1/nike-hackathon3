import Image from "next/image";
import Link from "next/link";
import Nike from "/public/assets/logo/nikelogo.png"
import React from "react";
import Logo from "/public/assets/logo/toplogo.png"

import { CiHeart } from "react-icons/ci";
import { FaSearch  } from 'react-icons/fa'; 
import { IoCartOutline } from "react-icons/io5";
export default function Nav() {
  return (
    <header className='bg-white'>
    {/* Top bar */}
    <div className="bg-[#fafafa] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
      <Image src={Logo} alt={'Logo'} width={24} height={24}/>
      <div>
 
</div>
      <div className="flex md:gap-4 sm:gap-3 gap-2">
        <Link href="/" className="hover:text-gray-800">Find Link Store</Link>
        <Link href="/help" className="hover:text-gray-800">Help</Link>
        <Link href="/join" className="hover:text-gray-800">Join us</Link>
        <Link href="/login"  className="hover:text-gray-800">Sign In</Link>
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
        <Link href="/detail" className="hover:text-black whitespace-nowrap">Men</Link>
        <Link href="/" className="hover:text-black whitespace-nowrap">Women</Link>
        <Link href="/" className="hover:text-black whitespace-nowrap">Kids</Link>
        <Link href="/Sale" className="hover:text-black whitespace-nowrap">Sale</Link>
        <Link href="/detail" className="hover:text-black whitespace-nowrap">SNKRS</Link>
      </nav>

      {/* Right section (Search, Wishlist, Cart) */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none text-black"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
        <CiHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
       <a href="/cart"> <IoCartOutline  className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" /></a>
      </div>
    </div>

    {/* Mobile Search Bar */}
    <div className="block md:hidden px-6 mt-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full "
        />
        <FaSearch className="absolute right-3 top-2.5 text-gray-500" />

      </div>
      
    </div>
  </header>
  );
}