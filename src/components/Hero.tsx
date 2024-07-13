import Arrow from "@/assets/icons/arrow-w.svg"
import CursorImage from "@/assets/images/cursor.png"
import MessageImage from "@/assets/images/message.png"
import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const Hero = () => {
  return (
    <main
      className={`${BricolageGrotesque.className} bg-gray-950 text-gray-50 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-32 relative overflow-clip`}
    >
      <div className="absolute h-[375px] sm:h-[768px] md:h-[1200px] lg:h-[1400px] w-[750px] sm:w-[1536px] md:w-[1736px] lg:w-[2400px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-gray-50/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              MHMTech is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <Arrow />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex">
              One Task <br />
              at a Time
            </h1>
            <Image
              src={CursorImage}
              height="150"
              width="170"
              alt={"Cursor Image"}
              className="absolute right-[450px] top-[50px] rotate-[15deg] hidden sm:inline"
            />
            <Image
              src={MessageImage}
              alt={"Message Image"}
              height="200"
              width="200"
              className="absolute top-[50px] left-[500px] hidden sm:inline"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8  max-w-md">
            Experience the thrill of achievement with a custom app tailored to
            your unique needs, featuring stunning designs that captivate and
            drive your success.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};
