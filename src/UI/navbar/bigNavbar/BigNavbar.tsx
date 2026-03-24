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
    <nav className="gradient-bg w-screen h-20 sticky z-10 top-0 flex flex-col justify-between px-8 py-2 shadow-[0_1rem_1rem_rgba(12,3,27,0.1)]">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="text-white">
          <h3 className="text-white">
            <FaPaw className="-rotate-45 fill-orange-400 mx-[5px] inline" />
            PawSitive Care Vet
            <FaPaw className="rotate-45 fill-orange-400 mx-[5px] inline" />
          </h3>
        </NavLink>

        <ul className="flex items-center list-none">
          <li className="mr-4">
            <NavLink to="/" className="nav-link-hover text-white font-normal text-[0.9rem]">
              Home
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink to="/add-appointments" className="nav-link-hover text-white font-normal text-[0.9rem]">
              Make Appointment
            </NavLink>
          </li>
          {user && (
            <li className="mr-4">
              <button onClick={handleLogout} className="bg-transparent border-none cursor-pointer">
                <FiLogOut className="text-white mt-[5px] w-[25px] h-auto" />
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
