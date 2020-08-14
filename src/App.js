import React from "react";
import "./App.css";
import logoSrc from "./assets/logo.png";

function App() {
  return (
    <div>
      <header className="header">
        <h1>WHISKEYMANIACS</h1>
        <img className="app__logo" src={logoSrc} alt="whiskeymaniacs" />
        <input className="input" placeholder="Get your whisky..." />
      </header>
      <main className="main">HOLA</main>
      <footer></footer>
    </div>
  );
}

export default App;
