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
`;

function StyledMain({ children }) {
  return <Main>{children}</Main>;
}

export default StyledMain;
