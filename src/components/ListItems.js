import React from "react";
import "./ListItems.css";

function ListItems({ href, children }) {
  return (
    <a className="listItems" href={href}>
      {children}
    </a>
  );
}

export default ListItems;
