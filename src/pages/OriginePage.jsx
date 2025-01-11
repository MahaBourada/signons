import React from "react";
import origine from "../data/Origine.json";
import { useSearch } from "../context/SearchContext";
import HighlightSearch from "../components/HighlightSearch";
import { resolvePath } from "../utils/utils";

const OriginePage = () => {
  const { searchTerm } = useSearch();

  return (
    <main className="flex-grow mx-24">
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col items-center w-3/4">
          <div className="m-6 mb-10" aria-live="polite">
            <h1 className="text-dynamic-2xl font-bold m-1 my-1">
              <HighlightSearch
                text={origine.commencement.title}
                searchTerm={searchTerm}
              />
            </h1>
            <p className=" text-justify mx-5">
              <HighlightSearch
                text={origine.commencement.desc}
                searchTerm={searchTerm}
              />
            </p>
          </div>

          <div className="relative flex flex-col items-end">
            <img
              src={resolvePath("/images/INJS.png")}
              width={650}
              alt="Institut National des Jeunes Sourds, Paris en 'année'"
              className="p-2 m-2 dark:hidden"
            />
            <img
              src={resolvePath("/images/INJSDark.png")}
              width={650}
              alt="Institut National des Jeunes Sourds, Paris en 'année'"
              className="p-2 m-2 hidden dark:block"
            />
            <a
              href="https://injs-bordeaux.org/linjs/historique/"
              target="_blank"
              className="absolute bottom-7 right-6 text-end text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              <span className="font-bold">Source : </span>
              https://injs-bordeaux.org/linjs/historique/
            </a>
          </div>
        </div>

        <div className="relative mt-20 flex flex-col items-center">
          <img
            src={resolvePath("/images/AbbeEpee.png")}
            width={390}
            alt="Abbée de l'Epée"
            className="p-1 dark:hidden"
          />
          <img
            src={resolvePath("/images/AbbeEpeeDark.png")}
            width={390}
            alt="Abbée de l'Epée"
            className="p-1 hidden dark:block"
          />
          <a
            href="https://fr.wikipedia.org/"
            target="_blank"
            className="absolute -bottom-5 text-end text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <span className="font-bold">Source : </span>
            https://fr.wikipedia.org/
          </a>
        </div>
      </div>

      <div className="flex flex-row items-start justify-between">
        <div className="w-3/4">
          <div className="m-6 mb-10" aria-live="polite">
            <h1 className="text-dynamic-2xl font-bold m-1 my-1">
              <HighlightSearch
                text={origine.obstacle.title}
                searchTerm={searchTerm}
              />
            </h1>
            <p className=" text-justify mx-5">
              <HighlightSearch
                text={origine.obstacle.desc}
                searchTerm={searchTerm}
              />
            </p>
          </div>

          <div className="m-6 mb-10" aria-live="polite">
            <h1 className="text-dynamic-2xl font-bold m-1 my-1">
              <HighlightSearch
                text={origine.reveil.title}
                searchTerm={searchTerm}
              />
            </h1>
            <p className=" text-justify mx-5">
              <HighlightSearch
                text={origine.reveil.desc}
                searchTerm={searchTerm}
              />
            </p>
          </div>
        </div>

        <div className="relative mt-20 flex flex-col items-center">
          <img
            src={resolvePath("/images/NotreDame.png")}
            width={400}
            alt="Notre de Dame de Paris en 'année'"
            className="p-2 m-2 mt-10 dark:hidden"
          />
          <img
            src={resolvePath("/images/NotreDameDark.png")}
            width={400}
            alt="Notre de Dame de Paris en 'année'"
            className="p-2 m-2 mt-10 hidden dark:block"
          />
          <a
            href="https://commons.wikimedia.org/"
            target="_blank"
            className="absolute -bottom-6 text-start text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <span className="font-bold">Source : </span>
            https://commons.wikimedia.org/
          </a>
        </div>
      </div>

      <div className="flex flex-row items-end">
        <div className="relative flex flex-col items-center">
          <img
            src={resolvePath("/images/ReveilSourd.png")}
            width={500}
            alt="Pièce théâtrales LSF"
            className="p-2 m-2 dark:hidden"
          />
          <img
            src={resolvePath("/images/ReveilSourdDark.png")}
            width={500}
            alt="Pièce théâtrales LSF"
            className="p-2 m-2 hidden dark:block"
          />
          <a
            href="https://compagniedubonheur.fr/"
            target="_blank"
            className="absolute bottom-0 ml-5 text-start text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <span className="font-bold">Source : </span>
            https://compagniedubonheur.fr/
          </a>
        </div>

        <div className="m-6 mb-10 w-3/4" aria-live="polite">
          <h1 className="text-dynamic-2xl font-bold m-1 my-1">
            <HighlightSearch
              text={origine.officialisation.title}
              searchTerm={searchTerm}
            />
          </h1>
          <p className=" text-justify mx-5">{origine.officialisation.desc}</p>
        </div>
      </div>

      <div className="m-6 mb-10" aria-live="polite">
        <h1 className="text-dynamic-2xl font-bold m-1 my-1">
          <HighlightSearch
            text={origine.aujourdhui.title}
            searchTerm={searchTerm}
          />
        </h1>
        <p className=" text-justify mx-5">
          <HighlightSearch
            text={origine.aujourdhui.desc}
            searchTerm={searchTerm}
          />
        </p>
      </div>

      <div className="m-6 mb-10" aria-live="polite">
        <h1 className="text-dynamic-2xl font-bold m-1 my-1">
          <HighlightSearch text="Bibliographie" searchTerm={searchTerm} />
        </h1>
        <ul className="mx-10 list-disc">
          <li className="hover:translate-x-[1px] hover:translate-y-[1px]">
            <a
              href={origine.bibliographie[1]}
              target="_blank"
              className="hover:underline"
            >
              <HighlightSearch
                text={origine.bibliographie[1]}
                searchTerm={searchTerm}
              />
            </a>
          </li>
          <li className="hover:translate-x-[1px] hover:translate-y-[1px]">
            <a
              href={origine.bibliographie[2]}
              target="_blank"
              className="hover:underline"
            >
              <HighlightSearch
                text={origine.bibliographie[2]}
                searchTerm={searchTerm}
              />
            </a>
          </li>
          <li className="hover:translate-x-[1px] hover:translate-y-[1px]">
            <a
              href={origine.bibliographie[3]}
              target="_blank"
              className="hover:underline"
            >
              <HighlightSearch
                text={origine.bibliographie[3]}
                searchTerm={searchTerm}
              />
            </a>
          </li>
          <li className="hover:translate-x-[1px] hover:translate-y-[1px]">
            <a
              href={origine.bibliographie[4]}
              target="_blank"
              className="hover:underline"
            >
              <HighlightSearch
                text={origine.bibliographie[4]}
                searchTerm={searchTerm}
              />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default OriginePage;
