import React from "react";
import { Button, ButtonGroup } from "@blueprintjs/core";

const Devices = ({ onCreate }) => {
  return (
    <div className="devices-menu">
      <h3 style={{ marginBottom: "20px" }}>Выбор устройств</h3>
      <ButtonGroup large vertical>
        <h5>Мехатроника</h5>
        <ButtonGroup
          vertical
          style={{ marginTop: "4px", marginBottom: "4px", marginLeft: "4px" }}
        >
          <Button onClick={() => onCreate("БМРЗ 150")}>БМРЗ 150</Button>
        </ButtonGroup>

        <h5>Промышленные коммутаторы</h5>
        <ButtonGroup
          vertical
          style={{ marginTop: "4px", marginBottom: "4px", marginLeft: "4px" }}
        >
          <Button onClick={() => onCreate("GL 100")}>GL 100</Button>
          <Button onClick={() => onCreate("CISCO 1000")}>CISCO 1000</Button>
        </ButtonGroup>

        <h5>Провода</h5>
        <ButtonGroup
          vertical
          style={{ marginTop: "4px", marginBottom: "4px", marginLeft: "4px" }}
        >
          <Button onClick={() => onCreate("Медный кабель")}>
            Медный кабель
          </Button>
          <Button onClick={() => onCreate("Витая пара RJ45")}>
            Витая пара RJ45
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  );
};

export default Devices;
