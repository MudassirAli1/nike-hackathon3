"use client";
import { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { FiTrash } from "react-icons/fi";
import Image from "next/image";

const WishlistPage = () => {
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [showNotif, setShowNotif] = useState<boolean>(false); // For animation

  useEffect(() => {
    // Fetch wishlist from localStorage
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const showNotification = (message: string) => {
    setNotification(message);
    setShowNotif(true); // Start animation
    setTimeout(() => setShowNotif(false), 2500); // Hide after 2.5 seconds
  };

  const handleRemoveFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((product) => product._id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    showNotification("Removed from Wishlist");
  };

  const handleMoveToCart = (product: any) => {
    addToCart({
      id: product._id,
      name: product.productName,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    handleRemoveFromWishlist(product._id); // Remove from wishlist when added to cart
    showNotification("Moved to Cart");
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      {/* Notification */}
      {notification && (
        <div
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 ${
            showNotif ? "translate-y-0" : "-translate-y-full"
          } bg-black text-white py-2 px-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out`}
        >
          {notification}
        </div>
      )}

      <h1 className="text-3xl font-Poppins font-medium text-black text-center mb-6">Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center text-lg text-gray-600">Your wishlist is empty!</div>
      ) : (
        <div className="space-y-8">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 rounded-lg shadow-lg space-y-4 sm:space-y-0"
            >
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 relative">
                  <Image
                    src={product.image}
                    alt={product.productName}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-black">{product.productName}</h3>
                  <p className="text-sm text-gray-600">Price: {product.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Move to Cart Button */}
                <button
                  onClick={() => handleMoveToCart(product)}
                  className="text-white bg-black rounded-full py-2 px-4 hover:bg-gray-800 transition"
                >
                  Move to Cart
                </button>

                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => handleRemoveFromWishlist(product._id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FiTrash size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
