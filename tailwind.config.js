// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  darkMode: false, // or 'media' or 'class'
  purge: {
    enabled: false,
    content: [
      // Uncomment when pushing to production
      "./components/**/*.js",
      "./components/**/**/*.js",
      "./pages/*.js",
    ],
  },
  variants: {
    empty: ["before", "after"],
    extend: {
      //display: ["group-hover"],
      //border: ["after", "before"],
      //content: ["after", "before"],
      //position: ["after", "before"],
      //width: ["after", "before"],
      //height: ["after", "before"],
      //left: ["after", "before"],
      //top: ["after", "before"],
      //boxSizing: ["after", "before"],
      //borderRadius: ["after", "before"],
      //border: ["after", "before"],
      rotate: ["after", "before"],
      transform: ["after", "before"],
    },
  },
  theme: {
    pseudo: {
      // defaults to {'before': 'before', 'after': 'after'}
      before: "before",
      after: "after",
      "not-first": "not(:first-child)",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      AvenirNextCyrRegular: ["AvenirNextCyr", "Arial", "sans-serif"],
      Oswald: ["Oswald"],
    },
    extend: {
      keyframes: {
        reverse: {
          to: { transform: "rotate(360deg)" },
        },
        spin: {
          to: { transform: "rotate(-360deg)" },
        },
      },
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
          primary: "#ea5f5f",
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
      gridColumn: {
        "span-9-1": "span 1 / span 9",
        "span-9-2": "span 2 / span 9",
        "span-9-3": "span 3 / span 9",
        "span-9-4": "span 4 / span 9",
        "span-9-5": "span 5 / span 9",
        "span-9-6": "span 6 / span 9",
        "span-9-7": "span 7 / span 9",
        "span-9-8": "span 8 / span 9",
        "span-9-9": "span 9 / span 9",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
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
        100: "28rem",
        104: "30rem",
      },
      borderRadius: {
        half: "50%",
      },
      animation: {
        "custom-spin": "a1 2s linear infinite",
        "reverse-spin": "a2 2s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-pseudo-elements"),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".edge1": {
          content: "''",
          width: "120px",
          height: "120px",
          position: "absolute",
          left: "0",
          top: "-12px",
          "box-sizing": "border-box",
          "border-radius": "50%",
          "border-top": "12px solid #6c5ecf",
          transform: "rotate(120deg)",
        },
        ".edge2": {
          content: "''",
          width: "120px",
          height: "120px",
          position: "absolute",
          left: "0",
          top: "-12px",
          "box-sizing": "border-box",
          "border-radius": "50%",
          "border-top": "12px solid #08a0f7",
          transform: "rotate(240deg)",
        },
        ".edge3": {
          content: "''",
          width: "120px",
          height: "120px",
          "box-sizing": "border-box",
          "border-radius": "50%",
          "border-top": "12px solid #353340;",
        },
        ".loading": {
          position: "absolute",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          width: "120px",
          height: "120px",
          top: "-12px",
          color: "#fff",
          "text-align": "center",
          "line-height": "200px",
          animation: "a2 2s linear infinite",
        },
      };
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    }),
  ],
};
