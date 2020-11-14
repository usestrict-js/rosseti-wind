import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import { Card, Elevation } from "@blueprintjs/core";
import Exam from "./exam";
import Auth from "./auth";
import Board from "./board";

const Main = () => (
    <Fragment>
      <Board />
  <Card interactive={true} elevation={Elevation.TWO}>
    <Auth />
    <Exam/>
  </Card>
    </Fragment>
);

const App = document.getElementById("app");

ReactDOM.render(<Main />, App);
