import { Link } from "lucide-react";
import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <div className="flex flex-row w-full">
        <SearchBar />

      <nav className="flex flex-row justify-between items-center w-[75%] font-bold">
        <NavLink
          to="/origine"
          className={({ isActive }) =>
            isActive
              ? "underline mx-3"
              : "hover:underline hover:translate-x-[1px] hover:translate-y-[1px] mx-3"
          }
        >
          Origine
        </NavLink>
        <NavLink
          to="/histoire"
          className={({ isActive }) =>
            isActive
              ? "underline mx-3"
              : "hover:underline hover:translate-x-[1px] hover:translate-y-[1px] mx-3"
          }
        >
          Histoire
        </NavLink>
        <NavLink
          to="/lexique"
          className={({ isActive }) =>
            isActive
              ? "underline mx-3"
              : "hover:underline hover:translate-x-[1px] hover:translate-y-[1px] mx-3"
          }
        >
          Lexique
        </NavLink>
        <NavLink
          to="/medias"
          className={({ isActive }) =>
            isActive
              ? "underline mx-3"
              : "hover:underline hover:translate-x-[1px] hover:translate-y-[1px] mx-3"
          }
        >
          Médias
        </NavLink>
      </nav>

      <ThemeSwitch />
    </div>
  );
};

export default NavBar;
