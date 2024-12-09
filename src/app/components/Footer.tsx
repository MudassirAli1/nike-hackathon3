import React from 'react'
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
 
    <div>
      <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Become a Member</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Sign Up for Email</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Student Discounts</Link></li>
      </ul>
    </div>

    
    <div>
      <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Order Status</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Delivery</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Returns</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Payment Options</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Contact Us on Nike.com</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Contact Us on All Other Inquiries</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">News</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Careers</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Investors</Link></li>
        <li><Link href="#" className="hover:underline text-[#6E7E7E] hover:text-white ">Sustainability</Link></li>
      </ul>
    </div>

    <div className="flex justify-end gap-4">
      <FaTwitter className="text-lg cursor-pointer text-[#6E7E7E] transition-transform duration-200 transform hover:scale-105" />
      <FaFacebook className="text-lg cursor-pointer text-[#6E7E7E] transition-transform duration-200 transform hover:scale-105" />
      <FaYoutube className="text-lg cursor-pointer text-[#6E7E7E] transition-transform duration-200 transform hover:scale-105" />
      <FaInstagram className="text-lg cursor-pointer text-[#6E7E7E] transition-transform duration-200 transform hover:scale-105" />
    </div>
  </div>


  <div className="mt-8 border-t border-gray-700 pt-4">
    <div className="container mx-auto flex flex-wrap justify-between items-center text-xs text-gray-400">
     
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <IoLocationOutline  className='text-white'/>
        <p className='text-white'>India</p>
        <p>© 2023 Nike, Inc. All Rights Reserved</p>
      </div>

     
      <div className="flex flex-wrap gap-4">
        <Link href="#" className="hover:underline hover:text-white transition-transform duration-200 transform hover:scale-105">Guides</Link>
        <Link href="#" className="hover:underline hover:text-white transition-transform duration-200 transform hover:scale-105">Terms of Sale</Link>
        <Link href="#" className="hover:underline hover:text-white transition-transform duration-200 transform hover:scale-105">Terms of Use</Link>
        <Link href="#" className="hover:underline hover:text-white transition-transform duration-200 transform hover:scale-105">Nike Privacy Policy</Link>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer