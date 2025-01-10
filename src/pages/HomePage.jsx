import React from "react";
import { useOutletContext } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import accueil from "../data/Accueil.json";
import HighlightSearch from "../components/HighlightSearch";
import { useSearch } from "../context/SearchContext";

const HomePage = () => {
  const { searchTerm } = useSearch();

  return (
    <main aria-live="polite" className="flex-grow flex justify-evenly relative">
      <section className='w-[40%] p-10 bg-[url("assets/vectors/AcceuilShape.svg")] dark:bg-[url("assets/vectors/AcceuilShapeDark.svg")] bg-contain bg-no-repeat'>
        <h1 className="font-bold text-dynamic-2xl text-center p-1 m-2">
          <HighlightSearch text={accueil.title} searchTerm={searchTerm} />
        </h1>
        <p className="text-justify">
          <HighlightSearch text={accueil.subtitle} searchTerm={searchTerm} />
        </p>
        <div className="ml-4 my-3">
          <h4 className="font-bold">
            <HighlightSearch
              text="Sur notre site vous allez apprendre sur :"
              searchTerm={searchTerm}
            />
          </h4>
          <ul className="text-justify list-disc ml-8 mr-2">
            {accueil.sections.map((section) => (
              <li key={section.title}>
                <span className="font-bold">
                  <HighlightSearch
                    text={section.title}
                    searchTerm={searchTerm}
                  />
                </span>
                <HighlightSearch text={section.desc} searchTerm={searchTerm} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <article className="w-[43%]">
        <h1 className="text-dynamic-lg font-bold bg-main rounded-full w-fit px-7 py-1 dark:bg-darkMain">
          <HighlightSearch text={accueil.news.title} searchTerm={searchTerm} />
        </h1>
        <div className="ml-4">
          {accueil.news.news.map((article) => (
            <>
              <NewsCard
                key={article.title}
                label={
                  <HighlightSearch
                    text={article.title}
                    searchTerm={searchTerm}
                  />
                }
                category={
                  <HighlightSearch
                    text={article.category}
                    searchTerm={searchTerm}
                  />
                }
                date={
                  <HighlightSearch
                    text={article.date}
                    searchTerm={searchTerm}
                  />
                }
                img={article.img}
                link={article.link}
              />
              <hr className="border-blackText dark:border-whiteText" />
            </>
          ))}

          <a
            href="https://www.media-pi.fr/"
            target="_blank"
            className="flex justify-end text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <span className="font-bold">Source : </span>https://www.media-pi.fr/
          </a>
        </div>
      </article>
    </main>
  );
};

export default HomePage;
