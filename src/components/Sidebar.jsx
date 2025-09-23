import React from "react";
import { useCart } from "../context/CartContext";
import { MdOutlineClose } from "react-icons/md";

const Sidebar = () => {
  const { cartItems, showCart, toggleCart } = useCart();
  return (
    <div>
      {showCart && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={toggleCart}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={toggleCart}>
            <MdOutlineClose />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-sm text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 mb-4 border-b pb-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600">${item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
