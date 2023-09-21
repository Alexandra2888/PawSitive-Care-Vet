import { useGlobalContext } from "../../contexts/DarkModeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "./ToggleTheme.scss";
import React from "react";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
