import React from "react";
import HistoireCard from "../components/HistoireCard";
import { Link } from "react-router-dom";
import histoireAntiquite from "../data/HistoireAntiquite.json";
import histoireChine from "../data/HistoireChine.json";
import histoireEtatsUnis from "../data/HistoireEtatsUnis.json";
import histoireJapon from "../data/HistoireJapon.json";
import { useSearch } from "../context/SearchContext";
import HighlightSearch from "../components/HighlightSearch";

const HistoirePage = () => {
  const { searchTerm } = useSearch();

  return (
    <main
      aria-live="polite"
      className="flex-grow mx-24 max-md:mx-6 max-lg:mx-16"
    >
      <h1 className="font-mainFont text-dynamic-2xl font-bold max-lg:text-dynamic-xl max-lg:leading-normal mb-10">
        <HighlightSearch
          text="Histoire des langues des signes à travers le monde"
          searchTerm={searchTerm}
        />
      </h1>
      <div className="grid grid-cols-2 max-lg:gap-x-0 max-xl:gap-x-10 max-lg:flex max-lg:flex-col place-self-center m-auto gap-y-16 max-lg:mx-2">
        <Link
          to={`/histoire/${histoireAntiquite.title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")}`}
          aria-label={`Explorer l'histoire - ${histoireAntiquite.title}`}
        >
          <HistoireCard
            label={
              <HighlightSearch
                text={histoireAntiquite.title}
                searchTerm={searchTerm}
              />
            }
            altText={histoireAntiquite.title}
            desc={
              <HighlightSearch
                text={histoireAntiquite.desc}
                searchTerm={searchTerm}
              />
            }
            img={histoireAntiquite.img}
          />
        </Link>

        <Link
          to={`/histoire/${histoireChine.title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")}`}
          aria-label={`Explorer l'histoire - ${histoireChine.title}`}
        >
          <HistoireCard
            label={
              <HighlightSearch
                text={histoireChine.title}
                searchTerm={searchTerm}
              />
            }
            altText={histoireChine.title}
            desc={
              <HighlightSearch
                text={histoireChine.desc}
                searchTerm={searchTerm}
              />
            }
            img={import.meta.env.VITE_APP_BASE_URL + histoireChine.img}
          />
        </Link>

        <Link
          to={`/histoire/${histoireEtatsUnis.title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")}`}
          aria-label={`Explorer l'histoire - ${histoireEtatsUnis.title}`}
        >
          <HistoireCard
            label={
              <HighlightSearch
                text={histoireEtatsUnis.title}
                searchTerm={searchTerm}
              />
            }
            altText={histoireEtatsUnis.title}
            desc={
              <HighlightSearch
                text={histoireEtatsUnis.desc}
                searchTerm={searchTerm}
              />
            }
            img={import.meta.env.VITE_APP_BASE_URL + histoireEtatsUnis.img}
          />
        </Link>

        <Link
          to={`/histoire/${histoireJapon.title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")}`}
          aria-label={`Explorer l'histoire - ${histoireJapon.title}`}
        >
          <HistoireCard
            label={
              <HighlightSearch
                text={histoireJapon.title}
                searchTerm={searchTerm}
              />
            }
            altText={histoireJapon.title}
            desc={
              <HighlightSearch
                text={histoireJapon.desc}
                searchTerm={searchTerm}
              />
            }
            img={import.meta.env.VITE_APP_BASE_URL + histoireJapon.img}
          />
        </Link>
      </div>
    </main>
  );
};

export default HistoirePage;
