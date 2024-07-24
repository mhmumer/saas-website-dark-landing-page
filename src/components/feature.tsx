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
    <motion.div
      key={title}
      whileHover="hover"
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      className="h-[21rem] w-[21rem] border border-white/40  bg-black overflow-hidden shrink-0  text-center relative flex flex-col justify-between"
    >
       
      <div className="z-20 relative  justify-between h-full">
        <motion.h3
          initial={{ scale: 0.95 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className={`${BricolageGrotesque.className} origin-center text-white/90 pt-7 text-5xl font-black leading-[1.2] block font-mono`}
        >
          {title}
        </motion.h3>
        <p
          className={`${carme.className} z-20 block mt-8 text-white/60 px-5 font-normal`}
        >
          {description}
        </p>
      
      </div>
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute z-10 hidden lg:block"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#9560EB"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#5D2CA8"
      />
    </motion.svg>
  );
};
