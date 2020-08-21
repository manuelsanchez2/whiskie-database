import React from "react";
import styled from "@emotion/styled";

const ListItemImage = styled.img`
  padding-left: 10px;
  object-fit: contain;
  max-width: 40px;
  max-height: 40px;
`;

function WhiskeyListItemImage({ src, alt }) {
  return <ListItemImage className="listItemImage" src={src} alt={alt} />;
}

export default WhiskeyListItemImage;
