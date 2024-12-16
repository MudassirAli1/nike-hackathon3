import react from 'react'
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
        <div className='absolute w-[1440px] h-[2500px]  left-1/2 transform -translate-x-1/2 top-[156px] bg-white'>
            {/* bar */}
            <div className='absolute w-[1440px] h-[51px] left-0 top-[16px] bg-white'>
    <div className='absolute w-[1344px] h-[36px] left-[48px] top-0'>
        <div className='absolute flex flex-row items-start p-[0.8125px_1009.62px_0.375px_0px] w-[1119.62px] h-[33.19px] left-0 bottom-0 px-4'>
            <h1 className="w-[110px] h-[32px] flex items-center text-[24px] leading-[31px] font-sans font-medium  text-black truncate">
                New (500)
            </h1>
        </div>

        <div className='absolute flex flex-row items-start p-0 w-[225px] h-[28px] gap-[6px] left-[1118.62px] bottom-0 '>
        <button className="w-[110px] h-[28px] flex items-center justify-between gap-2 font-sans text-black flex-none order-0 flex-grow-0">
  <span>Hide Filters</span>
  <div className="w-4 h-4">
    <Image src={Icon} alt="Icon" layout="fixed" width={16} height={16} />
  </div>
</button>


<select className='text-black w-[110px] h-[28px] flex items-center font-sans text-center flex-none order-0 flex-grow-0'>
    <option value="" disabled selected>Sort By</option>
    <option value="Low to High">Low to High</option>
    <option value="High to Low">High to Low</option>
    <option value="Best Match">Best Match</option>
</select>
            
        </div>

     {/* left side */}
        <div className='absolute w-[1440px] h-[2000px] left-1/2 top-[156px] -translate-x-1/2'>
        <div className='absolute w-[260px] h-[849px] left-0 top-0'>
            <div className='flex flex-col absolute w-[192px] h-[2145.72px] left-[48px] top-0 '>
                {/* upperside */}
                <div className='absolute w-[192px] h-[400.72px] left-0 top-0'>
                  <a href="/" className='absolute order-1 w-[45.58px] h-[17px] left-[4px] top-[2px] font-medium text-[15px] leading-[22px] flex items-center text-black font-sans hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Shoes</a>
                  <a href="/" className='absolute w-[83.79px] h-[17px] left-[4px] top-[33.59px] font-sans font-medium text-[15px] leading-[22px] flex items-center text-[#111111] hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Sports Bras</a>
                  <a href="/" className='absolute w-[108.39px] h-[17px] left-[4px] top-[65.19px] font-sans font-medium text-[15px] leading-[22px] flex items-center text-[#111111]
                  hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Tops & T-Shirts</a>
                  <a href="/" className='absolute w-[161.17px] h-[17px] left-[4px] top-[96.78px] font-sans font-medium text-[15px] leading-[22px] flex items-center text-[#111111]
                  hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Hoodies & Sweetshirts</a>
                  <a href="/" className='absolute w-[54.45px] h-[17px] left-[4px] top-[128.38px] font-sans font-medium text-[15px] leading-[22px] flex items-center text-[#111111]
                  hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Jackets</a>
                  <a href="/" className='absolute w-[124.98px] h-[17px] left-[4px] top-[159.97px] font-sans font-medium text-[15px] leading-[22px] flex items-center text-[#111111] hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Trousers & Tights</a>
                  <a href="/" className='absolute w-[46.45px] h-[17px] left-[4px] top-[191.56px] font-sans font-medium text-[15px] leading-[22px] flex items-center text-[#111111]
                  hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Shorts</a>
                  <a href="/" className='absolute w-[72.51px] h-[17px] left-[4px] top-[223.16px] font-sans font-medium text-[15px] leading-[22px] flex items-center text-[#111111]
                  hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Tracksuits</a>
                  <a href="/" className='absolute w-[156.7px] h-[17px] left-[4px] top-[254.75px] font-sans font-medium text-[15px] leading-[22px] flex items-center text-[#111111]
                  hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Jumpsuits & Rompers</a>
                  <a href="/" className='absolute w-[118.45px] h-[17px] left-[4px] top-[286.34px] font-sans font-medium text-[15px] leading-[22px] flex items-center text-[#111111]
                  hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Skirts & Dresses</a>
                  <a href="/" className='absolute w-[43.78px] h-[17px] left-[4px] top-[317.94px] font-sans font-medium text-[15px] leading-[22px] flex items-center text-[#111111]
                  hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Socks</a>
                  <a href="/" className='absolute w-[101.57px] h-[38.59px] left-[4px] top-[349.53px] font-sans font-medium text-[16px] leading-[22px] flex items-center text-[#111111] hover:text-[#9E3500]  transition-transform duration-200 transform hover:scale-105'>Accessories & Equipment </a>
                </div>
                {/* lowerside */}
                <div className='absolute w-[192px] h-[1705px] left-0 top-[440.72px]'>
                    <div className='absolute h-[163px] left-0 right-0 top-0 border-t border-b border-solid border-[#E5E5E5] box-border'>
                    <h3 className="flex pt-2 items-center justify-between font-sans cursor-pointer font-semibold mb-2 text-black">
            Gender <IoIosArrowUp/>
          </h3>
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox " />
              <span className='text-black font-sans'>Men</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="form-checkbox" />
              <span className='text-black font-sans'>Women</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="form-checkbox" />
              <span className='text-black font-sans'>Unisex</span>
            </label>
          </div>
                    </div>
                    <div className='absolute h-[134px] left-0 right-0 top-[163px] border-b border-solid border-[#E5E5E5] box-border'> <h3 className="flex items-center pt-2 text-black font-sans justify-between cursor-pointer font-semibold mb-2">
            Kids <IoIosArrowUp />
          </h3>
          
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span className='text-black font-sans'>Boys</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="form-checkbox" />
              <span className='text-black font-sans'>Girls</span>
            </label></div>

                    <div className='absolute h-[238px] left-0 right-0 top-[297px] border-b border-solid border-[#E5E5E5] box-border'> <h3 className="flex items-center justify-between text-black font-sans cursor-pointer font-semibold mb-2">
            Shop By Price <IoIosArrowUp />
          </h3>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox " />
              <span className=' text-black font-sans'>Under ₹ 2 500.00</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="form-checkbox" />
              <span className=' text-black font-sans' >₹ 2 501.00 - ₹ 7 500.00</span>
            </label></div>
                </div>
            </div>
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

  <div className='absolute w-[1092px] h-[259px] left-0 top-[2000px] border-t  border-[#E5E5E5] box-border'>
    <h1 className='absolute w-[171.42px] h-[22px] left-0 top-[62px] text-center flex items-center text-[#111111] font-sans font-medium text-[19px] leading-[24px]'>Related Categories</h1>
    <div className='absolute w-[1092px] h-[174px] left-1/2 top-[100px] -translate-x-[546px]'>
    <button className='text-black p-2 m-1  border rounded-3xl  transition-transform duration-200 transform hover:scale-105'>Best Selling Products</button>
    <button className='text-black p-2 m-1  border rounded-3xl  transition-transform duration-200 transform hover:scale-105'>Best Shoes</button>
    <button className='text-black p-2 m-1  border rounded-3xl  transition-transform duration-200 transform hover:scale-105'>New Basket Ball Shoes</button>
    <button className='text-black p-2 m-1  border rounded-3xl  transition-transform duration-200 transform hover:scale-105'>New Football Shoes</button>
    <button className='text-black p-2 m-1  border rounded-3xl  transition-transform duration-200 transform hover:scale-105'>Best Running Shoes</button>
    <button className='text-black p-2 m-1  border rounded-3xl  transition-transform duration-200 transform hover:scale-105'>New Men's Shoes</button>
    <button className='text-black p-2 m-1  border rounded-3xl  transition-transform duration-200 transform hover:scale-105'>Best Men Shoes</button>
    <button className='text-black p-2 m-1  border rounded-3xl  transition-transform duration-200 transform hover:scale-105'>New Jordan Shoes</button>
    <button className='text-black p-2 m-1  border rounded-3xl  transition-transform duration-200 transform hover:scale-105'>Best Women's Shoes</button>
    <button className='text-black p-2 m-1  border rounded-3xl  transition-transform duration-200 transform hover:scale-105'>Best Taining & Gym</button>
    
    </div>
  </div>
 </div>





    </div>
</div>
</div>

    )
 }
 export default Product