import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import Auth from "./auth";
import Test from "./test";
import Emulator from "./emulator";
import {Tasks} from "./tasks";

const Main = () => (
  <HashRouter basename='/'>
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/emulator">
          <Emulator />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </Switch>
  </HashRouter>
);

const App = document.getElementById("app");

ReactDOM.render(<Main />, App);
