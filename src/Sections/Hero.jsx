import React from "react";
import BlurPopUpByWord from "./Hero-Lib/BlurPopUpByWord";
import BlurPopUp from "./Hero-Lib/BlurPopUp";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 z-0">
      {/* Headings */}
      <h1 className="hidden w-2/3 sm:block mb-6 text-[56px] font-medium tracking-[-0.0325em] leading-[1.1] text-balance text-base-content">
        <BlurPopUpByWord text="Core Of Science, Technology, and Development" />
      </h1>
      <h1 className="block sm:hidden text-[36px] font-medium tracking-[-0.02em] leading-tight text-center text-balance text-base-content mb-6">
        <BlurPopUpByWord text="Core Of Development" />
      </h1>

      {/* Subheading */}
      <BlurPopUp delay={1}>
        <div>
          <h2 className="hidden sm:block text-base-content/70 text-[21px] leading-[28px] tracking-[-0.37px] font-medium max-w-[70%] mb-10">I am a paragraph.. Oh yeah I am!! Type me daddy! Ahhhhh...</h2>
          <h2 className="block sm:hidden text-base-content/70 text-[17px] text-center max-w-md mx-auto leading-6 tracking-[-0.25px] font-medium mb-10">OryCore</h2>
        </div>
      </BlurPopUp>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-col sm:flex-row items-center justify-center sm:justify-start">
        <BlurPopUp delay={1.1}>
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </BlurPopUp>

        <BlurPopUp delay={1.15}>
          <button href="#" className="btn btn-ghost">
            <span className="bg-gradient-to-b from-base-content to-base-content/60 bg-clip-text text-transparent">Contact</span>
            <ChevronRight className="w-4 h-4 text-base-content/60" />
          </button>
        </BlurPopUp>
      </div>
    </section>
  );
}
