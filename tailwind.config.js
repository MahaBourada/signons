/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "320px" /* Extra small devices: mobile */,
        source: "329px",
        lexique: "415px",
        bty: "425px",
        sm: "480px" /* Small devices: mobile */,
        lexiquem: "525px",
        msm: "580px" /* Small devices: mobile */,
        lexiquel: "595px" /* Small devices: mobile */,
        smd: "665px" /* Small devices: mobile */,
        lexiquexl: "690px" /* Small devices: mobile */,
        md: "768px" /* Tablets */,
        lg: "992px" /* Laptop */,
        header: "1090px",
        xl: "1200px" /* Desktop */,
        xxl: "1400px",
        "2xl": "1536px" /* Extra large devices: TV */,
      },
      fontSize: {
        "dynamic-xsm": "calc(var(--font-base, 1.25rem) / 1.4)",
        "dynamic-sm": "calc(var(--font-base, 1.25rem) / 1.2)",
        "dynamic-base": "var(--font-base, 1.25rem)",
        "dynamic-lg": "calc(var(--font-base, 1.25rem) * 1.2)",
        "dynamic-xl": "calc(var(--font-base, 1.25rem) * 1.5)",
        "dynamic-2xl": "calc(var(--font-base, 1.25rem) * 1.75)",
      },
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
        mainFont: "'Kodchasan', 'sans-serif'",
        bodyFont: "'Spinnaker', 'sans-serif'",
      },
      boxShadow: {
        "custom-box": "2px 2px 3px 1px rgb(0 0 0 / 25%)",
      },
      gridTemplateCols: {
        custom: "repeat(3, minmax(0, 200px))", // Custom template for rows
      },
    },
  },
  plugins: [],
};
