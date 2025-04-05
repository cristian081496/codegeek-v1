import React from "react";
import Section from "./ui/Section";
import { CheckIcon } from "./Icons";
import { PLANS } from "../data";

const Plans = () => {
  return <Section title="Explore our plans" description="Discover our flexible offers and choose the one that best suits your learning and personal development journey." className="md:pt-12" desClass="!pt-2">
    <div className="flex justify-center gap-4">
      {PLANS.map((plan) => (
        <div key={plan.title} className="rounded-xl border-[#E2E8F0] w-[362px] border p-3 bg-white py-6  shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="text-lg p-2 mb-4 pt-0 -mt-0 px-3 font-medium">{plan.title}</div>

          <hr className="border-none w-full h-[1px] bg-black" />

          <div className="p-3">
            <div className="flex items-baseline gap-1 pt-2.5">
              <span className="text-4xl font-bold leading-7 tracking-[-1px]">${plan.price}*</span>
              <span className="text-sm font-semibold text-[#8f8e94]">/{plan.frequency}</span>
            </div>
          </div>

          <div className="p-3 mt-2.5">
            {plan.details.map((detail, key) => (
              <div key={key} className="flex items-center gap-2 mb-2">
                <div>
                  <CheckIcon sizeW={24} sizeH={17.4} />
                </div>
                <p className="text-normal font-medium text-[#71717A]">{detail}</p>
              </div>
            ))}
          </div>

          <div className="p-3 pb-0 -mt-2">
            <button className="btn-primary w-full "> Get started</button>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 text-center text-[15px] leading-5">*Visit our <a className="underline" href="https://myiq.com/en/pricing">pricing page</a> to find out more details.</div>
  </Section >;
};

export default Plans;
