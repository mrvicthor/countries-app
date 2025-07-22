import { createContext } from "react";

export type ThemeContextType = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
