import './Navbar.scss';
import '../../utils/constants/constants';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="container">
        <a href="index.html" className="nav__logo">
          <h3>PawSitive Vet Care</h3>
        </a>
        <ul id="nav__items" >
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
