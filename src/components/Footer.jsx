import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-center p-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <li>
              <a href="" className="hover:underline text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Social Media</h2>
          <ul className="flex justify-center space-x-4">
            <li>
              <Facebook />
              <a href="#" className="text-gray-300 hover:text-gray-900">
                Facebook
              </a>
            </li>
            <li>
              <Twitter />
              <a href="#" className="text-gray-300 hover:text-gray-900">
                Twitter
              </a>
            </li>
            <li>
              <Instagram />
              <a href="#" className="text-gray-300 hover:text-gray-900">
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
