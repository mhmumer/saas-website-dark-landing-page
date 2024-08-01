"use client";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Bricolage_Grotesque, Carme } from "next/font/google";
import Link from "next/link";

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });
const carme = Carme({ subsets: ["latin"], weight: "400" });

export const Feature = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: any;
}) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      key={title}
      
      className="h-[19rem] sm:w-[21rem] w-[20rem]  border border-white/20  bg-black overflow-hidden shrink-0  text-center relative flex flex-col justify-between rounded-md "
    >
      
      <div className="z-20 relative  justify-between h-full bg-black ">
        <Image
          src={img}
          alt=""
          className="border border-gray-500 h-[3rem] w-[3rem] bg-white/90 relative left-1/2 origin-center mt-12 -ml-6 p-2 rounded-2xl"
        />

        <h3
       
          
          className={`${BricolageGrotesque.className} origin-center text-white/90 pt-8 text-3xl font-black leading-[1.2] block font-mono`}
        >
          {title}
        </h3>
        <p
          className={`${carme.className} z-20 block mt-4 text-white/60 px-8 font-normal italic`}
        >
          <span className="italic">{description}</span>
        </p>
      </div>
    </div>
  );
};

