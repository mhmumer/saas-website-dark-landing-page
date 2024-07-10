"use client"
import { motion } from "framer-motion";
import { useState } from "react";

import React from 'react'

function AnimatedButton() {
   const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      className=""
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: 1000 }}
    >
      <motion.span
        className="relative z-10 inset-0   px-4 py-3   bg-gray-100 text-black flex items-center justify-center rounded-lg hover:rounded-xl"
        initial={{ y: 0, scaleY: 1 }}
        animate={{ y: hovered ? -3 : 0, scaleY: hovered ? 1 : 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact
        {hovered && (
          <motion.span
            className="ml-3   items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: hovered ? 1 : 1 }}
            transition={{ duration: 0.8 }}
          >
            ➔
          </motion.span>
        )}
      </motion.span>
    </motion.button>
  );
}

export default AnimatedButton