import React from "react";
import "./ListItemText.css";
import styled from "@emotion/styled";

const ListItemText = styled.div`
  padding-left: 5px;
  flex-grow: 1;

  :first-child {
    margin: 0;
  }
  :last-child {
    font-size: 0.6em;
    margin: 0;
    flex-wrap: wrap;
  }
`;

function WhiskeyListItemText({ title, description }) {
  return (
    <ListItemText className="listItemText">
      <h2>{title}</h2>
      <p>{description}</p>
    </ListItemText>
  );
}

export default WhiskeyListItemText;
