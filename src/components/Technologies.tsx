"use client";

import React from "react";
import {
  SiPython,
  SiNextdotjs,
  SiAdobe,
  SiDjango,
  SiShopify,
  SiFastapi,
  SiDocker,
  SiKubernetes,
  SiFlask,
  SiFlutter,
  SiReact,
  SiWebflow,
  SiFigma,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandAdobe } from "react-icons/tb";
import { useAnimate } from "framer-motion";

export const Example = () => {
  return (
    <div className="bg-black px-4 py-12 z-10 relative w-full ">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <main className="bg-black">
      <div className="my-24 ">
        <h1 className="relative items-center justify-center text-center text-white/90 sm:text-6xl text-4xl font-sans font-black">
          Our Development Stack
        </h1>
        <div className="divide-y text-white divide-neutral-500 border border-neutral-500 mt-20 cursor-crosshair">
          <div className="grid grid-cols-2 divide-x divide-neutral-500">
            <LinkBox Icon={SiShopify} />
            <LinkBox Icon={SiWebflow} />
          </div>
          <div className="grid grid-cols-3 divide-x divide-neutral-500">
            <LinkBox Icon={SiPython} />
            <LinkBox Icon={SiDjango} />
            <LinkBox Icon={SiFastapi} />
          </div>
          <div className="grid grid-cols-4 divide-x divide-neutral-500">
            <LinkBox Icon={SiNextdotjs} />
            <LinkBox Icon={SiReact} />
            <LinkBox Icon={SiFigma} />
            <LinkBox Icon={TbBrandAdobe} />
          </div>
          <div className="grid grid-cols-2 divide-x divide-neutral-500">
            <LinkBox Icon={SiFlutter} />
            <LinkBox Icon={TbBrandReactNative} />
          </div>
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

const ENTRANCE_KEYFRAMES: Record<
  "left" | "bottom" | "top" | "right",
  string[]
> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<"left" | "bottom" | "top" | "right", string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon }: { Icon: any }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: any): "left" | "right" | "top" | "bottom" => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as const,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as const,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as const,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as const,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: any) => {
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
