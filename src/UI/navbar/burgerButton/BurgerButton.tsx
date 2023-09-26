import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";

import ToggleTheme from "../../../dark-mode/ToggleTheme";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import "./BurgerButton.scss";

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
    <div>
      <button
        className={`burger-button ${burgerMenuIsOpen ? "open" : ""}`}
        onClick={toggleBurgerMenu}
      >
        <div
          className={`burger-line line-1 ${
            burgerMenuIsOpen ? "rotate-up" : ""
          }`}
        ></div>
        <div
          className={`burger-line line-2 ${burgerMenuIsOpen ? "fade-out" : ""}`}
        ></div>
        <div
          className={`burger-line line-3 ${
            burgerMenuIsOpen ? "rotate-down" : ""
          }`}
        ></div>
      </button>

      {burgerMenuIsOpen && (
        <div className="menu-content">
          <ul id="nav__items">
            <li id="nav__items-link">
              <NavLink to="/" className="burger">
                Home
              </NavLink>
            </li>
            <li id="nav__items-link">
              <NavLink to="/appointments" className="burger">
                Appointments
              </NavLink>
            </li>
            {user && (
              <li>
                <button onClick={handleLogout} className="logout">
                  <FiLogOut className="svg" />
                </button>
              </li>
            )}

            <ToggleTheme />
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerButton;
