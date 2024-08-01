"use client";
import React from "react";
import Plus from "../assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg"
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion"; 
import { Bricolage_Grotesque, Carme } from "next/font/google";

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });
const carme = Carme({ subsets: ["latin"], weight: "400" });

const faqs = [
  {
    question: "How can I get started with Mutecx?",
    answer:
      "Getting started is easy! Contact us through our website or social media channels, and one of our team members will reach out to discuss your project needs and goals. We’ll guide you through our process and get your project underway.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with a diverse range of industries, including e-commerce, healthcare, finance, education, and more. Our team has the expertise to tailor solutions to meet the unique needs of any industry.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline for project completion varies depending on the complexity and scope of the project. We will provide an estimated timeline during the initial consultation and keep you updated throughout the development process. We can deliver as quickly as the client needs.",
  },
 
  {
    question: "What sets Mutecx apart from other digital agencies?",
    answer:
      "At Mutecx, we pride ourselves on our commitment to innovation, quality, and client satisfaction. Our bespoke approach ensures that each project is tailored to meet the specific needs and goals of our clients, delivering exceptional results every time.",
  },

  {
    question: "How much do your services cost?",
    answer:
      "Our pricing is based on the specific needs and scope of each project. We offer competitive rates and will provide a detailed quote after understanding your project requirements during the initial consultation.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with clients from around the world. Our team is experienced in managing projects remotely and can effectively communicate and collaborate with international clients to ensure successful project delivery.",
  },
];

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-4 border  rounded-xl px-5 my-5 cursor-pointer
       border-white/20"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span
          className={`${BricolageGrotesque.className} flex-1 sm:text-xl text-lg pr-5 font-bold text-white/80`}
        >
          {question}
        </span>
        {isOpen ? <Minus /> : <Plus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className={`${carme.className}`}>
            <motion.div
              className={clsx("mt-4 px-2 text-base sm:text-base font-medium", {
                hidden: !isOpen,
                "": isOpen === true,
              })}
              initial={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                marginTop: "16px",
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
            >
              {answer}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <main className=" bg-black  text-white bg-gradient-to-b from-[#5D2CA8]/90 to-black py-[72px] sm:py-24 z-20 relative ">
      <div className="container mt-10">
        <h2
          className={`text-center text-5xl lg:text-6xl max-w-[788px] mx-auto font-bold tracking-tight ${BricolageGrotesque.className}`}
        >
          Frequently Asked Questions
        </h2>
        <div className="mt-20 max-w-[648px] mx-auto lg:max-w-[900px]">
          {faqs.map(({ question, answer }) => (
            <Accordion question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </main>
  );
};
