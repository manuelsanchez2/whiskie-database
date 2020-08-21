import React from "react";
import "./ListItemImage.css";

function ListItemImage({ src, alt }) {
  return <img className="listItemImage" src={src} alt={alt} />;
}

export default ListItemImage;
