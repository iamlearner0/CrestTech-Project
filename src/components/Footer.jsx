import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-center p-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            beatae vitae reprehenderit libero consequatur, tempore animi in
            cumque eos dolorem quas eveniet fuga dignissimos alias sequi vero
            cupiditate! Sed, eum?
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="py-2">
              <a href="" className="hover:underline text-zinc-900">
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="" className="hover:underline text-zinc-900">
                About Us
              </a>
            </li>
            <li className="py-2">
              <a href="" className="hover:underline text-zinc-900">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Social Media</h2>
          <ul className="flex justify-center space-x-4">
            <li className="flex-row justify-items-center items-center gap-2 hover:cursor-pointer hover:scale-110">
              <FaFacebook />
              <a href="#" className="text-zinc-900 hover:text-zinc-700">
                Facebook
              </a>
            </li>
            <li className="flex-row justify-items-center items-center gap-2 hover:cursor-pointer hover:scale-110">
              <FaTwitterSquare />
              <a href="#" className="text-zinc-900 hover:text-zinc-700">
                Twitter
              </a>
            </li>
            <li className="flex-row justify-items-center items-center gap-2 hover:cursor-pointer hover:scale-110">
              <FaInstagram />
              <a href="#" className="text-zinc-900 hover:text-zinc-700">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
