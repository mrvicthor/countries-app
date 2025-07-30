import { Outlet } from "react-router-dom";
import Header from "./header";
import { ThemeContext, type ThemeContextType } from "../context/theme.context";
import { useContext } from "react";

const Layout = () => {
  const { isDark } = useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      <Header />
      <main
        className={`px-4 pt-12 ${
          isDark ? "bg-[#202D36] text-white" : "bg-[#fafafa] text-[#050608]"
        } flex-1`}
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
