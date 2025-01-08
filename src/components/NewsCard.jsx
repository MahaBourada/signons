import React from "react";

const NewsCard = ({ label, category, date, img, link }) => {
  const truncatedLabel = label.length > 50 ? label.slice(0, 50) + "..." : label;

  return (
    <a
      href={link}
      target="_blank"
      className="flex items-start hover:underline hover:translate-x-[1px] hover:translate-y-[1px]"
    >
      <div className="text-justify ml-1 mr-5 my-7 leading-normal">
        <h3 className="text-dynamic-base font-bold line-clamp-3">
          {truncatedLabel}
        </h3>
        <div className="flex flex-col items-end mt-3">
          <p className="text-dynamic-sm p-1 px-4 bg-secondary dark:bg-darkSecondary rounded-full w-fit">
            {category}
          </p>
          <p className="text-dynamic-sm text-end p-1 mx-1">{date}</p>
        </div>
      </div>

      <img src={img} width={325} alt={label} className="p-1 my-5 mx-1" />
    </a>
  );
};

export default NewsCard;
