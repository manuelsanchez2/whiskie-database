import React from "react";
import styled from "@emotion/styled";

const Title = styled.h2`
  font-size: 3em;
  margin: 10px 0 0 0;
`;

function HeaderTitle({ children }) {
  return <Title>{children}</Title>;
}

export default HeaderTitle;
