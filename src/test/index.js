import React, { useState, Fragment } from "react";
import Question from "./question";
import data from "./questions.json";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const Test = () => {
  const [answers, setAnswers] = useState([data.map(() => undefined)]);
  return (
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
            debugger;
          return (
            <Question
              variants={variants}
              text={question}
              id={id}
              selectedValue={answers[id - 1]}
              onChange={(event) => {
                answers[id - 1] = event.target.value;
                console.log("answers ", answers);
                setAnswers(answers);
              }}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default Test;
