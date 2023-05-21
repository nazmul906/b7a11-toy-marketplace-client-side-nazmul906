/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-800 py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between items-center">
          <div class="w-full md:w-auto mb-4 md:mb-0">
            <a href="#" class="flex items-center text-white text-lg font-bold">
              MyWebsite
            </a>
          </div>
          <div class="w-full md:w-auto">
            <ul class="flex justify-center md:justify-end space-x-4">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 text-gray-400 text-center">
          <p>Our Address:Gulshan,Dhaka,Bangladesh</p>
          <p>Email: info@mywebsite.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
