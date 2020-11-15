import React, { Fragment } from "react";
import {
    Button,
    FormGroup,
    InputGroup,
    Intent,
    ButtonGroup, Divider,
} from "@blueprintjs/core";
import imgBMRZ from "../resources/bmrz-150.jpg";

const ItemSet = () => (
  <Fragment>
    <h2>БМРЗ 150</h2>
    <img
      src={imgBMRZ}
      width={"100%"}
      height={200}
      style={{
        border: "1px solid black",
        objectFit: "cover",
        marginBottom: "10px",
      }}
    />
    <FormGroup label="Имя GCB" labelFor="id_gcb-input">
      <InputGroup large id="id_gcb-input" value="БМРЗ 150" />
    </FormGroup>

    <FormGroup label="GOOSE ID" labelFor="id_goose-input">
      <InputGroup large id="id_goose-input" value="1" />
    </FormGroup>

    <FormGroup label="MAC адрес" labelFor="id_mac-input">
      <InputGroup large id="id_mac-input" />
    </FormGroup>

    <FormGroup label="APP ID" labelFor="id_app-input">
      <InputGroup large id="id_app-input" />
    </FormGroup>

    <FormGroup label="VLAN ID" labelFor="id_vlan-input">
      <InputGroup large id="id_vlan-input" />
    </FormGroup>

    <FormGroup label="Min Time" labelFor="id_minTime-input">
      <InputGroup large id="id_minTime-input" />
    </FormGroup>

    <FormGroup label="Max Time" labelFor="id_maxTime-input">
      <InputGroup large id="id_maxTime-input" />
    </FormGroup>
      <Divider/>
    <ButtonGroup fill>
      <Button large intent={Intent.SUCCESS}>
        Применить
      </Button>
      <Button large intent={Intent.DANGER}>
        Удалить
      </Button>
    </ButtonGroup>
  </Fragment>
);

export default ItemSet;
