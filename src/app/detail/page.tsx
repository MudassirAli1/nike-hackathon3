import React from "react";
import Image from "next/image";
import Item from "/assets/items/image4.png"
import { CiShoppingCart } from "react-icons/ci";
const Detail =()=> {
  return(
    
    <div id="detail"className="relative w-full max-w-[1200px] h-auto mx-auto mt-12 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full h-auto space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Image Section */}
      <div className="w-full lg:w-[653px] h-auto lg:h-[653px] flex justify-center items-center">
        <Image 
          src={Item} 
          alt="Nike Air Force 1" 
          height={653} 
          width={653} 
          objectFit="contain"
          className="max-w-full h-auto"
        />
      </div>
      
      {/* Text and Button Section */}
      <div className="w-full lg:w-[374.92px] h-auto lg:h-[1041px] lg:pl-8 space-y-6">
        <h1 className="font-Poppins font-medium text-3xl lg:text-[48px] text-black leading-tight text-center lg:text-left">
          Nike Air Force 1 PLT.AF.ORM
        </h1>
  
        <div>
          <p className="text-[#333333] font-sans font-normal text-sm lg:text-base leading-relaxed text-center lg:text-left">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>
        </div>
  
        <div>
          <p className="text-[#111111] font-poppins font-semibold text-2xl lg:text-[36px] leading-tight text-center lg:text-left">
            ₹ 8 695.00
          </p>
        </div>
  
        <div className="flex justify-center lg:justify-start">
          <button className="
            flex   items-center justify-center font-sans font-bold bg-black  text-white rounded-[30px] py-3   px-6 w-full max-w-[300px]transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black group
          ">
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 30 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="mr-2 group-hover:animate-bounce"
            >
              {/* SVG path remains the same */}
              <path d="M3.82324 4.42676L6.33658 4.86176L7.5002 18.725C7.5449 19.2705 7.79364 19.7791 8.19679 20.1493C8.59993 20.5196 9.12785 20.7242 9.6752 20.7223H22.8581C23.3822 20.7229 23.8889 20.5343 24.285 20.191C24.681 19.8478 24.9398 19.3731 25.0138 18.8543L26.1617 10.93C26.1923 10.7193 26.1811 10.5046 26.1286 10.2982C26.0762 10.0918 25.9836 9.89772 25.8561 9.72714C25.7286 9.55656 25.5687 9.41279 25.3856 9.30403C25.2025 9.19528 24.9998 9.12369 24.789 9.09334C24.7117 9.08488 6.74016 9.07884 6.74016 9.07884" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Rest of the SVG paths */}
            </svg>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  
  )
}
export default Detail


