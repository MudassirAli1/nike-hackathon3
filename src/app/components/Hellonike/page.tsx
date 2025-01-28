import React from 'react'
import Image from "next/image";
import banner from "/public/assets/banner/banner.png"
const Hellonike = () => {
  return (
    <div>
        <div className="flex flex-col items-center pb-4">
          <h3 className="text-2xl text-black font-semibold">Hello Nike App</h3>
          <p className="text-sm text-gray-600">
            <span>Download the app to access everything Nike.</span>
            <a href="/" className="underline font-semibold"> Get Your Great</a>
          </p>
        </div>
        <div className="w-full h-auto">
          <Image src={banner} alt="Banner" layout="responsive" height={700} width={1344} />
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
    </div>
  )
}

export default Hellonike