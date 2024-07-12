"use client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px]">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the worlds most innovative teams
        </h2>
        <div className="overflow-hidden mt-12 before:content-[''] after:content-[''] before:absolute before:h-full before:w-5 before:opacity-70 after:absolute after:h-full after:w-20 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <div className="flex gap-16">
            {images.map(({ src, alt }) => (
              <Image src={src} alt={alt} className="flex-none h-8 w-auto" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
