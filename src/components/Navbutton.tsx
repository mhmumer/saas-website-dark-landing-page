import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Navbutton() {
  return (
    <a href="mailto:rawalaumer@gmail.com" className=" re">
      <button className="bg-gray-100 opacity-100 py-3 text-lg font-medium group items-center text-gray-900 gap-3 focus:scale-103 hover:scale-103 hover:bg-[#f3f3f3] hover:duration-300 active:scale-103 transition rounded-xl px-8 hidden sm:flex">
        Get in Touch
        <FaArrowRight className="group-hover:translate-x-1 text-gray-800 font-black hidden group-hover:block transition opacity-100" />
      </button>
    </a>
  );
}
