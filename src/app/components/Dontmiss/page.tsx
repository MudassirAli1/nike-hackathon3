import React from 'react'
import Image from 'next/image'
import dontmiss from '../../../../public/assets/banner/dontmiss.png'

const Dontmiss = () => {
  return (
    <div>
        <div className="mt-20">
          <h1 className="text-2xl font-medium text-black">Don't Miss</h1>
          <div className="relative">
            <Image src={dontmiss} alt="Don't Miss" layout="responsive" height={925} width={1344} />
            </div>
            <div className=" inset-0 flex flex-col items-center justify-center z-12 mt-10">
              <h1 className=" text-4xl font-medium uppercase text-black">FLIGHT ESSENTIALS</h1>
              <p className="mt-2 text-black text-center">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
              <button className="mt-4 bg-black text-white rounded-full px-6 py-2">Shop Now</button>
            </div>
        </div>
    
    </div>
  )
}

export default Dontmiss