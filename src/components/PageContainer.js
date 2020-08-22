import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: rgba(255, 255, 255, 0.7);
  width: 80vw;
  height: 100%;
  display: grid;
  margin: 0 auto;
  border-radius: 15px;
  grid-template-rows: auto 1fr auto;
  border: solid 5px #fcff9e;
`;

function PageContainer({ children }) {
  return <Container>{children}</Container>;
}

export default PageContainer;
