"use client"
import React, { useState } from "react";
import { BenzingaLogo, BarChartLogo, YahooLogo, TGAMlogo } from "./Icons";

const ScrollingBanner = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Define the logos once
  const logos = [
    BenzingaLogo,
    BarChartLogo,
    YahooLogo,
    TGAMlogo
  ];

  // Create enough duplicates for a seamless effect
  const allLogos = [...logos, ...logos, ...logos, ...logos]; // 4x for good measure

  return (
    <div className="container mt-5">
      <div className="relative overflow-hidden bg-white py-6 mb-3 -mx-4 md:mx-0 md:rounded-xl">
        {/* Gradient masks for fade effect */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Use CSS animation for smoother scrolling */}
        <div
          className="infinite-scroll-wrapper overflow-hidden w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`infinite-scroll-content flex ${isPaused ? 'paused' : ''}`}>
            {allLogos.map((LogoComponent, index) => (
              <div key={index} className="flex items-center justify-center w-28 md:w-40 h-10 md:h-12 mx-3 md:mx-4 flex-shrink-0 text-[#638FB1]">
                <LogoComponent />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .infinite-scroll-wrapper {
          position: relative;
        }
        
        .infinite-scroll-content {
          animation: scrolling 15s linear infinite;
          display: inline-flex;
          white-space: nowrap;
        }
        
        .paused {
          animation-play-state: paused;
        }
        
        @keyframes scrolling {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-28px * ${logos.length} - 6px * ${logos.length} * 2));
          }
        }
        
        @media (min-width: 768px) {
          @keyframes scrolling {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-40px * ${logos.length} - 8px * ${logos.length} * 2));
            }
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;
