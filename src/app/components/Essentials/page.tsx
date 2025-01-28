import React from 'react'
import Image from 'next/image'
import Mens from "/public/assets/banner/mens.png"
import Womens from "/public/assets/banner/women.png"
import Kids from "/public/assets/banner/kids.png"
const Essentials  = () => {
  return (
    <div>  <div className="container mx-auto px-4 py-16">
    <h1 className="text-2xl font-medium text-black mb-8">The Essentials</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          image: Mens,
          category: "Men's",
          alt: "Men's Essentials"
        },
        {
          image: Womens,
          category: "Women's",
          alt: "Women's Essentials"
        },
        {
          image: Kids,
          category: "Kid's",
          alt: "Kids' Essentials"
        }
      ].map((item, index) => (
        <div 
          key={index} 
          className="group relative overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image 
              src={item.image} 
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
          </div>
          
          <button 
            className="absolute bottom-4 left-4  bg-white  text-black px-4 py-2 rounded-full text-sm font-semibold shadow-mdtransform transition-all duration-300 hover:bg-gray-100 active:scale-95
            "
            aria-label={`Shop ${item.category}`}
          >
            {item.category}
          </button>
        </div>
      ))}
    </div>
  </div> </div>
  )
}

export default Essentials 