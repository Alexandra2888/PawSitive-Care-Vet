import React, { useState } from 'react';
import './BurgerButton.scss'; 
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ToggleTheme from '../../../dark-mode/ToggleTheme';
import { FiLogOut } from "react-icons/fi";
import {useUserAuth } from "../../../../contexts/UserAuthContext";


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
        className={`burger-button ${burgerMenuIsOpen ? 'open' : ''}`}
        onClick={toggleBurgerMenu}
      >
        <div
          className={`burger-line line-1 ${
            burgerMenuIsOpen ? 'rotate-up' : ''
          }`}
        ></div>
        <div
          className={`burger-line line-2 ${
            burgerMenuIsOpen ? 'fade-out' : ''
          }`}
        ></div>
        <div
          className={`burger-line line-3 ${
            burgerMenuIsOpen ? 'rotate-down' : ''
          }`}
        ></div>
      </button>

      {burgerMenuIsOpen && (
        <div className="menu-content">
           <ul id="nav__items">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/appointments">Appointments</NavLink>
          </li>
          <li>
            <NavLink to="/shop" >
             Shop
            </NavLink>
          </li>
          {user && (
            <li>
              <button onClick={handleLogout} className="svg btn-primary">
                <FiLogOut />
              </button>
            </li>
          )}
          <li>
            <ToggleTheme />
          </li>
        </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerButton;