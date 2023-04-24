import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="header">
      <img
        src="src/assets/pawsitive-care.png"
        alt="pawsitive-care"
        className="logo"
        width="200px"
        height="70px"
      />
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
