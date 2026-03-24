import { useState, useEffect } from "react";

import { BurgerButton } from "./burgerButton";
import { BigNavbar } from "./bigNavbar";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return windowWidth <= 768 ? <BurgerButton /> : <BigNavbar />;
};

export default Navbar;
