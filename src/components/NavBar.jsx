import { Link } from "lucide-react";
import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <div className="flex-grow flex flex-row items-center max-header:justify-end justify-between w-full">
      <div className="max-header:hidden flex-grow">
        <SearchBar />
      </div>

      <div className="flex flex-row">
        <nav className="flex flex-row justify-end items-center font-bold">
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
    </div>
  );
};

export default NavBar;
