import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";
import { FaPaw } from "react-icons/fa";

import ToggleTheme from "../../../dark-mode/ToggleTheme";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import "./BigNavbar.scss";

const BigNavbar = () => {
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
  return (
    <nav className="nav__container">
      <div className="nav__container-wrapper">
        <NavLink to="/" className="nav__logo">
          <h3>
            <FaPaw className="paw1" />
            PawSitive Care Vet
            <FaPaw className="paw2" />
          </h3>
        </NavLink>

        <ul id="nav__items">
          <li className="nav__link">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-appointments" className="nav__link">
              Make Appointment
            </NavLink>
          </li>
          {user && (
            <li>
              <button onClick={handleLogout} className="logout">
                <FiLogOut className="svg " />
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
};

export default BigNavbar;
