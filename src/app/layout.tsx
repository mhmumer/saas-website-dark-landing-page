import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

const dmSans = DM_Sans({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`{clsx(dmSans.className, "antialiased")} `}>
        <main className="">
          <Banner />
          <Navbar />
          
          {children}
        </main>
      </body>
    </html>
  );
}
