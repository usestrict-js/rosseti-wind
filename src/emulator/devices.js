import React, { useState } from "react";
import { Button, ButtonGroup } from "@blueprintjs/core";
import PropTypes from "prop-types";

export const CUPRUM = "Медный кабель";
export const RJ45 = "Витая пара RJ45";

const Devices = ({ onChange }) => {
  const [wire, setWire] = useState(CUPRUM);
  const isCuprumActive = wire === CUPRUM;
  const isRJ45Active = wire === RJ45;

  return (
    <div className="devices-menu">
      <h3 style={{ marginBottom: "20px" }}>Выбор устройств</h3>
      <ButtonGroup large vertical>
        <h5>IED РЗА</h5>
        <ButtonGroup
          vertical
          style={{ marginTop: "4px", marginBottom: "4px", marginLeft: "4px" }}
        >
          <Button onClick={() => onChange("БМРЗ 150")}>БМРЗ 150</Button>
        </ButtonGroup>

        <h5>Промышленные коммутаторы</h5>
        <ButtonGroup
          vertical
          style={{ marginTop: "4px", marginBottom: "4px", marginLeft: "4px" }}
        >
          <Button onClick={() => onChange("GL 100")}>GL 100</Button>
          <Button onClick={() => onChange("CISCO 1000")}>CISCO 1000</Button>
        </ButtonGroup>

        <h5>Провода</h5>
        <ButtonGroup
          vertical
          style={{ marginTop: "4px", marginBottom: "4px", marginLeft: "4px" }}
        >
          <Button
            onClick={() => {
              setWire(CUPRUM);
              onChange(CUPRUM);
            }}
            active={isCuprumActive}
          >
            Медный кабель
          </Button>
          <Button
            onClick={() => {
              setWire(RJ45);
              onChange(RJ45);
            }}
            active={isRJ45Active}
          >
            Витая пара RJ45
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  );
};

Devices.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Devices;
