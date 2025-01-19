import { X } from "lucide-react";
import React from "react";
import { useSearch } from "../context/SearchContext";

const SearchBar = () => {
  const { setSearchTerm } = useSearch(); //Gets the Search Term through the context useSearch instead of passing it down like a react prop
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.trim());
  };

  const handleReset = () => {
    setSearchTerm("");
  };

  return (
    <form
      className="flex-grow flex items-center justify-center shadow-boxShadow m-10 max-xl:m-1 max-xl:my-5 max-header:mr-28 max-header:w-full"
      onSubmit={handleSubmit}
    >
      <label htmlFor="searchInput" className="absolute right-[5555px]">
        Rechercher dans la page
      </label>
      <input
        aria-label="Rechercher dans la page"
        id="searchInput"
        type="text"
        className="flex-grow text-dynamic-base w-[80%] max-header:w-full h-14 rounded-full px-7 py-5 shadow-custom-box text-blackText focus:outline-none placeholder-searchText bg-bgColor dark:bg-searchBg"
        placeholder="Rechercher"
        onChange={handleSearchChange}
      />
      <button
        type="reset"
        className="relative"
        aria-label="Réinitialiser"
        onClick={handleReset}
      >
        <X
          color="#333333"
          size={30}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 hover:translate-x-[1px] hover:-translate-y-[45%]"
        />
      </button>
    </form>
  );
};

export default SearchBar;
