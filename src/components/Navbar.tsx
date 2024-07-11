import React from 'react'
import Image from 'next/image'
import logoImage from '@/assets/images/logosaas.png' 
import MenuIcon from "@/assets/icons/menu.svg"
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
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
import DarkModeToggle from './DarkModeToggle';

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] }); 


function Navbar() {
  return (
    <div className="bg-gray-950">
      <div className="px-4 ">
        <div className="py-4 flex items-center  justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgb(252,214,255,.7),rgb(41,216,255,.7),rgb(255,253,128,.7),rgb(248,154,191,.7),rgb(252,214,255,.7))] blur-md"></div>
            <Image
              src={logoImage}
              className="h-12 w-12 relative"
              alt="Logo Image"
            />
          </div>
          <div className="flex gap-4">
            <Drawer>
              <DrawerTrigger className="sm:hidden">
                <div className=" border-gray-50 border-opacity-20 h-12 w-12 inline-flex justify-center items-center rounded-lg ">
                  <MenuIcon className="text-white" />
                </div>
              </DrawerTrigger>
              <DrawerContent className={`${BricolageGrotesque.className}`}>
                <div className="mx-auto w-full max-w-sm">
                  <div className="p-4 pb-6">
                    <div className=" items-center justify-center">
                      <div className="">
                        <Link href="#" className="">
                          <div className="left-[9.5rem] pb-8 pt-2  relative">
                            <div className="absolute w-12 h-12 top-2 bottom-0 bg-[linear-gradient(to_right,rgb(252,214,255,.7),rgb(41,216,255,.7),rgb(255,253,128,.7),rgb(248,154,191,.7),rgb(252,214,255,.7))] blur-md"></div>
                            <Image
                              src={logoImage}
                              className="h-12 w-12 relative"
                              alt="Logo Image"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-wider  underline-offset-4 decoration-1 text-gray-300"
                        >
                          About
                        </Link>
                      </div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-wider  underline-offset-4 decoration-1 text-gray-300"
                        >
                          Education
                        </Link>
                      </div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-wider  underline-offset-4 decoration-1 text-gray-300"
                        >
                          Projects
                        </Link>
                      </div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-wider  underline-offset-4 decoration-1 text-gray-300"
                        >
                          Services
                        </Link>
                      </div>
                      <div className="pt-4 pb-6 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-wider  underline-offset-4 decoration-1 text-gray-300"
                        >
                          Help
                        </Link>
                      </div>
                      <div className="pt-4 items-center ">
                        <Link
                          href="mailto:rawalaumer@gmail.com"
                          className="text-2xl relative left-[3rem]  font-bold tracking-wider  underline-offset-4 decoration-1 text-gray-300"
                        >
                          <div className="">
                            <button className=" bg-gray-100 py-2  flex items-center text-gray-800 gap-3 focus:scale-103  hover:scale-103 hover:bg-[#f3f3f3] hover:duration-300 active:scale-103 transition rounded-xl px-12">
                              Contact
                              <FaArrowRight className="translate-x-1 p-[0.15rem] pt-[0.2rem] text-gray-800 transition opacity-100 " />
                            </button>
                          </div>
                        </Link>
                      </div>
                      <div className="relative left-[8.7rem] pt-16">
                        <div className="">
                          <DarkModeToggle />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <nav className="hidden sm:flex gap-6 font-semibold items-center">
            <a
              href="#"
              className="text-white hover:text-opacity-100 trasition  text-opacity-[0.8]"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-opacity-100 trasition  text-opacity-[0.8]"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-opacity-100 trasition  text-opacity-[0.8]"
            >
              Education
            </a>
            <a
              href="#"
              className="text-white hover:text-opacity-100 trasition  text-opacity-[0.8]"
            >
              Help
            </a>
            <a
              href="#"
              className="text-white hover:text-opacity-100 trasition  text-opacity-[0.8]"
            >
              Projects
            </a>
            <Link href="mailto:rawalaumer@gmail.com" className="pl-7">
              <button className=" bg-gray-100 py-3 group flex items-center text-gray-800 gap-2 focus:scale-103  hover:scale-103 hover:bg-[#f3f3f3] hover:duration-300 active:scale-103 transition rounded-lg px-6">
                Contact
                <FaArrowRight className="group-hover:translate-x-1 text-gray-800  font-black hidden group-hover:block  transition opacity-100 " />
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar