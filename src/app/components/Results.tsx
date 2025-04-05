import React from "react";
import Section from "./ui/Section";
import { RESULTS } from "../data";

const Results = () => {
  return (
    <>
      <Section title="Latest results" className="md:pt-12 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RESULTS.map((result, index) => (
            <div key={index} className={`
            ${index % 4 === 0 || index % 4 === 1 ? 'bg-white' : 'bg-[#F6FBFF]'}
            md:bg-group-2 
            p-4  rounded-[18px] h-[94px] flex items-center
          `}>
              <div className="flex items-center gap-4 px-3 py-3 sm:py-0 sm:pl-4 w-full">
                <div className="rounded overflow-hidden w-[45px] h-[32px] relative">
                  <div className="absolute inset-0 scale-140">
                    <result.icon sizeW={45} sizeH={32} />
                  </div>
                </div>
                <div className="text-[#0D0D0E] text-lg font-medium">{result.name}</div>
                <div className="ml-auto text-[20px] text-[#006FEE] font-semibold mr-7">IQ {result.IQ}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Results;
