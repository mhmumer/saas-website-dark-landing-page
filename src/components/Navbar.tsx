import React from "react";
import Image from "next/image";
import logoImage from "@/assets/images/logosaas.png";
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
  return (
    <div className="bg-black bg-[#ffff  ]  ">
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
                  <MenuIcon className="text-white " />
                </div>
              </DrawerTrigger>
              <DrawerContent className={`${BricolageGrotesque.className}`}>
                <div className="mx-auto w-full max-w-sm">
                  <div className="p-4 pb-6">
                    <div className=" items-center justify-center">
                      <div className=""></div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-widest  underline-offset-4 decoration-1 text-gray-300"
                        >
                          About
                        </Link>
                      </div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-widest  underline-offset-4 decoration-1 text-gray-300"
                        >
                          Education
                        </Link>
                      </div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-widest  underline-offset-4 decoration-1 text-gray-300"
                        >
                          Projects
                        </Link>
                      </div>
                      <div className="pt-4 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-widest  underline-offset-4 decoration-1 text-gray-300"
                        >
                          Skills
                        </Link>
                      </div>
                      <div className="pt-4 pb-6 text-center">
                        <Link
                          href="#"
                          className="text-4xl font-bold tracking-widest  underline-offset-4 decoration-1 text-gray-300"
                        >
                          Services
                        </Link>
                      </div>
                      <div className="pt-4  items-center ">
                        <Link
                          href="mailto:rawalaumer@gmail.com"
                          className="text-2xl relative left-[2.8rem] mx-auto font-bold tracking-wider underline-offset-4 decoration-1 text-gray-300"
                        >
                          <div className="pb-10 pt-6">
                            <button className="bg-gray-100 py-2  flex items-center text-gray-800 gap-3 focus:scale-103  hover:scale-103 hover:bg-[#f3f3f3] hover:duration-300 active:scale-103 transition rounded-xl px-12">
                              Contact
                              <FaArrowRight className="translate-x-1 p-[0.15rem] pt-[0.2rem]text-gray-800 transition opacity-100 " />
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
          <nav
            className={`${BricolageGrotesque.className} hidden sm:flex text-md tracking-widest gap-5 font-semibold items-center`}
          >
            <a
              href="#"
              className="text-gray-50 hover:text-opacity-100 trasition  text-opacity-[0.7]"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-50 hover:text-opacity-100 trasition  text-opacity-[0.7]"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-50 hover:text-opacity-100 trasition  text-opacity-[0.7]"
            >
              Education
            </a>
            <a
              href="#"
              className="text-gray-50 hover:text-opacity-100 trasition  text-opacity-[0.7]"
            >
              Help
            </a>
            <a
              href="#"
              className="text-gray-50 hover:text-opacity-100 trasition  text-opacity-[0.7]"
            >
              Projects
            </a>
            <Link href="mailto:rawalaumer@gmail.com" className="ml-5">
              <button className="bg-gray-100 opacity-100 py-3 text-lg font-black group flex items-center text-gray-900  gap-3 focus:scale-103  hover:scale-103 hover:bg-[#f3f3f3]  hover:duration-300 active:scale-103 transition rounded-xl px-8">
                Contact
                <FaArrowRight className="group-hover:translate-x-1 text-gray-800  font-black hidden group-hover:block transition opacity-100 " />
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
