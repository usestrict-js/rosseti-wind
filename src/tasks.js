import React from "react";
import {Button, ButtonGroup, Card, Elevation} from "@blueprintjs/core";

export const Tasks = () => <Card interactive={true} elevation={Elevation.TWO}>
    <Button icon="list">
        ЗАДАНИЯ:
    </Button>

    <ButtonGroup minimal={false} vertical> <br/><br/><br/>
        <Button icon="full-circle">Настройка IED на прием передачу GOOSE сообщений</Button>
        <Button icon="full-circle">Логические устройства, содержащие функции ИЭУ</Button>
        <Button icon="full-circle">Префиксы составных функций</Button>
    </ButtonGroup>


</Card>



