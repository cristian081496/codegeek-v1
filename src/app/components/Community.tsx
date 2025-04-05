import React from "react";
import { FacebookIcon, InstagramIcon, XIcon } from "./Icons";

const Community = () => {
  return <section className="bg-[#F6FBFF] py-8 sm:py-4 md:py-9">
    <div className="container px-5 sm:px-0 flex flex-col sm:flex-row items-center gap-6 sm:gap-0 sm:justify-between">
      <div className="space-y-3 sm:space-y-1 w-full sm:w-auto">
        <h3 className="text-center sm:text-left text-[28px] font-bold md:text-[39px]">Community</h3>
        <p className="text-base sm:text-[17px] text-[rgb(69,79,105)] text-center sm:text-center">Follow us on social media for daily quizzes, challenges and brain teasers to keep your mind sharp</p>
      </div>

      <div className="flex gap-3 w-full sm:w-auto justify-center sm:justify-start">
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#2C3345] w-[96px] h-[48px] rounded-xl bg-white flex items-center justify-center border-[#007AFF] border-1 transition-all duration-300 hover:opacity-70">
          <XIcon size={24} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#2C3345] w-[96px] h-[48px] rounded-xl bg-white flex items-center justify-center border-[#007AFF] border-1 transition-all duration-300 hover:opacity-70">
          <InstagramIcon size={24} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#2C3345] w-[96px] h-[48px] rounded-xl bg-white flex items-center justify-center border-[#007AFF] border-1 transition-all duration-300 hover:opacity-70">
          <FacebookIcon size={24} />
        </a>
      </div>
    </div>
  </section>;
};

export default Community;
