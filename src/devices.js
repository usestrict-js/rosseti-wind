import React from "react";
import {Button, ButtonGroup, Card, Elevation} from "@blueprintjs/core";

export const Devices = () => <Card interactive={true} elevation={Elevation.TWO}>

    <ButtonGroup minimal={false} vertical>
        <h2>Выбор устройств</h2>
        <Button icon="full-circle">РЗА</Button>
        <Button icon="full-circle">Промышленные коммутаторы</Button>
        <Button icon="full-circle">.......</Button>
        <Button icon="full-circle">Подключения</Button>
    </ButtonGroup>


</Card>



