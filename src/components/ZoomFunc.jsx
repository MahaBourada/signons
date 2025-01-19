import React from "react";
import { RefreshCcw, ZoomIn, ZoomOut } from "lucide-react";

const ZoomFunc = ({ zoomIn, zoomOut, resetZoom }) => {
  return (
    <div className="fixed bottom-12 left-8 max-lg:bottom-5 flex flex-col max-lg:flex-row text-blackText dark:text-whiteText z-50">
      <button
        type="button"
        className="hover:translate-x-[1px] hover:translate-y-[1px] my-1"
        onClick={() => zoomIn()}
        style={{ transform: "scale(1)" }}
      >
        <ZoomIn color="currentColor" size={46} />
      </button>
      <button
        type="button"
        className="hover:translate-x-[1px] hover:translate-y-[1px] my-1"
        onClick={() => resetZoom()}
      >
        <RefreshCcw color="currentColor" size={40} />
      </button>
      <button
        type="button"
        className="hover:translate-x-[1px] hover:translate-y-[1px] my-1"
        onClick={() => zoomOut()}
      >
        <ZoomOut color="currentColor" size={46} />
      </button>
    </div>
  );
};

export default ZoomFunc;
