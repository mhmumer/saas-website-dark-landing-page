"use client";

import React from "react";
import SharkBlankie from "../assets/images/sharkblankie.png";
import Dastaan from "../assets/images/dastaanerumaan.png";
import HimLeather from "../assets/images/himleather.png";
import BiryaniMan from "../assets/images/biryaniman.png";
import Image from "next/image";
import { Josefin_Sans, Carme } from "next/font/google";
import Link from "next/link";
import Example from "./prohorizontal";

const josefinsans = Josefin_Sans({ subsets: ["latin"] });
const carme = Carme({ subsets: ["latin"], weight: "400" });

export default function Projects() {
  return (
    <section className=" relative z-20 hidden sm:inline">
      <div className="overflow-hidden backdrop-blur-sm">
        <main className=" lg:px-8 sm:px-4 relative z-20 py-24 items-center justify-center flex overflow-hidden ">
          <div className="group relative   sm:py-10 sm:px-10 rounded-3xl   px-16 overflow-hidden">
            <div className="max-w-7xl flex flex-row  relative">
              <Image
                src={SharkBlankie}
                alt=""
                className="sm:w-[18rem] sm:h-52 lg:w-[32rem] lg:h-80 rounded-lg mr-6"
              />
              <div className="flex-row  px-10 py-3">
                <h3
                  className={`text-5xl text-white/90 group-hover:text-white
                ${josefinsans.className} font-bold`}
                >
                  SharkBlankie
                </h3>
                <p
                  className={`text-white text-lg font-bold pt-1 text-white/90 group-hover:text-white ${carme.className} `}
                >
                  Engaging ecommerce store for blankets and more
                </p>
              </div>
              <Link
                href={"https://sharkblankie.com/"}
                className="text-white bottom-0 absolute right-0 group-hover:bg-white/10 border border-opacity-40
             border-white px-12 backdrop-blur-3xl py-3 rounded-3xl bg-blue-400  transition-colors duration-300"
              >
                Visit Now
              </Link>
            </div>
          </div>
        </main>
        <main className=" lg:px-8 sm:px-4 relative z-20 pb-24 items-center justify-center flex  ">
          <div className="group relative backdrop-blur  py-10 px-12   ">
            <div className="max-w-7xl flex relative">
              <div className="flex-row px-8 text-right">
                <h3
                  className={`text-5xl text-white/90 group-hover:text-white
                ${josefinsans.className} font-bold`}
                >
                  Dastaan e Rumaan
                </h3>
                <p
                  className={`text-white text-lg font-bold pt-1 text-white/90 group-hover:text-white ${carme.className} `}
                >
                  An ecommerce site for clothes & apparel
                </p>
              </div>
              <Image
                src={Dastaan}
                alt=""
                className="sm:w-[18rem] sm:h-52 lg:w-[32rem] lg:h-80 rounded-xl ml-6"
              />
              <Link
                href={"https://dastaanerumaan.com/"}
                className="text-black bottom-0 absolute left-0 group-hover:bg-white/10 border border-opacity-40
             border-white px-12 backdrop-blur-3xl py-3 rounded-3xl bg-yellow-300 lg:group-hover:text-white  transition-colors duration-300"
              >
                Visit Now
              </Link>
            </div>
          </div>
        </main>
        <main className=" px-8 relative z-20 mb-20 items-center justify-center flex overflow-hidden ">
          <div className="group relative backdrop-blur  sm:py-10 sm:px-10  px-16 ">
            <div className="max-w-7xl sm:flex flex-row relative">
              <Image
                src={HimLeather}
                alt=""
                className="sm:w-[18rem] sm:h-52 lg:w-[32rem] lg:h-80 rounded-xl mr-6"
              />
              <div className="flex-row  px-10 py-3">
                <h3
                  className={`text-5xl text-white/90 group-hover:text-white
                ${josefinsans.className} font-bold`}
                >
                  HimLeather
                </h3>
                <p
                  className={`text-white text-lg font-bold pt-1 text-white/90 group-hover:text-white ${carme.className} `}
                >
                  A dropshipping store for Leather Products.
                </p>
              </div>
              <Link
                href={"#"}
                className="text-white bottom-0 absolute right-0 lg:group-hover:bg-white/10 border border-opacity-40
             border-white px-12 backdrop-blur-3xl py-3 rounded-3xl bg-red-500  transition-colors duration-300"
              >
                Visit Now
              </Link>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
