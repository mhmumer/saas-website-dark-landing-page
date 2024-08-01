import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import sendEmail from '@/lib/sendEmails'
import { Bricolage_Grotesque } from "next/font/google";
import Message from "@/assets/images/message.png"
import Image from 'next/image';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ["latin"]});

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });


export const Contact = () => {
   
   const action = async (formData: FormData) => {
      "use server"
      await sendEmail(formData)
   }

   return (
     <main className="relative bg-[#f8f7f5] px-3 z-20 items-center justify-center flex">
       <section
         id="contact"
         className="mt-40 mb-20 sm:mb-28 w-[min(100%,50rem)] text-center relative "
       >
         <h3 className={`text-6xl ${BricolageGrotesque.className} font-black`}>
           Contact Us
         </h3>

         <form action={action} className="mt-16 flex  flex-col">
           <input
             placeholder="eg. example@gmail.com"
             className={`h-[4.5rem] px-5 mb-2 rounded-2xl border border-black/10 text-lg font-normal ${rubik.className}`}
             type="email"
             name="senderEmail"
             required
             maxLength={500}
           />
           <textarea
             placeholder="Enter Your Message"
             className={`h-60 mb-4 my-1 rounded-2xl border border-black/10 p-5 text-lg font-normal ${rubik.className}`}
             name="message"
             id=""
             cols={30}
             required
             rows={10}
             maxLength={5000}
           ></textarea>
           <button
             type="submit"
             className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
           >
             Submit{" "}
             <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
           </button>
         </form>
       </section>
     </main>
   );
}