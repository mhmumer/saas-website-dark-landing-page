import Banner from "@/components/Banner"
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import Present from "@/components/projectvid";
import { Example } from "@/components/Technologies";
import Services from "@/components/Services";
import HoverLinks from "@/components/projects";
import Projects from "@/components/projects";
import { Contact } from "@/components/contact";
import MProjects from "@/components/projmobile";
import homeNav from "@/components/home_nav";
import BottomNavigator from "@/components/home_nav";


export const metadata: Metadata = {
  title: "Mutecx",
  description: "Elevating Digital Realms with Bespoke Brilliance.",
};

export default function Home() {
  return (
    <>
      <div className=" sticky  top-0 overflow-clip z-0">
        {/* <BottomNavigator /> */}
        <Hero />
        <LogoTicker />
      </div>
      <Features />
      <Services />
      <Present />
      <Projects />
      <MProjects />
      <div className="bg-black">
        <Example />
      </div>
      <FAQs />
      <Contact />
      {/* <CallToAction /> */}
      <Footer />
    </>
  );
}
