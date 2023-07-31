import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import ToggleTheme from '../../dark-mode/ToggleTheme';



function Navbar() {
  return (
    <nav>
      <div className="container">
        <NavLink to="/" className="nav__logo">
          <h3>PawSitive Vet Care</h3> 
        </NavLink>

        <ul id="nav__items">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up" className="btn">
              Make Appointment
            </NavLink>
          </li>
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
