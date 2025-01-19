import React from "react";
import { resolvePath } from "../utils/utils";

const MissingPage = () => {
  return (
    <main className="flex-grow flex items-start justify-center max-lg:flex-col mx-auto ">
      <h1 className="text-dynamic-xl max-md:text-dynamic-lg font-bold w-96 max-lg:w-fit mx-10 my-24 max-lg:my-6 leading-relaxed">
        Erreur 404 : La page a pris la fuite...
      </h1>
      <img
        src="/vectors/404.svg"
        width={600}
        alt=""
        role="presentation"
        className="p-3 m-auto dark:hidden"
      />
      <img
        src="/vectors/404Dark.svg"
        width={600}
        alt=""
        role="presentation"
        className="p-3 m-auto hidden dark:block"
      />
    </main>
  );
};

export default MissingPage;
