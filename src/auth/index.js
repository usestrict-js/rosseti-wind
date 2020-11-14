import React from "react";
import { Button, Card, FormGroup, InputGroup } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const Auth = () => (
  <Card style={{ maxWidth: "400px" }}>
    <FormGroup
      helperText="Введите Ваши Фамилию Имя Отчество полностью через пробел"
      label="ФИО"
      labelFor="text-input"
      labelInfo="(кириллицей)"
    >
      <InputGroup id="fio-input" placeholder="Фамилия Имя Отчество" />
    </FormGroup>

    <FormGroup
      helperText="Введите Ваши Фамилию Имя Отчество полностью через пробел"
      label="№ учебной группы"
      labelFor="text-input"
      labelInfo="(только номер)"
    >
      <InputGroup id="group-number" placeholder="номер Вашей группы" />
    </FormGroup>

    <Button icon="key-enter">
      <Link to="/test">ВОЙТИ</Link>
    </Button>
  </Card>
);

export default Auth;
