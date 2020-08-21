import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  border: none;
  border-radius: 5px;
  margin: 5px 0;
  font-family: "Bebas Neue", cursive;
  width: 70vw;
`;

function HeaderInput({ whiskyQuery, onWhiskyQueryChange }) {
  return (
    <Input
      value={whiskyQuery}
      onChange={(event) => {
        onWhiskyQueryChange(event.target.value);
      }}
      className="headerList__input"
      placeholder="Get your whisky..."
    />
  );
}

export default HeaderInput;
