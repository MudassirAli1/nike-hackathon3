import Link from 'next/link';
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaMobileScreenButton } from "react-icons/fa6";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";


const Help = () => {
  return (
<div className="w-full h-full mb-10 bg-white">
  <header className="py-8">
    <div className="container bg-white mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-gray-800">GET HELP</h1>
      <div className="flex mt-4 bg-white items-center justify-center ">
        <input
          type="text"
          placeholder="What can we help you with?"
          className="border-l-2 border-t-2 border-b-2 border-gray-300 px-4 py-2 w-full sm:w-[457.33px] h-[56px] outline-none"
        />
        <button className="h-[56px] border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-md text-black font-bold py-2 px-4">
          <IoSearchOutline className="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>

  <div className="flex flex-wrap lg:flex-nowrap">
    {/* Left Section */}
    <div className="w-full lg:w-[70%] h-auto bg-white px-4 md:px-8 lg:px-10 border-r-2">
      <h1 className="text-2xl sm:text-3xl font-semibold text-black">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
      <h6 className="text-sm sm:text-base font-medium pt-10 text-black">
        We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
      </h6>
      <div className="mt-10">
        <p className='text-black'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
        <p className="mt-5 text-sm md:text-base text-black">
          If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
        </p>
        <p className="mt-5 text-black">Apple Pay</p>
      </div>
      <div className="mt-10">
      <div>
  <Link href={'/'} className="underline text-black">Nike Members</Link>
  <p className='text-black'>can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,</p>
  <Link href={'/pages/Joinus'} className="underline text-black">join us</Link>
  <p className='text-black'>today.</p>
</div>
        <div className=" flex space-x-5 mt-5">
          <Link href={'/pages/Joinus'}>
            <button className="bg-black text-white w-[110px] h-[40px] rounded-3xl text-md">JOIN US</button>
          </Link>
          <Link href={'/pages/Allproductpage'}>
            <button className="bg-black text-white w-[160px] h-[40px] rounded-3xl text-lg">SHOP NIKE</button>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-black font-bold text-xl">FAQs</h1>
        <div>
          <h6 className="text-black font-semibold mt-5">Does my card need international purchases enabled?</h6>
          <p className="mt-3 text-sm md:text-base text-black">
            Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
          </p>
        </div>
        <div className="mt-5 text-black">
          <p>
            Please note, some banks may charge a small transaction fee for international orders.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-black font-semibold mt-5">Can I pay for my order with multiple methods?</h1>
        <p className="text-sm md:text-base text-black">
          No, payment for Nike orders can't be split between multiple payment methods.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-black font-semibold mt-5 ">Why don't I see Apple Pay as an option?</h1>
        <p className="text-sm md:text-base text-black">
          To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
        </p>
      </div>
      <div>
        <div className="mt-5 ">
          <h1 className='text-black'>Was this answer helpful?</h1>
          <div className="flex items-center gap-2 text-black">
            <BiSolidLike size={30} />
            <BiSolidDislike size={30} />
          </div>
        </div>
        <div className="mt-5 mb-5 ">
          <h1 className="text-gray-500">RELATED</h1>
          <div className="ml-4">
            <Link href={'/'}>
              <h2 className="text-black font-semibold mt-5 underline">WHAT ARE NIKE'S DELIVERY OPTIONS?</h2>
            </Link>
            <Link href={'/'}>
              <h2 className="text-black font-semibold mt-2 underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-[30%] h-auto bg-white px-4 md:px-5">
      <h1 className="text-2xl sm:text-3xl text-center font-bold text-black">CONTACT US</h1>
      <div className="flex flex-col items-center justify-center text-center p-4 mt-10 text-black">
        <FaMobileScreenButton size={80} />
        <p className="text-lg font-bold mb-2 text-black">000 800 919 0566</p>
        <p className="text-gray-700 text-sm mb-2">
          Products & Orders: 24 hours a day, <br /> 7 days a week
        </p>
        <p className="text-gray-700 text-sm">
          Company Info & Enquiries: 07:30 - 16:30, <br /> Monday - Friday
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-4 text-black">
        <LuMessageSquareMore size={80} />
        <p className="text-gray-700 text-sm mb-2">24 hours a day</p>
        <p className="text-gray-700 text-sm">7 days a week</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-4 text-black">
        <MdOutlineEmail size={80} />
        <p className="text-gray-700 text-sm mb-2">We'll reply within</p>
        <p className="text-gray-700 text-sm">five business days</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-4 text-black">
        <MdLocationOn size={80} />
        <p className="text-gray-700 text-sm mb-2">STORE LOCATOR</p>
        <p className="text-gray-700 text-sm">Find Nike retail stores near you</p>
      </div>
    </div>
  </div>
</div>

   
    
  )
}

export default Help