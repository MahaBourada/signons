import React from "react";
import MediaItem from "../components/MediaItem";
import medias from "../data/Medias.json";
import { useSearch } from "../context/SearchContext";
import HighlightSearch from "../components/HighlightSearch";

const MediasPage = () => {
  const { searchTerm } = useSearch();

  return (
    <main
      aria-live="polite"
      className="flex-grow flex flex-row mx-24 max-md:mx-0 max-lg:mx-16"
    >
      <div className="flex flex-col items-start w-full max-lg:flex-col max-lg:items-center">
        <div className="mb-6 w-3/4">
          <h1 className="font-mainFont text-dynamic-2xl font-bold max-md:text-dynamic-xl max-md:leading-normal">
            <HighlightSearch text={medias.title} searchTerm={searchTerm} />
          </h1>
          <p className="text-dynamic-base leading-9 ml-3 mr-1 my-1">
            <HighlightSearch text={medias.desc} searchTerm={searchTerm} />
          </p>
        </div>

        <ul className="m-4 mx-10 max-lg:mx-0 mt-6 grid grid-cols-[1fr,1fr,1fr] max-msm:grid-cols-[1fr] max-md:grid-cols-[1fr,1fr] justify-items-center justify-self-start max-lg:justify-self-center">
          {medias.links.map((link) => (
            <MediaItem
              key={link}
              label={<HighlightSearch text={link} searchTerm={searchTerm} />}
              link={`/medias/${link.toLowerCase().trim().replace(/\s+/g, "-")}`}
              altText={link}
            />
          ))}
        </ul>
      </div>

      <img
        src={import.meta.env.VITE_APP_BASE_URL + "vectors/MediasPic.svg"}
        width={450}
        alt=""
        role="presentation"
        className="max-xl:hidden"
      />
    </main>
  );
};

export default MediasPage;
