// components/BottomNavigator.tsx
import React from "react";
import Link from "next/link";

const BottomNavigator: React.FC = () => {
  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 z-[100]">
      <ul className="flex fixed justify-around text-white">
        <li>
          <Link href="#home" className="flex flex-col items-center">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="#about" className="flex flex-col items-center">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="#services" className="flex flex-col items-center">
            <span>Services</span>
          </Link>
        </li>
        <li>
          <Link href="#contact" className="flex flex-col items-center">
            
              <span>Contact</span>
           
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigator;
