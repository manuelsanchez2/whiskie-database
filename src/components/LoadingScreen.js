import React from "react";
import logoSrc from "../assets/logo.png";
import "./LoadingScreen.css";

function LoadingScreen({ src, alt }) {
  return (
    <div className="loadingScreen">
      <img
        className="loadingScreen__icon"
        src={logoSrc}
        alt="Whiskeymaniacs logo"
      />
      <span className="loadingScreen__text">Loading...</span>
    </div>
  );
}

export default LoadingScreen;
