"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <header className={`w-full h-16 flex items-center fixed z-[100] transition-all duration-200 ${scrolled ? 'bg-white shadow-sm' : 'bg-white/70 backdrop-blur-lg backdrop-saturate-150'}`}>
    <div className="container px-4 md:px-0 flex justify-between items-center">
      <div className="flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={108}
          height={31}
          priority
        />
      </div>
      <nav>
        <ul className="flex gap-3 items-center">
          <li>
            <button className="btn-secondary w-[80.14px] px-0">Log In</button>
          </li>
          <li>
            <button className="btn-primary">Start Test</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>;
};

export default Header;
