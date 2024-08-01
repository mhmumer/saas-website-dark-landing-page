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
      <div className="absolute h-[1200px] sm:h-[1500px] md:h-[1700px] lg:h-[1800px] w-[1000px] sm:w-[1600px] md:w-[1600px] lg:w-[2600px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE]/60  bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-150px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-gray-50/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Mutecx is here
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
              className={`${BricolageGrotesque.className} text-3xl sm:text-7xl leading-10  font-black tracking-tighter text-center  inline-flex`}
            >
              Digitally projecting
              <br /> dreams born in hearts
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
        <div className="flex justify-center mt-9   opacity-95 relative">
          <button className="rounded-md  bg-white px-8 py-3 text-lg font-mono tracking-wide border-dashed border-gray-100 border font-semibold uppercase text-black transition-all duration-500 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[5px_5px_0px_black] active:translate-x-[0px] active:translate-y-[0px]  active:shadow-none ">
            <span className="relative z-10">
              <a href="#contact">Get Started</a>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};
