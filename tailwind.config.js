/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        alphabetLight: "url('/src/assets/vectors/AlphabetShape.svg')",
        alphabetDark: "url('/src/assets/vectors/AlphabetShapeDark.svg')",
        vocabulaireLight: "url('/src/assets/vectors/VocabulaireShape.svg')",
        vocabulaireDark: "url('/src/assets/vectors/VocabulaireShapeDark.svg')",
      },
      colors: {
        bgColor: "#FBFAF",
        searchText: "#333333",
        searchBg: "#8B8B8B",
        main: "#D3E1CE",
        secondary: "#E8DFCA",
        blackText: "#1F1F1F",
        darkBg: "#323232",
        darkMain: "#3D5163",
        darkSecondary: "#451925",
        whiteText: "#E6E6E6",
      },
      fontFamily: {
        main: "'Noto Serif', 'serif'",
      },
      fontSize: {
        display: "28pt",
        heading: "22pt",
        bodyText: "15.5pt",
      },
      boxShadow: {
        "custom-box": "2px 2px 3px 1px rgb(0 0 0 / 25%)",
      },
      gridTemplateCols: {
        custom: "repeat(3, minmax(0, 200px))", // Custom template for rows
      }
    },
  },
  plugins: [],
};
