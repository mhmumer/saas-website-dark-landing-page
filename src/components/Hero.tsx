"use client"
import Arrow from "@/assets/icons/arrow-w.svg"
import CursorImage from "@/assets/images/cursor.png"
import MessageImage from "@/assets/images/message.png"
import Image from "next/image";
import { Bricolage_Grotesque, Carme } from "next/font/google";
import {motion} from 'framer-motion' 

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });
const carme = Carme({ subsets: ["latin"], weight: "400" });

export const Hero = () => {
  return (
    <main
      className={` bg-gray-950 text-gray-50 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-32 relative overflow-clip`}
    >
      <div className="absolute h-[375px] sm:h-[768px] md:h-[1200px] lg:h-[1400px] w-[750px] sm:w-[1536px] md:w-[1736px] lg:w-[2400px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-gray-50/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              MHMTechX is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <Arrow />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1
              className={`${BricolageGrotesque.className} text-6xl sm:text-[9rem] font-black tracking-tighter text-center  inline-flex`}
            >
              One Pixel <br />
              at a Time
            </h1>
            
          </div>
        </div>
        <div className="flex justify-center">
          <p
            className={`${carme.className} text-center text-lg mt-4  max-w-lg`}
          >
            Experience the thrill of achievement with a custom app tailored to
            your unique needs, featuring stunning designs that captivate and
            drive your success.
          </p>
        </div>
        <div className="flex justify-center mt-8 opacity-95 relative">
          <button className="relative group bg-white text-black py-3 px-5 sm:py-4 sm:px-10 rounded-lg font-medium overflow-hidden">
            <div className="bg-gray-300 opacity-10  h-24 w-24 rounded-full absolute inset-0 -left-7 -top-5 group-hover:translate-x-6" />
            <span className="relative z-10">Get Started</span>
          </button>
        </div>
      </div>
    </main>
  );
};
