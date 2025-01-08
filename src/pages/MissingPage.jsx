import React from "react";
import ZoomFunc from "../components/ZoomFunc";

const MissingPage = () => {
  return (
    <main className="flex-grow flex items-start justify-center mx-auto ">
      <h1 className="text-display font-bold w-96 mx-10 my-24 leading-relaxed">
        Erreur 404 : La page a pris la fuite...
      </h1>
      <img
        src="/vectors/404.svg"
        width={600}
        alt="Page introuvable"
        className="p-3 m-auto dark:hidden"
      />
      <img
        src="/vectors/404Dark.svg"
        width={600}
        alt="Page introuvable"
        className="p-3 m-auto hidden dark:block"
      />

      <ZoomFunc />
    </main>
  );
};

export default MissingPage;
