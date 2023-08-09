import { css } from "twin.macro";

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  *,
  body,
  button {
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    background: #000;
    color: #fff;
  }

  button {
    cursor: pointer;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  *::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles;
