"use client";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Bricolage_Grotesque, Carme } from "next/font/google";

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
   const offsetX = useMotionValue(0)
   const offsetY = useMotionValue(0);
   const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${offsetX}px ${offsetY}px, black, transparent)`;
   const border=useRef<HTMLDivElement>(null)
  useEffect(() => {
     const updateMousePosition = (e: MouseEvent) => {
        if (!border.current) return
        const borderRect = border.current?.getBoundingClientRect()
        offsetX.set(e.x - borderRect.x)
        offsetY.set(e.y - borderRect.y)
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <div
      key={title}
      className="border border-white/40 px-5 py-10 text-center rounded-xl relative"
    >
      <motion.div
        className="absolute inset-0 border-[2px] border-purple-300 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      />
      <div className="inline-flex h-14 w-14 bg-gray-300 text-black justify-center items-center rounded-lg">
        <Image src={img} alt="" className="p-3" />
      </div>
      <h3 className={`${BricolageGrotesque.className} mt-6 text-lg font-bold`}>
        {title}
      </h3>
      <p className={`${carme.className} mt-4 text-white/80 px-4 font-normal`}>
        {description}
      </p>
    </div>
  );
};
