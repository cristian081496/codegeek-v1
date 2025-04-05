
import React from "react";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";

const HeroSection = () => {
  return <section className="relative pt-14 lg:pt-[149px]">
    <div className="absolute -left-1/2 top-0 z-[-1] h-full w-[150vw] bg-gradient-to-b from-white via-[#EBF4FF] to-white"></div>
    <div className="container grid grid-cols-2 gap-8">
      <div className="space-y-4">

        <h1 className="text-[32px] font-extrabold leading-[35px] md:text-[48px] md:leading-[57px]">
          <span className="inline-block bg-gradient-to-r from-[#2C3345] to-[#424D6A] bg-clip-text text-transparent">
            Want to Know Your
          </span>
          <br className="max-md:hidden" />
          <span className="inline-block bg-gradient-to-r from-[#27415F] via-[#007AFF] to-[#007AFF] bg-clip-text text-transparent">Real IQ Score?</span>
        </h1>

        <p className="text-base leading-[25px] text-[#2B2D42] lg:max-w-[325px] lg:text-lg">Take our IQ test and unlock your path to self-discovery and development</p>

        <div className="mt-8 flex items-center gap-6">
          <button className="btn-primary flex items-center gap-6 w-[228.95px] h-[48px] tracking-tight font-semibold rounded-xl px-8">
            Start IQ Test Now <FaArrowRight className="h-3.5 w-3.5" />
          </button>
          <button className="btn-secondary h-[48px] rounded-2xl px-6">
            How It Works
          </button>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <div className="flex -space-x-6">
            {/* User avatars overlappig */}
            <div className="w-[50px] h-[50px] rounded-full border-4 border-white overflow-hidden">
              <Image
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="User avatar"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
            <div className="w-[50px] h-[50px] rounded-full border-4 border-white overflow-hidden">
              <Image
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                alt="User avatar"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
            <div className="w-[50px] h-[50px] rounded-full border-4 border-white overflow-hidden">
              <Image
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="User avatar"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
            <div className="w-[50px] h-[50px] rounded-full border-4 border-white overflow-hidden">
              <Image
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                alt="User avatar"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <div className="flex gap-1">
              <p className="leading-6 font-sans text-[#2B2D42]">Excellent user reviews</p>
              <div className="inline-flex items-center justify-center">
                {/* Star rating using react-icons */}
                <div className="inline-flex text-[#f7b635] -space-x-0.5 -mt-0">
                  <MdOutlineStarPurple500 className="w-[19px] h-[19px]" />
                  <MdOutlineStarPurple500 className="w-[19px] h-[19px]" />
                  <MdOutlineStarPurple500 className="w-[19px] h-[19px]" />
                  <MdOutlineStarPurple500 className="w-[19px] h-[19px]" />
                  <div className="relative w-[19px] h-[19px]">
                    <MdOutlineStarPurple500 className="absolute inset-0 w-[19px] h-[19px] text-[#d1d5db]" />
                    <div className="absolute inset-0 overflow-hidden w-[10px] h-[19px]">
                      <MdOutlineStarPurple500 className="absolute inset-0 w-[19px] h-[19px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="leading-6 font-sans text-[#2B2D42]"><b>9759</b> IQ tests taken today!</p>

          </div>
        </div>
      </div>

      <div className="-mt-7">
        <Image
          src="/images/main-graph.webp"
          alt="IQ Test Graph"
          width={800}
          height={400}
          className="w-full max-w-[620.4px]"
          priority
        />
      </div>


    </div>
  </section>;
};

export default HeroSection;
