import React from "react";

function ListItems({ href, children }) {
  return <a href={href}>{children}</a>;
}

export default ListItems;
