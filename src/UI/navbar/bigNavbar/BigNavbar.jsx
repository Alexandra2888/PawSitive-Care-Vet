import "./BigNavbar.scss";
import { NavLink } from "react-router-dom";
import ToggleTheme from '../../../dark-mode/ToggleTheme';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import {useUserAuth } from "../../../../contexts/UserAuthContext";


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
          <h3>PawSitive Vet Care</h3>
        </NavLink>

        <ul id="nav__items">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add-appointments" className="btn">
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

export default BigNavbar;


