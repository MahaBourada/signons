import React from "react";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch.jsx";
import { resolvePath } from "../utils/utils.js";

const Header = () => {
  return (
    <header className="flex items-center p-1 m-2 mx-5">
      <Link to="/" className="p-1 pb-6">
        <img
          src={resolvePath("/vectors/Logo.svg")}
          width={500}
          alt="Logo Signons"
          className="dark:hidden w-[34rem]"
        />
        <img
          src={resolvePath("/vectors/LogoDark.svg")}
          width={500}
          alt="Logo Signons"
          className="hidden dark:block w-[34rem]"
        />
      </Link>

      <SearchBar />

      <nav className="flex justify-between items-center w-[75%] font-bold">
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
    </header>
  );
};

export default Header;
