import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route>
            <Home />
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
