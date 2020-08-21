import React from "react";
import logoSrc from "../../assets/logo.png";
import "./HeaderList.css";
import HeaderTitle from "./HeaderTitle";

function HeaderList({ whiskyQuery, onWhiskyQueryChange }) {
  return (
    <div className="headerList">
      <HeaderTitle>WHISKEYMANIACS</HeaderTitle>
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
