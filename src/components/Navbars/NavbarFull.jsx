import { useRef, useState, useEffect } from "react";
import Settings from "../Settings";
import Logo from "../Logo";
import { AppWindow, MessagesSquare, CreditCard, House, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useNav } from "../../Providers/NavProvider";

const links = [
  { title: "Home", id: "home", icon: <House size={18} /> },
  { title: "Service", id: "service", icon: <AppWindow size={18} /> },
  { title: "Pricing", id: "pricing", icon: <CreditCard size={18} /> },
  { title: "Contact", id: "contact", icon: <MessagesSquare size={18} /> },
];
export default function Navbar() {
  const { activeLink, setActiveLink } = useNav();
  const [showMenu, setShowMenu] = useState(false);
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });
  const linkRefs = useRef({});

  useEffect(() => {
    const currentRef = linkRefs.current[activeLink];
    if (currentRef) {
      const { offsetLeft, offsetWidth } = currentRef;
      setIndicatorProps({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeLink]);

  return (
    <nav className="border-b border-b-primary/30 font-medium top-0 sticky flex items-center justify-center w-full">
      <div className="font-medium flex items-center w-1/2">
        <div className="mr-auto flex items-center">
          <Logo height={"h-12"} width={"w-12"} color="fill-base-content" />
          <p className="tracking-tighter font-bold text-xl">ORYCORE</p>
        </div>
        <button onClick={() => setShowMenu(!showMenu)} className="sm:hidden flex items-center gap-1 p-2 ml-2">
          <Menu size={28} />
          <span className="text-lg">Menu</span>
        </button>
        <div className={`flex-col w-min mr-auto sm:px-10 sm:flex-row sm:flex ${showMenu ? "flex" : "hidden"} sm:static absolute top-full left-0 w-full p-2 sm:p-0 rounded-field`}>
          {links.map(({ title, id, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              ref={(el) => (linkRefs.current[id] = el)}
              onClick={() => {
                setTimeout(() => {
                  setActiveLink(id);
                }, 500); // delay scroll duration
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`relative px-3 py-2 flex transition items-center space-x-2 hover:opacity-100 ${activeLink === id ? "opacity-100" : "opacity-60"}`}
            >
              <span className="text-lg">{icon}</span>
              <span className="capitalize">{title}</span>
            </a>
          ))}
        </div>
        <div className="ml-auto">
          <Settings />
        </div>
        <motion.div className="absolute bottom-0 h-0.5 bg-primary rounded hidden sm:block" layout initial={true} animate={{ left: indicatorProps.left, width: indicatorProps.width }} transition={{ type: "spring", stiffness: 200, damping: 20 }} />
      </div>
    </nav>
  );
}
