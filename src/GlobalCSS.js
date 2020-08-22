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

        #root {
          height: 100vh;
          --bg-gradient: linear-gradient(90deg, #fcff9e 0%, #c67700 100%);
          --bg-borders: radial-gradient(
            circle,
            rgba(221, 152, 47, 1) 0%,
            rgba(51, 30, 3, 1) 96%,
            rgba(52, 29, 8, 1) 100%
          );
        }

        html {
          font-size: 12px;
          box-sizing: border-box;
          background: #c67700;
        }

        body {
          margin: 0;
          font-family: "Rubik", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        main {
          background-image: linear-gradient(#fcff9e, #c67700),
            url(assets/whiskeyBg2.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          background-blend-mode: soft-light;
          grid-row: 2 / 3;
          overflow-y: scroll;
        }

        code {
          font-family: "Rubik", sans-serif;
        }
      `}
    />
  );
};

export default GlobalCSS;
