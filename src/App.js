import React from "react";
import "./App.css";
import WhiskeyList from "./components/WhiskeyList";
import FooterList from "./components/FooterList";
import HeaderList from "./components/HeaderList";

function App() {
  return (
    <div className="app">
      <header className="header">
        <HeaderList></HeaderList>
      </header>
      <main className="app__borders">
        <WhiskeyList />
      </main>
      <footer>
        <FooterList></FooterList>
      </footer>
    </div>
  );
}

export default App;
