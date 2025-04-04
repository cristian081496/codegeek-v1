import React from "react";
import Section from "./ui/Section";
import { FaArrowRight } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { LuCopyCheck } from "react-icons/lu";
import { BrainIcon, CareerIcon, PersonalityIcon, RelationsHandsIcon } from "./Icons";

const AvailableTest = () => {
  return <Section title="Available Tests" description="Each test reveals a new part of you. Start with intelligence, with more tests coming soon" className="bg-[#F6FBFF]">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="space-y-3 rounded-xl border-[#E2E8F0] border p-3 bg-white px-4 py-6">
        <BrainIcon />
        <p className="text-[18px] font-semibold text-[#2C3345]">IQ / Intelligence Test</p>
        <div className="flex gap-4 text-sm text-[#454F69]">
          <div className="flex items-center gap-1.5">
            <FiClock className="text-normal" />
            <div>15 minutes</div>
          </div>
          <div className="flex items-center gap-1.5">
            <LuCopyCheck className="text-normal" />
            <div>25 questions</div>
          </div>
        </div>
        <button className="btn-primary flex items-center gap-2 h-[48px] rounded-xl px-8 w-full justify-center">
          Start IQ Test Now <FaArrowRight />
        </button>
      </div>

      <div className="space-y-3 rounded-xl border-[#E2E8F0] border p-3 bg-white px-4 py-6">
        <PersonalityIcon />
        <p className="text-[18px] font-semibold text-[#2C3345]">Personality Type</p>
        <div className="flex gap-4 text-sm text-[#454F69]">
          <div className="flex items-center gap-1.5">
            <FiClock className="text-normal" />
            <div>20 minutes</div>
          </div>
          <div className="flex items-center gap-1.5">
            <LuCopyCheck className="text-normal" />
            <div>30 questions</div>
          </div>
        </div>
        <button className="btn-primary opacity-40 flex items-center gap-2 h-[48px] rounded-xl px-8 w-full justify-center">
          Coming Soon
        </button>
      </div>

      <div className="space-y-3 rounded-xl border-[#E2E8F0] border p-3 bg-white px-4 py-6">
        <CareerIcon />
        <p className="text-[18px] font-semibold text-[#2C3345]">Career</p>
        <div className="flex gap-4 text-sm text-[#454F69]">
          <div className="flex items-center gap-1.5">
            <FiClock className="text-normal" />
            <div>25 minutes</div>
          </div>
          <div className="flex items-center gap-1.5">
            <LuCopyCheck className="text-normal" />
            <div>35 questions</div>
          </div>
        </div>
        <button className="btn-primary opacity-40 flex items-center gap-2 h-[48px] rounded-xl px-8 w-full justify-center">
          Coming Soon
        </button>
      </div>

      <div className="space-y-3 rounded-xl border-[#E2E8F0] border p-3 bg-white px-4 py-6">
        <RelationsHandsIcon />
        <p className="text-[18px] font-semibold text-[#2C3345]">Relationships</p>
        <div className="flex gap-4 text-sm text-[#454F69]">
          <div className="flex items-center gap-1.5">
            <FiClock className="text-normal" />
            <div>20 minutes</div>
          </div>
          <div className="flex items-center gap-1.5">
            <LuCopyCheck className="text-normal" />
            <div>30 questions</div>
          </div>
        </div>
        <button className="btn-primary opacity-40 flex items-center gap-2 h-[48px] rounded-xl px-8 w-full justify-center">
          Coming Soon
        </button>
      </div>
    </div>
  </Section>;
};

export default AvailableTest;
