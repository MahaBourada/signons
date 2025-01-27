import React from "react";
import { useSearch } from "../context/SearchContext";
import lexique from "../data/Lexique.json";
import HighlightSearch from "../components/HighlightSearch";

const AlphabetPage = () => {
  const { searchTerm } = useSearch();

  return (
    <main
      aria-live="polite"
      className="flex-grow mx-24 mb-12 max-md:mx-6 max-lg:mx-16"
    >
      <div className="w-3/4 mb-6 max-lg:w-full">
        <h1 className="font-mainFont text-dynamic-2xl font-bold max-lg:text-dynamic-xl max-lg:leading-normal">
          <HighlightSearch text="Dactylologie" searchTerm={searchTerm} />
        </h1>
        <p className="text-dynamic-base leading-9 ml-3 mr-1 my-1">
          <HighlightSearch
            text={lexique.lexique[0].desc}
            searchTerm={searchTerm}
          />
        </p>
      </div>

      <div className="grid grid-cols-2 max-lg:gap-x-0 max-xl:gap-x-10 max-lg:flex max-lg:flex-col place-self-center m-auto gap-y-16 max-lg:mx-2">
        {lexique.lexique[0].pays.map((unPays, index) => (
          <div key={index} className="mx-auto">
            <h2 className="text-dynamic-xl font-bold font-mainFont">
              <HighlightSearch text={unPays.nom} searchTerm={searchTerm} />
            </h2>
            <img
              src={import.meta.env.VITE_APP_BASE_URL + unPays.img}
              alt={`Dactylologie - ${unPays.nom}`}
              width={450}
            />
          </div>
        ))}
      </div>

      <a
        href="https://www.sourds.net/143622-2/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter le lien externe pour Sourds.Net"
        className="flex justify-end text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px] max-sm:text-dynamic-xsm max-md:text-dynamic-sm max-lg:text-dynamic-xsm max-lg:text-start"
      >
        <span className="font-bold">Source : </span>{" "}
        https://www.sourds.net/143622-2/
      </a>
    </main>
  );
};

export default AlphabetPage;
