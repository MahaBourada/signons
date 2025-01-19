import React from "react";

const LexiqueCard = ({ label, desc, img, bgClass }) => {
  return (
    <div
      className={`flex flex-row items-center max-lg:flex-col max-lg:justify-center justify-start w-fit p-4 m-3 ml-6 max-md:m-0 max-md:my-4 bg-contain max-lg:bg-center bg-no-repeat hover:translate-x-[1px] hover:translate-y-[1px] hover:underline ${bgClass}`}
    >
      <div className="max-lexique:w-full max-lexiquem:w-3/4 max-lexiquel:w-[65%] max-lexiquexl:w-[55%] max-md:w-1/2">
        <h2 className="text-dynamic-xl font-bold">{label}</h2>
        <p className="text-dynamic-base leading-9 text-justify ml-3 mr-1 max-md:mx-0 max-lg:w-1/2">
          {desc}
        </p>
      </div>
      <img
        src={img}
        width={300}
        alt=""
        role="presentation"
        className="max-md:hidden"
      />
    </div>
  );
};

export default LexiqueCard;
