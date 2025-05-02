import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");
  return <NavContext.Provider value={{ activeLink, setActiveLink }}>{children}</NavContext.Provider>;
};

export const useNav = () => useContext(NavContext);
