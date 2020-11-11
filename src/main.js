import React from "react";
import ReactDOM from "react-dom";
import { Button } from '@blueprintjs/core'

const Main = () => <Button intent="success">Первая кнопка</Button>

const App = document.getElementById("app");

ReactDOM.render(<Main />, App);