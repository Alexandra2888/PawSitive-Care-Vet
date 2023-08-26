import React, { useState, useEffect } from 'react';
import BurgerButton from '../navbar/burgerButton/BurgerButton';
import BigNavbar from '../navbar/bigNavbar/BigNavbar';
import "./Navbar.scss";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };


    window.addEventListener('resize', updateWindowWidth);


    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <nav>
      {windowWidth <= 768 ? <BurgerButton /> : <BigNavbar />}
    </nav>
  );
};

export default Navbar;
