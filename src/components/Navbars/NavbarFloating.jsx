import React, { useState } from "react";
import Logo from "../Logo";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ArrowDownRight, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative h-full inset-0 z-50">
      <div className="h-24 absolute pointer-events-none top-0 bg-base-100/80 backdrop-blur-md mask-[linear-gradient(to_bottom,black_20%,transparent_80%)]" />
      <div className="inset-0 backdrop-blur-md opacity-0 invisible transition-opacity duration-300 pointer-events-none"></div>
      <header className="fixed block isolate overflow-visible px-3 w-11/12 max-w-6xl z-50 bg-base-100/30 backdrop-blur-xl backdrop-saturate-150 top-4 rounded-box inset-x-0 mx-auto transition-all duration-75 clip-path-[inset(0_0_calc(100%-80px)_0_round_16px)]">
        <div className="absolute inset-0 border border-base-300 rounded-box" />
        <nav className="flex flex-col h-full sm:block">
          <div className="relative">
            <ul className="flex justify-center items-center sm:gap-0 py-0.5 text-base-content">
              <li className="mr-auto">
                <a href="/" className="flex items-center h-full px-2">
                  <Logo height={"h-12"} width={"w-12"} color="fill-base-content" />
                </a>
              </li>

              <div className="hidden sm:flex gap-1 justify-center items-center w-full">
                <li>
                  <a className="btn btn-ghost btn-sm  text-sm" href="#features">
                    Features
                  </a>
                </li>
                <li>
                  <a className="btn btn-ghost btn-sm text-sm w-max" href="#">
                    Resources
                  </a>
                </li>

                <li className="dropdown dropdown-hover z-10">
                  <a role="button" className="flex items-center justify-center btn btn-ghost btn-sm text-sm z-50" href="#">
                    Company
                    <ArrowDownRight className="w-4" />
                  </a>
                  <ul tabIndex={0} className="dropdown-content transition-all bg-base-200 menu rounded-box w-52 p-2 shadow-sm">
                    <li>
                      <a className="flex items-center justify-start btn btn-ghost btn-sm text-sm w-full" href="#">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center justify-start btn btn-ghost btn-sm text-sm w-full" href="#contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="btn btn-ghost btn-sm text-sm" href="#pricing">
                    Pricing
                  </a>
                </li>
              </div>

              <li className="ml-auto sm:ml-0 my-2 mx-1">
                <a className="btn btn-sm w-max btn-primary font-bold" href="#">
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </a>
              </li>

              <li className="sm:hidden flex items-center">
                <button onClick={() => setShowMenu(!showMenu)} className="btn btn-ghost btn-sm">
                  <Menu />
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <AnimatePresence>
          {showMenu && (
            <div>
              <div className="inset-0 fixed backdrop-blur-md opacity-0 invisible transition-opacity pointer-events-none"> </div>
              <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="sm:hidden transition-all flex gap-1 flex-col py-2 rounded-box shadow z-50">
                <a className="btn btn-ghost text-sm justify-start" href="#features">
                  Features
                </a>
                <a className="btn btn-ghost text-sm justify-start" href="#">
                  Resources
                </a>
                <div className="dropdown dropdown-hover z-10">
                  <a role="button" className="flex items-center justify-start btn btn-ghost text-sm w-full" href="#">
                    Company
                    <ArrowDownRight className="w-4" />
                  </a>
                  <ul tabIndex={0} className="dropdown-content transition-all bg-base-200 menu rounded-box w-52 p-2 shadow-sm">
                    <li>
                      <a className="flex items-center justify-start btn btn-ghost btn-sm text-sm w-full" href="#">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center justify-start btn btn-ghost btn-sm text-sm w-full" href="#contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="btn btn-ghost text-sm justify-start" href="#pricing">
                  Pricing
                </a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
