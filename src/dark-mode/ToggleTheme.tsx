import { useGlobalContext } from "../contexts/DarkModeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <button
      className="bg-transparent border-transparent grid place-items-center cursor-pointer w-10 h-10"
      onClick={toggleDarkTheme}
    >
      {isDarkTheme ? (
        <BsFillMoonFill className="text-[1.5rem]" />
      ) : (
        <BsFillSunFill className="text-[1.5rem]" />
      )}
    </button>
  );
};
export default ThemeToggle;
