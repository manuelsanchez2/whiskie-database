import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import Camera from "./pages/Camera";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/wish-list">
            <WishList />
          </Route>
          <Route path="/camera">
            <Camera />
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
