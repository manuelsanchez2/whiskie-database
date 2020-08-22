import React from "react";
import { Global, css } from "@emotion/core";

const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        html {
          font-size: 12px;
          box-sizing: border-box;
        }
        :root {
          --bg-gradient: linear-gradient(90deg, #fcff9e 0%, #c67700 100%);
          --bg-borders: radial-gradient(
            circle,
            rgba(221, 152, 47, 1) 0%,
            rgba(51, 30, 3, 1) 96%,
            rgba(52, 29, 8, 1) 100%
          );
        }

        body {
          margin: 0;
          font-family: "Rubik", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        code {
          font-family: "Rubik", sans-serif;
        }
      `}
    />
  );
};

export default GlobalCSS;
