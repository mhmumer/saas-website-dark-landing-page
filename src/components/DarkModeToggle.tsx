"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";




const DarkModeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);

  return (
    <main className="">
      <div className="flex relative items-center transition-colors duration-500">
        <div className="absolute sm:w-[4.3rem] w-[3rem] sm:h-[4.3rem] h-[3rem] items-center rounded-full bg-[linear-gradient(to_right,rgb(45,20,37),rgb(22,29,51),rgb(65,27,53),rgb(249,249,212))] dark:bg-[linear-gradient(to_right,rgb(252,214,255,.7),rgb(252,214,255,.7))] dark:blur-md blur-sm " />
        <motion.div
          className="relative flex items-center justify-between sm:w-[4rem] w-[2.7rem] sm:h-[4rem] h-[2.7rem] bg-[rgb(65,27,53)] rounded-full cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
          initial={{ backgroundColor: "#2a3749" }}
          animate={{ backgroundColor: darkMode ? "#2a3749" : "#2a3749" }}
          transition={{ duration: 0.8 }}
        >
          <FaMoon className="h-full w-full text-gray-50 dark:block hidden sm:p-4 p-3  rounded-full" />

          <IoSunnySharp className="h-full w-full text-gray-50 dark:hidden sm:p-4 p-3  rounded-full" />
        </motion.div>
      </div>
    </main>
  );
};

export default DarkModeToggle;
