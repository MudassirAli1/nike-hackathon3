"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import client from "@/sanity/lib/client"; // Adjust this path to match your project structure
import { urlFor } from "@/sanity/lib/image"; // Ensure this is properly imported for image handling

const MenPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        // Correct Sanity query to filter by category "Men"
        const query = `*[_type == "product" && category == ""]{
          _id,
          productName,
          description,
          category,
          price,
          colors,
          status,
          "image": image.asset->url
        }`;
        
        const data = await client.fetch(query);

        if (data && data.length > 0) {
          setProducts(data);
        } else {
          setError("No men's products found.");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load men's products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenProducts();
  }, []);

  if (loading) {
    return <div className="text-black flex justify-center text-9xl my-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-center mb-8">Men's Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product._id} href={`/product/${product.productName}`}>
            <div className="border p-2 border-gray-300 rounded-lg transition-transform duration-200 transform hover:scale-105">
              <div className="flex justify-center">
                <Image 
                  src={urlFor(product.image).url()} 
                  alt={product.productName} 
                  width={200} 
                  height={200} 
                  className="object-contain" 
                />
              </div>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenPage;
