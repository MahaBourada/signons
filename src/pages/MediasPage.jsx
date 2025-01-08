import React from "react";
import MediaItem from "../components/MediaItem";

const MediasPage = () => {
  return (
    <main className="flex-grow flex items- my-6 mx-24">
      <div className="w-3/4 mr-10">
        <div className="mb-6">
          <h1 className="text-dynamic-2xl font-bold">
            Ressources pour découvrir la LSF
          </h1>
          <p className="text-dynamic-base leading-9 text-justify ml-3 mr-1 my-1">
            La page Médias met à votre disposition des ressources variées pour
            explorer la Langue des Signes Française (LSF) et mieux comprendre
            son univers. Vous y découvrirez une sélection de contenus
            multimédias tels que :
          </p>
        </div>

        <ul className="m-4 mx-10 mt-6 grid grid-cols-[0fr,0fr,0fr] justify-items-center justify-self-start">
          <MediaItem label="Films" link="/medias/films" />
          <MediaItem label="Séries TV" link="/medias/series" />
          <MediaItem label="Documentaires" link="/medias/documentaires" />
          <MediaItem label="Vidéos" link="/medias/videos" />
          <MediaItem label="Ouvrages" link="/medias/ouvrages" />
        </ul>
      </div>

      <img src="/vectors/MediasPic.svg" width={450} alt="" />
    </main>
  );
};

export default MediasPage;
