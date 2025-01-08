import React from "react";
import LexiqueItem from "../components/LexiqueItem";
import ZoomFunc from "../components/ZoomFunc";

const MediasPage = () => {
  return (
    <main className="flex-grow flex items- my-6 mx-24">
      <div className="w-3/4 mr-10">
        <div className="mb-6">
          <h1 className="text-heading font-bold">
            Ressources pour découvrir la LSF
          </h1>
          <p className="text-bodyText text-justify m-2">
            La page Médias met à votre disposition des ressources variées pour
            explorer la Langue des Signes Française (LSF) et mieux comprendre
            son univers. Vous y découvrirez une sélection de contenus
            multimédias tels que :
          </p>
        </div>

        <ul className="m-4 mx-10 mt-6 grid grid-cols-[0fr,0fr,0fr] justify-items-center justify-self-start">
          <LexiqueItem label="Films" link="/medias/films" />
          <LexiqueItem label="Séries TV" link="/medias/series" />
          <LexiqueItem label="Documentaires" link="/medias/documentaires" />
          <LexiqueItem label="Vidéos" link="/medias/videos" />
          <LexiqueItem label="Ouvrages" link="/medias/ouvrages" />
        </ul>
      </div>

      <img src="/vectors/MediasPic.svg" width={450} alt="" />

      <ZoomFunc />
    </main>
  );
};

export default MediasPage;
