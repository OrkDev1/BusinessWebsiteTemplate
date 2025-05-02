import React from "react";
//import Navbar from "../components/Navbars/NavbarFull";
import Navbar from "../components/Navbars/NavbarFloating";
import { NavProvider } from "../Providers/NavProvider";
import Section from "../Sections/Section";
import Pricing from "../Sections/Pricing";
import Hero from "../Sections/Hero";
import Footer from "../components/Footer";
import Contact from "../Sections/Contact";
import Features from "../Sections/Features";

const sections = [
  { title: "Home", id: "home", element: <Hero /> },
  { title: "Features", id: "features", element: <Features /> },
  { title: "Pricing", id: "pricing", element: <Pricing /> },
  { title: "Contact", id: "contact", element: <Contact /> },
];

export default function HeroPage() {
  return (
    <NavProvider>
      <Navbar />
      {/* <div className="crypto-icon flex flex-col gap-1 items-center justify-center w-24 h-24 rounded-2xl shadow-xl">
        <span className="crypto-symbol text-5xl font-bold">₿</span>
        <p className="crypto-label text-sm">CRYPTO</p>
      </div> */}
      {sections.map((section) => (
        <Section element={section.element} key={section.id} title={section.title} id={section.id} />
      ))}
      <Footer />
    </NavProvider>
  );
}
