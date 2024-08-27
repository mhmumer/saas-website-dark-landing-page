"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { IoWoman } from "react-icons/io5";
import Image from "next/image";
import Woman from "@/assets/icons/woman.png"
import Man from "@/assets/icons/men.png"
import SwipeCards from "./SwipeReviews";


const reviews = [
  {
    writer: "Jessica Miller",
    content:
      "Mutecx did an incredible job on our website redesign. Their attention to detail and creativity made our site stand out. The whole process was smooth, and they were always open to feedback. Highly recommend!",
  },
  {
    writer: "Michael Harris",
    content:
      "The team at Mutecx built our Shopify store from the ground up, and it’s been a game changer for our business. Sales have improved significantly, and our customers love the new design.",
  },
  {
    writer: "Sarah Thompson",
    content:
      "We hired Mutecx for a complete branding overhaul, and we couldn’t be happier with the results. They took the time to understand our vision and delivered a brand identity that truly reflects who we are.",
  },
  {
    writer: "Daniel Robinson",
    content:
      "Mutecx’s digital marketing strategies helped us reach a broader audience and grow our online presence. The team is knowledgeable and always available to answer questions.",
  },
  {
    writer: "Laura Evans",
    content:
      "I was impressed with how Mutecx handled our SaaS product launch. Their technical expertise and project management were key to getting our product to market on time and within budget.",
  },
  {
    writer: "Andrew Clark",
    content:
      "The graphic design work Mutecx did for our marketing campaign was outstanding. The visuals were creative and aligned perfectly with our brand message. We received great feedback from our audience.",
  },
  {
    writer: "Megan Walker",
    content:
      "Mutecx provided excellent service when we needed to optimize our website for SEO. The improvements they made have significantly boosted our organic traffic. We’re seeing more qualified leads coming through as a result.",
  },
  {
    writer: "John Wright",
    content:
      "We partnered with Mutecx to develop a custom API for our e-commerce platform. The process was seamless, and the final product has streamlined our operations. The team’s expertise is evident in their work.",
  },
  {
    writer: "Rachel Green",
    content:
      "Mutecx was instrumental in helping us redesign our landing pages. Their approach to UX/UI was innovative, and the new pages have a much higher conversion rate. We’re thrilled with the results.",
  },
  {
    writer: "Kevin Lewis",
    content:
      "Working with Mutecx on our Shopify store management has been a great experience. They handle everything from updates to troubleshooting, allowing us to focus on growing our business.",
  },
];

export const DragCards = () => {
  return (
    <div>
      <section className="relative sm:grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950 hidden sm:block">
        <h2 className="relative z-0 text-[18vw] font-black text-neutral-800 md:text-[150px] text-center">
          Clients Never Lie<span className="text-indigo-500">.</span>
        </h2>
        <Cards />
        <h3 className="bottom-0 justify-end p-2 underline underline-white text-lg relative z-20 text-[#95a6a6] items-end ">
          Drag Cards
        </h3>
      </section>
      <SwipeCards/>
    </div>
  );
};



const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        writer="Jessica"
        content="Mutecx did an incredible job on our website redesign. The whole process was smooth, and they were always open to feedback. Highly recommend!"
        rotate="6deg"
        top="10%"
        left="25%"
        className="w-48 md:w-60 rounded-lg p-3"
        img={Woman}
      />
      <Card
        containerRef={containerRef}
        writer="Michael Harris"
        content="The team at Mutecx built our Shopify store from the ground up, and it’s been a game changer for our business. Sales have improved significantly, and our customers love the new design."
        rotate="3deg"
        top="0%"
        left="5%"
        className="w-48 md:w-60 rounded-lg p-3"
        img={Man}
      />
      <Card
        containerRef={containerRef}
        writer="Daniel"
        content="Mutecx’s digital marketing strategies helped us reach a broader audience and grow our online presence. The team is knowledgeable and always available to answer questions."
        rotate="9deg"
        top="15%"
        left="62%"
        className="w-48 md:w-60 rounded-lg p-3"
        img={Man}
      />
      <Card
        containerRef={containerRef}
        writer="Sarah"
        content="We hired Mutecx for a complete branding overhaul, and we couldn’t be happier with the results. They took the time to understand our vision and delivered a brand identity that truly reflects who we are."
        rotate="-4deg"
        top="10%"
        left="45%"
        className="w-48 md:w-60 rounded-lg p-3"
        img={Woman}
      />
      <Card
        containerRef={containerRef}
        writer="Megan Walker"
        content="Mutecx provided excellent service when we needed to optimize our website for SEO. The improvements they made have significantly boosted our organic traffic. We’re seeing more qualified leads coming through as a result."
        rotate="-8deg"
        top="100%"
        left="100%"
        className="w-48 md:w-60 rounded-lg p-3"
        img={Woman}
      />
      <Card
        containerRef={containerRef}
        writer="Andrew Clark"
        content="The graphic design work Mutecx did for our marketing campaign was outstanding. The visuals were creative and aligned perfectly with our brand message. We received great feedback from our audience."
        rotate="4deg"
        top="45%"
        left="4%"
        className="w-48 md:w-60 rounded-lg p-3"
        img={Man}
      />
      <Card
        containerRef={containerRef}
        writer="Laura Evans"
        content="I was impressed with how Mutecx handled our SaaS product launch. Their technical expertise and project management were key to getting our product to market on time and within budget."
        rotate="-4deg"
        top="50%"
        left="67%"
        className="w-48 md:w-60 rounded-lg p-3"
        img={Woman}
      />
      <Card
        containerRef={containerRef}
        writer="Rachel Green"
        content="Mutecx was instrumental in helping us redesign our landing pages. Their approach to UX/UI was innovative, and the new pages have a much higher conversion rate. We’re thrilled with the results."
        rotate="10deg"
        top="60%"
        left="45%"
        className="w-48 md:w-60 rounded-lg p-3"
        img={Man}
      />
      <Card
        containerRef={containerRef}
        writer="Ali Akbar"
        content="Working with Mutecx on our Shopify store management has been a great experience. They handle everything from updates to troubleshooting, allowing us to focus on growing our business."
        rotate="-6deg"
        top="60%"
        left="24%"
        className="w-48 md:w-60 rounded-lg p-3"
        img={Man}
      />
      <Card
        containerRef={containerRef}
        writer="John"
        content="We partnered with Mutecx to develop a custom API for our e-commerce platform. The process was seamless, and the final product has streamlined our operations. The team’s expertise is evident in their work."
        rotate="-6deg"
        top="30%"
        left="80%"
        className="w-48 md:w-60 rounded-lg p-3"
        img={Man}
      />
    </div>
  );
};

const Card = ({
  containerRef,
  writer,
  content,
  top,
  left,
  rotate,
  className,
  img
}: {
  containerRef: any;
  writer: any;
  content: any;
  top: any;
  left: any;
  rotate: any;
  className: any;
  img:any
}) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 rounded-lg bg-[#faf7f7] pb-4 shadow shadow-white",
        className
      )}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    >
      <div className="bg-[#faf7f7]">
        <div>
          <h2 className="flex gap-2 pb-2 font-bold font-serif items-center">
            {" "}
            <Image
              src={img}
              alt={""}
              className="h-7 w-7 border p-[0.2] rounded-full" 
              draggable="false"
            />
            {writer}
          </h2>
          <p className="text-sm font-mono">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};
