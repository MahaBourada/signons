import React from "react";

const LexiqueCard = ({ label, desc, img, bgClass }) => {
  return (
    <div
      className={`flex flex-row items-start max-lg:flex-col max-lg:justify-center justify-start w-full max-lg:w-1/2 p-4 m-3 ml-6 max-md:m-0 max-md:my-4 bg-contain max-lg:bg-center bg-no-repeat hover:translate-x-[1px] hover:translate-y-[1px] hover:underline ${bgClass}`}
    >
      <div className="w-full">
        <h3 className="text-dynamic-xl font-bold">{label}</h3>
        <p className="text-dynamic-base leading-9 text-justify ml-3 mr-1 max-md:mx-0">
          {desc}
        </p>
      </div>
      <img src={img} width={300} alt="" className="max-md:hidden" />
    </div>
  );
};

export default LexiqueCard;
