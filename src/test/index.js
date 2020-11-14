import React, { Fragment } from "react";
import Question from "./question";
import data from "./questions.json";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const Test = () => (
  <Fragment>
    <Link to="/emulator">
      <Button
        intent={Intent.SUCCESS}
        style={{
          fontSize: "18px",
          position: "fixed",
          top: "20px",
          left: "20px",
        }}
      >
        Эмулятор
      </Button>
    </Link>
    <div>
      {data.map(({ id, question, variants }) => {
        return <Question variants={variants} text={question} id={id} />;
      })}
    </div>
  </Fragment>
);

export default Test;
