import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
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
    <header className="flex flex-row items-center p-1 m-2 mx-5 z-50 max-md:mx-3 font-mainFont">
      <div className="max-md:flex flex-col items-center hidden w-full">
        <div className="hidden max-md:flex flex-row items-center w-full justify-between">
          <Link to="/" className="p-1 max-md:block hidden">
            <img
              src={"/signons/vectors/SmallLogo.svg"}
              width={95}
              alt="Logo Signons"
              className="dark:hidden w-28"
            />
            <img
              src={"/signons/vectors/DarkSmallLogo.svg"}
              width={95}
              alt="Logo Signons"
              className="hidden dark:block w-28"
            />
          </Link>

          <div className="max-sm:hidden block flex-grow">
            <SearchBar />
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="mx-5 max-source:mx-3"
            aria-label="Ouvrir le menu de navigation"
          >
            <Menu size={44} color="currentColor" strokeWidth={3} />
          </button>
        </div>

        {show && (
          <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-darkBg text-blackText dark:text-whiteText z-50">
            <div className="flex flex-col items-center">
              <div className="hidden max-md:flex flex-row items-center justify-between w-full m-4">
                <Link to="/" className="p-1 mx-5 max-md:block hidden">
                  <img
                    src={"/signons/vectors/SmallLogo.svg"}
                    width={95}
                    alt="Signons - Aller à la page d'accueil"
                    className="dark:hidden w-28"
                  />
                  <img
                    src={"/signons/vectors/DarkSmallLogo.svg"}
                    width={95}
                    alt="Signons - Aller à la page d'accueil"
                    className="hidden dark:block w-28"
                  />
                </Link>
                <button
                  type="button"
                  onClick={toggleMenu}
                  aria-label="Fermer le menu de navigation"
                  className="m-2 mx-8 mt-7"
                >
                  <X size={45} color="currentColor" strokeWidth={3} />
                </button>
              </div>
              <NavBarMobile closeMenu={closeMenu} />
            </div>
          </div>
        )}

        <div className="hidden max-sm:block">
          <SearchBar />
        </div>
      </div>

      <div className="max-md:hidden flex flex-row items-center max-header:items-start justify-between w-full">
        <Link to="/" className="p-1 max-md:hidden">
          <img
            src={"/signons/vectors/Logo.svg"}
            width={500}
            alt="Signons - Aller à la page d'accueil"
            className="dark:hidden w-[14rem] max-header:w-52"
          />
          <img
            src={"/signons/vectors/LogoDark.svg"}
            width={500}
            alt="Signons - Aller à la page d'accueil"
            className="hidden dark:block w-[14rem] max-header:w-52"
          />
        </Link>

        <div className="flex-grow mt-6 flex flex-col items-end">
          <NavBar />

          <div className="max-header:block hidden mr-14 flex-grow">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
