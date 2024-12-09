import React from "react";
import Image from "next/image";
import image from "/public/assets/banner/banner.png"
import product1 from "/public/assets/items/image1.png"
import product2 from "/public/assets/items/image2.png"
import product3 from "/public/assets/items/image3.png"
import Dontmiss from "/public/assets/banner/dontmiss.png"
import Short from "/public/assets/items/short.png"
import Shirt from "/public/assets/items/shirt.png"
import Featured from "/public/assets/banner/image.png"
import Mens from "/public/assets/banner/mens.png"
import Womens from "/public/assets/banner/women.png"
import Kids from "/public/assets/banner/kids.png"
import { IoIosArrowBack , IoIosArrowForward} from "react-icons/io";


const Hero = ()=> {
    return(
      <div id="hero" className="relative w-full min-h-screen pt-24 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center pb-4">
          <h3 className="text-2xl text-black font-semibold">Hello Nike App</h3>
          <p className="text-sm text-gray-600">
            <span>Download the app to access everything Nike.</span>
            <a href="/" className="underline font-semibold"> Get Your Great</a>
          </p>
        </div>
        <div className="w-full h-auto">
          <Image src={image} alt="Banner" layout="responsive" height={700} width={1344} />
        </div>
    
        <div className="mt-20">
          <h1 className="text-4xl font-medium text-black uppercase text-center">Nike Air Max Pulse</h1>
          <p className="mt-4 text-center text-gray-700">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800">Notify Me</button>
            <button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800">Shop Air Max</button>
          </div>
        </div>
    
        {/* Slider Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-medium text-black">Best of Air Max</h2>
          <div className="flex items-center justify-end space-x-2 w-full max-w-[200px] mx-auto sm:mx-0 sm:ml-auto">
  <span className="text-sm font-medium text-black hidden sm:block">Shop</span>
  
  <div className="flex items-center space-x-2">
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
      aria-label="Previous"
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
      aria-label="Next"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            
            <div className="relative">
              <Image src={product1} alt="Product 1" layout="responsive" height={700} width={700} />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <h5 className="font-medium text-black">Nike Air Max Pulse</h5>
                <p className="text-gray-500">Women's Shoes</p>
                <p className="text-black font-bold">₹ 13,995</p>
              </div>
            </div>
            <div className="relative">
              <Image src={product2} alt="Product 2" layout="responsive" height={700} width={700} />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <h5 className="font-medium text-black">Nike Air Max Pulse</h5>
                <p className="text-gray-500">Men's Shoes</p>
                <p className="text-black font-bold">₹ 16,995</p>
              </div>
            </div>
            <div className="relative">
              <Image src={product3} alt="Product 3" layout="responsive" height={700} width={700} />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <h5 className="font-medium text- black">Nike Air Max 97 SE</h5>
                <p className="text-gray-500">Women's Shoes</p>
                <p className="text-black font-bold">₹ 13,995</p>
              </div>
            </div>
          </div>
        </div>
    
        {/* Bottom Banner */}
        <div className="mt-20">
          <h1 className="text-2xl font-medium text-black">Featured</h1>
          <Image src={Featured} alt="Featured" layout="responsive" height={700} width={1344} />
          <div className="text-center mt-4">
            <h1 className="text-4xl font-medium uppercase text-black">STEP INTO WHAT FEELS GOOD</h1>
            <p className="mt-2 text-gray-700">Cause everyone should know the feeling of running in that perfect pair.</p>
            <button className="mt-4 bg-black text-white rounded-full px-6 py-2">Find Your Shoe</button>
          </div>
        </div>
    
        {/* Gear Up Section */}
        <div className="container mx-auto px-4 py-16">
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
</div>
    
        {/* Don't Miss Section */}
        <div className="mt-20">
          <h1 className="text-2xl font-medium text-black">Don't Miss</h1>
          <div className="relative">
            <Image src={Dontmiss} alt="Don't Miss" layout="responsive" height={925} width={1344} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-medium uppercase text-black">FLIGHT ESSENTIALS</h1>
              <p className="mt-2 text-black text-center">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
              <button className="mt-4 bg-black text-white rounded-full px-6 py-2">Shop Now</button>
            </div>
          </div>
        </div>
    
        {/* The Essentials Section */}
        <div className="container mx-auto px-4 py-16">
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
</div>
    
        {/* Footer Section */}
        <div className="mt-20 text-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/4 px-4">
                <h2 className="font-bold text-sm mb-3">Icons</h2>
                <nav className="list-none">
                  <li className="py-2"><a className="hover:text-black">Air Force 1</a></li>
                  <li className="py-2"><a className="hover:text-black">Hurache</a></li>
                  <li className="py-2"><a className="hover:text-black">Air Max 90</a></li>
                  <li className="py-2"><a className="hover:text-black">Air Max 95</a></li>
                </nav>
              </div>
              <div className="w-full md:w-1/4 px-4">
                <h2 className="font-bold text-sm mb-3">Shoes</h2>
     <nav className="list-none">
                  <li className="py-2"><a className="hover:text-black">All Shoes</a></li>
                  <li className="py-2"><a className="hover:text-black">Custom Shoes</a></li>
                  <li className="py-2"><a className="hover:text-black">Jordan Shoes</a></li>
                  <li className="py-2"><a className="hover:text-black">Running Shoes</a></li>
                </nav>
              </div>
              <div className="w-full md:w-1/4 px-4">
                <h2 className="font-bold text-sm mb-3">Clothing</h2>
                <nav className="list-none">
                  <li className="py-2"><a className="hover:text-black">All Clothing</a></li>
                  <li className="py-2"><a className="hover:text-black">Modest Wear</a></li>
                  <li className="py-2"><a className="hover:text-black">Hoodies & Pullovers</a></li>
                  <li className="py-2"><a className="hover:text-black">Shirts & Tops</a></li>
                </nav>
              </div>
              <div className="w-full md:w-1/4 px-4">
                <h2 className="font-bold text-sm mb-3">Kids</h2>
                <nav className="list-none">
                  <li className="py-2"><a className="hover:text-black">Infant & Toddler Shoes</a></li>
                  <li className="py-2"><a className="hover:text-black">Kid's Shoes</a></li>
                  <li className="py-2"><a className="hover:text-black">Kid's Jordan Shoes</a></li>
                  <li className="py-2"><a className="hover:text-black">Kid's Basketball Shoes</a></li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
} 





export default Hero