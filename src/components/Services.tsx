"use client"

import { Poppins, Carme } from "next/font/google";
import { motion } from "framer-motion";

import {
  FaShopify,
  FaCode,
  FaCogs,
  FaSearch,
  FaBullhorn,
  FaPaintBrush,
  FaLaptopCode,
  FaRedo,
  FaFileAlt,
  FaChartLine,
  FaLaptop,
} from "react-icons/fa";
import { SiWebflow, SiMarketo } from "react-icons/si";
import { GrCloudSoftware } from "react-icons/gr";
import { TbMessageChatbot } from "react-icons/tb";

const services = [
  {
    title: "Shopify Development",
    description:
      "Custom Shopify solutions to elevate your e-commerce business.",
    icon: <FaShopify className="h-10 w-10" />,
  },
  {
    title: "Webflow Development",
    description:
      "Dynamic and responsive Webflow websites tailored to your needs.",
    icon: <SiWebflow className="h-10 w-10" />,
  },
  {
    title: "Website Development",
    description: "Bespoke website development for a unique online presence.",
    icon: <FaCode className="h-10 w-10" />,
  },
  {
    title: "SaaS Development",
    description: "Scalable SaaS apps for side income and business efficiency",
    icon: <GrCloudSoftware className="h-10 w-10" />,
  },
  {
    title: "Shopify Management",
    description: "Comprehensive management services for your Shopify store.",
    icon: <FaCogs className="h-10 w-10" />,
  },
  {
    title: "Website Management",
    description:
      "Ongoing maintenance and updates to keep your site running smoothly.",
    icon: <FaLaptop className="h-10 w-10" />,
  },
  {
    title: "Website Redesign",
    description: "Transform your website with a modern and engaging redesign.",
    icon: <FaRedo className="h-10 w-10" />,
  },
  {
    title: "Chatbot Development",
    description:
      "Enhance customer interaction and automate responses with our custom chatbot solutions.",
    icon: <TbMessageChatbot className="h-10 w-10" />,
  },
  {
    title: "SEO ",
    description: "Optimize your website to rank higher on search engines.",
    icon: <FaSearch className="h-10 w-10" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Effective digital marketing strategies to grow your business.",
    icon: <FaBullhorn className="h-10 w-10" />,
  },
  {
    title: "Graphic Design",
    description: "Creative graphic design services to captivate your audience.",
    icon: <FaPaintBrush className="h-10 w-10" />,
  },
  {
    title: "Landing Page Design",
    description: "High-converting landing pages to drive leads and sales.",
    icon: <FaLaptopCode className="h-10 w-10" />,
  },
];


// const RobotoCondensed = Roboto_Condensed({ subsets: ["latin"] });
const carme = Carme({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const text =
  "Shopify Development / Webflow Development / Website Development / SaaS Development / Shopify Management / Website Management / Website Redesign / Chatbot Development / SEO / Digital Marketing / Graphic Design / Landing Page Design";

const Services: React.FC = () => {
   return (
     <main className="pt-6 pb-24 bg-[#f8f7f5]">
       <div className="overflow-hidden whitespace-nowrap">
         <motion.div
           className={`flex space-x-4 sm:text-2xl lg:text-2xl xl:text-3xl text-xl sm:font-bold font-semibold  mb-4 ${poppins.className}`}
           initial={{ x: 0 }}
           animate={{ x: "-100%" }}
           transition={{ ease: "linear", duration: 20, repeat: Infinity }}
         >
           <div>
             <h3 className="italic">{text}</h3>
           </div>
           <div>
             <h3 className="italic">{text}</h3>
           </div>
           <div>
             <h3 className="italic">{text}</h3>
           </div>
           <div>
             <h3 className="italic">{text}</h3>
           </div>
         </motion.div>
       </div>
       <div className="relative  mt-32">
         <h2
           className={`text-6xl font-semibold items-center justify-center   text-center ${poppins.className} font-mono`}
         >
           A Website Agency that does it
           <span
             className={`italic ml-2 bg-[linear-gradient(to_right,#da28e4,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text] tracking-tighter`}
           >
             all.
           </span>
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16 max-w-[90rem] px-8 mx-auto ">
           {services.map((service, index) => (
             <div
               key={index}
               className="p-4 border-2 border-black rounded-lg text-left sm:bg-none sm:hover:bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#2FD8FE)] bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#2FD8FE)] transition-colors duration-300 "
             >
               <div className=" pb-10  ">{service.icon}</div>
               <h3 className="text-2xl font-bold italic pb-2">
                 {service.title}
               </h3>
               <p className={`${carme.className}  text-lg `}>
                 {service.description}
               </p>
             </div>
           ))}
         </div>
       </div>
     </main>
   );
};

export default Services;
