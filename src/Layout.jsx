import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ZoomFunc from "./components/ZoomFunc";
import ScrollToTop from "react-scroll-to-top";

const Layout = () => {
  const [fontSize, setFontSize] = useState(1.25);

  const zoomIn = () => {
    setFontSize((prev) => Math.min(prev * 1.1, 1.8));
  };

  const zoomOut = () => {
    setFontSize((prev) => Math.max(prev / 1.1, 1.25));
  };

  const resetZoom = () => {
    setFontSize(1.25);
  };

  return (
    <div
      className="App flex flex-col textlg min-h-screen bg-bgColor bg-big-screen bg-repeat-y font-bodyFont text-blackText text-dynamic-base leading-loose dark:text-whiteText dark:bg-darkBg font-normal max-xsm:text-dynamic-base"
      style={{ "--font-base": `${fontSize}rem` }}
    >
      <Header />
      <Outlet />
      <ZoomFunc zoomIn={zoomIn} zoomOut={zoomOut} resetZoom={resetZoom} />
      {/* <ScrollToTop
        smooth
        style={{ boxShadow: "none", position: "fixed" }}
        svgPath="M10 20L50 10L90 20"
      /> */}
      <ScrollToTop
        aria-label="Haut de page"
        smooth
        style={{
          boxShadow: "none",
          position: "fixed",
          border: "4px solid #1F1F1F",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
        className="hover:translate-x-[1px] hover:translate-y-[1px]"
        component={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 18"
            fill="none"
            stroke="#1F1F1F"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-up"
          >
            <path d="M8 6L12 2L16 6" />
            <path d="M12 2V16" />
          </svg>
        }
      />
      <Footer />
    </div>
  );
};

export default Layout;
