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
    question: "How can I get started with Mutex?",
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
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to ensure your website remains up-to-date, secure, and running smoothly. We’re here to help with any updates or issues that may arise post-launch.",
  },
  {
    question: "What sets Mutex apart from other digital agencies?",
    answer:
      "At Mutex, we pride ourselves on our commitment to innovation, quality, and client satisfaction. Our bespoke approach ensures that each project is tailored to meet the specific needs and goals of our clients, delivering exceptional results every time.",
  },
  {
    question: "Can you help with digital marketing and SEO?",
    answer:
      "Absolutely! We provide digital marketing and SEO services to help increase your online visibility, drive traffic to your site, and improve your search engine rankings. Our strategies are designed to deliver measurable results and maximize your ROI.",
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
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span
          className={`${BricolageGrotesque.className} flex-1 sm:text-xl text-lg pr-5 font-bold`}
        >
          {question}
        </span>
        {isOpen ? <Minus /> : <Plus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className={`${carme.className}`}>
            <motion.div
              className={clsx("mt-4 px-2 text-base sm:text-lg font-medium", {
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
    <main className="bg-black text-white bg-gradient-to-b from-[#5D2CA8]/90 to-black py-[72px] sm:py-24">
      <div className="container">
        <h2
          className={`text-center text-5xl lg:text-6xl max-w-[788px] mx-auto font-bold tracking-tight ${BricolageGrotesque.className}`}
        >
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto lg:max-w-[800px]">
          {faqs.map(({ question, answer }) => (
            <Accordion question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </main>
  );
};
