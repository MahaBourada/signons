import React from "react";
import chine from "../data/HistoireChine.json";
import { useSearch } from "../context/SearchContext";
import HighlightSearch from "../components/HighlightSearch";
import { ExternalLink } from "lucide-react";

const ChinePage = () => {
  const { searchTerm } = useSearch();

  return (
    <main
      aria-live="polite"
      className="flex-grow mx-24 w-fit max-md:mx-4 max-lg:mx-16"
    >
      <h1 className="font-mainFont text-dynamic-2xl font-bold max-lg:text-dynamic-xl max-lg:leading-normal">
        <HighlightSearch
          text="La langue des signes en Chine"
          searchTerm={searchTerm}
        />
      </h1>

      <div className="flex flex-row items-start justify-between max-xl:flex-col">
        <div className="flex flex-col items-center w-3/4 max-xl:w-full">
          <div className="m-6 mb-10 w-full max-lg:m-0" aria-live="polite">
            <p className="mx-5 max-lg:mx-3">
              <HighlightSearch text={chine.article} searchTerm={searchTerm} />
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center max-xl:my-5 max-xl:m-auto">
          <img
            src={import.meta.env.VITE_APP_BASE_URL + "images/ChineLS.png"}
            width={390}
            alt="Portrait de l'Abbé de l'Épée, fondateur de l'éducation pour les sourds."
            className="p-1 dark:hidden max-lg:w-3/4 max-xl:w-full"
          />
          <img
            src={import.meta.env.VITE_APP_BASE_URL + "images/ChineLSDark.png"}
            width={390}
            alt="Signes des numéros en langue des signes chinoise"
            className="p-1 hidden dark:block max-lg:w-3/4 max-xl:w-full"
          />
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir la source des signes des numéros en langue des signes chinoise"
            className="absolute -bottom-5 text-end text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px] max-lg:text-dynamic-xsm"
          >
            <div className="flex flex-row items-center">
              <p>
                <span className="font-bold">Source : </span>
                Pinterest
              </p>
              <ExternalLink
                size={18}
                color="currentColor"
                className="m-2"
                aria-hidden="true"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="m-6 mb-10 max-lg:m-0" aria-live="polite">
        <h2 className="font-mainFont text-dynamic-xl font-bold m-1 my-1 max-lg:text-dynamic-xl max-lg:m-0 max-lg:mt-4 max-lg:mb-3 max-lg:leading-normal">
          <HighlightSearch text="Bibliographie" searchTerm={searchTerm} />
        </h2>
        <ul className="mx-10 list-disc">
          <li className="hover:translate-x-[1px] hover:translate-y-[1px]">
            <a
              href={chine.bibliographie[1].lien}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visiter le lien externe pour ${chine.bibliographie[1].nom}`}
              className="flex flex-row items-center hover:underline"
            >
              <HighlightSearch
                text={chine.bibliographie[1].nom}
                searchTerm={searchTerm}
              />
              <ExternalLink
                size={24}
                color="currentColor"
                className="mx-1"
                aria-hidden="true"
              />
            </a>
          </li>
          <li className="hover:translate-x-[1px] hover:translate-y-[1px]">
            <a
              href={chine.bibliographie[2].lien}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visiter le lien externe pour ${chine.bibliographie[2].nom}`}
              className="flex flex-row items-center hover:underline"
            >
              <HighlightSearch
                text={chine.bibliographie[2].nom}
                searchTerm={searchTerm}
              />
              <ExternalLink
                size={24}
                color="currentColor"
                className="mx-1"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ChinePage;