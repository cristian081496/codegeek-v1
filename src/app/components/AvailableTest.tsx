import React from "react";
import Section from "./ui/Section";
import { FaArrowRight } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { LuCopyCheck } from "react-icons/lu";
import { AVAILABLE_TESTS } from "@/app/data";

const AvailableTest = () => {
  return (
    <Section title="Available Tests" description="Each test reveals a new part of you. Start with intelligence, with more tests coming soon" className="bg-[#F6FBFF] md:pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {AVAILABLE_TESTS.map((test) => (
          <div key={test.title} className="space-y-3 rounded-xl border-[#E2E8F0] border p-3 bg-white px-4 py-6">
            <test.icon />
            <p className="text-lg font-semibold text-[#2C3345]">{test.title}</p>
            <div className="flex gap-4 text-sm text-[#454F69]">
              <div className="flex items-center gap-1.5">
                <FiClock className="text-normal" />
                <div>{test.description.split(',')[0]}</div>
              </div>
              <div className="flex items-center gap-1.5">
                <LuCopyCheck className="text-normal" />
                <div>{test.description.split(',')[1]?.trim()}</div>
              </div>
            </div>
            <button className={`btn-primary flex items-center gap-3 h-[48px] rounded-xl px-8 w-full justify-center ${!test.available ? 'opacity-50' : ''}`}>
              {test.button} {test.available && <FaArrowRight className="h-[14px] w-[14px]" />}
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AvailableTest;
