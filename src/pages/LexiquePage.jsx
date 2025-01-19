import React from "react";
import LexiqueCard from "../components/LexiqueCard";
import { Link } from "react-router-dom";
import lexique from "../data/Lexique.json";
import HighlightSearch from "../components/HighlightSearch";
import { useSearch } from "../context/SearchContext";

const LexiquePage = () => {
  const { searchTerm } = useSearch();

  return (
    <main className="flex-grow mx-24 max-md:mx-6 max-lg:mx-16">
      <div className="w-3/4 mb-6 max-lg:w-full">
        <h1 className="font-mainFont text-dynamic-2xl font-bold max-lg:text-dynamic-xl max-lg:leading-normal">
          <HighlightSearch text={lexique.title} searchTerm={searchTerm} />
        </h1>
        <p className="text-dynamic-base leading-9 text-justify ml-3 mr-1 my-1">
          <HighlightSearch text={lexique.desc} searchTerm={searchTerm} />
        </p>
      </div>

      <div className="flex flex-row max-lg:flex-col gap-x-10 max-lg:gap-y-10 items-center justify-center my-14 ml-14 max-lg:ml-0">
        <Link
          to={`/lexique/${lexique.lexique[0].title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")}`}
          className="max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center"
          aria-label="Découvrir l'alphabet de la LSF"
        >
          <LexiqueCard
            label={
              <HighlightSearch
                text={lexique.lexique[0].title}
                searchTerm={searchTerm}
              />
            }
            desc={
              <HighlightSearch
                text={
                  lexique.lexique[0].desc.length > 100
                    ? lexique.lexique[0].desc.slice(0, 100) + "..."
                    : lexique.lexique[0].desc
                }
                searchTerm={searchTerm}
              />
            }
            bgClass="bg-alphabetLight dark:bg-alphabetDark"
            img="/signons/vectors/AlphabetPic.svg"
          />
        </Link>

        <Link
          to={`/lexique/${lexique.lexique[1].title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")}`}
          className="max-lg:flex max-lg:flex-col max-lg:items-center"
          aria-label="Découvrir le vocabulaire de la LSF"
        >
          <LexiqueCard
            label={
              <HighlightSearch
                text={lexique.lexique[1].title}
                searchTerm={searchTerm}
              />
            }
            desc={
              <HighlightSearch
                text={
                  lexique.lexique[1].desc.length > 80
                    ? lexique.lexique[1].desc.slice(0, 80) + "..."
                    : lexique.lexique[1].desc
                }
                searchTerm={searchTerm}
              />
            }
            bgClass="bg-vocabulaireLight dark:bg-vocabulaireDark"
            img="/signons/vectors/VocabulairePic.svg"
          />
        </Link>
      </div>
    </main>
  );
};

export default LexiquePage;
