import React from "react";
import { resolvePath } from "../utils/utils";

const MissingPage = () => {
  return (
    <main className="flex-grow flex items-start justify-center mx-auto ">
      <h1 className="text-dynamic-xl font-bold w-96 mx-10 my-24 leading-relaxed">
        Erreur 404 : La page a pris la fuite...
      </h1>
      <img
        src={resolvePath("/vectors/404.svg")}
        width={600}
        alt="Page introuvable"
        className="p-3 m-auto dark:hidden"
      />
      <img
        src={resolvePath("/vectors/404Dark.svg")}
        width={600}
        alt="Page introuvable"
        className="p-3 m-auto hidden dark:block"
      />
    </main>
  );
};

export default MissingPage;
