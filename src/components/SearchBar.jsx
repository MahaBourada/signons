import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <form className="flex items-center justify-center w-full shadow-boxShadow m-10">
      <input
        type="text"
        className="text-bodyText w-[80%] h-14 rounded-full px-7 py-5 shadow-custom-box text-blackText focus:outline-none placeholder-searchText bg-bgColor dark:bg-searchBg"
        placeholder="Rechercher"
      />
      <button type="submit" className="relative">
        <Search
          color="#333333"
          size={30}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 hover:translate-x-[1px] hover:-translate-y-[45%]"
        />
      </button>
    </form>
  );
};

export default SearchBar;
