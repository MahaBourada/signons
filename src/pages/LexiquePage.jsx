import React from "react";
import LexiqueCard from "../components/LexiqueCard";
import { Link } from "react-router-dom";
import lexique from "../data/Lexique.json";
import HighlightSearch from "../components/HighlightSearch";
import { useSearch } from "../context/SearchContext";
import { resolvePath } from "../utils/utils";

const LexiquePage = () => {
  const { searchTerm } = useSearch();

  return (
    <main className="flex-grow mx-24">
      <div className="w-3/4 mb-6">
        <h1 className="text-dynamic-2xl font-bold">
          <HighlightSearch text={lexique.title} searchTerm={searchTerm} />
        </h1>
        <p className="text-dynamic-base leading-9 text-justify ml-3 mr-1 my-1">
          <HighlightSearch text={lexique.desc} searchTerm={searchTerm} />
        </p>
      </div>

      <div className="flex flex-row items-center justify-around my-14 ml-14">
        <Link
          to={`/lexique/${lexique.lexique[0].title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")}`}
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
                text={lexique.lexique[0].desc}
                searchTerm={searchTerm}
              />
            }
            bgClass="bg-alphabetLight dark:bg-alphabetDark"
            img={resolvePath("/vectors/AlphabetPic.svg")}
          />
        </Link>

        <Link
          to={`/lexique/${lexique.lexique[1].title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")}`}
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
                text={lexique.lexique[1].desc}
                searchTerm={searchTerm}
              />
            }
            bgClass="bg-vocabulaireLight dark:bg-vocabulaireDark"
            img={resolvePath("/vectors/VocabulairePic.svg")}
          />
        </Link>
      </div>
    </main>
  );
};

export default LexiquePage;
