import React from "react";
import { motion } from "framer-motion";
import { World } from "./WorldObject";
import { oklch, formatHex } from "culori";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Globe({ onReady }) {
  const globeConfig = {
    pointSize: 1,
    globeColor: getCSSVar("--color-primary"),
    showAtmosphere: true,
    atmosphereColor: getCSSVar("--color-primary"),
    atmosphereAltitude: 0.2,
    emissive: getCSSVar("--color-primary"),
    emissiveIntensity: 0.2,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: getCSSVar("--color-primary"),
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.01,
  };

  const colors = [getCSSVar("--color-primary"), getCSSVar("--color-primary"), getCSSVar("--color-primary")];
  const sampleArcs = Array.from({ length: 30 }, (_, i) => ({
    order: i + 1,
    startLat: (Math.random() * 180 - 90).toFixed(4) * 1,
    startLng: (Math.random() * 360 - 180).toFixed(4) * 1,
    endLat: (Math.random() * 180 - 90).toFixed(4) * 1,
    endLng: (Math.random() * 360 - 180).toFixed(4) * 1,
    arcAlt: Math.random() * 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  function getCSSVar(name) {
    const oklchColor = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return "#" + formatHex(oklch(oklchColor)).slice(1);
  }
  return (
    <div className="absolute w-full h-screen overflow-hidden p-10">
      <div className="absolute z-0 pointer-events-none w-[200vw] md:w-[250vw] h-[150vh] md:h-[200vh] right-[-100vw] md:right-[-100vw] bottom-[-75vh] md:bottom-[-75vh]">
        <World data={sampleArcs} globeConfig={globeConfig} onReady={onReady} />
      </div>
      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-base-100 via-base-100/70 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-base-100 via-base-100/70 to-transparent pointer-events-none z-10" />
    </div>
  );
}
