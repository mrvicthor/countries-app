import { useState, type ReactNode } from "react";
import { ThemeContext } from "../context/theme.context";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
