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

  return (
    <nav className="gradient-bg w-screen h-20 sticky z-10 top-0">
      {windowWidth <= 768 ? <BurgerButton /> : <BigNavbar />}
    </nav>
  );
};

export default Navbar;
