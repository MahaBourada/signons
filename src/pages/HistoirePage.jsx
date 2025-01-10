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
    <main className="flex-grow my-10 mx-24 grid grid-cols-2 place-self-center m-auto gap-y-16">
      <Link
        to={`/histoire/${histoireAntiquite.title
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")}`}
      >
        <HistoireCard
          label={
            <HighlightSearch
              text={histoireAntiquite.title}
              searchTerm={searchTerm}
            />
          }
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
      >
        <HistoireCard
          label={
            <HighlightSearch
              text={histoireChine.title}
              searchTerm={searchTerm}
            />
          }
          desc={
            <HighlightSearch
              text={histoireChine.desc}
              searchTerm={searchTerm}
            />
          }
          img={histoireChine.img}
        />
      </Link>

      <Link
        to={`/histoire/${histoireEtatsUnis.title
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")}`}
      >
        <HistoireCard
          label={
            <HighlightSearch
              text={histoireEtatsUnis.title}
              searchTerm={searchTerm}
            />
          }
          desc={
            <HighlightSearch
              text={histoireEtatsUnis.desc}
              searchTerm={searchTerm}
            />
          }
          img={histoireEtatsUnis.img}
        />
      </Link>

      <Link
        to={`/histoire/${histoireChine.title
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")}`}
      >
        <HistoireCard
          label={
            <HighlightSearch
              text={histoireJapon.title}
              searchTerm={searchTerm}
            />
          }
          desc={
            <HighlightSearch
              text={histoireJapon.desc}
              searchTerm={searchTerm}
            />
          }
          img={histoireJapon.img}
        />
      </Link>
    </main>
  );
};

export default HistoirePage;
