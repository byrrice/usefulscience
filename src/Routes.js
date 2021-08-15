import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/usefulscience/">
        <Home />
      </Route>
      <Route exact path="/usefulscience/test">
        <Test/>
      </Route>
    </Switch>
  );
}