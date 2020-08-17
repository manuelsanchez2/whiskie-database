import React from "react";
import logoSrc from "../assets/logo.png";
import "./HeaderList.css";

function HeaderList({ whiskyQuery, onWhiskyQueryChange }) {
  return (
    <div className="headerList">
      <h1 className="headerList__title">WHISKEYMANIACS</h1>
      <img className="headerList__logo" src={logoSrc} alt="whiskeymaniacs" />
      <input
        value={whiskyQuery}
        onChange={(event) => {
          onWhiskyQueryChange(event.target.value);
        }}
        className="headerList__input"
        placeholder="Get your whisky..."
      />
    </div>
  );
}

export default HeaderList;

//   const filteredWhiskeys = fetchWhiskeys.filter((fetchWhiskeys) => {
//     return fetchWhiskeys.title.toLowerCase().startsWith(query.toLowerCase);
//   });
