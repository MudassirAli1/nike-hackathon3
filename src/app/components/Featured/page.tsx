import React from 'react'
import Image from 'next/image'
import featured from "/public/assets/banner/featured.png"
const Featured = () => {
  return (
    <div>
        <div className="mt-20">
          <h1 className="text-2xl font-medium text-black">Featured</h1>
          <Image src={featured} alt="Featured" layout="responsive" height={700} width={1344} />
          <div className="text-center mt-4">
            <h1 className="text-4xl font-medium uppercase text-black">STEP INTO WHAT FEELS GOOD</h1>
            <p className="mt-2 text-gray-700">Cause everyone should know the feeling of running in that perfect pair.</p>
            <button className="mt-4 bg-black text-white rounded-full px-6 py-2">Find Your Shoe</button>
          </div>
        </div>
    </div>
  )
}

export default Featured