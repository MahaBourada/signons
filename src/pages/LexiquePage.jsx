import React from "react";
import LexiqueCard from "../components/LexiqueCard";
import { Link } from "react-router-dom";

const LexiquePage = () => {
  return (
    <main className="flex-grow mx-24">
      <div className="w-3/4 mb-6">
        <h1 className="text-dynamic-2xl font-bold">
          Lexique de la Langue des Signes Française (LSF)
        </h1>
        <p className="text-dynamic-base leading-9 text-justify ml-3 mr-1 my-1">
          Cette section est dédiée à l'apprentissage des bases essentielles de
          la LSF. Que vous soyez débutant ou que vous souhaitiez approfondir vos
          connaissances, vous y trouverez des ressources clés pour explorer
          cette langue visuelle et riche de sens.
        </p>
      </div>

      <div className="flex flex-row items-center justify-around my-14 ml-14">
        <Link to="/lexique/alphabet">
          <LexiqueCard
            label="Alphabet"
            desc="Découvrez comment signer chaque lettre de l'alphabet et apprenez à épeler des mots ou des noms."
            bgClass="bg-alphabetLight dark:bg-alphabetDark"
            img="/vectors/AlphabetPic.svg"
          />
        </Link>

        <Link to="/lexique/vocabulaire">
          <LexiqueCard
            label="Vocabulaire"
            desc="Familiarisez-vous avec des mots et expressions courants pour communiquer efficacement dans la vie quotidienne."
            bgClass="bg-vocabulaireLight dark:bg-vocabulaireDark"
            img="/vectors/VocabulairePic.svg"
          />
        </Link>
      </div>
    </main>
  );
};

export default LexiquePage;
