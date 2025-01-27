import React from "react";
import { useSearch } from "../context/SearchContext";
import lexique from "../data/Lexique.json";
import HighlightSearch from "../components/HighlightSearch";

const VocabulairePage = () => {
  const { searchTerm } = useSearch();

  return (
    <main
      aria-live="polite"
      className="flex-grow mx-24 max-md:mx-6 max-lg:mx-16"
    >
      <div className="w-3/4 mb-6 max-lg:w-full">
        <h1 className="font-mainFont text-dynamic-2xl font-bold max-lg:text-dynamic-xl max-lg:leading-normal">
          <HighlightSearch text="Vocabulaire" searchTerm={searchTerm} />
        </h1>
        <p className="text-dynamic-base leading-9 ml-3 mr-1 my-1">
          <HighlightSearch
            text={lexique.lexique[1].desc}
            searchTerm={searchTerm}
          />
        </p>
      </div>

      <div className="flex flex-row justify-center items-start ">
        <h2 className="font-mainFont text-dynamic-2xl max-md:text-dynamic-lg font-bold w-64 max-lg:w-fit mx-10 my-24 max-lg:my-6 leading-relaxed">
          <HighlightSearch
            text="En cours de construction..."
            searchTerm={searchTerm}
          />
        </h2>

        <img
          src={import.meta.env.VITE_APP_BASE_URL + "vectors/Construction.svg"}
          width={450}
          alt=""
          role="presentation"
          className="p-3 m-5 dark:hidden"
        />
        <img
          src={
            import.meta.env.VITE_APP_BASE_URL + "vectors/ConstructionDark.svg"
          }
          width={450}
          alt=""
          role="presentation"
          className="p-3 m-5 hidden dark:block"
        />
      </div>
    </main>
  );
};

export default VocabulairePage;
