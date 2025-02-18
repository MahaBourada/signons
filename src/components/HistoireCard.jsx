import React from "react";

const HistoireCard = ({ label, altText, desc, img }) => {
  const truncatedDesc = desc.length > 200 ? desc.slice(0, 200) + "..." : desc;

  return (
    <div className='m-auto max-lg:m-0 flex items-center justify-between w-[85%] max-lg:w-full bg-[url("assets/vectors/HistoireVector.svg")] dark:bg-[url("assets/vectors/HistoireVectorDark.svg")] bg-contain max-lg:bg-center bg-no-repeat hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer'>
      <div className="p-2 m-2 hover:underline w-full">
        <h2 className="font-mainFont text-dynamic-xl font-bold">{label}</h2>
        <p className="text-dynamic-base leading-9 line-clamp-5">
          {truncatedDesc}
        </p>
      </div>
      <img
        src={img}
        width={225}
        alt={`Carte géographique - ${altText}`}
        className="p-4 m-1 max-md:hidden"
      />
    </div>
  );
};

export default HistoireCard;
