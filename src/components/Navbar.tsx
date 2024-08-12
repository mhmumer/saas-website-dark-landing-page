"use client";
import Name from "@/assets/images/MHMTechX.gif" 
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/images/favicon.ico";
import MenuIcon from "@/assets/icons/menu.svg";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DarkModeToggle from "./DarkModeToggle";
import { IoMdHome } from "react-icons/io";
import { BadgeInfo } from "lucide-react";
import { GrServices } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { Mail } from "lucide-react";

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="bg-black relative">
      <div className="px-4 py-2">
        <div className="py-4 flex items-center justify-between">
          <a href="#">
            <div className="relative">
              <div className="absolute w-full top-0 bottom-0 bg-[linear-gradient(to_right,rgb(252,214,255,.7),rgb(41,216,255,.7),rgb(255,253,128,.7),rgb(248,154,191,.7),rgb(252,214,255,.7))] blur-md"></div>

              <Image
                src={logo}
                className="h-11 sm:-mt-4 bg-gray-950 rounded-xl w-11 relative"
                alt="Logo Image"
              />
            </div>
          </a>
          <Image
            src={Name}
            alt=""
            className="-mt-4 h-20 w-20 sm:inline hidden"
          />
          <div className="flex gap-4 absolute right-2 sm:hidden">
            <Drawer>
              <DrawerTrigger className="">
                <div className="border-gray-50 border-opacity-20 h-12 w-12 inline-flex justify-center items-center rounded-lg">
                  <MenuIcon className="text-white" />
                </div>
              </DrawerTrigger>
              <DrawerContent className={`${BricolageGrotesque.className}`}>
                <div className="mx-auto w-full max-w-sm">
                  <div className="p-6 pb-24">
                    <div className="items-center justify-center">
                      <div className=""></div>
                      <div className="pt-4  text-center">
                        <Link
                          href="/about"
                          className="text-4xl font-bold tracking-widest underline-offset-4 decoration-1 text-gray-300 pt-20"
                        >
                          About us
                        </Link>
                      </div>
                      <div className="pt-7 text-center">
                        <Link
                          href="/Services"
                          className="text-4xl font-bold tracking-widest underline-offset-4 decoration-1 text-gray-300"
                        >
                          Services
                        </Link>
                      </div>
                      <div className="pt-7 text-center">
                        <Link
                          href="/Projects"
                          className="text-4xl font-bold tracking-widest underline-offset-4 decoration-1 text-gray-300"
                        >
                          Our Work
                        </Link>
                      </div>
                      <div className="pt-7 text-center">
                        <Link
                          href="/Contact"
                          className="text-4xl font-bold tracking-widest underline-offset-4 decoration-1 text-gray-300"
                        >
                          Contact Us
                        </Link>
                      </div>
                      <div className="pt-7 pb-6 text-center">
                        <Link
                          href="/Blogs"
                          className="text-4xl font-bold tracking-widest underline-offset-4 decoration-1 text-gray-300"
                        >
                          Blogs
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
      <div
        className={`hidden sm:inline pr-6 fixed top-[25px] left-0 w-full z-50 transition-transform  duration-300 ${
          isNavbarVisible ? "transform-none" : "-translate-y-[300%]"
        }`}
      >
        <div className="flex justify-center">
          <div className="border relative opacity-90 border-opacity-20 mx-auto -top-1   border-gray-100 rounded-full bg-white/20 backdrop-blur bg-opacity-[0.9]">
            <nav
              className={`${BricolageGrotesque.className} flex text-base  text-slate-100 lg:text-[1.1rem] p-4 lg:px-8 px-5 tracking-widest text-center lg:gap-8 gap-5 font-base font-mono items-center`}
            >
              <a
                href="/About"
                className=" hover:text-opacity-100 transition text-opacity-[0.7]"
              >
                About us
              </a>
              <a
                href="/Services"
                className=" hover:text-opacity-100 transition text-opacity-[0.7]"
              >
                Services
              </a>
              <a
                href="/Projects"
                className="hover:text-opacity-100 transition text-opacity-[0.7]"
              >
                Our Work
              </a>
              <a
                href="/Contact"
                className=" hover:text-opacity-100 transition text-opacity-[0.7]"
              >
                Contact Us
              </a>
              <a
                href="/Blogs"
                className=" hover:text-opacity-100 transition text-opacity-[0.7]"
              >
                Blogs
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
