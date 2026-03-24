import { useGlobalContext } from "../contexts/DarkModeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="flex justify-end py-2 mx-auto">
      <button
        className="bg-transparent border-transparent w-20 h-8 grid place-items-center cursor-pointer"
        onClick={toggleDarkTheme}
      >
        {isDarkTheme ? (
          <BsFillMoonFill className="text-[2rem]" />
        ) : (
          <BsFillSunFill className="text-[2rem]" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
