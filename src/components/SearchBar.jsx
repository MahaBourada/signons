import { X } from "lucide-react";
import React from "react";
import { useSearch } from "../context/SearchContext";

const SearchBar = () => {
  const { setSearchTerm } = useSearch(); //Gets the Search Term through the context useSearch instead of passing it down like a react prop
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.trim());
  };

  return (
    <form
      className="flex items-center justify-center w-full shadow-boxShadow m-10"
      onSubmit={handleSubmit}
    >
      <label htmlFor="searchInput" className="absolute right-[5555px]">
        Rechercher dans la page
      </label>
      <input
        aria-label="Rechercher dans la page"
        id="searchInput"
        type="text"
        className="text-dynamic-base w-[80%] h-14 rounded-full px-7 py-5 shadow-custom-box text-blackText focus:outline-none placeholder-searchText bg-bgColor dark:bg-searchBg"
        placeholder="Rechercher dans la page"
        onChange={handleSearchChange}
      />
      <button type="reset" className="relative" aria-label="Réinitialiser">
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
