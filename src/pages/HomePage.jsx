import React from "react";
import NewsCard from "../components/NewsCard";
import accueil from "../data/Accueil.json";
import HighlightSearch from "../components/HighlightSearch";
import { useSearch } from "../context/SearchContext";

const HomePage = () => {
  const { searchTerm } = useSearch();

  return (
    <main aria-live="polite" className="flex-grow flex flex-row justify-evenly max-xl:justify-between relative max-md:flex-col">
      <section className='w-[40%] p-10 bg-[url("assets/vectors/AcceuilShape.svg")] dark:bg-[url("assets/vectors/AcceuilShapeDark.svg")] bg-contain bg-no-repeat max-md:w-full max-lg:w-[60%] max-xl:w-[50%] max-md:mx-0 max-xl:mx-4 max-xl:p-6'>
        <h1 className="font-bold text-dynamic-2xl text-center p-1 m-2 max-bty:text-dynamic-xl max-md:text-dynamic-2xl max-lg:text-dynamic-xl max-md:m-2 max-lg:m-0">
          <HighlightSearch text={accueil.title} searchTerm={searchTerm} />
        </h1>
        <p className="text-justify">
          <HighlightSearch text={accueil.subtitle} searchTerm={searchTerm} />
        </p>
        <div className="ml-4 my-1 max-sm:ml-1 max-md:ml-4 max-lg:ml-0">
          <h4 className="font-bold">
            <HighlightSearch
              text={accueil.subsubtitle}
              searchTerm={searchTerm}
            />
          </h4>
          <ul className="text-justify list-disc ml-8 mr-2 max-sm:text-left max-sm:ml-6 max-md:ml-8 max-lg:ml-5">
            {accueil.sections.map((section, index) => (
              <li key={index}>
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

      <article className="w-[43%] max-md:w-fit max-lg:w-[43%] max-md:mx-5 max-xl:mx-4 max-xl:mt-5">
        <h1 className="text-dynamic-lg font-bold bg-main rounded-full w-fit px-7 py-1 dark:bg-darkMain max-sm:text-dynamic-base max-md:text-dynamic-lg max-lg:leading-snug max-lg:py-2 max-lg:text-center max-sm:m-auto max-sm:px-4">
          <HighlightSearch text={accueil.news.title} searchTerm={searchTerm} />
        </h1>
        <div className="ml-4 mb-5 max-sm:mx-4">
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
            className="flex justify-end text-dynamic-sm hover:underline hover:translate-x-[1px] hover:translate-y-[1px] max-sm:text-dynamic-xsm max-md:text-dynamic-sm max-lg:text-dynamic-xsm max-lg:text-start"
          >
            <span className="font-bold">Source : </span>https://www.media-pi.fr/
          </a>
        </div>
      </article>
    </main>
  );
};

export default HomePage;
