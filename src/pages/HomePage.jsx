import React from "react";
import NewsCard from "../components/NewsCard";
import ZoomFunc from "../components/ZoomFunc";

const HomePage = () => {
  return (
    <main className="flex-grow flex justify-evenly relative">
      <section className='w-[40%] p-10 bg-[url("assets/vectors/AcceuilShape.svg")] dark:bg-[url("assets/vectors/AcceuilShapeDark.svg")] bg-contain bg-no-repeat'>
        <h1 className="font-bold text-display text-center p-1 m-2 mb-4">
          Une langue pour tous !
        </h1>
        <p className="text-bodyText text-justify my-5">
          Un espace dédié à la découverte, l'apprentissage, et la célébration
          des langues des signes.
        </p>
        <div className="ml-4">
          <h4 className="font-bold text-bodyText">
            Sur notre site vous allez apprendre sur :
          </h4>
          <ul className="text-bodyText text-justify list-disc ml-8 mr-2">
            <li>
              <span className="font-bold">
                L'histoire et l'évolution de la LSF :{" "}
              </span>
              son origine, ses figures emblématiques, et son impact culturel.
            </li>
            <li>
              <span className="font-bold">
                Les langues des signes dans le monde :{" "}
              </span>
              comparaisons avec d'autres langues des signes et leurs contextes
              culturels.
            </li>
            <li>
              <span className="font-bold">
                Les bases de la Langue des Signes Française (LSF) :{" "}
              </span>
              alphabet, chiffres et vocabulaire du quotidien.
            </li>
            <li>
              <span className="font-bold">Les ressources pédagogiques : </span>
              vidéos, livres, et outils pour approfondir vos connaissances.
            </li>
          </ul>
        </div>
      </section>

      <article className="w-[43%]">
        <h1 className="text-heading font-bold bg-main rounded-full w-fit px-7 py-2 dark:bg-darkMain">
          Actualités de la semaine
        </h1>
        <div className="ml-4">
          <NewsCard
            label="Cyclone Chido à Mayotte : journée de deuil national"
            category="Société & Politique"
            date="23/12/2024"
            img="/images/NewsPic1.png"
            link="https://www.media-pi.fr/Article/Le-monde-en-LSF/Societe-et-Politique/Cyclone-Chido-a-Mayotte-journee-de-deuil-national/4046"
          />
          <hr className="border-blackText dark:border-whiteText" />
          <NewsCard
            label="Le récap de la semaine - Samedi 21 décembre 2024"
            category="Récap"
            date="21/12/2024"
            img="/images/NewsPic2.png"
            link="https://www.media-pi.fr/Article/Editions-speciales/Recap/Le-recap-de-la-semaine-Samedi-21-decembre-2024/4045"
          />
          <hr className="border-blackText dark:border-whiteText" />
          <NewsCard
            label="Méga-bassines : suspension judiciaire pour protéger la biodiversité"
            category="Planète"
            date="19/12/2024"
            img="/images/NewsPic3.png"
            link="https://www.media-pi.fr/Article/Le-monde-en-LSF/Planete/Mega-bassines-suspension-judiciaire-pour-proteger-la-biodiversite/4042"
          />
          <hr className="border-blackText dark:border-whiteText" />
          <a
            href="https://www.media-pi.fr/"
            target="_blank"
            className="flex justify-end hover:underline hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <span className="font-bold">Source : </span>https://www.media-pi.fr/
          </a>
        </div>
      </article>

      <ZoomFunc />
    </main>
  );
};

export default HomePage;
