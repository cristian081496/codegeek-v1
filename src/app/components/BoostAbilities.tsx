import React from "react";
import Section from "./ui/Section";
import { CheckIcon } from "./Icons";
import { BOOST_ABILITIES } from "../data";

const BoostAbilities = () => {
  return <Section title="Boost Your Abilities" description="Unlock your potential with our comprehensive training package" className="py-8 md:pt-12" desClass="!pt-2">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-0">
      {BOOST_ABILITIES.map((ability, index) => (
        <div key={index} className="rounded-xl border-1 border-[#E2E8F0] p-4 pt-5 space-y-3 shadow-md md:shadow-none">
          <div className="h-[42px] w-[42px] rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#2B2D42]">{index + 1}</div>
          </div>
          <p className="text-base md:text-lg font-semibold text-[#2C3345]">{ability.title}</p>

          <ul className="space-y-2">
            {ability.checkList.map((check, checkIndex) => (
              <li key={checkIndex} className="flex gap-1.5 items-start">
                <div className="p-1 mt-[0px]">
                  <CheckIcon />
                </div>
                <p className="text-sm">{check}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>;
};

export default BoostAbilities;
