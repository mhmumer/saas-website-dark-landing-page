"use client";

import React from "react";
import {
  SiPython,
  SiNextdotjs,
  SiTypescript,
  SiDjango,
  SiShopify,
  SiFastapi,
  SiDocker,
  SiKubernetes,
  SiFlask,
  SiFlutter,
  SiReact,
  SiAdobe,
  SiFigma,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { useAnimate } from "framer-motion";

export const Example = () => {
  return (
    <div className="bg-black px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
   return (
     <main className="my-24">
       <h1 className="relative items-center justify-center text-center text-white/90 sm:text-6xl text-4xl font-sans font-black">
         Our Development Stack
       </h1>
       <div className="divide-y text-white divide-neutral-500 border border-neutral-500 mt-20 cursor-crosshair">
         <div className="grid grid-cols-2 divide-x divide-neutral-500">
           <LinkBox Icon={SiShopify} href="#" />
           <LinkBox Icon={SiAdobe} href="#" />
         </div>
         <div className="grid grid-cols-3 divide-x divide-neutral-500">
           <LinkBox Icon={SiPython} href="#" />
           <LinkBox Icon={SiDjango} href="#" />
           <LinkBox Icon={SiFastapi} href="#" />
         </div>
         <div className="grid grid-cols-4 divide-x divide-neutral-500">
           <LinkBox Icon={SiNextdotjs} href="#" />
           <LinkBox Icon={SiTypescript} href="#" />
           <LinkBox Icon={SiReact} href="#" />
           <LinkBox Icon={SiFigma} href="#" />
         </div>
         <div className="grid grid-cols-2 divide-x divide-neutral-500">
           <LinkBox Icon={SiFlutter} href="#" />
           <LinkBox Icon={TbBrandReactNative} href="#" />
         </div>
       </div>
     </main>
   );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: any) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-100 text-black"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </div>
  );
};