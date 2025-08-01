import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "../context/theme.context";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext) as ThemeContextType;

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <header
      className={`px-4 shadow-md ${
        isDark ? "bg-[#2B3743] text-white" : "bg-white text-[#242527]"
      } back-box-shadow`}
    >
      <nav className="container mx-auto max-w-7xl flex justify-between items-center h-20">
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <button
          onClick={toggleTheme}
          aria-label="toggle theme"
          className="flex items-center gap-2 capitalize cursor-pointer"
        >
          {isDark ? <FaSun /> : <FaMoon />} {isDark ? "dark" : "light"} mode
        </button>
      </nav>
    </header>
  );
};

export default Header;
