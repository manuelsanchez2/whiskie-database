import React from "react";
import styled from "@emotion/styled";

const ListItems = styled.nav`
  display: flex;
  flex: row wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

function WhiskeyListItems({ href, children }) {
  return (
    <ListItems className="listItems" href={href}>
      {children}
    </ListItems>
  );
}

export default ListItems;
