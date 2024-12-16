import React from 'react'
import Icon from '/public/assets/icons/setting.png'
import Image from 'next/image'
import { IoIosArrowUp } from "react-icons/io";
import Product1 from '/public/assets/products/product1.png'
import Product2 from '/public/assets/products/product2.png'
import Product3 from '/public/assets/products/product3.png'
import Product4 from '/public/assets/products/product4.png'
import Product5 from '/public/assets/products/product5.png'
import Product6 from '/public/assets/products/product6.png'
import Product7 from '/public/assets/products/product7.png'
import Product8 from '/public/assets/products/product8.png'
import Product9 from '/public/assets/products/product9.png'
import Product10 from '/public/assets/products/product10.png'
import Product11 from '/public/assets/products/product11.png'
import Product12 from '/public/assets/products/product12.png'
// import Product13 from '/public/assets/products/product13.png'
// import Product14 from '/public/assets/products/product14.png'
// import Product15 from '/public/assets/products/product15.png'
// import Product16 from '/public/assets/products/product16.png'
// import Product17 from '/public/assets/products/product17.png'
// import Product18 from '/public/assets/products/product18.png'
// import Product19 from '/public/assets/products/product19.png'
// import Product20 from '/public/assets/products/product20.png'
// import Product21 from '/public/assets/products/product21.png'
// import Product22 from '/public/assets/products/product22.png'
// import Product23 from '/public/assets/products/product23.png'
// import Product24 from '/public/assets/products/product24.png'
// import Product25 from '/public/assets/products/product25.png'
// import Product26 from '/public/assets/products/product26.png'
// import Product27 from '/public/assets/products/product27.png'
// import Product28 from '/public/assets/products/product28.png'
// import Product29 from '/public/assets/products/product29.png'
// import Product30 from '/public/assets/products/product30.png'
 const Product = ( )=> {
    return(
      <div className='relative w-full max-w-[1440px] h-auto mx-auto top-[156px] bg-white'>
      {/* Bar */}
      <div className='w-full h-[51px] bg-white flex items-center justify-between px-4'>
          <h1 className="text-[24px] leading-[31px] font-sans font-medium text-black truncate">
              New (500)
          </h1>
  
          <div className='flex items-center gap-2'>
              <button className="flex items-center justify-between gap-2 font-sans text-black">
                  <span>Hide Filters</span>
                  <div className="w-4 h-4">
                      <Image src={Icon} alt="Icon" layout="fixed" width={16} height={16} />
                  </div>
              </button>
  
              <select className='text-black flex items-center font-sans text-center'>
                  <option value="" disabled selected>Sort By</option>
                  <option value="Low to High">Low to High</option>
                  <option value="High to Low">High to Low</option>
                  <option value="Best Match">Best Match</option>
              </select>
          </div>
      </div>
  
      {/* Left Side */}
      <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-[260px] h-auto'>
              <div className='flex flex-col w-full'>
                  {/* Upper Side */}
                  <div className='flex flex-col w-full'>
                      {['Shoes', 'Sports Bras', 'Tops & T-Shirts', 'Hoodies & Sweatshirts', 'Jackets', 'Trousers & Tights', 'Shorts', 'Tracksuits', 'Jumpsuits & Rompers', 'Skirts & Dresses', 'Socks', 'Accessories & Equipment'].map((item, index) => (
                          <a key={index} href="/" className='py-2 px-4 text-black font-sans hover:text-[#9E3500] transition-transform duration-200 transform hover:scale-105'>
                              {item}
                          </a>
                      ))}
                  </div>
  
                  {/* Lower Side */}
                  <div className='flex flex-col w-full border-t border-b border-solid border-[#E5E5E5]'>
                      <h3 className="flex items-center justify-between font-sans cursor-pointer font-semibold mb-2 text-black">
                          Gender <IoIosArrowUp />
                      </h3>
                      {['Men', 'Women', 'Unisex'].map((gender, index) => (
                          <label key={index} className="flex items-center space-x-2">
                              <input type="checkbox" className="form-checkbox" />
                              <span className='text-black font-sans'>{gender}</span>
                          </label>
                      ))}
                  </div>
  
                  <div className='flex flex-col w-full border-b border-solid border-[#E5E5E5]'>
                      <h3 className="flex items-center justify-between text-black font-sans cursor-pointer font-semibold mb-2">
                          Kids <IoIosArrowUp />
                      </h3>
                      {['Boys', 'Girls'].map((kid, index) => (
                          <label key={index} className="flex items-center space-x-2">
                              <input type="checkbox" className="form-checkbox" />
                              <span className='text-black font-sans'>{kid}</span>
                          </label>
                      ))}
                  </div>
  
                  <div className='flex flex-col w-full border-b border-solid border-[#E5E5E5]'>
                      <h3 className="flex items-center justify-between text-black font-sans cursor-pointer font-semibold mb-2">
                          Shop By Price <IoIosArrowUp />
                      </h3>
                      {['Under ₹ 2,500.00', '₹ 2,501.00 - ₹ 7,500.00'].map((price, index) => (
                          <label key={index} className="flex items-center space-x-2">
                              <input type="checkbox" className="form-checkbox" />
                              <span className='text-black font-sans'>{price}</span>
                          </label>
                      ))}
                  </div>
              </div>
    

        {/* right side */}

      <div className='absolute w-[1092px] h-[2000px] left-[300px] top-[156px] '>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {/* product1 */}
        <div className='border p-2 border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'><Image src={Product1} alt='Img'></Image></div> 
            <p className='w-[47px] h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Just In</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Nike Air Force 1 Mid '07</h3>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Men's Shoes</p>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>1 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 10 795.00</p>

        </div>
        
        {/* product2 */}
        <div className='border p-2  border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'><Image src={Product2} alt='Img'></Image></div> 
            <p className='w-[47px] h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Just In</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Nike Court Vision Low Next Nature</h3>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Men's Shoes</p>
            <p className=' h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>1 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 4 995.00</p>
             </div>

           {/* product3 */}
           <div className='border p-2  border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'><Image src={Product3} alt='Img'></Image></div> 
            <p className='w-[47px] h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Just In</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Nike Air Force 1 PLT.AF.ORM</h3>
            <p className=' h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Women's Shoes</p>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>1 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 8 695.00</p>
             </div>


             {/* product4 */}
             <div className='border p-2  border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'><Image src={Product4} alt='Img'></Image></div> 
            <p className='w-[47px] h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Just In</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Nike Air Force 1 React</h3>
            <p className=' h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Men's Shoes</p>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>1 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 13 295.00</p>
             </div>

             {/* product5 */}
             
             <div className='border p-2  border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'><Image src={Product5} alt='Img'></Image></div> 
            <p className=' h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Promo Exclusion</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Air Jordan 1 Elevate Low</h3>
            <p className=' h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Women's Shoes</p>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>1 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 11 895.00</p>
            </div>

         {/* PRODUCT 6 */}
         <div className='border p-2  border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'><Image src={Product6} alt='Img'></Image></div> 
            <p className='w-[47px] h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Just In</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Nike Standard Issue</h3>
            <p className=' h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Women's Basketball Jersey</p>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>1 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 2 895.00</p>
            </div>
           

           {/* PRODUCT7 */}
           <div className='border p-2  border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'><Image src={Product7} alt='Img'></Image></div> 
            <p className=' h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Promo Exclusion</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Nike Dunk Low Retro SE</h3>
            <p className=' h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Men's Shoes</p>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>1 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 9 695.00</p>
            </div>

            {/* product8 */}
            <div className='border p-2  border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'><Image src={Product8} alt='Img'></Image></div> 
            <p className=' h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Sustainable Materials</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Nike Dri-FIT UV Hyverse</h3>
            <p className=' h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Men's Short-Sleeve Graphic Fitness Top</p>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>1 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 2 495.00</p>
            </div>

{/* product9*/}
             <div className='border p-2  border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'>
            <Image src={Product9} alt='Img'></Image></div> 
            <p className=' h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Just In</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Nike Court Vision Low</h3>
            <p className=' h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Men's Shoes</p>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>1 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 5 695.00</p>
            </div>


            {/* product10 */}
            <div className='border p-2  border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'>
            <Image src={Product10} alt='Img'></Image></div> 
            <p className=' h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Just In</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Nike DRY-FIT Ready</h3>
            <p className=' h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Men's Shorts-Sleeve Fitness Top</p>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>3 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 2 495.00</p>
            </div>

            {/* product11 */}
            <div className='border p-2  border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'>
            <Image src={Product11} alt='Img'></Image></div> 
            <p className=' h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Just In</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Nike One Leak Protextion - Period</h3>
            <p className=' h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Women's Mid-Rise 18cm (approx.) Biker Shorts </p>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>3 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 2 495.00</p>
            </div>
            {/* product12 */}
            <div className='border p-2  border-gray-300 rounded-lg  transition-transform duration-200 transform hover:scale-105'>
           <div className='flex justify-center'>
            <Image src={Product12} alt='Img'></Image></div> 
            <p className=' h-[28px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#9E3500] flex-none order-0 flex-grow-0 m-1'>Just In</p>
            <h3 className=' h-[24px] font-sans font-medium text-[15px] leading-[24px] flex items-center text-[#111111] flex-none order-0 flex-grow-0'>Nike Air Force 1 LV8 3</h3>
            <p className=' h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-1 flex-grow-0'>Older Kids' Shoe </p>
            <p className='w-[88px] h-[24px] font-sans font-normal text-[15px] leading-[24px] flex items-center text-[#757575] flex-none order-2 flex-grow-0'>1 Colour</p>
            <p className='"absolute w-[132.42px] h-[17px] left-0 top-[126px] font-sans font-medium text-[15px] leading-[28px] flex items-center text-[#111111]'>MRP : ₹ 7 495.00</p>
            </div>

 </div>

 <div className='relative w-full max-w-[1092px] mx-auto border-t border-[#E5E5E5] box-border mt-[30px]'>
    <h1 className='text-center text-[#111111] font-sans font-medium text-[19px] leading-[24px] my-4'>
        Related Categories
    </h1>
    <div className='flex flex-wrap justify-center gap-2 p-4'>
        <button className='text-black p-2 border rounded-3xl transition-transform duration-200 transform hover:scale-105'>
            Best Selling Products
        </button>
        <button className='text-black p-2 border rounded-3xl transition-transform duration-200 transform hover:scale-105'>
            Best Shoes
        </button>
        <button className='text-black p-2 border rounded-3xl transition-transform duration-200 transform hover:scale-105'>
            New Basket Ball Shoes
        </button>
        <button className='text-black p-2 border rounded-3xl transition-transform duration-200 transform hover:scale-105'>
            New Football Shoes
        </button>
        <button className='text-black p-2 border rounded-3xl transition-transform duration-200 transform hover:scale-105'>
            Best Running Shoes
        </button>
        <button className='text-black p-2 border rounded-3xl transition-transform duration-200 transform hover:scale-105'>
            New Men's Shoes
        </button>
        <button className='text-black p-2 border rounded-3xl transition-transform duration-200 transform hover:scale-105'>
            Best Men Shoes
        </button>
        <button className='text-black p-2 border rounded-3xl transition-transform duration-200 transform hover:scale-105'>
            New Jordan Shoes
        </button>
        <button className='text-black p-2 border rounded-3xl transition-transform duration-200 transform hover:scale-105'>
            Best Women's Shoes
        </button>
        <button className='text-black p-2 border rounded-3xl transition-transform duration-200 transform hover:scale-105'>
            Best Training & Gym
        </button>
    </div>
</div>
 </div>





    </div>
</div>
</div>

    )
 }
 export default Product