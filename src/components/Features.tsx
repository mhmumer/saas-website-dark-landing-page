import Image from "next/image";
import EcoSystem from "@/assets/images/ecosystem.png"
import Encryption from "@/assets/images/encryption.png"
import SEO from "@/assets/images/Seo.png"

const features = [
  {
    title: "Responsive Design",
    description:
      "Ensure your website looks great and functions flawlessly on all devices, from desktops to smartphones.",
    img: EcoSystem,
  },
  {
    title: "Secure Encryption",
    description:
      "Protect your website and user data with advanced encryption technologies, ensuring privacy and security.",
    img: Encryption,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility and ranking on search engines with our expert SEO services.",
    img: SEO,
  },
];

export const Features = () => {
  return (
    <div className="bg-black/90 text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold sm:text-6xl text-5xl tracking-tighter">
          Experience a web revolution
        </h2>
        <div className="max-w-4xl mx-auto">
        <p className="text-center mt-5 text-xl  text-white/70">
          Enjoy top-tier security with advanced encryption, embrace seamless,
          responsive designs for every device, and boost your online presence
          with expert SEO optimization for maximum visibility and success.
        </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row  gap-4 sm:flex-1">
          {features.map(({ title, description, img }) => (
            <div key={title} className="border border-white/30 px-5 py-10 text-center rounded-xl">
              <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <Image src={img} alt="" className="p-3"/>
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p  className="mt-2 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
