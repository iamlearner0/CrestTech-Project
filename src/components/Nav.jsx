import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

const Nav = () => {
  const { cartItems, toggleCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="bg-white shadow-md fixed w-full z-10 mb-4">
      <nav className="px-8 bg-blue-100 shadow-md fixed w-full z-10">
        <div className="container flex justify-between items-center p-8">
          <h1 className="text-3xl text-zinc-900 font-extrabold md:mx-4.5">
            ByteMALL
          </h1>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-2xl hover:text-gray-500 hover:bg-amber-100 p-3 transition duration-300 rounded-full"
            >
              <MdMenu />
            </button>
          </div>

          {/* Search bar */}
          <div className="lg:flex hidden items-center gap-4">
            <form
              onSubmit={handleSearch}
              className="flex items-center border border-gray-300 rounded-md px-2 py-1 max-w-full md:w-1/3"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 w-96 px-2 py-1 text-sm focus:outline-none"
              />
              <button className="text-2xl sm:hidden hover:text-gray-500 hover:bg-amber-100 p-3 transition duration-300 mr-8 rounded-full">
                <CiSearch />
              </button>
            </form>
            <button
              className="text-2xl hover:text-gray-500 hover:bg-amber-100 p-3 transition duration-300 mr-4 rounded-full"
              onClick={toggleCart}
            >
              <CiShoppingCart />
              {cartItems.length > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 absolute top-0 right-0">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>

          {/* Desktop link */}
          <div className="hidden md:block">
            <ul className="flex gap-4 text-lg text-gray-500 items-center">
              <li>
                <a
                  href="#home"
                  className="inline-block text-xl px-5 py-2 cursor-pointer text-gray-500 hover:text-gray-900 hover:bg-amber-100 rounded-md transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-block px-5 py-2 cursor-pointer text-gray-500 hover:text-gray-900 hover:bg-amber-100 rounded-md transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-block px-5 py-2 cursor-pointer text-gray-500 hover:text-gray-900 hover:bg-amber-100 rounded-md transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu dropdown */}
          {menuOpen && (
            <ul className="md:hidden mt-4 space-y-3 text-sm font-medium text-gray-700">
              <li>
                <a
                  href="#home"
                  className="inline-block text-xl px-5 py-2 cursor-pointer text-zinc-900 font-extrabold hover:text-gray-900 hover:bg-amber-100 rounded-md transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="inline-block text-xl px-5 py-2 cursor-pointer text-gray-500 hover:text-gray-900 hover:bg-amber-100 rounded-md transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="inline-block text-xl px-5 py-2 cursor-pointer text-gray-500 hover:text-gray-900 hover:bg-amber-100 rounded-md transition duration-300"
                >
                  Home
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
