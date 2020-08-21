import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  align-content: center;
  justify-content: center;
  background: var(--bg-gradient);
`;
function StyledHeader({ children }) {
  return <Header>{children}</Header>;
}

export default StyledHeader;
