import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { FAQS } from "@/app/data";

const Faq = () => {
  return <section className="bg-[#F6FBFF] py-4 md:py-9">
    <div className="container">
      <div className="relative mx-auto w-full gap-6 text-left lg:grid lg:grid-cols-[1fr_4fr] lg:gap-14">
        <h3 className="text-left">Frequently Asked Questions</h3>

        <Accordion type="multiple" className="w-full pt-4">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.title} value={faq.title} className="px-4 shadow-medium rounded-medium md:px-5 !shadow-none bg-transparent border-b-1 border-[#E5EBFA] !rounded-none text-left">
              <AccordionTrigger className="text-left text-lg !underline-none">{faq.title}</AccordionTrigger>
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
