/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FBFAF',
        searchText: '#333333',
        main: '#D3E1CE',
        secondary: '#E8DFCA',
        blackText: '#1F1F1F',
        darkBg: '#323232',
        darkMain: '#3D5163',
        darkSecondary: '#451925',
        whiteText: '#451925'
      },
      fontFamily: {
        main: "'Noto Serif', 'serif'"
      },
      fontSize: {
        'display': '28pt',
        'heading': '19.5pt',
        'bodyText': '15.5pt',

      },
      boxShadow: {
        'custom-box': '2px 2px 3px 1px rgb(0 0 0 / 25%)'
      }
    },
  },
  plugins: [],
}