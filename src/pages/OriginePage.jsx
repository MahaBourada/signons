import React from "react";
import origine from "../data/Origine.json";
import { useSearch } from "../context/SearchContext";
import HighlightSearch from "../components/HighlightSearch";
import { ExternalLink } from "lucide-react";

const OriginePage = () => {
  const { searchTerm } = useSearch();

  return (
    <main className="flex-grow mx-24 w-fit max-md:mx-4 max-lg:mx-16">
      <h1 className="text-dynamic-2xl font-bold max-lg:text-dynamic-xl max-lg:leading-normal">
        <HighlightSearch
          text="Origine de la langue des signes française"
          searchTerm={searchTerm}
        />
      </h1>

      <div className="flex flex-row items-start justify-between max-xl:flex-col">
        <div className="flex flex-col items-center w-3/4 max-xl:w-full">
          <div className="m-6 mb-10 w-full max-lg:m-0" aria-live="polite">
            <h2 className="text-dynamic-xl font-bold m-1 my-1 max-lg:text-dynamic-xl max-lg:m-0 max-lg:mt-4 max-lg:mb-3 max-lg:leading-normal">
              <HighlightSearch
                text={origine.commencement.title}
                searchTerm={searchTerm}
              />
            </h2>
            <p className="text-justify mx-5 max-lg:mx-3">
              <HighlightSearch
                text={origine.commencement.desc}
                searchTerm={searchTerm}
              />
            </p>
          </div>

          <div className="relative flex flex-col items-end max-xl:hidden">
            <img
              src={"images/INJS.png"}
              width={650}
              alt="Institut National des Jeunes Sourds, Paris 1870"
              className="p-2 m-2 dark:hidden"
            />
            <img
              src={"images/INJSDark.png"}
              width={650}
              alt="Institut National des Jeunes Sourds, Paris 1870"
              className="p-2 m-2 hidden dark:block"
            />
            <a
              href="https://injs-bordeaux.org/linjs/historique/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir la source de l'image de l'INJS, Paris 1870"
              className="absolute bottom-7 right-6 text-end text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              <div className="flex flex-row items-center">
                <p>
                  <span className="font-bold">Source : </span>
                  Historique - INJS
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

        <div className="relative mt-20 flex flex-col items-center max-xl:my-5 max-xl:m-auto">
          <img
            src={"images/AbbeEpee.png"}
            width={390}
            alt="Portrait de l'Abbé de l'Épée, fondateur de l'éducation pour les sourds."
            className="p-1 dark:hidden max-lg:w-3/4 max-xl:w-full"
          />
          <img
            src={"images/AbbeEpeeDark.png"}
            width={390}
            alt="Portrait de l'Abbé de l'Épée, fondateur de l'éducation pour les sourds."
            className="p-1 hidden dark:block max-lg:w-3/4 max-xl:w-full"
          />
          <a
            href="https://fr.wikipedia.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir la source du portrait de l'Abbé de l'Épée"
            className="absolute -bottom-5 text-end text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px] max-lg:text-dynamic-xsm"
          >
            <div className="flex flex-row items-center">
              <p>
                <span className="font-bold">Source : </span>
                Wikipédia
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

      <div className="flex flex-row items-center justify-between max-xl:flex-col max-xl:items-center">
        <div className="w-3/4 max-xl:w-full">
          <div className="m-6 mb-10 max-lg:m-0" aria-live="polite">
            <h2 className="text-dynamic-xl font-bold m-1 my-1 max-lg:text-dynamic-xl max-lg:m-0 max-lg:mt-4 max-lg:mb-3 max-lg:leading-normal">
              <HighlightSearch
                text={origine.obstacle.title}
                searchTerm={searchTerm}
              />
            </h2>
            <p className="text-justify mx-5 max-lg:mx-3">
              <HighlightSearch
                text={origine.obstacle.desc}
                searchTerm={searchTerm}
              />
            </p>
          </div>

          <div className="m-6 mb-10 max-lg:m-0" aria-live="polite">
            <h2 className="text-dynamic-xl font-bold m-1 my-1 max-lg:text-dynamic-xl max-lg:m-0 max-lg:mt-4 max-lg:mb-3 max-lg:leading-normal">
              <HighlightSearch
                text={origine.reveil.title}
                searchTerm={searchTerm}
              />
            </h2>
            <p className="text-justify mx-5 max-lg:mx-3">
              <HighlightSearch
                text={origine.reveil.desc}
                searchTerm={searchTerm}
              />
            </p>
          </div>
        </div>

        <div className="relative mt-20 flex flex-col items-center max-xl:my-5 max-xl:mb-9">
          <img
            src={"images/NotreDame.png"}
            width={400}
            alt="Cathédrale Notre-Dame de Reims en 1870"
            className="p-2 m-2 mt-10 dark:hidden max-xl:my-0 max-xl:w-full"
          />
          <img
            src={"images/NotreDameDark.png"}
            width={400}
            alt="Cathédrale Notre-Dame de Reims en 1870"
            className="p-2 m-2 mt-10 hidden dark:block max-xl:my-0 max-xl:w-full"
          />
          <a
            href="https://commons.wikimedia.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir la source de l'image de la cathédrale Notre-Dame de Reims en 1870"
            className="absolute -bottom-6 text-start text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px] max-lg:text-dynamic-xsm"
          >
            <div className="flex flex-row items-center">
              <p>
                <span className="font-bold">Source : </span>
                Wikimedia Commons
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

      <div className="flex flex-row items-center max-xl:flex-col-reverse max-xl:items-center">
        <div className="relative flex flex-col items-center max-lg:my-4">
          <img
            src={"images/ReveilSourd.png"}
            width={500}
            alt="Affiche de la comédie musicale en langue des signes"
            className="p-2 m-2 dark:hidden w-full"
          />
          <img
            src={"images/ReveilSourdDark.png"}
            width={500}
            alt="Affiche de la comédie musicale en langue des signes"
            className="p-2 m-2 hidden dark:block w-full"
          />
          <a
            href="https://compagniedubonheur.fr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir la source de l'image de l'affiche de la comédie musicale en langue des signes"
            className="absolute bottom-0 ml-5 text-start text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px] max-lg:text-dynamic-xsm max-source:-bottom-6"
          >
            <div className="flex flex-row items-center">
              <p>
                <span className="font-bold">Source : </span>
                La Compagnie du bonheur
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

        <div
          className="m-6 mb-10 w-3/4 max-lg:m-0 max-xl:w-full"
          aria-live="polite"
        >
          <h2 className="text-dynamic-xl font-bold m-1 my-1 max-lg:text-dynamic-xl max-lg:m-0 max-lg:mt-4 max-lg:mb-3 max-lg:leading-normal">
            <HighlightSearch
              text={origine.officialisation.title}
              searchTerm={searchTerm}
            />
          </h2>
          <p className="text-justify mx-5 max-lg:mx-3">
            {origine.officialisation.desc}
          </p>
        </div>
      </div>

      <div className="m-6 mb-10 max-lg:m-0" aria-live="polite">
        <h2 className="text-dynamic-xl font-bold m-1 my-1 max-lg:text-dynamic-xl max-lg:m-0 max-lg:mt-4 max-lg:mb-3 max-lg:leading-normal">
          <HighlightSearch
            text={origine.aujourdhui.title}
            searchTerm={searchTerm}
          />
        </h2>
        <p className="text-justify mx-5 max-lg:mx-3">
          <HighlightSearch
            text={origine.aujourdhui.desc}
            searchTerm={searchTerm}
          />
        </p>
      </div>

      <div className="m-6 mb-10 max-lg:m-0" aria-live="polite">
        <h2 className="text-dynamic-xl font-bold m-1 my-1 max-lg:text-dynamic-xl max-lg:m-0 max-lg:mt-4 max-lg:mb-3 max-lg:leading-normal">
          <HighlightSearch text="Bibliographie" searchTerm={searchTerm} />
        </h2>
        <ul className="mx-10 list-disc">
          <li className="hover:translate-x-[1px] hover:translate-y-[1px]">
            <a
              href={origine.bibliographie[1].lien}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visiter le lien externe pour ${origine.bibliographie[1].nom}`}
              className="flex flex-row items-center hover:underline"
            >
              <HighlightSearch
                text={origine.bibliographie[1].nom}
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
              href={origine.bibliographie[2].lien}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visiter le lien externe pour ${origine.bibliographie[2].nom}`}
              className="flex flex-row items-center hover:underline"
            >
              <HighlightSearch
                text={origine.bibliographie[2].nom}
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
              href={origine.bibliographie[3].lien}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visiter le lien externe pour ${origine.bibliographie[3].nom}`}
              className="flex flex-row items-center hover:underline"
            >
              <HighlightSearch
                text={origine.bibliographie[3].nom}
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
              href={origine.bibliographie[4].lien}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visiter le lien externe pour ${origine.bibliographie[4].nom}`}
              className="flex flex-row items-center hover:underline"
            >
              <HighlightSearch
                text={origine.bibliographie[4].nom}
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

export default OriginePage;
