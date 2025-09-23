import axios from "axios";
import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { useCart } from "../context/CartContext";

const ProductCard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-8 pt-32">
      {data.map((product) => (
        <div
          key={product.id}
          className="bg-blue-200 shadow-md rounded-2xl overflow-hidden p-4 w-full max-w-xs"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-xl"
          />
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {product.title}
            </h3>
            <p className="text-md text-gray-600">${product.price}</p>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white px-4 py-2 rounded-lg text-sm"
              >
                Add to Cart
              </button>
              <button
                aria-label="Add to Favorites"
                className="text-gray-500 hover:text-red-500 hover:cursor-pointer"
              >
                <CiHeart size={30} />
              </button>
            </div>
          </div>
        </div>
        // <ProductCardItem key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductCard;
