import React from "react";
import styled from "@emotion/styled";

const ListItemText = styled.div`
  padding-left: 5px;
  flex-basis: 100%;
  flex-grow: 1;

  :first-child {
    margin: 0;
  }
  :last-child {
    font-size: 0.4em;
    margin: 0;
  }
`;

function WhiskeyListItemText({ title, description, region }) {
  return (
    <ListItemText>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{region}</p>
    </ListItemText>
  );
}

export default WhiskeyListItemText;
