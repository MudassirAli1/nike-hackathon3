"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const Bestof = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default to 3 cards

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
          _id,
          productName,
          category,
          price,
          "image": image.asset->url,
          status,
          colors
        }`;
      const data = await client.fetch(query);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Adjust number of cards shown based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // Show 1 card on small screens
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Show 2 cards on medium screens
      } else {
        setCardsToShow(3); // Show 3 cards on large screens
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : Math.max(products.length - cardsToShow, 0)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < Math.max(products.length - cardsToShow, 0) ? prev + 1 : 0
    );
  };

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-medium text-black mb-4">Best of Air Max</h2>
      <div className="relative">
        {/* Arrow Buttons */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={handlePrev}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center transition-all hover:bg-gray-300 active:scale-95"
            aria-label="Previous"
          >
            <IoIosArrowBack className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={handleNext}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center transition-all hover:bg-gray-300 active:scale-95"
            aria-label="Next"
          >
            <IoIosArrowForward className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>
        </div>

        {/* Card Slider */}
        <div className="overflow-hidden mt-6">
          <motion.div
            className="flex gap-4"
            style={{
              transform: `translateX(-${
                (currentIndex - Math.floor(cardsToShow / 2)) * (100 / cardsToShow)
              }%)`,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 ${
                  cardsToShow === 1
                    ? "w-full"
                    : cardsToShow === 2
                    ? "w-1/2"
                    : "w-1/3"
                } px-2`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="relative bg-white p-4 rounded-lg shadow-lg">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    layout="responsive"
                    height={700}
                    width={700}
                    className="rounded-lg"
                  />
                  <div className="mt-4">
                    <p className="h-[28px] font-sans font-medium text-[15px] leading-[28px] text-[#9E3500] m-1">
                      {product.status}
                    </p>
                    <h3 className="h-[24px] font-sans font-medium text-[15px] leading-[24px] text-[#111111]">
                      {product.productName}
                    </h3>
                    <p className="h-[24px] font-sans font-normal text-[12px] leading-[24px] text-[#757575]">
                      {product.category}
                    </p>
                    <p className="h-[24px] font-sans font-normal text-[15px] leading-[24px] text-[#757575]">
                      {product.colors}
                    </p>
                    <p className="h-[24px] font-sans font-medium text-[15px] leading-[28px] text-[#111111]">
                      MRP: ₹{product.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bestof;
