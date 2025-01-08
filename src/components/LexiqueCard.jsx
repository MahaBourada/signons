import React from "react";

const LexiqueCard = ({ label, desc, img, bgClass }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start w-full p-4 m-3 ml-6 bg-contain bg-no-repeat hover:translate-x-[1px] hover:translate-y-[1px] hover:underline ${bgClass}`}
    >
      <div className="w-[45%]">
        <h3 className="text-dynamic-xl font-bold">{label}</h3>
        <p className="text-dynamic-base leading-9 text-justify ml-3 mr-1">{desc}</p>
      </div>
      <img src={img} width={300} alt="" />
    </div>
  );
};

export default LexiqueCard;
