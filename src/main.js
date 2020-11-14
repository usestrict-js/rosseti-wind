import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./auth";
import Test from "./test";
import Emulator from "./emulator";

const Main = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/emulator">
          <Emulator />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </Switch>
  </BrowserRouter>
);

const App = document.getElementById("app");

ReactDOM.render(<Main />, App);
