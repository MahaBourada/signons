import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch.jsx";
import { Menu, X } from "lucide-react";
import NavBar from "./NavBar.jsx";
import NavBarMobile from "./NavBarMobile.jsx";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <header className="flex flex-row items-center p-1 m-2 mx-5 z-50 max-md:mx-3">
      <div className=" max-md:flex flex-col items-center hidden w-full">
        <div className="hidden max-md:flex flex-row items-center w-full justify-between">
          <Link to="/" className="p-1 max-md:block hidden">
            <img
              src={"/vectors/SmallLogo.svg"}
              width={90}
              alt="Logo Signons"
              className="dark:hidden"
            />
            <img
              src={"/vectors/DarkSmallLogo.svg"}
              width={90}
              alt="Logo Signons"
              className="hidden dark:block"
            />
          </Link>

          <div className="max-msm:hidden max-md:block flex-grow">
            <SearchBar />
          </div>

          <button type="button" onClick={toggleMenu}>
            <Menu size={40} color="currentColor" strokeWidth={3} />
          </button>
        </div>

        {show && (
          <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-darkBg text-blackText dark:text-whiteText z-50">
            <div className="flex flex-col items-center p-4">
              <div className="hidden max-md:flex flex-row items-center justify-between w-full">
                <Link to="/" className="p-1 max-md:block hidden">
                  <img
                    src={"/vectors/SmallLogo.svg"}
                    width={90}
                    alt="Logo Signons"
                    className="dark:hidden"
                  />
                  <img
                    src={"/vectors/DarkSmallLogo.svg"}
                    width={90}
                    alt="Logo Signons"
                    className="hidden dark:block"
                  />
                </Link>
                <button
                  type="button"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="m-2"
                >
                  <X size={40} color="currentColor" strokeWidth={3} />
                </button>
              </div>
              <NavBarMobile closeMenu={closeMenu} />
            </div>
          </div>
        )}

        <div className="max-md:hidden">
          <SearchBar />
        </div>
      </div>

      <div className="max-md:hidden flex flex-row justify-between w-full">
        <Link to="/" className="p-1 max-md:hidden">
          <img
            src={"/vectors/Logo.svg"}
            width={500}
            alt="Logo Signons"
            className="dark:hidden w-[18rem]"
          />
          <img
            src={"/vectors/LogoDark.svg"}
            width={500}
            alt="Logo Signons"
            className="hidden dark:block w-[18rem]"
          />
        </Link>

        <NavBar />
      </div>
    </header>
  );
};

export default Header;
