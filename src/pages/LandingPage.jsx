import React, { useState, useEffect } from "react";
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

export default function LandingPage() {
  const [loaded, setLoaded] = useState(false);
  const [globeReady, setGlobeReady] = useState(false);
  const fullyReady = loaded && globeReady;
  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <NavProvider>
      {!fullyReady && (
        <div className="fixed inset-0 bg-base-100 flex items-center justify-center z-[1000] pointer-events-none">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <Navbar />
      {sections.map((section) => {
        const isHero = section.id === "home";
        return <Section key={section.id} title={section.title} id={section.id} element={isHero ? <Hero onGlobeReady={() => setGlobeReady(true)} /> : section.element} />;
      })}
      <Footer />
    </NavProvider>
  );
}
