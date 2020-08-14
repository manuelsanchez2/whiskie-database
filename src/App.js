import React from "react";
import "./App.css";
import logoSrc from "./assets/logo.png";
// import List from "./components/List";
// import ListItems from "./components/ListItems";
// import ListItemImage from "./components/ListItemImage";
// import ListItemText from "./components/ListItemText";
import WhiskeyList from "./components/WhiskeyList";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>WHISKEYMANIACS</h1>
        <img className="app__logo" src={logoSrc} alt="whiskeymaniacs" />
        <input className="input" placeholder="Get your whisky..." />
      </header>
      <main className="main">
        <WhiskeyList />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
