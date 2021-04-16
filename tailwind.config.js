// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: true,
    content: [
      "./components/**/*.js",
      "./components/**/**/*.js",
      "./pages/*.js",
    ],
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      AvenirNextCyrRegular: ["AvenirNextCyr", "Arial", "sans-serif"],
      Oswald: ["Oswald"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        blue: {
          primary: "#08a0f7",
        },
        green: {
          primary: "#22b07d",
        },
        black: {
          light: "#262626",
          faded: "#00000059",
        },
        purple: {
          light: "#808191",
          medium: "#353340",
          primary: "#6c5ecf",
          dark: "#252836",
          background: "#1f1d2b",
          backgroundLight: "#2d303e",
        },
        gray: {
          base: "#616161",
          background: "#fafafa",
          primary: "#dbdbdb",
        },
        red: {
          primary: "#ea5f5f ",
        },
      },
      gridTemplateColumns: {
        // Simple 2 column grid
        2: "1fr 4fr",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
      gridTemplateRows: {
        // Simple 5 row grid
        5: "1fr 6fr",
        8: "repeat(8, 1fr)",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 0.5fr))",
      },
      gridRow: {
        7: "span 7 / span 7",
        8: "span 8 / span 8",
        9: "span 9 / span 9",
        10: "span 10 / span 10",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      width: {
        smallMedium: "50%",
        medium: "65%",
        large: "80%",
      },
      height: {
        smallMedium: "50%",
        medium: "65%",
        large: "80%",
      },
      fontSize: {
        xxs: ".60rem",
        xxxs: ".50rem",
      },
      maxHeight: {
        104: "30rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
