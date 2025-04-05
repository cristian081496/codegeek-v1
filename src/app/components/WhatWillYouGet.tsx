import React from "react";
import Section from "./ui/Section";
import { WHAT_WILL_YOU_GET } from "../data";
import { RibbonCheckIcon } from "./Icons";

const WhatWillYouGet = () => {
  return <Section title="What Will You Get" className="bg-[#F6FBFF]" tag="BENEFITS">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {
        WHAT_WILL_YOU_GET.map((item) => (
          <div key={item.details} className="flex items-start rounded-lg bg-white border-1 border-lightBlue gap-5 px-5 pr-2 py-8 pt-7">
            <RibbonCheckIcon className="text-[#007AFF]" />
            <div className="text-sm text-[#2C3345] -mt-1 leading-5">{item.details}</div>

          </div>
        ))
      }
    </div>
  </Section >;
};

export default WhatWillYouGet;
