import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import BiryaniMan from "../assets/images/biryaniman.png"
import EssayWriter from "../assets/images/essaywriter.png"
import MemoryBot from "../assets/images/memorychatbot.png"
import MarketWizardry from "../assets/images/marketwizardry.png"
import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

const Example = () => {
  return (
    <div
      className="
     max-w-[80rem] mx-auto items-center justify-center px-1 before:bg-black/10 before:backdrop-blur-xl before:h-10 z-20"
    >
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-40%"]);

  return (
    <section ref={targetRef} className="relative h-[130vh] ">
      <div className="sticky top-0 flex h-[1400px] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 backdrop-blur-lg">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }:{card:any}) => {
  return (
    <div
      key={card.id}
      className="group relative xl:h-[300px] xl:w-[450px] h-[280px] w-[400px] overflow-hidden bg-neutral-200 rounded-lg"
    >
      <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
        <Image src={card.url} alt="" className="h-full" />
      </div>
      <div className="absolute inset-0 z-10 grid place-content-end justify-center">
        <p
          className={`bg-gradient-to-br from-white/20 to-white/0 p-8 text-5xl font-black  text-gray-900 backdrop-blur-md ${BricolageGrotesque.className}`}
        >
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: MarketWizardry,
    title: "MarketWizardry",
    id: 4,
  },
  {
    url: BiryaniMan,
    title: "BiryaniMan",
    id: 1,
  },

  {
    url: MemoryBot,
    title: "MemoryBot",
    id: 3,
  },
  {
    url: EssayWriter,
    title: "EssayWriter",
    id: 3,
  },
];
