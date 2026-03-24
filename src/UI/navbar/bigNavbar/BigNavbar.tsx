import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";
import { FaPaw } from "react-icons/fa";

import ToggleTheme from "../../../dark-mode/ToggleTheme";
import { useUserAuth } from "../../../contexts/UserAuthContext";

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
    <nav className="gradient-bg w-screen h-20 sticky z-10 top-0 flex items-center justify-between px-8 shadow-[0_1rem_1rem_rgba(12,3,27,0.1)]">
      <NavLink to="/" className="text-white">
        <h3 className="text-white">
          <FaPaw className="-rotate-45 fill-orange-400 mx-[5px] inline" />
          PawSitive Care Vet
          <FaPaw className="rotate-45 fill-orange-400 mx-[5px] inline" />
        </h3>
      </NavLink>

      <ul className="flex items-center list-none gap-4">
        <li>
          <NavLink
            to="/"
            className="nav-link-hover text-white font-normal text-[0.9rem]"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-appointments"
            className="nav-link-hover text-white font-normal text-[0.9rem]"
          >
            Make Appointment
          </NavLink>
        </li>
        {user && (
          <li>
            <button
              onClick={handleLogout}
              className="bg-transparent border-none cursor-pointer flex items-center"
            >
              <FiLogOut className="text-white w-[25px] h-auto" />
            </button>
          </li>
        )}
        <li className="flex items-center">
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  );
};

export default BigNavbar;
