import React from "react";
import Section from "./ui/Section";
import { WHAT_WILL_YOU_GET } from "../data";
import { RibbonCheckIcon } from "./Icons";

const WhatWillYouGet = () => {
  return <Section title="What Will You Get" className="bg-[#F6FBFF] py-8 md:py-12" tag="BENEFITS">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 px-5 md:px-0">
      {
        WHAT_WILL_YOU_GET.map((item) => (
          <div key={item.details} className="flex items-start rounded-lg bg-white border-1 border-lightBlue gap-4 px-4 py-6 shadow-md md:shadow-none">
            <RibbonCheckIcon className="text-[#007AFF] min-w-5 mt-0.5" />
            <div className="text-sm text-[#2C3345] leading-5">{item.details}</div>

          </div>
        ))
      }
    </div>
  </Section >;
};

export default WhatWillYouGet;
