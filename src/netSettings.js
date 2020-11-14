import React from "react";
import {Button, ButtonGroup, Card, Elevation, FormGroup, InputGroup} from "@blueprintjs/core";

export const NetSettings = () => <Card interactive={true} elevation={Elevation.TWO}>

    <h2>Сетевые настройки</h2>
    <Card interactive={true} elevation={Elevation.TWO}>
        <h3>IED1</h3>
        <FormGroup inline
            // helperText="Пример: 101.102.103.1"
            label="IP адрес"
            labelFor="ip-input"
        >
            <InputGroup id="ip-input" placeholder="Пример: 101.102.103.1" />
        </FormGroup>

        <FormGroup inline
            // helperText="Пример: 101.102.103.1"
                   label="Маска подсети"
                   labelFor="mask-input"
        >
            <InputGroup id="mask-input" placeholder="Пример: 200.200.200.0" />
        </FormGroup>
    </Card>

    <Card interactive={true} elevation={Elevation.TWO}>
        <h3>IED2</h3>
        <FormGroup inline
            // helperText="Пример: 101.102.103.1"
                   label="IP адрес"
                   labelFor="ip2-input"
        >
            <InputGroup id="ip2-input" placeholder="Пример: 101.102.103.2" />
        </FormGroup>

        <FormGroup inline
            // helperText="Пример: 101.102.103.1"
                   label="Маска подсети"
                   labelFor="mask2-input"
        >
            <InputGroup id="mask2-input" placeholder="Пример: 200.200.200.0" />
        </FormGroup>
    </Card>

    <Button icon="saved">
        СОХРАНИТЬ
    </Button>


</Card>



