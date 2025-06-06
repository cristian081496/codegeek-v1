import React from "react";
interface SectionProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  tag?: string;
  desClass?: string;
}
const Section: React.FC<SectionProps> = ({ children, title, description, className, tag, desClass }) => {
  return <section className={`relative py-6 md:py-10 ${className} `}>
    <div className="container">
      {tag && <div className="text-center mb-4"><span className="text-[#006FEE] border-2 border-[#006FEE] text-sm rounded-full px-3 py-1 mb-10">{tag}</span></div>}
      <h3>{title}</h3>

      {description && <p className={`text-lg text-[#2C3345] text-center pt-4 ${desClass}`}>{description}</p>}

      <div className="mt-6 md:mt-8">
        {children}
      </div>
    </div>
  </section>;
};

export default Section;
