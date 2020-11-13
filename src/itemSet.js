import React from "react";
import {Button, ButtonGroup, Card, Elevation, FormGroup, InputGroup} from "@blueprintjs/core";

export const ItemSet = () => <Card interactive={true} elevation={Elevation.TWO}>

        <h2>IED1</h2>
        <FormGroup inline
            label="Имя GCB"
            labelFor="id_gcb-input"
        >
            <InputGroup id="id_gcb-input" />
        </FormGroup>

        <FormGroup inline
               label="GOOSE ID"
               labelFor="id_goose-input"
        >
        <InputGroup id="id_goose-input"/>
        </FormGroup>

    <FormGroup inline
               label="MAC адрес"
               labelFor="id_mac-input"
    >
        <InputGroup id="id_mac-input"/>
    </FormGroup>

    <FormGroup inline
               label="APP ID"
               labelFor="id_app-input"
    >
        <InputGroup id="id_app-input"/>
    </FormGroup>

    <FormGroup inline
               label="VLAN ID"
               labelFor="id_vlan-input"
    >
        <InputGroup id="id_vlan-input"/>
    </FormGroup>

    <FormGroup inline
               label="Min Time"
               labelFor="id_minTime-input"
    >
        <InputGroup id="id_minTime-input"/>
    </FormGroup>

    <FormGroup inline
               label="Max Time"
               labelFor="id_maxTime-input"
    >
        <InputGroup id="id_maxTime-input"/>
    </FormGroup>



    <Button icon="saved">
        СОХРАНИТЬ
    </Button>


</Card>



