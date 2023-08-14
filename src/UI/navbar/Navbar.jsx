import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import ToggleTheme from '../../dark-mode/ToggleTheme';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("user");
      navigate("/sign-in");
      console.log("Signed out successfully");
    }).catch((error) => {
      console.log(error);
    });
  }

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  return (
    <nav className="nav__container">
      <div className="nav__container-wrapper">
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
    </nav>
  );
}

export default Navbar;
