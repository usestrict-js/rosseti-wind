import React from "react";
import { Button, ButtonGroup, Card, Elevation } from "@blueprintjs/core";

export const ListConnectionType = () => (
  <Card interactive={true} elevation={Elevation.TWO}>
    <Button icon="list">Подключения</Button>

    <ButtonGroup minimal={false} vertical>
      <br />
      <br />
      <br />
      <Button icon="full-circle">Медный кабель</Button>
      <Button icon="full-circle">Аллюминиевый кабель</Button>
      <Button icon="full-circle">Ethernet-соединение</Button>
    </ButtonGroup>
  </Card>
);
