import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ZoomFunc from "./components/ZoomFunc";

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
      className="App flex flex-col textlg min-h-screen bg-bgColor bg-big-screen bg-repeat-y font-main text-blackText text-dynamic-base leading-loose dark:text-whiteText dark:bg-darkBg font-normal"
      style={{ "--font-base": `${fontSize}rem` }}
    >
      <Header />
      <Outlet />
      <ZoomFunc zoomIn={zoomIn} zoomOut={zoomOut} resetZoom={resetZoom} />
      <Footer />
    </div>
  );
};

export default Layout;
