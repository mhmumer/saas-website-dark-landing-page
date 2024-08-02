"use client";
import Image from "next/image";
import EcoSystem from "@/assets/images/ecosystem.png";
import Encryption from "@/assets/images/encryption.png";
import SEO from "@/assets/images/Seo.png";
import { Feature } from "./feature";
import { Bricolage_Grotesque, Carme } from "next/font/google";
import { motion } from "framer-motion";
import MessageImage from "@/assets/images/message.png";
import CursorImage from "@/assets/images/cursor.png";
import { div } from "three/webgpu";


const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });
const carme = Carme({ subsets: ["latin"], weight: "400" });

const features = [
  {
    title: "Responsive Design",
    description:
      "Ensure your website looks great and functions flawlessly on all devices, from desktops to smartphones.",
    img: EcoSystem,
  },
  {
    title: "Secure Encryption",
    description:
      "Protect your website and user data with advanced encryption technologies, ensuring privacy and security.",
    img: Encryption,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility and ranking on search engines with our expert SEO services.",
    img: SEO,
  },
];

export const Features = () => {
  return (
    <main className=" ">
      <div className="relative bg-black text-white py-[72px] sm:py-24">
        <div className="container mx-auto relative z-10">
          <h2
            className={`text-center z-10 font-bold xl:text-6xl text-3xl tracking-tighter ${BricolageGrotesque.className} `}
          >
            <span className="text-4xl xl:text-6xl ">Experience a </span>
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text] italic text-5xl xl:text-[4rem] ">
              Web Revolution.
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p
              className={`${carme.className} text-center mt-5 text-lg lg:max-w-3xl xl:max-w-3xl mx-auto text-white/70 `}
            >
              Enjoy top-tier security with advanced encryption, embrace
              seamless, responsive designs for every device, and boost your
              online presence with expert SEO optimization for maximum
              visibility and success.
            </p>
          </div>
          <div className="mt-16 flex flex-wrap-reverse gap-5  sm:flex-1 relative items-center justify-center">
            {features.map(({ title, description, img }) => (
              <div>
                <div className="absolute h-[18rem] sm:w-[20rem] w-[19rem]  z-10 bg-white/30 blur-xl" />
                <div className=" ">
                  <Feature
                    key={title}
                    title={title}
                    description={description}
                    img={img}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
