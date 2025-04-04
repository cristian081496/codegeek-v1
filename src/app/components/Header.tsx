import Image from "next/image";
import React from "react";

const Header = () => {
  return <header className="w-full h-16 flex items-center shadow-xs backdrop-blur-lg backdrop-saturate-150 shadow-gray-300 fixed z-2 bg-white/70">
    <div className="container flex justify-between items-center">
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
            <button className="btn-secondary">Log In</button>
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
