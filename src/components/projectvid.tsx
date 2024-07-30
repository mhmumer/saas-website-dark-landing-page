"use client";

import React, { useEffect } from "react";
import BackgroundVideo from "next-video/background-video";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Present() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 70%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.main
      className="sticky lg:h-screen top-0 w-full h-full  flex items-center justify-center overflow-hidden bg-[#58296f]"
      style={{
        backgroundImage,
      }}
    >
      <div className=" ">
        <h2 className=" text-white text-5xl sm:text-6xl lg:text-7xl font-bold text-center">
          Showcase of Excellence
        </h2>
        
      </div>
    </motion.main>
  );
}
