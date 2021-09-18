import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";
import Contact from "./components/Contact";
import Submit from "./components/Submit";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/usefulscience/">
        <Home />
      </Route>
      <Route exact path="/usefulscience/test">
        <Test/>
      </Route>
      <Route exact path="/usefulscience/contact">
        <Contact />
      </Route>
      <Route exact path="/usefulscience/submit">
        <Submit />
      </Route>
    </Switch>
  );
}