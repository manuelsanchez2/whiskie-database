import React from "react";
import styled from "@emotion/styled";

const FavButton = styled.button`
  border-radius: 50px;
  font-size: 8px;
  background: #794a08;
  color: white;
  justify-self: right;
  margin-right: 7px;
`;

function WhiskeyListItemFavButton({ children, onClick }) {
  return <FavButton>{children}</FavButton>;
}

export default WhiskeyListItemFavButton;
