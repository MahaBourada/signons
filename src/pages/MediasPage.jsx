import React from "react";
import MediaItem from "../components/MediaItem";
import medias from "../data/Medias.json";
import { useSearch } from "../context/SearchContext";
import HighlightSearch from "../components/HighlightSearch";
import { resolvePath } from "../utils/utils";

const MediasPage = () => {
  const { searchTerm } = useSearch();

  return (
    <main className="flex-grow flex items- my-6 mx-24">
      <div className="w-3/4 mr-10">
        <div className="mb-6">
          <h1 className="text-dynamic-2xl font-bold">
            <HighlightSearch text={medias.title} searchTerm={searchTerm} />
          </h1>
          <p className="text-dynamic-base leading-9 text-justify ml-3 mr-1 my-1">
            <HighlightSearch text={medias.desc} searchTerm={searchTerm} />
          </p>
        </div>

        <ul className="m-4 mx-10 mt-6 grid grid-cols-[0fr,0fr,0fr] justify-items-center justify-self-start">
          {medias.links.map((link) => (
            <MediaItem
              key={link}
              label={<HighlightSearch text={link} searchTerm={searchTerm} />}
              link={`/medias/${link.toLowerCase().trim().replace(/\s+/g, "-")}`}
            />
          ))}
        </ul>
      </div>

      <img
        src="/vectors/MediasPic.svg"
        width={450}
        alt="Un mec chill"
      />
    </main>
  );
};

export default MediasPage;
