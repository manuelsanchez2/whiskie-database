import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
  display: grid;
  place-items: center;
  font-size: 0.7em;
  background: var(--bg-gradient);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-bottom: 5px;
`;
function StyledHeader({ children }) {
  return <Header>{children}</Header>;
}

export default StyledHeader;
