import React from "react";
import "./App.css";
import WhiskeyList from "./components/WhiskeyList";
import FooterList from "./components/FooterList";
import HeaderList from "./components/HeaderList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [query, setQuery] = React.useState("");

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route>
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
          </Route>
          <Route path="wish-list">
            <h2>THIS IS YOUR WISH LIST</h2>
          </Route>
          <Route path="camera">
            <h2>THIS IS YOUR CAMERA PAGE</h2>
          </Route>
          <Route path="/">
            <Redirect to="home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
