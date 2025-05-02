import React from "react";
import { motion } from "framer-motion";
import { World } from "./WorldObject";
import { oklch, formatHex } from "culori";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Globe() {
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
    <div className="relative w-full h-screen overflow-hidden p-10">
      {/* Your UI Content */}
      <motion.div className="h-full justify-start w-1/2 z-10 text-left p-10 py-24 " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl font-bold">Reaching People WorldWide</h1>
        <p className="mt-4 text-xl text-gray-300">Easily reach 1000+ people simultaniously every second using our service, saving you time and money..</p>
        <ul className="py-10">
          <li className="flex gap-1 items-center py-4 text-lg text-base-content/80">
            <Mail />
            Send limitless email to people not spam folders
          </li>
          <li className="flex gap-1 items-center py-4 text-lg text-base-content/80">
            <Phone />
            Make simultanious phone calls and talk to customers
          </li>
          <li className="flex gap-1 items-center py-4 text-lg text-base-content/80">
            <MessageCircle />
            Manage all your messagins on your favorite platforms
          </li>
        </ul>
      </motion.div>

      {/* Globe: 75% visible in bottom right corner */}
      <div className="absolute z-0 pointer-events-none w-[250vw] h-[200vh] right-[-100vw] bottom-[-75vh]">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-base-100 via-base-100/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-base-100 via-base-100/80 to-transparent pointer-events-none z-10" />
    </div>
  );
}
