import Banner from "@/components/Banner"
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MHMTechx",
  description: "Elevating Digital Realms with Bespoke Brilliance.",
};

export default function Home() {
  return (
    <>
      
      
      <Hero />
      <LogoTicker />
      <Features />
      
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
