import React from "react";
import styled from "@emotion/styled";

const ListItemText = styled.div`
  padding-left: 5px;
  flex-grow: 2;

  :first-child {
    margin: 0;
  }
  :last-child {
    font-size: 0.4em;
    margin: 0;
    flex-wrap: wrap;
  }
`;

function WhiskeyListItemText({ title, description }) {
  return (
    <ListItemText className="listItemText">
      <h3>{title}</h3>
      <p>{description}</p>
    </ListItemText>
  );
}

export default WhiskeyListItemText;
