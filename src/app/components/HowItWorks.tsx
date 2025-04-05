import React from "react";
import Section from "./ui/Section";
import { RocketIcon, DetailedReportIcon, TestPaperIcon } from "./Icons";

const HowItWorks = () => {
  return <Section title="How it Works" className="py-8 md:pt-7" >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 md:mt-10 px-5 md:px-0">
      <div className="space-y-3 rounded-xl border-lightBlue border p-5 md:pb-9 md:px-8 md:pt-[42px] shadow-md md:shadow-none">
        <TestPaperIcon />
        <p className="text-base md:text-lg font-semibold text-[#2C3345]">Take a Test</p>

        <p className="text-sm">Get an unbiased view of yourself</p>
      </div>
      <div className="space-y-3 rounded-xl border-lightBlue border p-5 md:pb-9 md:px-8 md:pt-[42px] shadow-md md:shadow-none">
        <DetailedReportIcon />
        <p className="text-base md:text-lg font-semibold text-[#2C3345]">Get Your Detailed Report</p>

        <p className="text-sm">Learn your strengths and discover areas for growth</p>
      </div>
      <div className="space-y-3 rounded-xl border-lightBlue border p-5 md:px-8 md:pt-[42px] shadow-md md:shadow-none">
        <RocketIcon />
        <p className="text-base md:text-lg font-semibold text-[#2C3345]">Begin Your Journey</p>

        <p className="text-sm">Start improving with expert courses and brain training</p>
      </div>
    </div>
  </Section>;
};

export default HowItWorks;
