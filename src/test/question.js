import React from "react";
import PropTypes from "prop-types";
import { Radio, RadioGroup, Card } from "@blueprintjs/core";

const Question = ({ id, text, variants, onChange, selectedValue = -1 }) => {
  console.log("selectedValue ", selectedValue, " id ", id);
  return (
    <Card style={{ width: "100%", margin: "10px", fontSize: "20px" }}>
      <RadioGroup
        label={`${id}. ${text}?`}
        onChange={onChange}
        selectedValue={selectedValue}
      >
        {variants.map(({ id, value }) => (
          <Radio label={value} value={id} />
        ))}
      </RadioGroup>
    </Card>
  );
};
Question.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.number.isRequired,
};

export default Question;
