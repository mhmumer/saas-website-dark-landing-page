import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Bricolage_Grotesque, Josefin_Sans, Carme } from "next/font/google";
import BiryaniMan from "../assets/images/biryaniman.png";
import SharkBlankie from "../assets/images/sharkblankie.png";
import Dastaan from "../assets/images/dastaanerumaan.png";
import HimLeather from "../assets/images/himleather.png";
import MarketWizardry from "@/assets/images/marketwizardry.png"
import Bot from "@/assets/images/memorychatbot.png"

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });
const JosefinSans = Josefin_Sans({ subsets: ["latin"] });

const Projects = [
  {
    img: SharkBlankie,
    title: "SharkBlankie",
    desc: "Engaging ecommerce store for blankets and more",
    link: "https://sharkblankie.com/",
  },
  {
    img: HimLeather,
    title: "HimLeather",
    desc: "A dropshipping store for Leather Products.",
    link: "#",
  },
  {
    img: Dastaan,
    title: "Dastaan e Rumaan",
    desc: "An ecommerce site for clothes & apparel",
    link: "dastaanerumaan.com",
  },
  {
    img: MarketWizardry,
    title: "MarketWizardry",
    desc: "A digital products ecommerce site for selling courses.",
    link: "https://marketwizardry.xyz/",
  },
  {
    img: Bot,
    title: "MemoryChatbot",
    desc: "A Chatbot powered by OpenAI API which has memory to save chats and refer to them during conversations.",
    link: "#",
  },
];


export default function MProjects() {
  return (
    <section className="relative z-20 bg-black/70 rounded-t-md pt-10  items-center justify-center sm:hidden pb-20">
      {Projects.map(({ img, title, desc, link }) => (
        <div className="p-2 pb-12">
          <Image src={img} alt="" className="rounded-sm" />
          <div className="pt-5 px-1">
            <h3
              className={`${BricolageGrotesque.className} text-3xl font-bold tracking-wide  text-white`}
            >
              {title}
            </h3>
            <p
              className={`text-lg  ${JosefinSans.className}  text-white tracking-wide pr-4`}
            >
              {desc}
            </p>
            <Link
              href={link}
              className="bg-white/10 text-white backdrop-blur-xl border border-white/20  mt-4  rounded-full  py-2 relative flex items-center text-center justify-center"
            >
              Visit Now
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
