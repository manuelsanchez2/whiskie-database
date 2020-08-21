import React from "react";
import loadingSrc from "../../assets/loadingScreen.gif";
import "./LoadingScreen.css";

function LoadingScreen({ src, alt }) {
  return (
    <div className="loadingScreen">
      <img
        className="loadingScreen__icon"
        src={loadingSrc}
        alt="Whiskeymaniacs logo"
      />
      <span className="loadingScreen__text">Loading...</span>
    </div>
  );
}

export default LoadingScreen;
