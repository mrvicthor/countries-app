import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "../context/theme.context";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext) as ThemeContextType;

  const toggleTheme = () => setIsDark(!isDark);
  console.log({ isDark });

  return (
    <header className="px-4 shadow-md">
      <nav className="container mx-auto max-w-7xl flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <button
          onClick={toggleTheme}
          aria-label="toggle theme"
          className="flex items-center gap-2 capitalize"
        >
          {isDark ? <FaSun /> : <FaMoon />} dark mode
        </button>
      </nav>
    </header>
  );
};

export default Header;
