import React from "react";
import ReactDOM from "react-dom";
// import { Button } from '@blueprintjs/core';
import { Button, Card, Elevation } from "@blueprintjs/core";
import {Exam} from "./exam";
import {Authen} from "./authen";

const Main = () =>
    <Card interactive={true} elevation={Elevation.TWO}>
        <Authen></Authen>
        <Exam></Exam>

</Card>

const App = document.getElementById("app");

ReactDOM.render(<Main />, App);

