import React from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Application from "./pages/Application";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./routes.css"

export default () => {
  return (
    <div className="page">
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/application">
        <Application />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    </div>
    
  );
};
