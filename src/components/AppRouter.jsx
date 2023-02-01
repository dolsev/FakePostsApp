import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

function AppRouter() {
  return (
    <Switch>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/error" />
    </Switch>
  );
}

export default AppRouter;
