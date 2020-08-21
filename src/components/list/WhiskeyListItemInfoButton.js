import React from "react";
import styled from "@emotion/styled";

const InfoButton = styled.button`
  border-radius: 50px;
  font-size: 10px;
  background: #794a08;
  color: white;
  justify-self: right;
`;

function WhiskeyListItemInfoButton({ children, onClick }) {
  return <InfoButton onClick={onClick}>{children}</InfoButton>;
}

export default WhiskeyListItemInfoButton;
