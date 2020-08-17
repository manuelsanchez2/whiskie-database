import React from "react";
import logoSrc from "../assets/logo.png";
import "./HeaderList.css";
import fetchWhiskeys from "../api/fetchWhiskeys";

function HeaderList({ children, src, value }) {
  const [query, setQuery] = React.useState("");

  //   const filteredWhiskeys = fetchWhiskeys.filter((fetchWhiskeys) => {
  //     return fetchWhiskeys.title.toLowerCase().startsWith(query.toLowerCase);
  //   });

  return (
    <div className="headerList">
      <h1 className="headerList__title">WHISKEYMANIACS</h1>
      <img className="headerList__logo" src={logoSrc} alt="whiskeymaniacs" />
      <input
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        className="headerList__input"
        placeholder="Get your whisky..."
      />
    </div>
  );
}

export default HeaderList;
