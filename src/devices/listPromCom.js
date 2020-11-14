import React from "react";
import { Button, ButtonGroup, Card, Elevation } from "@blueprintjs/core";

export const ListPromCom = () => (
  <Card interactive={true} elevation={Elevation.TWO}>
    <Button icon="list">Промышленные коммутаторы:</Button>

    <ButtonGroup minimal={false} vertical>
      <br />
      <br />
      <br />
      <Button icon="full-circle">Устройство 1</Button>
      <Button icon="full-circle">Устройство 2</Button>
      <Button icon="full-circle">Устройство 3</Button>
    </ButtonGroup>
  </Card>
);
