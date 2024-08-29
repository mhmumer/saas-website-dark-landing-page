import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Woman from "@/assets/icons/woman.png";
import Man from "@/assets/icons/men.png";

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div
      className="grid h-[500px] w-full place-items-center bg-neutral-100 relative z-0 sm:hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      {cards.map((card) => {
        return (
          <Card key={card.id} cards={cards} setCards={setCards} {...card} />
        );
      })}
    </div>
  );
};

const Card = ({
   id,
  writer,
   content,
  img,
  setCards,
  cards,
}: {
  id: any;
  writer: any;
  content: any;
  img: any;
  setCards: any;
  cards: any;
}) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((pv:any) => pv.filter((v:any) => v.id !== id));
    }
  };

  return (
    <motion.div
      className="h-80 w-72 origin-bottom rounded-xl bg-zinc-950 object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    >
      <div className="text-gray-100 p-4 pt-10">
        <h2 className="flex gap-2 pb-5 font-bold font-serif items-center text-lg">
          {" "}
          <Image
            src={img}
            alt={""}
            className="h-7 w-7 border p-[0.2] rounded-full  bg-white"
            draggable="false"
          />
          {writer}
        </h2>
        <p className="text-base font-semibold font-mono">{content}</p>
      </div>
    </motion.div>
  );
};

export default SwipeCards;

const cardData = [
  {
    id: 1,
    writer: "Jessica Miller",
    content:
      "Mutecx did an incredible job on our website redesign. Their attention to detail and creativity made our site stand out. The whole process was smooth, and they were always open to feedback. Highly recommend!",
    img: Woman,
  },
  {
    id: 2,
    writer: "Michael Harris",
    content:
      "The team at Mutecx built our Shopify store from the ground up, and it’s been a game changer for our business. Sales have improved significantly, and our customers love the new design.",
    img: Man,
  },
  {
    id: 3,
    writer: "Sarah Thompson",
    content:
      "We hired Mutecx for a complete branding overhaul, and we couldn’t be happier with the results. They took the time to understand our vision and delivered a brand identity that truly reflects who we are.",
    img: Woman,
  },
  {
    id: 4,
    writer: "Daniel Robinson",
    content:
      "Mutecx’s digital marketing strategies helped us reach a broader audience and grow our online presence. The team is knowledgeable and always available to answer questions.",
    img: Man,
  },
  {
    id: 5,
    writer: "Laura Evans",
    content:
      "I was impressed with how Mutecx handled our SaaS product launch. Their technical expertise and project management were key to getting our product to market on time and within budget.",
    img: Woman,
  },
  {
    id: 6,
    writer: "Andrew Clark",
    content:
      "The graphic design work Mutecx did for our marketing campaign was outstanding. The visuals were creative and aligned perfectly with our brand message. We received great feedback from our audience.",
    img: Man,
  },
  {
    id: 7,
    writer: "Megan Walker",
    content:
      "Mutecx provided excellent service when we needed to optimize our website for SEO. The improvements they made have significantly boosted our organic traffic. We’re seeing more qualified leads coming through as a result.",
    img: Woman,
  },
  {
    id: 8,
    writer: "John Wright",
    content:
      "We partnered with Mutecx to develop a custom API for our e-commerce platform. The process was seamless, and the final product has streamlined our operations. The team’s expertise is evident in their work.",
    img: Man,
  },
  {
    id: 9,
    writer: "Rachel Green",
    content:
      "Mutecx was instrumental in helping us redesign our landing pages. Their approach to UX/UI was innovative, and the new pages have a much higher conversion rate. We’re thrilled with the results.",
    img: Man,
  },
  {
    id: 10,
    writer: "Kevin Lewis",
    content:
      "Working with Mutecx on our Shopify store management has been a great experience. They handle everything from updates to troubleshooting, allowing us to focus on growing our business.",
    img: Man,
  },
];

