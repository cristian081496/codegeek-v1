import React from "react";
import { FacebookIcon, InstagramIcon, XIcon } from "./Icons";

const Community = () => {
  return <section className="bg-[#F6FBFF] py-4 md:py-9">
    <div className="container flex items-center justify-between">
      <div className="space-y-1">
        <h3 className="text-left">Community</h3>
        <p className="text-[17px] text-[#454F69] text-center">Follow us on social media for daily quizzes, challenges and brain teasers to keep your mind sharp</p>
      </div>

      <div className="flex gap-3">
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
