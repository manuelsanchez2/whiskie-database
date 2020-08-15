import React from "react";
import "./App.css";
import logoSrc from "./assets/logo.png";
import WhiskeyList from "./components/WhiskeyList";
// import { fetchWhiskeys } from "./api/Whiskeys";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>WHISKEYMANIACS</h1>
        <img className="app__logo" src={logoSrc} alt="whiskeymaniacs" />
        <input className="input" placeholder="Get your whisky..." />
      </header>
      <main className="app__borders">
        <WhiskeyList />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
