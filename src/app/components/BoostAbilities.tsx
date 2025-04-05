import React from "react";
import Section from "./ui/Section";
import { CheckIcon } from "./Icons";
import { BOOST_ABILITIES } from "../data";

const BoostAbilities = () => {
  return <Section title="Boost Your Abilities" description="Unlock your potential with our comprehensive training package">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {BOOST_ABILITIES.map((ability, index) => (
        <div key={index} className="rounded-xl border-1 border-[#E2E8F0] p-4 space-y-3">
          <div className="h-[42px] w-[42px] rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#2B2D42]">{index + 1}</div>
          </div>
          <p className="text-lg font-semibold text-[#2C3345]">{ability.title}</p>

          <ul className="space-y-2 p-1">
            {ability.checkList.map((check, checkIndex) => (
              <li key={checkIndex} className="flex gap-2 items-start">
                <div>
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
