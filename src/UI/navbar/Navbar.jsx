import "./Navbar.scss";
import { Link } from "react-router-dom";
import ToggleTheme from '../../dark-mode/ToggleTheme';


function Navbar() {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="nav__logo">
          <h3>PawSitive Vet Care</h3> 
        </Link>

        <ul id="nav__items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/appointment" className="btn">
              Make Appointment
            </Link>
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
