import React from "react";
import HighlightSearch from "../components/HighlightSearch";
import { useSearch } from "../context/SearchContext";
import medias from "../data/Medias.json";

const FilmsPage = () => {
  const { searchTerm } = useSearch();

  return (
    <main
      aria-live="polite"
      className="flex-grow mx-24 mb-12 max-md:mx-6 max-lg:mx-16"
    >
      <div className="mb-6 w-full">
        <h1 className="font-mainFont text-dynamic-2xl font-bold max-lg:text-dynamic-xl max-lg:leading-normal">
          <HighlightSearch
            text="Recommendations de films"
            searchTerm={searchTerm}
          />
        </h1>

        <div className="flex flex-col my-5">
          {medias.films.map((film, index) => (
            <div
              key={index}
              className="flex items-start bg-secondary dark:bg-darkSecondary px-10 max-lg:px-4 py-2 my-5 rounded-[50px]"
            >
              <div className="w-[90%] my-7 leading-normal mr-4">
                <h2 className="text-dynamic-xl font-bold font-mainFont line-clamp-3 max-md:line-clamp-2">
                  <HighlightSearch text={film.nom} searchTerm={searchTerm} />
                </h2>
                <p className="mx-3 my-2">
                  <HighlightSearch text={film.desc} searchTerm={searchTerm} />
                </p>
                <p className="mx-5 my-3">
                  <span className="font-bold">
                    <HighlightSearch
                      text="Acteurs : "
                      searchTerm={searchTerm}
                    />{" "}
                  </span>
                  {film.acteurs.map((acteur, index) => (
                    <span key={index}>
                      <HighlightSearch
                        text={acteur[index]}
                        searchTerm={searchTerm}
                      />
                      {index < film.acteurs.length - 1 && ", "}
                    </span>
                  ))}
                </p>
                <div className="flex flex-row max-lg:flex-col items-center max-lg:items-start justify-end mt-3">
                  <p className="text-dynamic-sm p-1 px-4  rounded-full w-fit">
                    <span className="font-bold">
                      <HighlightSearch
                        text="Réalisateur : "
                        searchTerm={searchTerm}
                      />
                    </span>
                    <HighlightSearch
                      text={film.realisateur}
                      searchTerm={searchTerm}
                    />
                  </p>
                  <p className="text-dynamic-sm rounded-full w-fit p-1 px-4  mx-1">
                    <span className="font-bold">
                      <HighlightSearch
                        text="Année : "
                        searchTerm={searchTerm}
                      />
                    </span>
                    <HighlightSearch
                      text={film.annee}
                      searchTerm={searchTerm}
                    />
                  </p>
                  <p className="text-dynamic-sm rounded-full w-fit p-1 px-4  mx-1">
                    <span className="font-bold">
                      <HighlightSearch
                        text="Durée : "
                        searchTerm={searchTerm}
                      />
                    </span>
                    <HighlightSearch
                      text={film.duree}
                      searchTerm={searchTerm}
                    />
                  </p>
                  <p className="text-dynamic-sm rounded-full w-fit p-1 px-4  mx-1">
                    <span className="font-bold">
                      <HighlightSearch
                        text="Catégorie : "
                        searchTerm={searchTerm}
                      />
                    </span>
                    <HighlightSearch
                      text={film.categorie}
                      searchTerm={searchTerm}
                    />
                  </p>
                </div>
              </div>

              <img
                src={import.meta.env.VITE_APP_BASE_URL + film.img}
                width={325}
                alt={`Film - ${film.nom}`}
                className="p-1 my-5 mx-1 rounded-3xl max-sm:hidden max-md:w-[15.5rem] max-md:block max-lg:hidden max-xl:w-[15.5rem]"
              />
            </div>
          ))}
        </div>

        <a
          href="https://www.sourds.net/film/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visiter le lien externe pour Sourds.Net"
          className="flex justify-end text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px] max-sm:text-dynamic-xsm max-md:text-dynamic-sm max-lg:text-dynamic-xsm max-lg:text-start"
        >
          <span className="font-bold">Source : </span>{" "}
          https://www.sourds.net/film/
        </a>
      </div>
    </main>
  );
};

export default FilmsPage;
