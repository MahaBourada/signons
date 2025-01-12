import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const NavBarMobile = ({ closeMenu }) => {
  return (
    <div className="flex flex-col items-center h-full">
      <nav className="flex flex-col justify-between items-center font-bold text-dynamic-lg space-y-4">
        <NavLink
          to="/origine"
          className={({ isActive }) =>
            isActive
              ? "underline mx-3"
              : "hover:underline hover:translate-x-[1px] hover:translate-y-[1px] mx-3"
          }
          onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
        >
          Médias
        </NavLink>
      </nav>

      <ThemeSwitch closeMenu={closeMenu} />
    </div>
  );
};

export default NavBarMobile;
