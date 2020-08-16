import React from "react";
import logoSrc from "../assets/logo.png";
import "./HeaderList.css";

function HeaderList(props) {
  return (
    <div className="headerList">
      <h1 className="headerList__title">WHISKEYMANIACS</h1>
      <img className="headerList__logo" src={logoSrc} alt="whiskeymaniacs" />
      <input className="headerList__input" placeholder="Get your whisky..." />
    </div>
  );
}

export default HeaderList;
