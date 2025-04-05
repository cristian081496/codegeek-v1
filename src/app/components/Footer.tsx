import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { PiHeadset } from "react-icons/pi";

const Footer = () => {
  return <footer className="bg-darkPurple text-white py-8 sm:py-6 md:py-12 mt-15">
    <div className="container px-5 sm:px-0">
      <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-8 border-b border-gray-500 pb-8 sm:pb-12">
        <div>
          <div className="mb-6">
            <Image
              src="/logo.svg"
              alt="myIQ Logo"
              width={108}
              height={31}
              className="brightness-0 invert"
            />
          </div>
          <div className="flex gap-4 mb-6 text-[24px]">
            <a href="#" aria-label="Twitter" className="flex items-center justify-center ">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="flex items-center justify-center">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="flex items-center justify-center">
              <FaFacebook />
            </a>

          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-20">
          <div className="pr-5">
            <div className="text-lg font-semibold mb-4">Customer Support</div>
            <ul className="space-y-3 text-normal">
              <li><a href="#" className="font-medium">How to Cancel</a></li>
              <li>
                <a href="#" className="flex items-center gap-3 border-2 rounded-full px-4 py-2 duration-200 font-medium hover:text-darkPurple hover:bg-white">
                  <div className="flex items-center gap-3">

                    <PiHeadset className="text-[24px] font-black" />
                    <div>
                      <p className="text-sm">Customer Support <br />24/7/365</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-lg font-semibold mb-4">Legal</div>
            <ul className="space-y-2 font-medium">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <div className="text-lg font-semibold mb-4">About Us</div>
            <ul className="space-y-2 font-medium">
              <li><a href="#" className="hover:text-white">Help</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Reviews</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>

          </div>
        </div>
      </div>


      <div className="mt-6">
        <div className="mb-4 w-full flex justify-center sm:justify-end">
          <select className="bg-transparent border-2 border-white rounded-lg text-sm py-2 w-[128px] h-[40px]">
            <option>English</option>
          </select>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-0 sm:justify-between">

          <div className="text-sm sm:text-md text-center sm:text-left">
            Copyright © 2024-2025 myIQ™. All rights reserved. All trademarks referenced herein are the properties of their respective owners.
          </div>


          <div>
            <Image src="/images/payment-method.png" alt="Payment" width={260} height={37} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  </footer >;
};

export default Footer;
