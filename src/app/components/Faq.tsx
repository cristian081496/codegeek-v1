import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { FAQS } from "@/app/data";

const Faq = () => {
  return <section className="bg-[#F6FBFF] py-8 md:py-9 md:pt-10">
    <div className="container px-5 md:px-0">
      <div className="relative mx-auto w-full gap-6 text-left lg:grid lg:grid-cols-[1fr_4fr] lg:gap-14">
        <h3 className="text-center lg:text-left text-2xl font-bold mb-6 lg:mb-0">Frequently Asked Questions</h3>

        <Accordion type="multiple" className="w-full pt-0 lg:pt-4">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.title} value={faq.title} className="px-0 md:px-4 shadow-medium rounded-medium lg:px-5 !shadow-none bg-transparent border-b-1 border-[#E5EBFA] !rounded-none text-left">
              <AccordionTrigger className="text-left text-base md:text-lg !underline-none py-4">{faq.title}</AccordionTrigger>
              <AccordionContent className="text-[#444F69]">
                <p className="text-normal">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>;
};

export default Faq;
