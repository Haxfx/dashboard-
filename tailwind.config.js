// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["./src/**/*.js", "./src/**/**/*.js"],
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
        2: "1fr 5fr",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
      gridTemplateRows: {
        // Simple 5 row grid
        5: "1fr 6fr",
      },
    },
  },
  variants: {},
  plugins: [],
};
