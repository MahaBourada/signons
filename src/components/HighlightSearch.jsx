import React from "react";

const HighlightSearch = ({ text, searchTerm }) => {
  if (!searchTerm) return text;

  // Escape any special characters in the searchTerm for safe use in a regex
  const escapeRegExp = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // Create a regex pattern to match whole words (case insensitive)
  const regex = new RegExp(
    `(${escapeRegExp(searchTerm)})`, // Escaped search term
    "gi" // Global and case-insensitive flags
  );

  // Split the text into parts (some parts will match the searchTerm)
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <mark //Screen readers typically announce text wrapped in a <mark> element.
        key={index}
        className="bg-darkSecondary text-whiteText dark:bg-secondary dark:text-blackText rounded-lg px-2"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
};

export default HighlightSearch;
