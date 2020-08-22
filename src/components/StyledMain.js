import React from "react";
import styled from "@emotion/styled";
import whiskeyBg from "../assets/whiskeyBg2.jpg";

const Main = styled.main`
  background-image: linear-gradient(#fcff9e, #c67700), url(${whiskeyBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: soft-light;
  grid-row: 2 / 3;
  overflow-y: scroll;
  border-radius: 7px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #c67700;
    height: 30px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: fcff9e;
  }
`;

function StyledMain({ children }) {
  return <Main>{children}</Main>;
}

export default StyledMain;
