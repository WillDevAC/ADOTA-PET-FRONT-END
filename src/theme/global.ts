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
    padding: "2rem 3rem",

    "@media screen and (max-width: 889px) ": {
      padding: "1.5rem 1.5rem",
    },
  },
  ".main-content": {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridGap: "1rem",
  },

  ".loader": {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    background: '#ffffff url("https://huawei.ifce.edu.br/images/loader1.gif") no-repeat scroll center center / 120px 120px',
    overflow: 'hidden',
    position: 'fixed',
    zIndex: '999999999999',
    top: '0',
    left: '0',
  },
});
