"use client";
import Image from "next/image";
import EcoSystem from "@/assets/images/ecosystem.png";
import Encryption from "@/assets/images/encryption.png";
import SEO from "@/assets/images/Seo.png";
import { Feature } from "./feature";
import { Bricolage_Grotesque, Carme } from "next/font/google";
import { motion } from "framer-motion";
import MessageImage from "@/assets/images/message.png";
import CursorImage from "@/assets/images/cursor.png";

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });
const carme = Carme({ subsets: ["latin"], weight: "400" });

const features = [
  {
    title: "Responsive Design",
    description:
      "Ensure your website looks great and functions flawlessly on all devices, from desktops to smartphones.",
    img: EcoSystem,
  },
  {
    title: "Secure Encryption",
    description:
      "Protect your website and user data with advanced encryption technologies, ensuring privacy and security.",
    img: Encryption,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility and ranking on search engines with our expert SEO services.",
    img: SEO,
  },
];

export const Features = () => {
  return (
    <div className="relative bg-black text-white py-[72px] sm:py-24">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(0,0,0,0.3)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(0,0,0,0.3)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <circle cx="50%" cy="50%" r="60%" fill="url(#grad1)" />
          <circle cx="20%" cy="80%" r="30%" fill="rgba(255,255,255,0.03)" />
          <circle cx="85%" cy="30%" r="25%" fill="rgba(255,255,255,0.02)" />
        </svg>
      </div>
      <div className="container mx-auto relative z-10">
        <h2
          className={`text-center z-10 font-bold xl:text-6xl text-4xl tracking-tighter ${BricolageGrotesque.className}`}
        >
          Experience a web revolution
        </h2>

        <div className="max-w-4xl mx-auto">
          <p
            className={`${carme.className} text-center mt-5 text-lg lg:max-w-3xl xl:max-w-3xl mx-auto text-white/70`}
          >
            Enjoy top-tier security with advanced encryption, embrace seamless,
            responsive designs for every device, and boost your online presence
            with expert SEO optimization for maximum visibility and success.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4 sm:flex-1">
          {features.map(({ title, description, img }) => (
            <Feature
              key={title}
              title={title}
              description={description}
              img={img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
