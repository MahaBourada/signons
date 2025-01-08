import React from "react";
import { ZoomIn, ZoomOut } from "lucide-react";

const ZoomFunc = () => {
  return (
    <div className="flex flex-col fixed bottom-12 left-8 text-blackText dark:text-whiteText">
      <button
        type="button"
        className="hover:translate-x-[1px] hover:translate-y-[1px]"
      >
        <ZoomOut color="currentColor" size={46} />
      </button>
      <button
        type="button"
        className="hover:translate-x-[1px] hover:translate-y-[1px]"
      >
        <ZoomIn color="currentColor" size={46} />
      </button>
    </div>
  );
};

export default ZoomFunc;
