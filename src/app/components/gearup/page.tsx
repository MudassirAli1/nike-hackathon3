import React from 'react'
import { IoIosArrowBack , IoIosArrowForward} from "react-icons/io";
import Image from "next/image";
import Short from "/public/assets/items/short.png"
import Shirt from "/public/assets/items/shirt.png"
const BestofAirmax = () => {
  return (
    <div><div className="container mx-auto px-4 py-16">
    <h1 className="text-2xl font-medium text-black mb-8">Gear Up</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Men's Section */}
      <div className="relative">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-sm font-medium text-black">Shop Men's</h4>
          <div className="flex space-x-2">
            <button 
              className="
                w-8 h-8 sm:w-10 sm:h-10 
                bg-gray-200 
                rounded-full 
                flex items-center justify-center 
                transition-all 
                hover:bg-gray-300 
                active:scale-95
              "
              aria-label="Previous Men's"
            >
              <IoIosArrowBack 
                className="
                  w-5 h-5 sm:w-6 sm:h-6 
                  text-black 
                  transform 
                  group-hover:scale-110
                "
              />
            </button>
            <button 
              className="
                w-8 h-8 sm:w-10 sm:h-10 
                bg-gray-200 
                rounded-full 
                flex items-center justify-center 
                transition-all 
                hover:bg-gray-300 
                active:scale-95
              "
              aria-label="Next Men's"
            >
              <IoIosArrowForward 
                className="
                  w-5 h-5 sm:w-6 sm:h-6 
                  text-black 
                  transform 
                  group-hover:scale-110
                "
              />
            </button>
          </div>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              image: Short,
              name: 'Nike Dri-FIT Challenger',
              description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
              price: '2,495'
            },
            {
              image: Shirt,
              name: 'Nike Dri-FIT ADV TechKnit Ultra',
              description: "Men's Short-Sleeve Running Top",
              price: '3,895'
            }
          ].map((product, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  layout="responsive" 
                  width={300} 
                  height={300}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-4 shadow-sm">
                <h5 className="text-sm font-medium text-black mb-1">
                  {product.name}
                </h5>
                <p className="text-xs text-gray-500 mb-2">
                  {product.description}
                </p>
                <p className="text-sm font-bold text-black">
                  ₹ {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Women's Section */}
      <div className="relative">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-sm font-medium text-black">Shop Women's</h4>
          <div className="flex space-x-2 ">
            <button 
              className="
                w-8 h-8 sm:w-10 sm:h-10 
                bg-gray-200 
                rounded-full 
                flex items-center justify-center 
                transition-all 
                hover:bg-gray-300 
                active:scale-95
              "
              aria-label="Previous Women's"
            >
              <IoIosArrowBack 
                className="
                  w-5 h-5 sm:w-6 sm:h-6 
                  text-black 
                  transform 
                  group-hover:scale-110
                "
              />
            </button>
            <button 
              className="
                w-8 h-8 sm:w-10 sm:h-10 
                bg-gray-200 
                rounded-full 
                flex items-center justify-center 
                transition-all 
                hover:bg-gray-300 
                active:scale-95
              "
              aria-label="Next Women's"
            >
              <IoIosArrowForward 
                className="
                  w-5 h-5 sm:w-6 sm:h-6 
                  text-black 
                  transform 
                  group-hover:scale-110
                "
              />
            </button>
          </div>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              image: Short,
              name: 'Nike Dri-FIT Challenger',
              description: "Women's 18cm (approx.) 2-in-1 Versatile Shorts",
              price: '2,495'
            },
            {
              image: Shirt,
              name: 'Nike Dri-FIT ADV TechKnit Ultra',
              description: "Women's Short-Sleeve Running Top",
              price: '3,895'
            }
          ].map((product, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  layout="responsive" 
                  width={300} 
                  height={300}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-4 shadow-sm">
                <h5 className="text-sm font-medium text-black mb-1">
                  {product.name}
                </h5>
                <p className="text-xs text-gray-500 mb-2">
                  {product.description}
                </p>
                <p className="text-sm font-bold text-black">
                  ₹ {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default BestofAirmax