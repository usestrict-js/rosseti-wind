import React, {Fragment} from "react";
import Question from "./question";
import data from "./questions.json";
import {Button, Intent} from "@blueprintjs/core";
import {Link} from "react-router-dom";
const Test = () => (
  <Fragment>
    <Button intent={Intent.SUCCESS}><Link to='/emulator'>Эмулятор</Link></Button>
    {data.map(({ id, question, variants }) => {
      return <Question variants={variants} text={question} id={id} />;
    })}
  </Fragment>
);

export default Test;
