import React from "react";
import BlurPopUpByWord from "./Hero-Lib/BlurPopUpByWord";
import BlurPopUp from "./Hero-Lib/BlurPopUp";
import { ChevronRight } from "lucide-react";
import Globe from "./Globe/Globe";
import Squares from "../components/Squares";
import { oklch, formatHex } from "culori";

function getCSSVar(name) {
  const oklchColor = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return "#" + formatHex(oklch(oklchColor)).slice(1);
}
export default function Hero({ onGlobeReady }) {
  return (
    <>
      <section className="max-w-6xl w-full mx-auto px-4 z-10 pointer-events-none">
        {/* Headings */}
        <h1 className="sm:w-2/3 block mb-6 text-6xl font-medium tracking-[-0.0325em] leading-[1.1] text-balance text-base-content">
          <BlurPopUpByWord text="Reach 1000+ People Worldwide In Seconds" />
        </h1>

        {/* Subheading */}
        <BlurPopUp delay={1}>
          <div>
            <h2 className="block text-base-content/70 text-[21px] leading-[28px] tracking-[-0.37px] font-medium max-w-[70%] mb-10">I am a paragraph.. Oh yeah I am!! Type me daddy! Ahhhhh...</h2>
          </div>
        </BlurPopUp>

        {/* CTA Buttons */}
        <div className="flex pointer-events-auto w-fit gap-4 flex-col sm:flex-row items-center justify-center sm:justify-start">
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
      <div className="absolute h-full w-full left-0 z-0">
        <Squares
          speed={0.2}
          squareSize={50}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor={getCSSVar("--color-primary")}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(circle_at_75%_75%,black_600px,transparent_200%)] bg-base-100" />
      </div>
      <Globe onReady={onGlobeReady} />
    </>
  );
}
