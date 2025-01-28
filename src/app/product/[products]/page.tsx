"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../../Context/CartContext";
import client from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import { FiHeart } from "react-icons/fi";

const Page = () => {
  const { addToCart } = useCart();
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [wishlistPopup, setWishlistPopup] = useState<boolean>(false);
  const [wishlist, setWishlist] = useState<any[]>([]);

  const productName =
    typeof params.products === "string" ? decodeURIComponent(params.products) : "";

  useEffect(() => {
    if (!productName) {
      setError("Invalid product name.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const query = `*[_type == "product" && productName == $name][0] {
          _id,
          productName,
          description,
          category,
          colors,
          price,
          "image": image.asset->url
        }`;
        const data = await client.fetch(query, { name: productName });
        if (!data) {
          setError("Product not found.");
        } else {
          setProduct(data);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productName]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product._id,
      name: product.productName,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleAddToWishlist = (product: any) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Show wishlist success popup
    setWishlistPopup(true);
    setTimeout(() => {
      setWishlistPopup(false);
    }, 3000);
  };

  if (loading)
    return (
      <div className="text-black flex justify-center text-9xl my-20">
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
        </div>
      </div>
    );
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div id="detail" className="relative w-full max-w-[1200px] mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      {/* Popup Notifications */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
          <div className="bg-black text-white text-sm md:text-base py-3 px-6 rounded-b-lg shadow-lg animate-slide-down">
            Product added to the cart successfully!
          </div>
        </div>
      )}
      {wishlistPopup && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
          <div className="bg-black text-white text-sm md:text-base py-3 px-6 rounded-b-lg shadow-lg animate-slide-down">
            Product added to your wishlist successfully!
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full h-auto space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Image Section */}
        <div className="w-full lg:w-[653px] h-auto lg:h-[653px] flex justify-center items-center">
          {product?.image ? (
            <Image
              src={product.image}
              alt={product.productName || "Product Image"}
              height={600}
              width={600}
              objectFit="contain"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
              No Image Available
            </div>
          )}
        </div>

        {/* Text and Button Section */}
        <div className="w-full lg:w-[374.92px] h-auto lg:h-[1041px] lg:pl-8 space-y-6 pt-8">
          <h1 className="font-Poppins font-medium text-3xl lg:text-[48px] text-black leading-tight text-center lg:text-left">
            {product?.productName}
          </h1>

          <p className="text-[#333333] font-sans font-normal text-sm lg:text-base leading-relaxed text-center lg:text-left">
            {product?.description}
          </p>

          <p className="font-sans font-normal text-[15px] leading-[24px] text-[#757575]">
            <span className="font-bold">Category:</span> {product?.category}
          </p>
          <p className="font-sans font-normal text-[15px] leading-[24px] text-[#757575]">
            <span className="font-bold">Colors:</span> {product?.colors}
          </p>

          <p className="text-[#111111] font-poppins font-semibold text-2xl lg:text-[36px] leading-tight text-center lg:text-left">
            Price: {product?.price}
          </p>

          <div className="flex justify-center lg:justify-start space-x-4">
            {/* Add to Wishlist Button */}
            <button
              onClick={() => handleAddToWishlist(product)}
              className="text-gray-500 p-2 rounded-full transition-transform transform hover:scale-110"
            >
              <FiHeart size={30} />
            </button>

            {/* Add to Cart Button */}
            <Link href="/cart">
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center justify-center font-sans font-bold bg-black text-white rounded-[30px] py-3 px-6 w-full max-w-[300px] transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black group mb-2"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 group-hover:animate-bounce"
                >
                  <path
                    d="M3.82324 4.42676L6.33658 4.86176L7.5002 18.725C7.5449 19.2705 7.79364 19.7791 8.19679 20.1493C8.59993 20.5196 9.12785 20.7242 9.6752 20.7223H22.8581C23.3822 20.7229 23.8889 20.5343 24.285 20.191C24.681 19.8478 24.9398 19.3731 25.0138 18.8543L26.1617 10.93C26.1923 10.7193 26.1811 10.5046 26.1286 10.2982C26.0762 10.0918 25.9836 9.89772 25.8561 9.72714C25.7286 9.55656 25.5687 9.41279 25.3856 9.30403C25.2025 9.19528 24.9998 9.12369 24.789 9.09334C24.7117 9.08488 6.74016 9.07884 6.74016 9.07884"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
