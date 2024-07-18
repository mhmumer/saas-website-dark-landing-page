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
          <div className="relative">
            <div className="absolute w-full top-1 bottom-0 bg-[linear-gradient(to_right,rgb(252,214,255,.7),rgb(41,216,255,.7),rgb(255,253,128,.7),rgb(248,154,191,.7),rgb(252,214,255,.7))] blur-md"></div>
            <Image
              src={logo}
              className="h-11  bg-gray-950 rounded-xl w-11 relative"
              alt="Logo Image"
            />
          </div>
          <Image src={Name} alt="" className="-mt-7 h-16 w-20 sm:inline hidden"/>
          <div className="flex gap-4 absolute right-2">
            <Drawer>
              <DrawerTrigger className="sm:hidden">
                <div className="border-gray-50 border-opacity-20 h-12 w-12 inline-flex justify-center items-center rounded-lg">
                  <MenuIcon className="text-white" />
                </div>
              </DrawerTrigger>
              <DrawerContent className={`${BricolageGrotesque.className}`}>
                <div className="mx-auto w-full max-w-sm">
                  <div className="p-4 pb-6">
                    <div className="items-center justify-center">
                      <div className=""></div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-widest underline-offset-4 decoration-1 text-gray-300"
                        >
                          About
                        </Link>
                      </div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-widest underline-offset-4 decoration-1 text-gray-300"
                        >
                          Education
                        </Link>
                      </div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-widest underline-offset-4 decoration-1 text-gray-300"
                        >
                          Projects
                        </Link>
                      </div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-widest underline-offset-4 decoration-1 text-gray-300"
                        >
                          Skills
                        </Link>
                      </div>
                      <div className="pt-4 pb-6 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-widest underline-offset-4 decoration-1 text-gray-300"
                        >
                          Services
                        </Link>
                      </div>
                      <div className="pt-4 items-center">
                        <Link
                          href="mailto:rawalaumer@gmail.com"
                          className="text-2xl relative left-[3rem] mx-auto font-bold tracking-wider underline-offset-4 decoration-1 text-gray-300"
                        >
                          <div className="pb-10 pt-6">
                            <button className="bg-gray-100 py-2 flex items-center text-gray-800 gap-3 focus:scale-103 hover:scale-103 hover:bg-[#f3f3f3] hover:duration-300 active:scale-103 transition rounded-xl px-12">
                              Contact
                              <FaArrowRight className="translate-x-1 p-[0.15rem] pt-[0.2rem] text-gray-800 transition opacity-100" />
                            </button>
                          </div>
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
        className={`fixed top-[70px] left-0 w-full z-50 transition-transform duration-300 ${
          isNavbarVisible ? "transform-none" : "-translate-y-[300%]"
        }`}
      >
        <div className="flex justify-center">
          <div className="border relative opacity-90 border-opacity-20 mx-auto -top-1   border-gray-100 rounded-full bg-white bg-opacity-[0.9]">
            <nav
              className={`${BricolageGrotesque.className} hidden sm:flex text-base  text-gray-900 lg:text-[1rem] p-4 lg:px-8 px-5 tracking-widest text-center lg:gap-8 gap-5 font-base items-center`}
            >
              <a
                href="#"
                className=" hover:text-opacity-100 transition text-opacity-[0.7]"
              >
                About us
              </a>
              <a
                href="#"
                className=" hover:text-opacity-100 transition text-opacity-[0.7]"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-opacity-100 transition text-opacity-[0.7]"
              >
                Our Work
              </a>
              <a
                href="#"
                className=" hover:text-opacity-100 transition text-opacity-[0.7]"
              >
                Pricing
              </a>
              <a
                href="#"
                className=" hover:text-opacity-100 transition text-opacity-[0.7]"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
