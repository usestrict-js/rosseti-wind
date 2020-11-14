import React from "react";
import PropTypes from "prop-types";
import { Radio, RadioGroup, Card } from "@blueprintjs/core";

const Question = ({ id, text, variants }) => (
  <Card><RadioGroup label={`${id}. ${text}?`}>
    {variants.map(({ id, value }) => (
      <Radio label={value} value={id} />
    ))}
  </RadioGroup>
  </Card>
);

Question.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Question;
