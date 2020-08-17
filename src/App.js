import React from "react";
import "./App.css";
import WhiskeyList from "./components/WhiskeyList";
import FooterList from "./components/FooterList";
import HeaderList from "./components/HeaderList";

function App() {
  const [query, setQuery] = React.useState("");

  return (
    <div className="app">
      <header className="header">
        <HeaderList
          whiskyQuery={query}
          onWhiskyQueryChange={(whiskyQuery) => setQuery(whiskyQuery)}
        />
      </header>
      <main className="app__borders">
        <WhiskeyList query={query} />
      </main>
      <footer>
        <FooterList />
      </footer>
    </div>
  );
}

export default App;
