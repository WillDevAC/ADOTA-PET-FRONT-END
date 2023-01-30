import { globalCss } from "./theme";

export const globalStyles = globalCss({
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "Inter, sans-serif",
    backgroundColor: "$background",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  main: {
    padding: "2rem 5rem",

    "@media screen and (max-width: 889px) ": {
      padding: "1.5rem 1.5rem",
    },
  },
  ".main-content": {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
  },
});
