import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import Camera from "./pages/Camera";
import GlobalCSS from "./GlobalCSS";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <PageContainer>
      <GlobalCSS />
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
    </PageContainer>
  );
}

export default App;
