import react from 'react'
import Image from 'next/image'
import Logo from '/public/assets/logo/nikelogo.png'
import Img1 from '/public/assets/products/check1.png'
import Shoe1 from '/public/assets/products/check2.png'
import { FaBox } from "react-icons/fa";
import Link from 'next/link'
const Checkout = ()=>{
    return(
      <div className="bg-gray-100 min-h-screen py-10 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Left Column - Form */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6 text-black">How would you like to get your order?</h2>
          <p className='text-[#8D8D8D]'>Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <Link href={'/'} className='underline'>Learn More</Link></p>
          <div className=" flex mb-4 border-solid border-black rounded-xl border-2 h-[82px] w-[440px] gap-[24px] items-center pl-10 mt-5">
          <FaBox />
            Deliver It
          </div>
          <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105"
              />
              <input
                type="text"
                placeholder="Locality"
                className="w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105"
              />
            </div>
            <div className="col-span-2">
              <select
                className="w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105">
                <option>Select State/Province</option>
                <option>Bihar</option>
                <option>Goa</option>
                <option>Gujrat</option>
                <option>Haryana</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <input type="checkbox" id="copyAddress" className="mr-2" />
            <label htmlFor="copyAddress">Save this address to my profile</label>
          </div>
          <div className="mt-4 flex items-center">
            <input type="checkbox" id="copyAddress" className="mr-2" />
            <label htmlFor="copyAddress">Make this my preferred address</label>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-4">What's your contact information?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105"
            />
          </div>
          <p className='text-[#8D8D8D]'>A confirmation email will be sent after checkout.</p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105"
            />
          </div>
          <p className='text-[#8D8D8D]'>A carrier might contact you to confirm delivery.</p>

          <h3 className="text-lg font-semibold mt-6 mb-4">What's your PAN?</h3>
          <input
            type="text"
            placeholder="PAN"
            className="w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105"
          
          />
          <p className='text-[#8D8D8D]'>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
          <div className="mt-4 flex items-center">
            <input type="checkbox" id="savePAN" className="mr-2" />
            <label htmlFor="savePAN" className='text-[#8D8D8D] '>Save PAN details to Nike Profile</label>
          </div>
          <div className="mt-10 flex items-center">
            <input type="checkbox" id="savePAN" className="mr-2" />
            <label htmlFor="savePAN" className='text-[#8D8D8D]'>I have read and consent to eShopWorld processing my information in accordance with the <u>Privacy Statement</u> and <u>Cookie Policy</u>. eShopWorld is a trusted Nike partner.</label>
          </div>
          <div className="mt-6">
            <button className="w-full h-[50px] bg-gray-400 text-white py-2 rounded-3xl transition-transform duration-200 transform hover:scale-105">Continue</button>
          </div>
          <div className='mt-10'>
            <div className=' text-xl h-[80px] border-t border-gray-400 '>Delivery</div>
            <div className=' text-xl h-[80px] border-t border-gray-400 text-[#8D8D8D]'>Shipping</div>
            <div className=' text-xl h-[80px] border-t border-gray-400 text-[#8D8D8D]'>Billing</div>
            <div className=' text-xl h-[80px] border-t border-gray-400 text-[#8D8D8D]'>Payment</div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="border-b pb-4 mb-4">
            <p>Order Subtotal</p>
            <p className="text-right font-semibold">₹ 20,890.00</p>
          </div>
          <div className="border-b pb-4 mb-4">
            <p>Delivery Charges</p>
            <p className="text-right font-semibold">₹10.00</p>
          </div>
          <div className="text-lg font-semibold mb-4">
            <p>Total</p>
            <p className="text-right">₹ 20,890.00</p>
          </div>
          <div className='text-xs text-[#8D8D8D]'><p>(The total reflects the price of your order, including all duties and taxes)</p>
          </div>
          <div className='text-black py-5 font-bold'><h3>Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={Img1}
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</p>
              <p className="text-sm text-gray-500">Size: L</p>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src={Shoe1}
              alt="Nike Air Max 97 SE"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="font-medium">Nike Air Max 97 SE</p>
              <p className="text-sm text-gray-500">Size: 8</p>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Checkout