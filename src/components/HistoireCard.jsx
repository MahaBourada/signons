import React from "react";

const HistoireCard = ({ label, desc, img }) => {
  const truncatedDesc = desc.length > 200 ? desc.slice(0, 200) + "..." : desc;

  return (
    <div className='m-auto flex items-center justify-between w-[85%] max-lg:w-[55%] bg-[url("assets/vectors/HistoireVector.svg")] dark:bg-[url("assets/vectors/HistoireVectorDark.svg")] bg-contain max-lg:bg-center bg-no-repeat hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer'>
      <div className="p-2 m-2 hover:underline w-full">
        <h1 className="text-dynamic-xl font-bold">{label}</h1>
        <p className="text-dynamic-base leading-9 text-justify line-clamp-5">
          {truncatedDesc}
        </p>
      </div>
      <img src={img} width={225} alt={img} className="p-4 m-1 max-md:hidden" />
    </div>
  );
};

export default HistoireCard;
