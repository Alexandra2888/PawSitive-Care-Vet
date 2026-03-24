import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";

import ToggleTheme from "../../../dark-mode/ToggleTheme";
import { useUserAuth } from "../../../contexts/UserAuthContext";

const BurgerButton = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuIsOpen((state) => !state);
  };

  return (
    <nav className="gradient-bg w-full sticky z-10 top-0">
      <div className="h-20 flex items-center px-4">
        <button
          aria-label="Toggle menu"
          aria-expanded={burgerMenuIsOpen}
          className={`burger-button flex flex-col gap-4 border-none bg-transparent cursor-pointer ${
            burgerMenuIsOpen ? "open" : ""
          }`}
          onClick={toggleBurgerMenu}
        >
          <div
            className={`burger-line line-1 ${
              burgerMenuIsOpen ? "rotate-up" : ""
            }`}
          ></div>
          <div
            className={`burger-line line-2 ${
              burgerMenuIsOpen ? "fade-out" : ""
            }`}
          ></div>
          <div
            className={`burger-line line-3 ${
              burgerMenuIsOpen ? "rotate-down" : ""
            }`}
          ></div>
        </button>
      </div>

      {burgerMenuIsOpen && (
        <div className="gradient-bg flex flex-col justify-center items-center pt-5 h-screen">
          <ul id="nav__items">
            <li className="nav-item-link text-[2rem] py-2 text-white block">
              <NavLink to="/" className="burger-menu-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item-link text-[2rem] py-2 text-white block">
              <NavLink
                to="/appointments"
                className="burger-menu-link text-white"
              >
                Appointments
              </NavLink>
            </li>
            {user && (
              <li className="text-[2rem] py-2 text-white block">
                <button
                  type="button"
                  onClick={handleLogout}
                  aria-label="Log out"
                  className="bg-transparent border-none cursor-pointer"
                >
                  <FiLogOut className="text-white rounded-lg w-10 h-10" />
                </button>
              </li>
            )}

            <ToggleTheme />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default BurgerButton;
