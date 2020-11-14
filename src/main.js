import React from "react";
import ReactDOM from "react-dom";
// import { Button } from '@blueprintjs/core';
import { Button, Card, Elevation } from "@blueprintjs/core";
import {Exam} from "./exam";
import {Authen} from "./authen";
import {Tasks} from "./tasks";
import {Devices} from "./devices";
import {NetSettings} from "./netSettings";
import {ItemSet} from "./itemSet";

const Main = () =>
    <Card interactive={true} elevation={Elevation.TWO}>
        <Authen></Authen>
        <Tasks></Tasks>
        <Devices></Devices>
        <NetSettings></NetSettings>
        <ItemSet></ItemSet>
        <Exam></Exam>

</Card>

const App = document.getElementById("app");

ReactDOM.render(<Main />, App);

