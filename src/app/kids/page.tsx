"use client";

import React from "react";
import Image from "next/image";
import kids from "../../../public/assets/banner/kidspost.png";

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center px-6 md:px-12 py-10 bg-[#f7f7f7] rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-[#111111] mb-4">
          🎉 Kids' Products Coming Soon! 🎉
        </h1>
        <p className="text-lg text-[#757575] mb-6">
          We're excited to announce that a new range of kids' products will be launching soon! Stay tuned for some amazing products.
        </p>
        <div className="mb-8">
          <Image 
            src={kids}
            alt="Coming Soon" 
            width={300} 
            height={300} 
            className="mx-auto"
          />
        </div>
        <p className="text-md font-semibold text-[#111111]">
          Get ready to shop the latest in kids' fashion, toys, and more.
        </p>
        <div className="mt-6">
          <button
            onClick={() => alert("You will be notified once launched!")}
            className="bg-[black] text-white px-6 py-2 rounded-lg text-lg transition duration-300 hover:bg-gray-800"
          >
            Notify Me When Launched
          </button>
        </div>
      </div>
    </div>
  );
}
